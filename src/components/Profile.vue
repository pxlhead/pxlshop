<template lang="pug">
  .profile
    a.profile-name(v-bind:class='{"text-light": light}') {{ name }}
    a.profile-img
      .img-box
        img(v-bind:src='photoUrl' alt='Avatar')
      ul.profile-dropdown
        li.dropdown-item(v-for='option in options')
          a(@click='option.action') {{ option.name }}

    .modal-overlay(@click='modal = false' v-if='modal')
    a.close-btn(@click='modal = false' v-if='modal')
    form.modal(v-if='modal')
      .modal-head
        a.modal-title Profile
      .modal-head.modal-subhead
        a.modal-title Payment
      .modal-content
        .profile-photo
          .img-box
            img(v-bind:src='photoUrl' alt='Avatar')
          input.modal-upload(name='photo' id='photo' type='file'
          @change='uploadPhoto')
          label.modal-action(for='photo') Choose
          a.delete-action Delete account
        .profile-info
          .input-box
            .input-icon.icon-face
            input.input-line(name='name' type='text' v-model='name'
            v-bind:placeholder='updateInfo ? "New name..." : name'
            v-bind='{readonly: !updateInfo}' @blur='updateInfo = false')
          .input-box
            .input-icon.icon-mail
            input.input-line(name='email' type='email' v-model='email'
            v-bind:placeholder='updateInfo ? "New email..." : email'
            v-bind='{readonly: !updateInfo}' @blur='updateInfo = false')
          a.modal-action(v-bind:class='{"action-update": updateInfo}'
            @click='changeInfo') {{ updateInfo ? 'Update' : 'Change...'}}
          .input-box
            .input-icon.icon-lock
            input.input-line(name='password' type='password' v-model='password'
            v-bind:placeholder='updatePassword ? "New password..." : "Password"'
            v-bind='{readonly: !updatePassword}' @blur='updatePassword = false')
          a.modal-action(v-bind:class='{"action-update": updatePassword}'
          @click='changePassword') {{ updatePassword ? 'Update' : 'Change...'}}

    transition(name='note')
      notification(v-bind:message='message' v-if='message.length > 0'
      v-on:click.native='message = ""')
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable global-require */
import Firebase from '../appconfig/firebase';
import Notification from './Notification';

/*
TODO: Add user re-autentification
(to change password and delete an account)
*/

export default {
  name: 'profile',
  props: ['user', 'light'],
  components: {
    Notification,
  },
  data() {
    return {
      options: [{
        name: 'My Profile',
        action: this.logOut,
      }, {
        name: 'Settings',
        action: this.showModal,
      }, {
        name: 'Log out',
        action: this.logOut,
      }],
      modal: false,
      name: '',
      email: '',
      password: '',
      photoUrl: '',
      updateInfo: false,
      updatePassword: false,
      message: '',
    };
  },
  created() {
    this.name = this.user.displayName || this.user.email.split('@')[0];
    this.email = this.user.email;
    this.photoUrl = this.user.photoURL || require('../assets/icons/avatar.svg');
  },
  methods: {
    logOut() {
      Firebase.auth.signOut();
    },
    showModal() {
      this.modal = true;
      this.message = '';
    },
    uploadPhoto(event) {
      const file = event.target.files[0];
      if (file.size / 1024 > 2048) {
        this.message = 'Your image is too big. Maximal file size is 2MB.';
        return;
      }
      const fileName = this.user.email.split('@')[0];
      const sorageFileRef = Firebase.storageAvatarsRef.child(fileName);
      const task = sorageFileRef.put(file);
      task.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.message = `Upload is ${Math.round(progress)}% done`;
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              this.message = 'Sorry, but you don\'t have permission to upload files';
              break;
            case 'storage/canceled':
              this.message = 'You canceled the upload';
              break;
            default:
              this.message = error.code;
          }
        },
        () => {
          sorageFileRef.getDownloadURL().then((url) => {
            this.photoUrl = url;
            this.changePhoto();
          });
          this.message = 'Upload is complete!';
        }
      );
    },
    changePhoto() {
      this.user.updateProfile({
        photoURL: this.photoUrl,
      });
    },
    changeInfo() {
      if (!this.updateInfo) {
        this.updateInfo = true;
      } else {
        this.user.updateProfile({
          displayName: this.name,
        }).then(() => {
          this.user.updateEmail(this.email).then(() => {
            this.updateInfo = false;
          });
        });
      }
    },
    changePassword() {
      if (!this.updatePassword) {
        this.updatePassword = true;
      } else {
        this.user.updatePassword(this.password).then(() => {
          this.updatePassword = false;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

.profile {
  position: absolute;
  height: 4rem;
  top: 5vh;
  right: calc(10vw - 6rem);
  display: flex;
  align-items: center;
  z-index: 900;
}
.profile-name {
  display: block;
  text-align: center;
  vertical-align: middle;
  line-height: 4rem;
  border-bottom: 2px solid lighten($color-grey, 40);
  color: $color-grey;
  font-size: 1.8rem;
  &:hover {
    border-color: $color-green;
  }
}
.text-light {
  color: $color-light;
  border-color: $color-green;
  &:hover {
    border-color: lighten($color-grey, 20);
  }
}
.profile-img {
  display: block;
  width: 4rem;
  height: 4rem;
  margin-left: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .profile-dropdown {
    display: flex;
  }
  .img-box {
    width: 3rem;
    height: 3rem;
  }
}
.profile-dropdown {
  display: none;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  margin: 0;
  top: 4rem;
  right: 0;
  padding: 2rem;
  width: 7rem;
  background-color: rgba(25, 25, 25, 0.7);
  a {
    color: $color-light;
  }
}
.dropdown-item {
  flex-basis: 30%;
  a {
    word-wrap: normal;
    vertical-align: middle;
    line-height: 3rem;
    font-size: 1.4rem;
    &:hover {
      color: $color-green;
    }
  }
}
.modal {
  top: calc(50% - 11rem - 2rem);
  left: calc(50% - 20rem - 2rem);
  width: 40rem;
  height: 22rem;
  padding: 5rem 2rem 2rem 2rem;
}
.modal-head {
  top: -3rem;
  left: 2rem;
  width: 19rem;
  height: 6rem;
  align-items: center;
}
.modal-subhead {
  right: 2rem;
  height: 3rem;
  left: auto;
  z-index: -1;
  background-color: lighten($color-grey, 15);
}
.modal-head + .modal-head {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: inset 0 -8px 15px -5px rgba(0, 0, 0, 0.43);
  &:hover {
    background-color: lighten($color-grey, 30);
  }
}
.modal-title {
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.1rem;
  &:hover {
    color: inherit;
  }
}
.profile-photo {
  padding-top: 1rem;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .img-box {
    width: 8rem;
    height: 8rem;
  }
}
.img-box {
  overflow: hidden;
  border-radius: 50%;
  background-color: $color-light;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-upload {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
}
.delete-action {
  margin-top: 8rem;
  display: block;
  font-size: 1.2rem;
  background: url('../assets/icons/delete.svg') no-repeat 0 center;
  background-size: contain;
  padding-left: 1.5rem;
  &:hover {
    color: #E83838;
  }
}
.profile-info {
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .modal-action {
    width: 85%;
    align-self: center;
  }
}
.input-box:last-of-type {
  margin-top: 2rem;
}
.action-update {
  background-color: $color-green;
}

@media screen and (max-width: 991px) {
  .profile {
    height: 4rem;
    top: 5vh;
    right: calc(10vw - 4rem);
  }
  .profile-name {
    line-height: 3rem;
    font-size: 1.4rem;
  }
  .profile-img {
    margin-left: 2rem;
    width: 3rem;
    height: 3rem;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  .profile-dropdown {
    top: 3rem;
    padding: 1rem;
    width: 6rem;
    height: 8rem;
  }
  .dropdown-item {
    a {
      font-size: 1.2rem;
    }
  }
}
@media screen and (max-width: 480px) {
  .profile {
    right: calc(10vw - 2rem);
  }
  .profile-img {
    margin-left: 1rem;
  }
  .modal {
    left: calc(50% - 15rem - 2rem);
    width: 30rem;
  }
  .modal-head {
    width: 14rem;
  }
  .profile-info {
    flex: 4;
  }
  .input-line {
    width: 50%;
  }
}
</style>

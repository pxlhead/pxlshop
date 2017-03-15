<template lang="pug">
  .profile
    a.profile-name(@click='showModal') {{ name }}
    a.profile-img
      .img-box
        img(:src='photoUrl' alt='Avatar')
      ul.profile-dropdown
        li.dropdown-item(v-for='option in options')
          a(@click='option.action') {{ option.name }}

    .modal-overlay(@click='closeModal' v-if='modal')
    a.close-btn(@click='closeModal' v-if='modal')
    form.modal(v-if='modal && !checkPassword')
      .modal-head
        a.modal-title Profile
      .modal-head.modal-subhead
        a.modal-title
      .modal-content
        .profile-photo
          .img-box
            img(:src='photoUrl' alt='Avatar')
          input.modal-upload(name='photo' id='photo' type='file'
          @change='uploadPhoto')
          label.modal-action(for='photo') Choose
          a.delete-action(@click='deleteUser') Delete account
        .profile-info
          .input-box
            .input-icon.icon-face
            input.input-line(name='name' type='text' v-model='name'
            v-bind='{ placeholder: (lockInfo ? name : "New name..."),\
            readonly: lockInfo }' @blur='lockInfo = true')
          .input-box
            .input-icon.icon-mail
            input.input-line(name='email' type='email' v-model='email'
            v-bind='{ placeholder: (lockInfo ? email : "New email..."),\
            readonly: lockInfo }' @blur='lockInfo = true')
          a.modal-action(v-bind:class='{"action-update": !lockInfo}'
            @click='changeInfo') {{ lockInfo ? 'Change...' : 'Update'}}
          .input-box
            .input-icon.icon-lock
            input.input-line(name='password' type='password' v-model='password'
            v-bind='{ placeholder: (lockPassword ? "Password" : "New password..."),\
            readonly: lockPassword }' @blur='lockPassword = true')
          a.modal-action(v-bind:class='{ "action-update": !lockPassword }'
          @click='activatePassword') {{ lockPassword ? 'Change...' : 'Update' }}

    .modal.modal-confirm(v-if='checkPassword')
      input.input-line(name='password' type='password' v-model='password'
      placeholder='Password')
      a.modal-action.action-update(@click='reAuth') Confirm

    transition(name='note')
      notification(v-bind:message='message' v-if='message.length > 0'
      v-on:click.native='message = ""')
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable global-require */
import Firebase from '../appconfig/firebase';
import Notification from './Notification';

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
        action: this.showModal,
      }, {
        name: 'Settings',
        action: this.showModal,
      }, {
        name: 'Log out',
        action: this.logOut,
      }],
      modal: false,
      name: '',
      uid: '',
      email: '',
      password: '',
      photoUrl: '',
      avatar: '',
      lockInfo: true,
      lockPassword: true,
      checkPassword: false,
      reAuthAction: null,
      message: '',
    };
  },
  created() {
    this.name = this.user.displayName || this.user.email.split('@')[0];
    this.email = this.user.email;
    this.uid = this.user.uid;
    this.photoUrl = this.user.photoURL || require('../assets/icons/avatar.svg');
  },
  methods: {
    logOut() {
      Firebase.auth.signOut();
    },
    showModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
      this.lockInfo = true;
      this.lockPassword = true;
      this.checkPassword = false;
      this.reAuthAction = null;
      this.message = '';
    },
    uploadPhoto(event) {
      const file = event.target.files[0];
      if (file.size / 1024 > 2048) {
        this.message = 'Your image is too big. Maximal file size is 2MB.';
        return;
      }
      this.avatar = this.uid;
      const storageFileRef = Firebase.storageAvatarsRef.child(this.avatar);
      const task = storageFileRef.put(file);
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
          storageFileRef.getDownloadURL().then((url) => {
            this.photoUrl = url;
            this.changePhoto();
          });
          this.message = 'Upload is complete!';
        },
      );
    },
    deletePhoto() {
      if (this.avatar) {
        Firebase.storageAvatarsRef.child(`avatars/${this.avatar}`).delete();
      }
    },
    changePhoto() {
      this.user.updateProfile({
        photoURL: this.photoUrl,
      });
    },
    changeInfo() {
      if (this.lockInfo) {
        this.lockInfo = false;
        return;
      }
      this.user.updateProfile({
        displayName: this.name,
      });
      this.user.updateEmail(this.email);
      this.lockInfo = true;
    },
    activatePassword() {
      if (this.lockPassword) {
        this.changePassword();
        return;
      }
      this.updatePassword();
    },
    changePassword() {
      this.reAuthAction = 'change';
      this.checkPassword = true;
      this.message = 'Please confirm your password';
    },
    updatePassword() {
      this.user.updatePassword(this.password).then(() => {
        this.message = 'Your password was updated!';
      });
    },
    deleteUser() {
      this.reAuthAction = 'delete';
      this.checkPassword = true;
      this.message = 'Please confirm your password';
    },
    reAuth() {
      const credential = Firebase.emailAuth.credential(this.user.email, this.password);
      this.user.reauthenticate(credential).then(() => {
        if (this.reAuthAction === 'delete') {
          this.user.delete().then(() => {
            this.message = 'You have just been erased';
            this.deletePhoto();
          });
        } else if (this.reAuthAction === 'change') {
          this.lockPassword = false;
          this.checkPassword = false;
          this.message = 'Please enter new password';
        }
      });
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
  img {
    height: auto;
  }
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
    align-self: center;
  }
}
.input-box:last-of-type {
  margin-top: 2rem;
}
.action-update {
  background-color: $color-green;
}
.modal-confirm {
  top: calc(50% - 5rem - 2rem);
  height: 10rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .input-line {
    width: 60%;
    align-self: center;
  }
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
@media screen and (max-width: 640px) {
  .profile {
    right: calc(10vw - 2rem);
  }
  .profile-img {
    margin-left: 1rem;
  }
  .modal {
    left: calc(50% - 12rem - 1rem);
    width: 24rem;
    padding: 4rem 1rem 1rem 1rem;
  }
  .modal-head {
    width: 10rem;
    top: -2rem;
    height: 4rem;
  }
  .modal-subhead {
    height: 2rem;
  }
  .modal-title {
    font-size: 1.6rem;
  }
  .profile-info {
    flex: 4;
  }
  .input-line {
    width: 50%;
  }
  .modal-action {
    margin-top: 0.5rem;
    font-weight: 500;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  .profile-photo {
    flex: 2;
    .img-box {
      width: 4rem;
      height: 4rem;
    }
  }
  .input-icon {
    margin: 0;
  }
  .delete-action {
    padding-left: 3rem;
    margin-top: 10rem;
  }
}
</style>

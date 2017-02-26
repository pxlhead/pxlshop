<template lang="pug">
  .profile
    a.profile-name(v-bind:class='{"text-light": light}') {{ name }}
    a.profile-img
      img(src='../assets/icons/avatar.svg' alt='Avatar')
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
          img(src='../assets/icons/avatar.svg' alt='Avatar')
          input.modal-upload(name='photo' id='photo' type='file'
          @change='uploadPhoto')
          label.modal-action(for='photo') Choose
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
</template>

<script>
/* eslint-disable no-console */
import Firebase from '../appconfig/firebase';

export default {
  name: 'profile',
  props: ['user', 'light'],
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
      modal: true,
      name: '',
      email: '',
      password: '',
      photoUrl: '',
      updateInfo: false,
      updatePassword: false,
    };
  },
  created() {
    this.name = this.user.displayName || this.user.email.split('@')[0];
    this.email = this.user.email;
    this.photoUrl = this.user.photoURL;
  },
  methods: {
    logOut() {
      Firebase.auth.signOut();
    },
    showModal() {
      this.modal = true;
    },
    uploadPhoto(event) {
      const file = event.target.files[0];
      const sorageFileRef = Firebase.storageAvatarsRef.child(file.name);
      const task = sorageFileRef.put(file);
      task.on('state_changed',
        function complete() {
          sorageFileRef.getDownloadURL().then((url) => {
            this.photoUrl = url;
          });
        });
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
          console.log('update');
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
  background-color: $color-light;
  border-radius: 50%;
  margin-left: 3rem;
  position: relative;
  &:hover .profile-dropdown {
    display: flex;
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
  img {
    width: 8rem;
    height: 8rem;
  }
}
.modal-upload {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
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
      padding: 0;
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
}
</style>

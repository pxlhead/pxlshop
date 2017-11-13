<template lang='pug'>
  .profile(v-if='user')
    a.profile-name(@click='showModal') {{ user.displayName }}
    a.profile-img
      .img-box
        img(:src='user.photoURL' alt='User photo')
      ul.profile-dropdown
        li.dropdown-item
          a(@click='showModal = true') My Profile
        li.dropdown-item
          a(@click='showModal = true') Settings
        li.dropdown-item
          a(@click='signOutUser') Log out

    .modal-overlay(@click='showModal = false' v-if='showModal')
      a.close-btn
    form.modal(v-if='showModal && !checkPassword')
      .modal-head
        a.modal-title Profile
      .modal-head.modal-subhead
        a.modal-title
      .modal-content
        .profile-photo
          .img-box
            img(:src='user.photoURL' alt='User photo')
          label.modal-action Choose
            input.modal-upload(type='file' accept='.jpg, .jpeg, .png'
              @change='submitPhoto')
          a.delete-action(@click='deleteUser') Delete account
        .profile-info
          .input-box
            .input-icon.icon-face
            input.input-line(type='text' v-model='username'
              placeholder='')
          .input-box
            .input-icon.icon-mail
            input.input-line(name='email' type='email' v-model='email'
              placeholder='')
          input.modal-action(type='submit' value='Submit')
          .input-box
            .input-icon.icon-lock
            input.input-line(type='password' v-model='password'
              placeholder='')
          input.modal-action(type='submit' value='Submit')

    .modal.modal-confirm(v-if='checkPassword')
      input.input-line(type='password' v-model='password'
        placeholder='')
      input.modal-action(type='submit' value='Submit')
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'profile',
  data() {
    return {
      showModal: false,
      checkPassword: false,
      username: '',
      email: '',
      password: ''
    };
  },
  computed: {
    user() {
      return this.$store.state.activeUser;
    }
  },
  methods: {
    ...mapActions([
      'signOutUser',
      'uploadUserPhoto',
      'updateUserProfile',
      'updateUserEmail',
      'updateUserPassword',
      'deleteUser'
    ])
  }
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
  background: url('~@/assets/icons/delete.svg') no-repeat 0 center;
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
  .delete-action {
    padding-left: 3rem;
    margin-top: 10rem;
  }
}
</style>

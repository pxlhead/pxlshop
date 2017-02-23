<template lang="pug">
  .profile
    span.profile-name {{ user.displayName || 'OWL' }}
    a.profile-img
      img(src='../assets/icons/avatar.svg' alt='Avatar')
    a.profile-settings
      ul.profile-dropdown
        li.dropdown-item(v-for='option in options')
          a(@click='option.action') {{ option.name }}
</template>

<script>
import Firebase from '../appconfig/firebase';

export default {
  name: 'profile',
  props: ['user'],
  data() {
    return {
      options: [{
        name: 'My Profile',
        action: this.logOut,
      }, {
        name: 'Settings',
        action: this.logOut,
      }, {
        name: 'Log out',
        action: this.logOut,
      }],
    };
  },
  methods: {
    logOut() {
      Firebase.auth.signOut();
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
  top: 6vh;
  right: calc(10vw - 6rem);
  display: flex;
  align-items: stretch;
}
.profile-name {
  display: block;
  text-align: center;
  vertical-align: top;
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
  padding-left: 3rem;
  img {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }
}
.profile-settings {
  width: 3rem;
  padding-left: 4rem;
  margin: 0;
  display: block;
  position: relative;
  background: url('../assets/icons/dots.svg') no-repeat center;
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

@media screen and (max-width: 991px) {
  .profile {
    height: 3rem;
    top: 5vh;
    right: calc(10vw - 4rem);
  }
  .profile-name {
    line-height: 3rem;
    font-size: 1.4rem;
  }
  .profile-img {
    padding-left: 2rem;
    img {
      padding: 0;
    }
  }
  .profile-settings {
    width: 2rem;
    padding-left: 3rem;
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
}
</style>

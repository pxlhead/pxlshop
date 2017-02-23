<template lang="pug">
  .container
    main-header
    shop
    main-footer
    login(v-if='!user')
    profile(v-if='user' v-bind:user='user')
</template>

<script>
/* eslint-disable no-console */
import Firebase from '../../appconfig/firebase';

import Shop from '../../components/pages/Shop';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import Login from '../../components/Login';
import Profile from '../../components/Profile';

export default {
  name: 'app',
  components: {
    Shop,
    MainHeader,
    MainFooter,
    Login,
    Profile,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(user);
      } else {
        this.user = null;
        console.log('not logged in');
      }
    });
  },
};
</script>

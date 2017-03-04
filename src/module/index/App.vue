<template lang="pug">
  .container
    main-header
    index
    main-footer
    login(v-if='!user' v-bind:light='light' v-on:signInGoogle='getUserGoogle')
    profile(v-if='user' v-bind='{user, light}')
</template>

<script>
import Firebase from '../../appconfig/firebase';

import MainHeader from '../../components/MainHeader';
import Index from '../../components/pages/Index';
import MainFooter from '../../components/MainFooter';
import Login from '../../components/Login';
import Profile from '../../components/Profile';

export default {
  name: 'app',
  components: {
    MainHeader,
    Index,
    MainFooter,
    Login,
    Profile,
  },
  data() {
    return {
      user: null,
      light: true,
    };
  },
  created() {
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    getUserGoogle() {
      Firebase.auth.getRedirectResult().then((result) => {
        this.user = result.user;
      });
    },
  },
};
</script>

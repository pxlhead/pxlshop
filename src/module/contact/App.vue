<template lang="pug">
  .container
    main-header
    contact
    main-footer
    login(v-if='!user' v-bind:light='light' v-on:signInGoogle='getUserGoogle')
    profile(v-if='user' v-bind='{user, light}')
</template>

<script>
import Firebase from '../../appconfig/firebase';

import MainHeader from '../../components/MainHeader';
import Contact from '../../components/pages/Contact';
import MainFooter from '../../components/MainFooter';
import Profile from '../../components/Profile';
import Login from '../../components/Login';

export default {
  name: 'app',
  components: {
    Contact,
    MainHeader,
    MainFooter,
    Login,
    Profile,
  },
  data() {
    return {
      user: null,
      light: false,
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

<template lang="pug">
  .container
    main-header
    index
    main-footer
    login(v-if='!user')
    profile(v-if='user' v-bind:user='user'
    v-bind:lightProfile='lightProfile')
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
      lightProfile: true,
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
};
</script>

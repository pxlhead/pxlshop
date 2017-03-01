<template lang="pug">
  .container
    main-header
    cart
    main-footer
    login(v-if='!user' v-bind:light='light')
    profile(v-if='user' v-bind:user='user'
    v-bind:light='light')
</template>

<script>
import Firebase from '../../appconfig/firebase';

import MainHeader from '../../components/MainHeader';
import Cart from '../../components/pages/Cart';
import MainFooter from '../../components/MainFooter';
import Login from '../../components/Login';
import Profile from '../../components/Profile';

export default {
  name: 'app',
  components: {
    MainHeader,
    Cart,
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
};
</script>

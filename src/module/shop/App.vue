<template lang="pug">
  .container
    main-header
    shop(v-bind='{user, productsInCart}')
    main-footer
    login(v-if='!user' v-bind:light='light' v-on:signInGoogle='getUserGoogle')
    profile(v-if='user' v-bind='{user, light}')
</template>

<script>
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
      productsInCart: {},
      light: false,
    };
  },
  created() {
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.getProductsInCart();
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
    getProductsInCart() {
      Firebase.dbUsersRef.child(`${this.user.uid}/cart/`).on('value', (snapshot) => {
        snapshot.forEach((product) => {
          this.productsInCart[product.key] = product.val();
        });
      });
    },
  },
};
</script>

<template lang="pug">
  .container
    main-header(v-bind='{user, productsInCart}')
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
      // TODO: fix initial cart items upload
      Firebase.dbUsersRef.child(`${this.user.uid}/cart/`).on('value', (snapshot) => {
        if (!Object.keys(this.productsInCart).length) {
          snapshot.forEach((productInCart) => {
            this.productsInCart[productInCart.key] = productInCart.val();
          });
          return;
        }
        snapshot.forEach((productInCart) => {
          this.$set(this.productsInCart, productInCart.key, productInCart.val());
        });
      });
    },
  },
};
</script>

<template lang="pug">
  header.header
    .logo
      a.logo-link
        img(src='../assets/logo.svg' alt='Logo')
    .cart
      a.cart-link
        img(src='../assets/icons/cart.svg' alt='Cart')
        span.cart-count(v-if='cartShow')
      .cart-submenu
        ul.cart-list
          li.cart-product(v-for='(product, key) in productsInCart')
            a.product-thumbnail
              img(v-bind:src='product.url' alt='product.name')
            .product-description
              a.product-title {{ product.name }}
              span.product-price $ {{ product.price }}
            a.product-remove(@click='removeFromCart(key)')
        .cart-subtotal
          span Subtotal
          span $ {{ cartAmount() }}
        .cart-links
          a.cart-view(@click='changePage("Cart")') View Cart
          a.cart-checkout(@click='changePage("Checkout")') Checkout
    a.nav-toggle(@click='showMenu = !showMenu')
      .toggle-icon(:class='{open: showMenu}')
        span
        span
        span
      transition(name='toggle-menu')
        nav.nav(v-if='showMenu')
          a.nav-link(v-for='page in pages'
          @click='changePage(page)') {{ page }}
</template>

<script>
/* eslint-disable no-undef */
import router from '@/router';
import Firebase from '../appconfig/firebase';

export default {
  name: 'main-header',
  props: ['user', 'productsInCart'],
  data() {
    return {
      pages: [
        'Home',
        'About',
        'Shop',
        'Contacts',
      ],
      showMenu: false,
    };
  },
  computed: {
    cartShow() {
      return Object.keys(this.productsInCart).length > 0;
    },
  },
  methods: {
    changePage(page) {
      router.push({
        name: page,
        params: {
          user: this.user,
          productsInCart: this.productsInCart,
        },
      });
    },
    cartAmount() {
      return Object.values(this.productsInCart)
        .reduce((sum, product) => sum + Number(product.price), 0);
    },
    removeFromCart(key) {
      Firebase.dbUsersRef.child(`${this.user.uid}/cart/${key}`).remove();
      this.$delete(this.productsInCart, key);
    },
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7BEFB2;
$color-light: #fff;

a {
  color: $color-dark;
}
.header {
  position: fixed;
  background-color: $color-light;
  height: 6rem;
  top: 5vh;
  left: calc(10vw - 6rem);
  z-index: 800;
}
.logo,
.cart,
.nav-toggle {
  width: 6rem;
  height: 6rem;
}
.logo {
  display: inline-block;
  vertical-align: top;
}
.logo-link {
  background-color: $color-dark;
  display: block;
  height: 100%;
  position: relative;
  &:hover {
    background-color: $color-grey;
  }
  img {
    position: absolute;
    top: calc(50% - 1.5rem);
    left: 0;
  }
}
.cart {
  position: relative;
  display: inline-block;
}
.cart-link {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
.cart-count {
  position: absolute;
  top: calc(50% - 1.4rem);
  right: calc(50% - 1.5rem);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: $color-green;
}
.cart-submenu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 6rem;
  left: 0;
  width: 25rem;
  padding: 2rem;
  background-color: rgba(25, 25, 25, 0.9);
  color: darken($color-light, 40);
  a {
    color: $color-light;
  }
}
.cart-product {
  border-color: $color-grey;
}
.cart:hover .cart-submenu {
  display: flex;
}
.nav-toggle {
  width: 4rem;
  display: inline-block;
  position: relative;
}
.toggle-icon {
  position: absolute;
  width: 2rem;
  height: 1.8rem;
  top: calc(50% - 1rem);
  left: calc(50% - 2rem);
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
.toggle-icon span {
  display: block;
  position: absolute;
  height: 0.4rem;
  width: 100%;
  background-color: $color-dark;
  border-radius: 4px;
  transform: rotate(0deg);
  left: 0;
  transition: .4s ease-in-out;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: calc(50% - 0.2rem);
  }
  &:nth-child(3) {
    bottom: 0;
  }
}
.toggle-icon.open span {
  &:nth-child(1) {
    top: calc(50% - 0.2rem);
    transform: rotate(135deg);
  }
  &:nth-child(2) {
    opacity: 0;
    left: 3rem;
  }
  &:nth-child(3) {
    top: calc(50% - 0.2rem);
    transform: rotate(-135deg);
  }
}
.toggle-menu-enter-active, .toggle-menu-leave-active {
  transition: all .5s ease;
}
.toggle-menu-enter, .toggle-menu-leave-to {
  transform: translateX(-2rem);
  opacity: 0;
}
.nav {
  position: absolute;
  top: 0;
  left: 4rem;
  height: 6rem;
  background-color: rgba(255, 255, 255, 0.8);
}
.nav-link {
  line-height: 6rem;
  vertical-align: center;
  letter-spacing: 0.1rem;
  padding: 2rem;
  font-size: 1.2rem;
  color: lighten($color-grey, 10);
  &:hover {
    color: $color-dark;
    text-decoration: line-through;
  }
}

@media screen and (max-width: 991px) {
  .header {
    height: 4rem;
    top: 5vh;
    left: calc(10vw - 4rem);
  }
  .logo,
  .cart,
  .nav-toggle {
    width: 4rem;
    height: 4rem;
  }
  .logo-link img {
    top: calc(50% - 1rem);
  }
  .toggle-icon {
    top: calc(50% - 1rem);
    left: calc(50% - 1.5rem);
  }
  .cart-submenu {
    top: 4rem;
    left: 0;
    width: 20rem;
  }
  .nav {
    height: 4rem;
    left: 4rem;
  }
  .nav-link {
    line-height: 4rem;
    padding: 1rem;
  }
}
@media screen and (max-width: 480px) {
  .header {
    left: calc(15vw - 4rem);
  }
  .nav {
    height: 4rem;
    left: 3rem;
  }
  .nav-link {
    line-height: 4rem;
    padding: 0.6rem;
  }
}
</style>

<template lang="pug">
  header.header
    .logo
      a.logo-link
        img(src='../assets/logo.svg' alt='Logo')
    .cart
        a.cart-link
          img(src='../assets/cart.svg' alt='Cart')
          span.cart-count
        .cart-submenu
          ul.submenu-list
            li.submenu-product(v-for='product in products')
              a.product-thumbnail
                img(:src='product.img' alt='')
              .product-description
                a.product-title {{ product.name }}
                .product-price
                  span.product-quantity 2 x
                  span.currency ${{product.price }}
              a.product-remove
          .cart-subtotal Sub Total
              span.amount $77.00
          .cart-links
            a.cart-view View Cart
            a.cart-checkout Checkout
    a.nav-toggle(@click='showMenu = !showMenu')
      .toggle-icon(:class='{open: showMenu}')
        span
        span
        span
      transition(name='toggle-menu')
        nav.nav(v-if='showMenu')
          a.nav-link(v-for='page in pages') {{ page }}
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'main-header',
  data() {
    return {
      pages: [
        'Home',
        'About',
        'Shop',
        'Blog',
        'Contacts',
      ],
      showMenu: false,
      products: [
        {
          name: 'Book of Design',
          price: '135',
          stars: '4',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Palm pattern',
          price: '35',
          stars: '5',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Balzac pattern',
          price: '129',
          stars: '3',
          img: 'https://unsplash.it/500/500/?random',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #87C681;
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
  z-index: 1000;
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
  justify-content: center;
  position: absolute;
  top: 6rem;
  left: 0;
  padding: 2rem;
  width: 25rem;
  height: 28rem;
  background-color: $color-dark;
  a {
    color: $color-light;
  }
}
.cart:hover .cart-submenu {
  display: flex;
}
.submenu-list {
  padding: 0;
  margin: 0;
  flex: 5;
  display: flex;
  flex-direction: column;
}
.submenu-product {
  flex-basis: 5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
}
.product-thumbnail {
  flex-basis: 5rem;
  position: relative;
}
.product-description {
  flex-basis: 16rem;
  margin-left: 2rem;
}
.product-price {
  margin-top: 0.3rem;
}
.product-remove {
  flex-basis: 2rem;
  height: 2rem;
  position: relative;
  background-color: $color-grey;
  border-radius: 50%;
  &:hover {
    background-color: darken($color-grey, 10);
  }
  &::before,
  &::after {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 1rem;
    content: '';
    display: block;
    border-bottom: 1px solid $color-light;
  }
  &::before {
    top: 1rem;
    transform: rotate(45deg);
  }
  &::after {
    top: 1rem;
    transform: rotate(135deg);
  }
}
.cart-subtotal {
  flex: 0.5;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid $color-grey;
  color: $color-light;
  text-transform: uppercase;
}
.amount {
  float: right;
}
.cart-links {
  flex-basis: 4rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
a.cart-view {
  flex-basis: 8rem;
  line-height: 4rem;
  vertical-align: middle;
  color: $color-grey;
  &:hover {
    color: $color-green;
  }
}
.cart-checkout {
  flex-basis: 10rem;
  text-align: center;
  line-height: 4rem;
  vertical-align: middle;
  background-color: $color-green;
  &:hover {
    background-color: darken($color-green, 10);
  }
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
}
</style>

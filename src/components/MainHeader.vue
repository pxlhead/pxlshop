<template lang="pug">
  header.header
    .logo
      a.logo-link
        img(src='https://unsplash.it/60/60/?random' alt='')
    .card
        a.card-link
          img(src='https://unsplash.it/16/16/?random' alt='')
          span.card-count
        .card-submenu
          ul.submenu-list
            li.submenu-product(v-for='product in products')
              a.product-thumbnail
                img(v-bind:src='product.img' alt='')
              .product-description
                a.product-title {{ product.name }}
                .product-price
                  span.product-quantity 2 x
                  span.currency ${{product.price }}
              a.product-remove
          .card-subtotal Sub Total
              span.amount $77.00
          .card-actions
            a.action-view View Cart
            a.action-checkout
                span.icon-check Checkout
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
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

img {
  background-size: cover;
  width: 100%;
  height: auto;
}
a {
  color: $color-dark;
}
.header {
  position: fixed;
  top: 5vh;
  left: 6rem;
  z-index: 1000;
}
.logo {
  width: 5rem;
  height: 5rem;
  display: inline-block;
}
.card {
  width: 3rem;
  height: 5rem;
  display: inline-block;
  position: relative;
}
.card-link {
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
}
.card-count {
  position: absolute;
  top: calc(50% - 1.5rem);
  right: calc(50% - 1.5rem);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: $color-green;
}
.card-submenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 5rem;
  left: 0;
  padding: 2rem;
  width: 25rem;
  height: 28rem;
  background-color: $color-dark;
  a {
    color: $color-light;
  }
}
.card:hover ~ .card-submenu {
  display:flex;
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
  &::before,
  &::after {
    position: absolute;
    top: 0.9rem;
    left: 0.9rem;
    width: 1rem;
    height: 1rem;
    content: '';
    display: block;
    border-bottom: 1px solid $color-light;
  }
  &::before {
    top: 0;
    transform: rotate(45deg);
  }
  &::after {
    top: 0.7rem;
    transform: rotate(135deg);
  }
}
.card-subtotal {
  flex: 1;
  border-bottom: 1px solid $color-grey;
  color: $color-light;
  text-transform: uppercase;
}
.amount {
  float: right;
}
.card-actions {
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  list-style: none;
}
.action-view {
  flex: 1;
}
.action-checkout {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.icon-check {
  flex: 1;
}
</style>

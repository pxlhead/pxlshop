<template lang="pug">
  .product-modal
    .modal-overlay
    a.close-btn
    section.modal
      h1 One of the best illustration ever
      .details
        h2.aside-title Details
        .details-img
          //- img(v-bind:src='product.url' v-bind:alt='product.name')
          //- .product-actions
          //-   a.cart-link
          //-   a.star.star-link
        .details-content
          .product-info
            .product-stars
              span.star
            span.product-price $55
          .product-about
            p.about-text
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              |Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              |Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              |Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          .product-cart
            input.input-line(type="text" name="quantity" value="1")
            a.input-btn Add to Card
          .product-index
            span.index-text 123515
            span.index-text XTYE
            span.index-text Lorem Ipsum
          .product-social
      .related
        h2.aside-title Related
        .gallery-product(v-for='(product, index) in products' v-if='index < 4')
          .product-img
            img(v-bind:src='product.url' v-bind:alt='product.name')
            .product-actions
              a.cart-link
              a.star.star-link
          h2.product-title Ipsum Lorem
          span.product-author Ipsum Lorem
</template>

<script>
import Firebase from '../appconfig/firebase';

export default {
  name: 'product',
  firebase: {
    products: Firebase.dbProductsRef,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

h1, h2, h3 {
  color: $color-dark;
}
h1 {
  font-size: 3.4vw;
  margin-bottom: 5rem;
}

.modal {
  top: calc(50% - 40% - 2rem);
  left: calc(50% - 40% - 2rem);
  width: 80%;
  height: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.aside-title {
  left: 2rem;
}

.details {
  flex-basis: 50%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
}

.details-img {
  flex: 1;
}

.details-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 5rem;
}

.product-info, .product-about, .product-cart, .product-index, .product-social {
  flex-basis: calc(80% / 5);
}

.product-info {
  display: flex;
}

.product-stars, .product-price {
  flex: 1;
  padding-top: 1rem;
}

.star {
&::before {
  content: '\2606';
  color: $color-grey;
}
}
.product-index {
  display: flex;
  flex-direction: column;
}

.input-line {
  text-align: center;
}

.input-btn {
  background-color: $color-green;
  padding: 1rem;
  &:hover {
    color: inherit;
    background-color: darken($color-green, 10);
  }
}

.related {
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.gallery-column {
  flex:1;
  display: flex;
}
.gallery-product {
  flex-basis: calc(40% / 3);
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.product-img {
  overflow: hidden;
  position: relative;
  &:hover .product-actions {
    transform: translateX(0%);
  }
  img {
    transition: all 1s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.product-actions {
  position: absolute;
  top: calc(50% - 3rem);
  right: 1rem;
  width: 3rem;
  background-color: $color-light;
  transform: translateX(200%);
  transition: 1s;
  a {
    display: block;
    height: 3rem;
    width: 100%;
    &:hover {
      background-color: $color-green;
    }
  }
  .star-full {
    &::before {
      color: $color-dark;
    }
  }
}
.cart-link {
  background: url('../assets/icons/cart.svg') no-repeat center center;
  background-size: 40%;
}
.star-link {
  text-align: center;
  line-height: 3rem;
  vertical-align: middle;
  font-size: 1rem;
}
.product-title {
  font-size: 1.5vw;
  flex: 1;
  margin-bottom: 0.3rem;
}
.product-price, .product-author {
  font-size: 1vw;
}
.product-author {
  padding-bottom: 0.5rem;
}

@media screen and (max-width: 991px) {
  .login-sign {
    height: 3rem;
    top: 5vh;
    right: calc(10vw - 4rem);
  }
  .sign-btn {
    line-height: 3rem;
    font-size: 1.4rem;
    &:first-child {
      margin-right: 2rem;
    }
  }
}
@media screen and (max-width: 480px) {
  .login-sign {
    right: calc(10vw - 2rem);
  }
}
</style>

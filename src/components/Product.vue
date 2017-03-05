<template lang="pug">
  .product-modal
    .modal-overlay
    a.close-btn
    section.modal
      .details
        h2.aside-title Details
        .details-img(v-for='(product, index) in products' v-if='index < 1')
          img(v-bind:src='product.url')
        .details-content
          h2.product-name One of the best illustration ever
          .product-info
            span.product-price $55
            .product-stars
              span.star(v-for='n in 5')
          .product-about
            p.about-text
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              |Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              |Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          .product-cart
            input.input-line(type="text" name="quantity" value="1")
            a.input-btn Add to Card
          ul.product-social
            li.social-item(v-for='social in socials')
              a.social-link
                img(:src='"../assets/icons/" + social + ".svg"')
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
      socials: ['twitter', 'facebook', 'youtube', 'instagram'],
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

.modal {
  top: calc(50% - 40% - 2rem);
  left: calc(50% - 40% - 2rem);
  width: 80%;
  height: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.close-btn {
  width: 4.5rem;
  height: 4.5rem;
}
.aside-title {
  left: 2rem;
}
.details {
  flex-basis: 60%;
  padding: 4rem 9rem 0rem 9rem;
  position: relative;
  display: flex;
  flex-direction: row;
}
.details-img {
  flex: 1;
  padding: 1rem 3.5rem;
}
.details-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 5rem;
}
.product-name, .product-info, .product-about, .product-cart, .product-social {
  flex-basis: calc(80% / 6);
}
.product-info {
  display: flex;
  width: 40%;
}
.product-about {
  padding: 1rem;
  line-height: 2.5rem;
}
.product-stars, .product-price {
  flex: 1;
  padding: 1rem;
}
.product-social {
  width: 30%;
  padding: 2rem 2rem 0rem 2rem;
  display: flex;
  justify-content: space-between;
}
.social-link {
  flex-basis: 20%;
  display: block;
  &:hover {
    opacity: 0.7;
  }
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
  padding: 4rem 4rem 0 4rem;
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
.product-name {
  font-size: 2vw;
  padding: 1rem;
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
  .details {
    flex-direction: column;
    flex-basis: 100%;
    padding: 2rem;
  }
  .related {
    display: none;
  }

  .details-img {
    flex-basis: 30%;
    padding: 2rem 6rem;
  }

  .details-content {
    flex-basis: 60%;
  }
  .product-social {
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 18%;
    top: calc(50% - 12rem);
  }
  .product-price {
    font-size: 1.5vw;
  }
  .product-name {
    padding: 0rem 1rem;
  }
}

@media screen and (max-width: 560px) {
  .details-img {
    flex-basis: 30%;
    padding: 2rem 3rem;
  }
  .product-price {
    font-size: 3vw;
  }
}
</style>

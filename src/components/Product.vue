<template lang='pug'>
  .product
    .product-item
      .product-img
        img(:src='product.img' alt='product.title'
          @click='showModal = true')
        .product-actions(:class='{"product-actions--active": showStars}')
          a.cart-link(:class='{"cart-link--active": checkInCart(product.id)}'
            @click='addToCart(product)')
          .star-box(@mouseenter='showStars = true' @mouseleave='showStars = false')
            span.star.star-link(v-for='star in 5'
              @click='addStars(product, (6 - star))')
      h2.product-title(@click='showModal = true') {{ product.title }}
      span.product-author {{ product.by }}
      span.product-price ${{ product.price }}.00

    .product-modal(v-if='showModal')
      .modal-overlay(@click='showModal = false')
      a.close-btn(@click='showModal = false')
      section.modal
        .modal-img
          img(:src='product.img' alt='product.title')
        .modal-content
          h2.modal-name {{ product.title }}
          h4.modal-author {{ product.by }}
          .modal-info
            span.modal-price ${{ product.price }}
          .modal-about
            p.about-text
              | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              | eiusmod tempor incididunt ut labore et dolore magna aliqua.
              | Ut enim ad minim veniam, quis nostrud exercitation ullamco
              | laboris nisi ut aliquip ex ea commodo consequat.
          .modal-cart
            a.input-btn Add to Card
            social-list.modal-social
</template>

<script>
import SocialList from '@/components/SocialList';

export default {
  name: 'product',
  props: ['product'],
  components: {
    SocialList
  },
  data() {
    return {
      showStars: false,
      showModal: false
    };
  },
  methods: {
    addStars() {},
    checkInCart(id) {
      return this.$store.state.cart.addedProducts.includes(id);
    }
  }
};
</script>

<style lang='scss' scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

.product-item {
  flex-direction: column;
  margin-bottom: 1rem;
  flex-basis: 30%;
  display: flex;
}
.product-img {
  &:hover .product-actions {
    transform: translateX(0);
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
  overflow: visible;
  top: calc(50% - 2rem);
  right: 1rem;
  width: 2.5rem;
  transform: translateX(300%);
  transition: 1s;
}

@for $i from 1 through 4 {
  .star-box:hover .star-link:nth-of-type(#{$i+1}) {
    $length: -2.5rem*$i;
    transform: translateX($length);
  }
}
.cart-link,
.star-link {
  -webkit-font-smoothing: antialiased;
  &:hover {
    background-color: $color-green;
  }
}
.cart-link {
  display: block;
  height: 2.5rem;
  width: 100%;
  background: $color-light url('~@/assets/icons/cart.svg') no-repeat center center;
  background-size: 40%;
}
.cart-link--active {
  background-color: $color-green;
  pointer-events: none;
}
.star-box {
  position: relative;
  height: 2.5rem;
}
.star-link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 2.5rem;
  width: 2.5rem;
  background-color: $color-light;
  cursor: pointer;
  text-align: center;
  line-height: 2.5rem;
  vertical-align: middle;
  font-size: 1.5rem;
  transition: 1s;
  &:hover {
    &::before {
      content: '\2605';
      color: $color-dark;
    }
  }
  &:hover ~ .star-link {
    &::before {
      content: '\2605';
      color: $color-dark;
    }
  }
}
.product-title {
  margin-bottom: 0.3rem;
  cursor: pointer;
}
.product-price, .product-author {
  font-size: 1vw;
}
.product-author {
  padding-bottom: 0.5rem;
}

ul {
  padding: 0;
  margin: 0;
}
.close-btn {
  width: 4.5rem;
  height: 4.5rem;
}
.modal {
  top: calc(50% - 20vh - 4rem);
  left: calc(50% - 30vw - 4rem);
  width: 60vw;
  height: 40vh;
  padding: 4rem;
  flex-direction: row;
}
.modal-img {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
}
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 5rem;
}
.modal-name {
  font-size: 3rem;
}
.modal-cart {
  display: flex;
  justify-content: space-between;
}
.modal-info {
  display: flex;
  flex: 2;
  margin-bottom: 1rem;
}
.modal-about {
  line-height: 2.5rem;
}
.input-btn {
  flex-basis: 40%;
}
.modal-social {
  align-self: center;
  flex-basis: 30%;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.social-item {
  flex-basis: 20%;
}
.modal-index {
  display: flex;
  flex-direction: column;
}
.input-line {
  text-align: center;
}
.input-btn {
  background-color: $color-green;
  padding: 2rem;
  text-align: center;
  line-height: 0.2;
  &:hover {
    color: inherit;
    background-color: darken($color-green, 10);
  }
}

@media screen and (max-width: 1400px) {
  .details {
    padding: 0rem;
  }
  .about-text {
    height: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
@media screen and (max-width: 991px) {
  .modal {
    top: calc(50% - 25vh - 2rem);
    left: calc(50% - 35vw - 2rem);
    width: 70vw;
    height: 50vh;
    padding: 2rem;
  }
  .modal-img {
    max-width: 40rem;
  }
}
@media screen and (max-width: 700px) {
  .modal {
    flex-direction: column;
    top: calc(50% - 40vh - 3rem);
    left: calc(50% - 35vw - 3rem);
    height: 80vh;
    padding: 3rem;
  }
  .product-price {
    font-size: 3vw;
  }
}
@media screen and (max-width: 480px) {
  .modal {
    top: calc(50% - 33vh - 3rem);
    height: 66vh;
    padding: 3rem;
  }
  .about-text {
    display: none;
  }
}
</style>

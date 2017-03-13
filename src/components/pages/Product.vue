<template lang="pug">
  .product-modal
    .modal-overlay(@click='close')
    a.close-btn(@click='close')
    section.modal
      .details
        .details-img
          img(v-bind:src='productModal.url')
        .details-content
          h2.product-name {{ productModal.name }}
          h4.product-author Author
          .product-info
            span.product-price ${{ productModal.price }}
            .product-stars
              span.star(v-for='n in 5')
          .product-about
            p.about-text
              |Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              |Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          .product-cart
            a.input-btn Add to Card
            ul.product-social
              li.social-item(v-for='social in socials')
                a.social-link
                  img(:src='"../../assets/icons/" + social + ".svg"')
</template>

<script>
export default {
  name: 'product',
  props: ['productModal', 'topProducts'],
  data() {
    return {
      socials: ['twitter', 'facebook', 'youtube', 'instagram'],
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

h1, h2, h3, h4 {
  color: $color-dark;
}
ul {
  padding: 0;
  margin: 0;
}
.modal {
  top: calc(50% - 25% - 2rem);
  left: calc(50% - 25% - 2rem);
  width: 50%;
  height: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.close-btn {
  width: 4.5rem;
  height: 4.5rem;
}
.details {
  flex-basis: 60%;
  padding: 4rem;
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
.product-name, .product-author, .product-info, .product-about, .product-cart, .product-social {
  flex: 1;
}
.product-name {
  font-size: 3rem;
}
.product-cart {
  display: flex;
  justify-content: space-between;
}
.product-info {
  display: flex;
  flex: 2;
  margin-bottom: 1rem;
}
.product-about {
  line-height: 2.5rem;
}
.product-stars, .product-price {
  flex: 1;
}
.input-btn {
  flex-basis: 40%;
}
.product-social {
  flex-basis: 40%;
  display: flex;
  justify-content: space-between;
}
.social-item {
  flex: 1;
  padding: 1rem;
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
  .social-item {
    flex: 1;
    padding: 1.5rem;
  }
  .product-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
@media screen and (max-width: 991px) {
  .social-item {
    flex: 1;
    padding: 1rem;
  }
}
@media screen and (max-width: 700px) {
  .modal {
    top: calc(50% - 40% - 2rem);
    left: calc(50% - 25% - 2rem);
    width: 50%;
    height: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  .social-item {
    flex: 1;
    padding: 1.5rem;
  }
  .details-img {
    padding: 1rem 1rem;
  }
  .details-content {
    padding: 1rem 2rem;
  }
  .details {
    flex-direction: column;
    padding: 0rem;
  }
  .details-img {
    flex-basis: 30%;
    padding: 2rem 3rem;
  }
  .product-price {
    font-size: 3vw;
  }
}
</style>

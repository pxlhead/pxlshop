<template lang="pug">
  .product-modal
    .modal-overlay(@click='close')
    a.close-btn(@click='close')
    section.modal
      .modal-img
        img(:src='productModal.url')
      .modal-content
        h2.product-name {{ productModal.name }}
        h4.product-author {{ productModal.author }}
        .product-info
          span.product-price ${{ productModal.price }}
        .product-about
          p.about-text
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            | eiusmod tempor incididunt ut labore et dolore magna aliqua.
            | Ut enim ad minim veniam, quis nostrud exercitation ullamco
            | laboris nisi ut aliquip ex ea commodo consequat.
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
.input-btn {
  flex-basis: 40%;
}
.product-social {
  align-self: center;
  flex-basis: 30%;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.social-item {
  flex-basis: 20%;
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
</style>

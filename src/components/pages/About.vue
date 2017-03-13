<template lang="pug">
  .content
    h1
      | Hi there! We're an awesome group of creatives from a variety of different
      | backgrounds with a variety of skills.
    section.team
      h2.aside-title TEAM
      .gallery-product(v-for='(product, index) in products' v-if='index < 8')
        h2.person-name Ipsum Lorem
        span.person-prof Ipsum Lorem
        p.person-description
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua.
        .product-img
          img(:src='product.url' alt='product.name')
    section.awards
      h2.aside-title AWARDS
      .awards-item(v-for='n in 4')
        img(src='../../assets/index/award-logo.svg' alt='Awwwwards')
    section.clients
      h2.aside-title CLIENTS
      .clients-row(v-for='n in 2')
        .clients-item(v-for='n in 4')
          img(src='../../assets/index/award-logo.svg' alt='Awwwwards')
</template>

<script>
import Firebase from '../../appconfig/firebase';

export default {
  name: 'about',
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
$color-green: #7BEFB2;

h1 {
  padding: 12vh 10vw 0 10vw;
}
.aside-title {
  left: 3vw;
}
.team, .awards, .clients {
  background-color: $color-green;
  position: relative;
  padding: 8vh 10vw;
  display: flex;
  justify-content: space-around;
}
.team {
  background-color: transparent;
  justify-content: space-between;
  padding-bottom: calc(8vh - 10rem);
  flex-wrap: wrap;
}
.gallery-product {
  flex-basis: calc(90% / 4);
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  border-top: 2px solid $color-green;
}
.product-img {
  overflow: hidden;
  position: relative;
  filter: grayscale(1);
  cursor: pointer;
  &:hover {
    transition: all 1s ease;
    filter: grayscale(0);
  }
}
.person-name {
  font-size: 1.5vw;
  margin-bottom: 0.3rem;
}
.person-description {
  padding: 1rem 0;
  font-size: 1vw;
  line-height: 3rem;
}
.person-prof {
  font-size: 1vw;
  padding-bottom: 0.5rem;
}
.awards-item, .clients-item {
  border: 1px dashed rgba(6, 0, 0, 0.3);
  border-left: 0;
  padding: 0 5rem;
  &:nth-of-type(4n) {
    border-right: 0;
  }
  img {
    margin: 0 auto;
  }
}
.clients {
  background-color: transparent;
  flex-direction: column;
}
.clients-row {
  display: flex;
}

@media screen and (max-width: 991px) {
  .gallery-product {
    flex-basis: calc(90% / 2);
  }
  .person-name {
    font-size: 3.5vw;
    margin-bottom: 0.3rem;
  }
  .person-description {
    padding: 1rem 0;
    font-size: 2vw;
    line-height: 2rem;
  }
  .person-prof {
    font-size: 2vw;
    padding-bottom: 0.5rem;
  }
  .awards-item,
  .clients-item {
    padding: 0 2rem;
  }
}
@media screen and (max-width: 480px) {
  .awards-item,
  .clients-item {
    padding: 0 1rem;
  }
}
</style>

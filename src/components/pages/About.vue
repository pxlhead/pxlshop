<template lang="pug">
  .content
    h1 Hi there! We're an awesome group of creatives from a variety of different backgrounds with a variety of skills.
    section.team
      h2.aside-title TEAM
      .team-person(v-for='(product, index) in products' v-if='index < 8')
        h2.person-name Ipsum Lorem
        span.person-prof Ipsum Lorem
        p.person-description
          |Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        .person-img
          img(v-bind:src='product.url' v-bind:alt='product.name')
    section.awards
      h2.aside-title AWARDS
      .awards-item(v-for='n in 4')
        img(src='../../assets/index/award-logo.svg' alt='Awwwwards')
    section.clients
      h2.aside-title CLIENTS
      .clients-item(v-for='n in 8')
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
$padding: 8vh 10vw;

$color-dark: #252525;
$color-grey: #666;
$color-green: #7BEFB2;
$color-pink: #D9879C;
$color-light: #fff;

h1, h2, h3 {
  color: $color-dark;
}
h1 {
  font-size: 3.8vw;
  padding: 12vh 10vw 0 10vw;
}
.aside-title {
  left: 3vw;
}
.team, .awards, .clients{
  background-color: $color-green;
  position: relative;
  padding: $padding;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.team {
  background-color: transparent;
  justify-content: space-between;
  padding-bottom: calc(8vh - 10rem);
}
.team-person {
  flex-basis: calc(90% / 4);
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  border-top: 2px solid $color-green;
}
.person-img {
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
  flex: 1;
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
  flex-basis: 18%;
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
}

@media screen and (max-width: 991px) {
  .team-person {
    flex-basis: calc(90% / 2);
  }
  .person-name {
    font-size: 3.5vw;
    flex: 1;
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
  .awards-item, .clients-item {
    flex-basis: 34%;
    &:nth-of-type(2n) {
      border-right: 0;
    }
  }
}
@media screen and (max-width: 480px) {
  .awards-item, .clients-item {
    flex-basis: 34%;
    border-right: 0;
  }
}
</style>

<template lang="pug">
  .content
    .slider
      .slide(v-for='(slide, index) in slides'
      v-bind:class='{"slide-active" : index == activeSlide}')
        .slide-content
          h1.slide-title {{ slide.title }}
          h4.slide-text {{ slide.text }}
          .slide-action
            a Read more
            a See works
        .slide-overlay
        figure.slide-img
          img(v-bind:src='loadImage(slide.name)'
          v-bind:class='`img-${slide.name}`'
          alt='Welcome picture')
      nav.slider-nav
        a.nav-point(v-for='(slide, index) in slides'
        v-bind:class='{"point-active": index == activeSlide}'
        @click='changeSlide(index)')
      a.nav-arrow.arrow-prev(@click='changeSlide("prev")')
      a.nav-arrow.arrow-next(@click='changeSlide("next")')
    section.about
      .about-item
        h2.about-title
          | PXLSHOP is a platform for handcrafted, mousemade design content
          | from independent creatives around the world.
        p.about-text.
          Pxlshop, a global technology company, has created a great two-sided
          marketplace for creative professionals to license content - including
          images, videos and music - as well as innovative tools that power the
          creative process.
      .about-video
        iframe(width="100%" height="100%" src="https://goo.gl/aieVs4")
    section.info
      h2.aside-title INFO
      .info-item
        h4.info-title We kind to our authors
        p.
          Artists are at the heart of everything we do and the reason why
          pxlshop continues to be an important destination for stock content.
          By providing a platform for our artists to distribute some of the best
          stock content in the world, we give them the opportunity to
          transform their lives by making a living through their art.
      .info-item
        h4.info-title We kind to our culture
        p.
          We are where art starts, but that's only the beginning. We are the
          movement for the liberation of creative expression. We believe that
          art is for everyone, and we're creating the cultural context for how
          it is created, discovered, and shared.
      .info-item
        h4.info-title We kind to our clients
        p.
          Registration is free and gives you access to browse thousands of
          professional royalty-free stock photos, illustrations and patterns.
          Find great files from the world’s top contributors at the lowest
          prices. We always welcome to customize all our plans to suit your needs.
    section.awards
      h2.aside-title AWARDS
      .awards-item(v-for='n in 4')
        img(src='../../assets/index/award-logo.svg' alt='Awwwwards')
    section.gallery(v-if='sortTopProducts')
      h2.aside-title GALLERY
      .gallery-item(v-for='product in topProducts')
        figure.gallery-img
          img(v-bind:src='product.url' alt='product.name')
          .img-overlay
            h2.overlay-title {{ product.name }}
            p.overlay-author {{ product.author }}
    section.comments
      h2.aside-title COMMENTS
      .comment(v-for='n in 4')
        figure.comment-img
          img(src='../../assets/icons/avatar.svg' alt='Author avatar')
        cite.comment-author Alex, Google
        blockquote.comment-text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
/* eslint-disable no-multi-str */
/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
import Firebase from '../../appconfig/firebase';

export default {
  name: 'index',
  firebase: {
    products: Firebase.dbProductsRef,
  },
  data() {
    return {
      activeSlide: 0,
      slides: [{
        name: 'main',
        title: 'Welcome to our media market place!',
        text: 'Stock on photos, illustrations and videos from best creatives\
        around the world',
      }, {
        name: 'team',
        title: 'Join our creative team!',
        text: 'Stock on photos, illustrations and videos from best creatives\
        around the world',
      }, {
        name: 'shop',
        title: 'Welcome to our media market place!',
        text: 'Stock on photos, illustrations and videos from best creatives\
        around the world',
      }],
      topProducts: {},
    };
  },
  computed: {
    sortTopProducts() {
      this.topProducts = this.products.sort((prodA, prodB) => (
        prodA.stars <= prodB.stars ? 1 : -1
      )).slice(0, 3);
      return this.topProducts.length >= 1;
    },
  },
  methods: {
    changeSlide(n) {
      if (n === 'prev') {
        this.activeSlide !== 0 ? this.activeSlide -= 1 : this.activeSlide = 2;
      } else if (n === 'next') {
        this.activeSlide !== 2 ? this.activeSlide += 1 : this.activeSlide = 0;
      } else {
        this.activeSlide = n;
      }
    },
    loadImage(slide) {
      if (slide === 'main') {
        return require('../../assets/index/yellow-sofa.jpg');
      } else if (slide === 'team') {
        return require('../../assets/index/deer.jpg');
      }
      return require('../../assets/index/plant.jpg');
    },
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

p {
  font-size: 2.0rem;
  color: $color-grey;
  text-align: justify;
}
a {
  font-size: 1.5rem;
  color: $color-light;
	&:hover {
    color: $color-green;
  }
}
.slider {
  position: relative;
  overflow: hidden;
}
.slide {
  height: 100vh;
  display: none;
  flex-direction: column;
}
.slide-active {
  display: flex;
}
.slide-content {
  position: absolute;
  top: 20vh;
  left: 0;
  padding: $padding;
  z-index: 100;
  width: 45vw;
}
.slide-img {
	margin: 0;
}
.img-main {
  transform: translateY(-10%);
}
.img-shop,
.img-team {
  transform: translateY(-2%) translateX(4%) scale(1.1);
}
.slide-title {
	font-size: 8vh;
}
.slide-text {
	font-size: 4vh;
}
.slide-action {
	a {
		font-size: 3vh;
		padding-right: 3rem;
	}
}
.slider-nav {
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 5rem);
  width: 10rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
}
.nav-point {
  flex: 1;
  position: relative;
  opacity: 0.6;
  z-index: 101;
  &:hover {
      opacity: 1;
  }
  &::before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    width: 1rem;
    height: 1rem;
    content: '';
    background-color: $color-light;
    border-radius: 50%;
    cursor: pointer;
  }
}
.point-active {
  opacity: 1;
}
.nav-arrow {
  position: absolute;
  display: none;
  width: 4rem;
  height: 10vh;
  content: '';
  background-color: $color-dark;
  opacity: 0.6;
  z-index: 101;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.slider:hover .nav-arrow {
  display: block;
}
.arrow-prev {
  top: calc(50% - 10vh);
  left: 0;
  &::before {
    position: absolute;
    content: '';
    top: calc(50% - 0.5rem);
    left: calc(50% - 0.5rem);
    width: 1rem;
    height: 1rem;
    background: url('../../assets/arrow.svg') no-repeat center;
    transform: rotate(90deg) scale(2);
  }
}
.arrow-next {
  top: calc(50% - 10vh);
  right: 0;
  &::before {
    position: absolute;
    content: '';
    top: calc(50% - 0.5rem);
    right: calc(50% - 0.5rem);
    width: 1rem;
    height: 1rem;
    background: url('../../assets/arrow.svg') no-repeat center;
    transform: rotate(-90deg) scale(2);
  }
}
.slide-overlay {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 50;
}
.about {
  color: $color-grey;
  display: flex;
  flex-direction: column;
  padding: $padding;
}
.about-item {
  flex: 1;
}
.about-title {
  color: $color-dark;
  font-size: 3.5rem;
}
.about-text {
  padding-bottom: 2rem;
}
.about-video {
  height: 60vh;
}
iframe {
  border: 0;
}
.info,
.awards,
.gallery,
.comments {
  position: relative;
  padding: $padding;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.info {
  background-color: lighten($color-grey, 50);
  .aside-title {
    top: 40%;
  }
}
.info-item {
  flex-basis: 30%;
}
.info-title {
  color: $color-dark;
  font-size: 3.0rem;
}
.aside-title {
  position: absolute;
  left: calc(5vw - 2rem);
  font-size: 2rem;
  transform: rotate(90deg);
  transform-origin: left;
  color: $color-dark;
  margin: 0;
  letter-spacing: 0.2rem;
}
.awards {
  background-color: $color-green;
  justify-content: center;
  .aside-title {
    top: 25%;
  }
}
.awards-item {
  flex-basis: 15%;
  border: 1px dashed rgba(6, 0, 0, 0.3);
  border-left: 0;
  padding: 0 5rem;
  &:last-child {
    border-right: 0;
  }
  img {
    margin: 0 auto;
  }
}
.gallery {
  .aside-title {
    top: 35%;
  }
}
.gallery-item {
  flex-basis: 30%;
}
.gallery-img {
  padding: 0;
  position: relative;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
}
.img-overlay {
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 99%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}
.overlay-title {
  position: absolute;
  color: $color-light;
  bottom: 20%;
  left: 5%;
  overflow: hidden;
  font-size: 2rem;
}
.overlay-author {
  position: absolute;
  color: $color-light;
  font-size: 1.6rem;
  bottom: 5%;
  left: 5%;
  overflow: hidden;
  &:hover {
    color: $color-green;
  }
}
.gallery-img:hover .img-overlay {
  transform: translateY(0%);
  transition: 0.5s;
}
.comments {
  background-color: lighten($color-grey, 20);
  .aside-title {
    top: 30%;
  }
}
.comment {
  flex-basis: 20%;
  justify-content: space-between;
  text-align: center;
}
.comment-img {
  width: 6rem;
  height: 6rem;
  margin: 2rem auto;
  border-radius: 50%;
  background-color: $color-light;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
}
.comment-author {
}
.comment-text {
  color: $color-light;
  font-size: 1.6rem;
  text-align: center;
  font-style: italic;
  quotes: '“';
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
}

@media screen and (max-width: 991px) {
  .slide-content {
    top: 15vh;
    width: 60vw;
  }
  .slide-img {
    img {
      height: 100vh;
      width: auto;
    }
  }
  .img-main,
  .img-team,
  .img-shop {
    transform: translateY(0);
  }
  .img-main {
    transform: scale(1.8);
  }
  .img-team {
    transform: translateX(-20%) scale(1.2);
  }
  .info,
  .gallery,
  .comments {
    flex-direction: column;
    align-items: center;
  }
  .info-item {
    padding: 2rem 0;
  }
  .aside-title {
    left: 7vw;
  }
  .awards-item:nth-child(3) {
    border-right: 0;
  }
  .gallery-item {
    width: 80%;
  }
  .awards-item {
    flex-basis: 20%;
    padding: 0 5rem;
  }
}

@media screen and (max-width: 480px) {
  .slide-content {
    transform: scale(0.8);
    width: 80vw;
    top: 10vh;
  }
  .slide-img {
    img {
      height: 100vh;
      width: auto;
    }
  }
  .img-main {
    transform: translateX(-20%);
  }
  .img-team {
    transform: translateX(-40%);
  }
  .img-shop {
    transform: translateX(-30%) scale(1.4);
  }
  .about-title {
    font-size: 2.6rem;
  }
  .awards-item {
    border-right: 0;
    flex-basis: 30%;
  }
}
</style>

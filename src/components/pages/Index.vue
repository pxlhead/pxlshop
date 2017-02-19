<template lang="pug">
  .content
    section.slider
      .slide(v-for='(val, key, index) in slides'
      v-bind:class='[index == 1 ? "slide-active" : ""]')
        .slide-content
          h1.slide-title {{ key }}
          h4.slide-text {{ val }}
          .slide-action
            a Read more
            a See works
        .slide-overlay
        figure.slide-img
          img(src='../../assets/index/yellow-sofa.jpg' alt='Welcome picture')
      nav.slider-nav
        a.nav-point.point-active
        a.nav-point
        a.nav-point
      a.nav-arrow.arrow-prev
      a.nav-arrow.arrow-next
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
          stock content in the world, iStock has given them the opportunity to
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
        img(src='' alt='award.name')
    section.gallery
      h2.aside-title GALLERY
      .gallery-item(v-for='n in 3')
        a.gallery-link
          figure.gallery-img
            img(src='https://unsplash.it/800/800/?random' alt='')
            .img-overlay
              h2.overlay-title Title
              p.overlay-author Author
    section.comments
      h2.aside-title COMMENTS
      .comment(v-for='n in 4')
        figure.comment-img
          img(src='../../assets/avatar.svg' alt='')
        cite.comment-author Alex, Google
        blockquote.comment-text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      slides: {
        'Welcome to our creative marketplace!': 'We are really enjoy to see you here again',
        'Welcome to our media marketplace!': 'Stock on photos, illustrations and video from best creatives around the world',
        'Welcome to our!': 'We are really enjon',
      },
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

h1 {
  font-size: 5.6rem;
}
h2 {
  font-size: 3.5rem;
}
h4 {
  font-size: 3.0rem;
}
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
  display: flex;
  position: relative;
  overflow: hidden;
}
.slide {
  flex: 1;
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
	img {
		transform: translateY(-10%);
	}
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
  width: 5rem;
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
  .aside-title {
    top: 25%;
  }
}
.awards-item {
  flex-basis: 20%;
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
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}
.overlay-title {
  position: absolute;
  color: $color-light;
  top: calc(50% - 6rem);
  left: calc(50% - 3rem);
  overflow: hidden;
  font-size: 3rem;
}
.overlay-author {
  position: absolute;
  color: $color-light;
  top: 50%;
  left: calc(50% - 3rem);
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
      transform: translateY(0) scale(1.8);
    }
  }
  .info {
    flex-direction: column;
  }
  .info-item {
    padding: 2rem 0;
  }
  .gallery-container {
    flex-direction: row;
    .gallery-row {
      flex-direction: column;
      .gallery-item {
        padding: 2rem;
      }
    }
  }
  .comments-container {
    flex-direction: row;
    .comments-row {
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 480px) {
  .slide-content {
    transform: scale(0.8);
    width: 80vw;
    top: 10vh;
    .slide-action {
      width: 80vw;
    }
  }
	.slide-img {
		img {
			height: 100vh;
			width: auto;
			transform: translateX(-20%);
		}
	}
  .slider-nav {
    left: 35%;
  }
  .aside-title {
    position: relative;
    display: flex;
    padding: 3vh 23vw;
    flex: 1;
    font-size: 3rem;
    text-align: center;
    transform: none;
    top: 0;
    left: 0;
    &::after {
      position: absolute;
      content: "";
      top: calc(80%);
      left: calc(50% - 2.5rem);
      display: block;
      width: 4rem;
      height: 0.2rem;
      background-color: $color-dark;
    }
  }
  .aside-title {
    left: calc(50% - 17rem);
    &::after {
      left: calc(50% - 8vw);
      top: calc(80% - 0vh);
    }
  }
  .awards-container {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100vw;
    .awards-row {
      flex-direction: column;
    }
  }
  .gallery-container {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100vw;
    .gallery-row {
      flex-direction: column;
      .gallery-item {
        padding: 2rem;
      }
    }
  }
  .comments-container {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100vw;
    .comments-row {
      flex-direction: column;
    }
  }
  .awards {
    padding: 2vh 10vw;
  }
  .awards-item {
    padding: 3vh;
  }
  .awards-img {
    display: none;
    img {
      display: none;
    }
  }
  .gallery-container {
    .aside-title {
      padding-bottom: 10vh;
      &::after {
        top: calc(80% - 5vh);
      }
    }
  }
  .comments {
    .aside-title {
      left: calc(50% - 19rem);
      &::after {
        top: calc(80% - 0vh);
      }
    }
  }
  .gallery-filter {
    top: calc(27vh - 0.5rem);
    left: calc(50% - 17rem);
  }
}
</style>

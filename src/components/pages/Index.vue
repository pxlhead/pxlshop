<template lang="pug">

	.content
		section.slider
			.slider-container
				.slide(v-for='(val, key, index) in slides' v-bind:class='[index == 1 ? "slide-active" : ""]')
					.slide-content
						h1.slide-title {{ key }}
						h4.slide-text {{ val }}
						.slide-action
							a.slide-link Read more
							a.slide-link See works
					.slide-overlay
					figure.slide-img
						img(src='https://unsplash.it/1920/1080/?random', alt='')
				nav.slider-nav
					.slider-nav-container
						a.nav-point.point-active
						a.nav-point
						a.nav-point
				a.nav-arrow.arrow-prev
				a.nav-arrow.arrow-next
		section.about
			.about-container
				.about-item
					h2.about-title
						|PXLSHOP is a platform for handcrafted, mousemade design content from independent creatives around the world.
					p.about-text.
						You are sleeping. You don not want to believe!
						You are sleeping. You don not want to believe!
						You are sleeping. You don not want to believe!
						You are sleeping. You don not want to believe!
						You are sleeping. You don not want to believe!
				.about-video
					iframe(width="100%" height="auto"
						src="https://www.youtube.com/embed/XZDt-O6r7rM")
		section.info
			.info-container
				h2.aside-title ABOUT
				.info-item
					h4.info-title
						|Balzac is a template for the creative design or ad agency looking for an eye popping, hip and modern look.
					p.
						Balzac comes with a wide variety of carfully crafted pages that are ready-to-use and built to save you time.
						Balzac includes portfolio layouts, about layouts, blog layouts, utility layouts, e-commerce layouts and a ton of comments that can be dropped into any page.
						If you're looking for a unique creative template, then Balzac is it!
				.info-item
					h4.info-title
						|Balzac is a template for the creative design or ad agency looking for an eye popping, hip and modern look.
					p.
						Balzac comes with a wide variety of carfully crafted pages that are ready-to-use and built to save you time.
						Balzac includes portfolio layouts, about layouts, blog layouts, utility layouts, e-commerce layouts and a ton of comments that can be dropped into any page.
						If you're looking for a unique creative template, then Balzac is it!
				.info-item
					h4.info-title
						|Balzac is a template for the creative design or ad agency looking for an eye popping, hip and modern look.
					p.
						Balzac comes with a wide variety of carfully crafted pages that are ready-to-use and built to save you time.
						Balzac includes portfolio layouts, about layouts, blog layouts, utility layouts, e-commerce layouts and a ton of comments that can be dropped into any page.
						If you're looking for a unique creative template, then Balzac is it!
		section.awards
			.awards-container
				h2.aside-title AWARDS
				.awards-row
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|Awards '16
						p.awards-text
							|Awwwards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|TechCrunch
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|SiteAward '16
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|AlexaStat
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|AlexaStat
						p.awards-text
							|Awards '16
				.awards-row
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|Awards '16
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|AlexaStat
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|TechCrunch
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|SiteAward '16
						p.awards-text
							|Awards '16
					.awards-item
						figure.awards-img
							img(src='https://unsplash.it/64/64/?random', alt='')
						h4.awards-title
							|AlexaStat
						p.awards-text
							|Awards '16
		section.gallery
			section.filters
				.gallery-filter
					ul.filter-list
						li.filter-item
							a.filter-link Illustration
								span.filter-number 3
						li.filter-item
							a.filter-link Pattern
								span.filter-number 3
						li.filter-item
							a.filter-link Photo
								span.filter-number 3
						li.filter-item
							a.filter-link Font
								span.filter-number 3
			.gallery-container
				h2.aside-title GALLERY
				.gallery-row
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
				.gallery-row
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
					.gallery-item
						a.gallery-link
							figure.gallery-img
								img(src='https://unsplash.it/800/800/?random', alt='')
								.img-overlay
									h2.overlay-title
										|One of our great illustration
									p.overlay-text
										|Pxlhead Team
		section.comments
			.comments-container
				h2.aside-title COMMENTS
				.comments-row
					.comment
							p.comment-title.
								"Lorem ipsum dolor sit amet, consectetur adipisicing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis"
							a.comment-text
								| Alex, Google
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
				.comments-row
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
					.comment
							p.comment-title.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, se
								d do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis
							a.comment-text
								|Lorrem Ipsum
							figure.comment-img
								img(src='https://unsplash.it/60/60/?random', alt='')
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
$color-green: #7befb2;
$color-pink: #D9879C;
$color-light: #fff;

* {
    padding: 0;
    margin: 0;
}
h1 {
    font-size: 5.6rem;
    font-weight: 700;
}

h2 {
    font-size: 3.5rem;
    font-weight: 500;
}

h4 {
    font-size: 3.0rem;
    font-weight: 400;
}

p {
    font-size: 2.0rem;
    font-weight: 400;
    color: $color-grey;
}

a {
    font-size: 1.5rem;
    font-weight: 400;
    color: $color-light;
    &:hover {
        color: $color-green;
    }
}

figure {
    margin: 0;
    padding: 0;
}

img {
    background-size: cover;
    width: 100%;
    height: auto;
}

section {
    padding: 0;
    margin: 0;
}

.slider {
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
}

.slider-container {
    flex: 1;
    display: flex;
}

.slide {
    flex: 1;
    display: none;
    flex-direction: column;
}

.slide-active {
    display: flex;
}

.slide-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 40vh / 2);
    left: 6vw;
    z-index: 100;
    padding: 2rem;
    width: 45vw;
    max-height: 50vh;
    overflow: hidden;
}

.slide-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
}

.slide-link,
.slide-text,
.slide-title {
    flex: 1;
    padding: 2rem 0;
}

.slide-action {
    flex: 1;
    display: flex;
    position: relative;
    width: 20vw;
    .slide-link {
        font-weight: 500;
        font-size: 2rem;
    }
    &::after {
        position: absolute;
        content: "";
        top: calc(50% - 1.5rem);
        left: calc(50% - 4rem);
        border-bottom: 3px solid white;
        display: block;
        height: 2rem;
        width: 2rem;
        transform: rotate(65deg);
    }
}

.slider-nav {
    position: absolute;
    bottom: 2rem;
    left: 45%;
    width: 10rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
}

.slider-nav-container {
    flex: 1;
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
        content: "";
        top: calc(50% - 0.6rem);
        left: 2rem;
        width: 1rem;
        height: 1rem;
        border-bottom: 2px solid $color-light;
        transform: rotate(45deg);
    }
    &::after {
        position: absolute;
        content: "";
        top: calc(50% - 0.5rem);
        left: 2rem;
        width: 1rem;
        height: 1rem;
        border-bottom: 2px solid $color-light;
        transform: rotate(135deg);
    }
}

.arrow-next {
    top: calc(50% - 10vh);
    right: 0;
    &::before {
        position: absolute;
        content: "";
        top: calc(50% - 0.6rem);
        right: 2rem;
        width: 1rem;
        height: 1rem;
        border-bottom: 2px solid $color-light;
        transform: rotate(-45deg);
    }
    &::after {
        position: absolute;
        content: "";
        top: calc(50% - 0.5rem);
        right: 2rem;
        width: 1rem;
        height: 1rem;
        border-bottom: 2px solid $color-light;
        transform: rotate(-135deg);
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
}

.about {
    position: relative;
    color: $color-grey;
    display: flex;
    flex-direction: column;
    background: $color-light;
}

.about-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: $padding;
}

.about-item {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.about-title {
    flex: 1;
    color: $color-dark;
    padding: 2vh 10vw;
}

.about-text {
    padding: 2vh 10vw;
}

.about-video {
    flex: 1;
    display: flex;
    padding: 2vh 10vw;
    height: 60vh;
}

.info {
    position: relative;
    color: $color-grey;
    display: flex;
    flex-direction: column;
    background: lighten($color-grey, 57%);
}

.info-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: $padding;
    justify-content: space-between;
}

.info-item {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    // padding:2rem;
}

.info-title {
    flex: 1;
    color: $color-dark;
    padding: 0 0 4vh;
}

.awards {
    display: flex;
    position: relative;
    right: 0;
    left: 0;
    padding: $padding;
    color: $color-grey;
    background-color: $color-green;
}

.awards-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.awards-row {
    flex: 1;
    display: flex;
}

.awards-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 6vh 0;
    position: relative;
    // text-align: center;
}

.awards-img {
    display: none;
}

.awards-title {
    flex: 1;
    align-self: center;
    color: $color-dark;
}

.awards-text {
    flex: 1;
    align-self: center;
    color: $color-grey;
}

.gallery {
    position: relative;
    padding: 12vh 10vw 8vh;
    color: $color-grey;
    background-color: $color-light;
    a {
        color: $color-grey;
    }
}

.aside-title {
    position: absolute;
    top: 45%;
    left: 0;
    font-size: 3rem;
    transform: rotate(90deg);
    color: $color-dark;
}

.gallery-container {
    display: flex;
    flex-direction: column;
}

.gallery-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
}

.gallery-filter {
    display: flex;
    position: absolute;
    top: 6vh;
    right: 11vw;
    flex-direction: row;
}

.filter-list {
    flex: 1;
    display: flex;
}

.filter-item {
    list-style: none;
    flex: 1;
    display: flex;
}

.filter-link {
    list-style: none;
    // flex: 1;
    font-size: 2.0rem;
    padding: 0 1rem;
    // display: flex;
    position: relative;
    cursor: pointer;
    z-index: 5;
}

.filter-number {
    position: absolute;
    color: $color-dark;
    display: block;
    top: -1rem;
    right: 0;
}

.gallery-item {
    flex-basis: calc(90% / 4);
    display: flex;
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
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 99%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    transition: 0.5s;
}

.overlay-title {
    width: 75%;
    height: 25%;
    position: absolute;
    color: $color-light;
    top: calc(50% - 30% / 2);
    left: calc(50% - 75% / 2);
    display: block;
    text-align: center;
    overflow: hidden;
}

.overlay-text {
    width: 75%;
    height: 25%;
    position: absolute;
    color: $color-light;
    top: calc(75% - 20% / 2);
    left: calc(50% - 75% / 2);
    display: block;
    text-align: center;
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
    position: relative;
    padding: $padding;
    color: $color-light;
    background-color: lighten($color-grey,20%);
    text-align: center;
}

.comments-container {
    display: flex;
    flex-direction: column;
}

.comments-row {
    display: flex;
    justify-content: space-between;
    padding: 2em 0;
}

.comments-title {
    padding: 0 2rem 5rem;
    color: lighten($color-grey,50%);
}

.comment {
    flex-basis: calc(90% / 4);
    display: flex;
    flex-direction: column;
    .comment-title {
        flex: 3;
        padding: 2rem;
        overflow: hidden;
        color: $color-light;
    }
    .comment-text {
        flex:1;
        padding: 2rem;
        color: $color-light;
    }
}

.comment-img {
    // margin: auto;
    width: calc(100% / 4);
    align-self: center;
    img {
        max-width: 100%;
        border-radius: 50%;
    }
}

.comments {
    .aside-title {
        color: $color-light;
        &::after {
            background-color: $color-light;
        }
    }
}

@media screen and (max-width: 991px) {

  .slide-content{
    top: calc(50% - 80vh / 2);
    max-height: 80vh;
    .slide-action{
      width: 40vw;
    }
  }
  .slide-img{
    img{
      height: 100%;
    }
  }

  .info-container{
    flex-direction: column;
    .info-item{
      padding: 2rem 0;
    }
  }

  .awards-container{
    flex-direction: row;
    .awards-row{
      flex-direction: column;
    }
  }

  .gallery-container{
    flex-direction: row;
    .gallery-row{
      flex-direction: column;
      .gallery-item{
        padding: 2rem;
      }
    }
  }

  .comments-container{
    flex-direction: row;
    .comments-row{
      flex-direction: column;
    }
  }
}
@media screen and (max-width: 480px) {

    .slide-content{
        transform: scale(0.8);
        width:80vw;
        .slide-action{
          width:80vw;
        }
    }

    .slider-nav{
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

    .info {
        .aside-title {
            left: calc(50% - 17rem);
            &::after {
                left: calc(50% - 8vw);
                top: calc(80% - 0vh);
            }
        }
    }

    .awards-container{
      flex-direction: row;
      flex-wrap: wrap;
      max-width:100vw;
      .awards-row{
        flex-direction: column;
      }
    }

    .gallery-container{
      flex-direction: row;
      flex-wrap: wrap;
      max-width:100vw;
      .gallery-row{
        flex-direction: column;
        .gallery-item{
          padding: 2rem;
        }
      }
    }

    .comments-container{
      flex-direction: row;
      flex-wrap: wrap;
      max-width:100vw;
      .comments-row{
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

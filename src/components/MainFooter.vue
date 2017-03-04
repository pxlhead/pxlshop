<template lang="pug">
  footer.footer
    .content
      .logo
        a.logo-img
          img(src='../assets/logo.svg')
      .nav
        h4 Menu
        ul.list(v-for='page in pages')
          li
            a {{ page }}
      .blog
        h4 Recent posts
        ul.list(v-for='(val, key) in posts')
          li.post
            a(href='#') {{ key }}
            .post-data {{ val }}
      .contact
        h4 Contact us
        p 126-129 Sing Street,
        p Soho New York City,
        p NY 19023, United States.
        ul.list.social-list
          li.social-item(v-for='social in socials')
            a.social-link
              img(:src='"../assets/icons/" + social + ".svg"')
    .copyright
      p Developed by pxlhead. All rights reserved. &reg;
</template>

<script>
export default {
  name: 'main-footer',
  data() {
    return {
      pages: ['Home', 'Shop', 'About', 'Blog'],
      posts: {
        'lorem ipsum': '02 feb 2017',
        'lorem ips': '04 apr 2017',
        'lorem i': '12 jun 2017',
      },
      socials: ['twitter', 'facebook', 'youtube', 'instagram'],
    };
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-light: #fff;
$color-grey: #666;

h4 {
  margin-bottom: 3rem;
}
.footer {
  display: flex;
  flex-direction: column;
  background-color: $color-dark;
  padding: 8vh 10vw;
}
.content {
  flex: 6;
  display: flex;
  justify-content: space-between;
}
.logo,
.nav,
.blog,
.contact {
  flex-basis: 20%;
}
.logo {
  img {
    width: 60%;
    background-color: $color-grey;
    &:hover {
      background-color: darken($color-grey, 10);
    }
  }
}
.list {
  padding-left: 0;
}
.post-data {
  margin-top: .5rem;
  font-size: 1rem;
  text-transform: uppercase;
  color: $color-light;
}
.copyright {
  flex: 1;
}
.social-list {
  width: 60%;
  margin-top: 1rem;
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

@media screen and (max-width: 991px) {
  .social-list {
    width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    padding: 8vh 7vw;
  }
  .content {
    flex-wrap: wrap;
  }
  .logo,
  .nav,
  .blog,
  .contact {
    flex-basis: 30%;
  }

  .logo {
    order: 2;
  }
}
</style>

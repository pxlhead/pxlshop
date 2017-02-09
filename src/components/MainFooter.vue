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
        p
        ul.list(v-for='social in socials')
          li
            a(:class='"social-" + social' href='#') {{ social }}
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

.footer {
  display: flex;
  flex-direction: column;
  background-color: $color-dark;
  padding: 8rem 15rem;
}
.content {
  flex: 6;
  display: flex;
  justify-content: space-between;
}
.logo, .nav, .blog, .contact {
  flex: 1;
  margin: 0 2rem;
}
.logo {
  margin-left: 0;
  img {
    width: 10rem;
    height: auto;
    background-color: $color-grey;
  }
}
.list {
  padding-left: 0;
}
.post-data {
  margin-top: .5rem;
  font-size: 70%;
  text-transform: uppercase;
  color: $color-light;
}
.copyright {
  flex: 1;
}
</style>

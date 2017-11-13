<template lang='pug'>
  footer.footer
    .content
      .logo
        a.logo-img
          img(src='~@/assets/icons/logo.svg')
      .nav
        h4 Menu
        ul.list(v-for='page in pages')
          li
            router-link(:to='page') {{ page }}
      .blog
        h4 Recent posts
        ul.list(v-for='(val, key) in posts')
          li.post
            a {{ key }}
            .post-data {{ val }}
      .contact
        h4 Contact us
        p 2426 Sing Street,
        p Quesnel BC,
        p V2J 4P7, Canada.
        social-list
    .copyright
      p Developed by pxlhead. All rights reserved. &reg;
</template>

<script>
import SocialList from '@/components/SocialList';

export default {
  name: 'main-footer',
  components: {
    SocialList
  },
  data() {
    return {
      pages: [
        'home',
        'about',
        'shop',
        'contacts'
      ],
      posts: {
        'lorem foo': '02 feb 2017',
        'lorem bar': '04 apr 2017',
        'lorem baz': '12 jun 2017'
      }
    };
  }
};
</script>

<style lang='scss' scoped>

$color-dark: #252525;
$color-light: #fff;
$color-grey: #666;

h4 {
  margin-bottom: 3rem;
  color: $color-light;
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
  height: 7rem;
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
  .social-link {
    padding: 0.1rem;
  }
}
</style>

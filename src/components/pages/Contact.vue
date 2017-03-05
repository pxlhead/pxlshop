<template lang="pug">
  .content
    h1 Hi there! We're an awesome group of creatives from a variety of different backgrounds with a variety of skills.
    section.email
      h2.aside-title CONTACT US
      .contact
        p.contact-address 126-129 Sing Street,
        p.contact-address Soho New York City,
        p.contact-address NY 19023, United States.
        ul.social-list
          li.social-item(v-for='social in socials')
            a.social-link
              img(:src='"../../assets/icons/" + social + ".svg"')
      form.email-form
        .input-box
          input.input-line(type='text' placeholder='First Name...'
          name='firstName')
          input.input-line(type='text', placeholder='Second Name...'
          name='secondName')
        .input-box
          input.input-line(type='email' placeholder='Email...'
          name='email')
          input.input-line(type='text' placeholder='Company...'
          name='company')
        .input-box
          input.input-line(type='text' placeholder='Text...'
          name='text')
    section.map
      h2.aside-title FIND US
</template>

<script>
import Firebase from '../../appconfig/firebase';

export default {
  name: 'contact',
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
.email, .map {
  background-color: $color-green;
  position: relative;
  padding: $padding;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.email {
  background-color: transparent;
  justify-content: space-between;
  padding-bottom: calc(8vh - 10rem);
}
.contact, .email-form {
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  border-top: 2px solid $color-green;
}
.contact {
  flex-basis: 20%;
}
.contact-address {
  padding: 0.5rem;
  font-size: 2rem;
}
.social-list {
  width: 50%;
  padding: 2rem 0rem;
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
.email-form {
  flex-basis: 60%;
}
.order-form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 5rem;
  border: 2px solid lighten($color-grey, 50);
}


@media screen and (max-width: 991px) {

}
@media screen and (max-width: 480px) {

}
</style>

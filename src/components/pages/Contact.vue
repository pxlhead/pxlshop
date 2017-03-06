<template lang="pug">
  .content
    h1 Hi there! We're an awesome group of creatives from a variety of different backgrounds with a variety of skills.
    section.email
      h2.aside-title CONTACT US
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
          textarea.input-line.input-text(type='text' placeholder='Text...'
          name='text')
        a.action-btn Submit
      .contact
        p.contact-address 9000456,
        p.contact-address 2426 Sing Street,
        p.contact-address Quesnel BC,
        p.contact-address V2J 4P7, Canada.
        ul.social-list
          li.social-item(v-for='social in socials')
            a.social-link
              img(:src='"../../assets/icons/" + social + ".svg"')
    section.map
      h2.aside-title FIND US
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.423905567938!2d-122.44442138383793!3d52.95878827989962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53870578f27359f5%3A0xf834004e0cdb5bf2!2zU2luZyBTdCwgUXVlc25lbCwgQkMsINCa0LDQvdCw0LTQsA!5e0!3m2!1sru!2sru!4v1488793347529" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
.input-text {
  padding: 4rem;
  border: 2px solid lighten($color-grey, 50);
  &:hover {
    border: 2px solid $color-green;
  }
}
.action-btn {
  margin: 1rem;
  width: 25%;
}

@media screen and (max-width: 991px) {
  .email {
    flex-direction: column;
    padding: 4vh 12vw;
  }
  .contact {
    flex-basis: 30%;
    padding-bottom: 4rem;
  }
  .input-box {
    display: block;
  }
  .email-form {
    width: 100%;
    padding-bottom: 4rem;
  }
  h1 {
    font-size: 4.8vw;
  }
  .social-list {
    width: 60%;
  }
}
</style>

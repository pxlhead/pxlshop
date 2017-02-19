<template lang="pug">
  .content
      .login-overlay
      form.login
        .login-social
          h4.social-title Sign Up
          .social-img
            a.social-link.social-facebook
            a.social-link.social-twitter
            a.social-link.social-google
        p.login-title or Be Classical
        .login-content
          .input-box
            .input-icon.icon-face
            input.input-line(type='text', placeholder='First Name...')
          .input-box
            .input-icon.icon-mail
            input.input-line(type='text', placeholder='Email...')
          .input-box
            .input-icon.icon-lock
            input.input-line(type='password', placeholder='Password...')
        a.login-action Get Started
</template>

<script>
export default {
  name: 'login',
  data() {
  },
};
</script>

<style lang="scss" scoped>

$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
}
.login {
  position: fixed;
  top: calc(50vh - 25rem + 6rem);
  left: calc(50vw - 20rem);
  width: 36rem;
  height: 36rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 12rem 2rem 2rem 2rem;
  background-color: $color-light;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
              0 4px 25px 0px rgba(0, 0, 0, 0.12),
              0 8px 10px -5px rgba(0, 0, 0, 0.2);
  z-index: 10002;
  align-items: center;
}
.login-social {
  position: absolute;
  top: -6rem;
  left: 2rem;
  width: 28rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding:4rem;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
              0 4px 25px 0px rgba(0, 0, 0, 0.12),
              0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background-color: $color-green;
}
.social-title {
  flex:1;
  align-self: center;
  font-size: 2rem;
  font-weight: 500;
}
.social-img {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.social-link {
    flex-basis: 10%;
  background-position: center center;
  background-repeat: no-repeat;
}
.social-facebook {
  background-image: url('../assets/facebook.svg');
}
.social-twitter {
  background-image: url('../assets/twitter.svg');
}
.social-google {
  background-image: url('../assets/google.svg');
}
.login-title {
  flex: 1;
}
.login-content {
  flex: 10;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.input-box {
  display: flex;
  flex: 1;
}
.input-icon {
  flex: 1;
  margin: 1rem;
  background-position: center center;
  background-repeat: no-repeat;
}
.icon-face{
  background-image: url('../assets/name.svg');
}
.icon-mail{
  background-image: url('../assets/mail.svg');
}
.icon-lock{
  background-image: url('../assets/lock.svg');
}
.input-line {
  flex: 6;
  margin: 1rem;
  border: 0;
  border-bottom: 2px solid lighten($color-grey, 50);
  font-weight: 500;
  font-size: 1.5rem;
  outline: none;
  &:hover{
    border-bottom: 2px solid $color-green;
  }
}
.login-action {
  flex: 2;
  color: $color-green;
  padding: 1rem;
  font-weight: 500;
  font-size: 2rem;
}
</style>

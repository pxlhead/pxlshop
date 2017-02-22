<template lang="pug">
  .auth
    .login-sign
      a.sign-btn(@click='login = "in"') Sign In
      a.sign-btn(@click='login = "up"') Sign Up
    .login-overlay(@click='login = false' v-if='login')
    a.close-btn(@click='login = false' v-if='login')
    form.login(v-if='login')
      .login-social
        h4.social-title(v-text='login === "in" ? "Sign In" : "Sign Up"')
        .social-img
          a.social-link.social-facebook
          a.social-link.social-twitter
          a.social-link.social-google
      p.login-title or Be Classical
      .login-content
        .input-box(v-if='login === "up"')
          .input-icon.icon-face
          input.input-line(type='text' placeholder='First Name...'
          v-model='name')
        .input-box
          .input-icon.icon-mail
          input.input-line(type='email' placeholder='Email...'
          v-model='email')
        .input-box
          .input-icon.icon-lock
          input.input-line(type='password' placeholder='Password...'
          v-model='password')
      a.login-action(v-text='login === "in" ? "Enter" : "Get Started"'
        @click='enter')
</template>

<script>
/* eslint-disable no-console */
import Firebase from '../appconfig/firebase';

export default {
  name: 'login',
  data() {
    return {
      login: false,
      name: '',
      email: '',
      password: '',
      user: null,
    };
  },
  methods: {
    enter() {
      if (this.login === 'up') {
        this.signUp();
      } else {
        this.signIn();
      }
    },
    signUp() {
      // check real email
      Firebase.auth.createUserWithEmailAndPassword(
        this.email, this.password)
        .then(() => this.signIn())
        .catch(e => console.log(e.message));
    },
    signIn() {
      Firebase.auth.signInWithEmailAndPassword(
        this.email, this.password)
        .catch(e => console.log(e.message));
    },
  },
};
</script>

<style lang="scss" scoped>

$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

.login-sign {
  position: absolute;
  height: 4rem;
  width: 15vw;
  top: 6vh;
  right: calc(10vw - 6rem);
  display: flex;
  justify-content: space-between;
}
.sign-btn {
  text-align: center;
  vertical-align: middle;
  line-height: 4rem;
  flex-basis: 40%;
  border-bottom: 2px solid lighten($color-grey, 40);
  color: $color-grey;
  font-size: 1.8rem;
  overflow: hidden;
  &:hover {
    border-color: $color-green;
  }
}
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
.close-btn {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 10002;
  width: 3rem;
  height: 3rem;
  background: url('../assets/close-btn.svg') no-repeat center;
  background-size: cover;
}
.login {
  position: fixed;
  top: calc(50% - 25rem + 6rem);
  left: calc(50% - 17rem);
  width: 30rem;
  height: 30rem;
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
  width: 22rem;
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
  text-transform: capitalize;
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
  background-image: url('../assets/icons/facebook.svg');
}
.social-twitter {
  background-image: url('../assets/icons/twitter.svg');
}
.social-google {
  background-image: url('../assets/icons/google.svg');
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
  background-image: url('../assets/icons/name.svg');
}
.icon-mail{
  background-image: url('../assets/icons/mail.svg');
}
.icon-lock{
  background-image: url('../assets/icons/lock.svg');
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
  color: $color-grey;
  padding: 1rem;
  font-weight: 500;
  font-size: 2rem;
  &:hover {
    color: $color-green;
  }
}

@media screen and (max-width: 991px) {
  .login-sign {
    height: 3rem;
    width: 25vw;
    top: 5vh;
    right: calc(10vw - 4rem);
  }
  .sign-btn {
    line-height: 3rem;
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 480px) {
  .login-sign {
    width: 30vw;
    right: calc(10vw - 2rem);
  }
}
</style>

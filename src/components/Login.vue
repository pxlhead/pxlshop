<template lang='pug'>
  .auth(v-if='!$store.state.activeUser')
    .login-sign
      a.sign-btn(@click='method = "sign in"') Sign In
      a.sign-btn(@click='method = "sign up"') Sign Up
    .modal-overlay(@click='method = ""' v-if='method')
      a.close-btn
    form.modal(v-if='method')
      .modal-head
        h4.social-title {{ method }}
        .social-img
          a.social-link.social-google(@click='signInUserRedirect("Google")')
          a.social-link.social-twitter(@click='signInUserRedirect("Twitter")')
          a.social-link.social-facebook(@click='signInUserRedirect("Facebook")')
      p.modal-title or Be Classical
      form.modal-content(@submit.prevent='submit')
        .input-box
          .input-icon.icon-mail
          input.input-line(name='email' type='email' placeholder='Email...'
            v-model='email' required)
        .input-box
          .input-icon.icon-lock
          input.input-line(name='password' type='password' placeholder='Password...'
            v-model='password' required)
      input.modal-action(type='submit' value='Submit')
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      method: '',
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions([
      'signUpUser',
      'signInUser',
      'signInUserRedirect'
    ]),
    submit() {
      const userData = { email: this.email, password: this.password };
      if (this.method.contains('in')) {
        this.signInUser(userData);
      } else {
        this.signUpUser(userData);
      }
    }
  }
};
</script>

<style lang='scss' scoped>

$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

.login-sign {
  position: absolute;
  height: 4rem;
  top: 6vh;
  right: calc(10vw - 6rem);
  display: flex;
  z-index: 1000;
}
.sign-btn {
  text-align: center;
  vertical-align: middle;
  line-height: 4rem;
  border-bottom: 2px solid lighten($color-grey, 40);
  color: $color-grey;
  font-size: 1.8rem;
  overflow: hidden;
  &:hover {
    border-color: $color-green;
  }
  &:first-child {
    margin-right: 3rem;
  }
}
.modal {
  top: calc(50% - 11rem - 4rem);
  left: calc(50% - 15rem - 2rem);
  width: 30rem;
  height: 22rem;
  padding: 10rem 2rem 2rem 2rem;
}
.modal-head {
  top: -7rem;
  left: 2rem;
  width: 22rem;
  height: 8rem;
  padding: 4rem;
  flex-direction: column;
}
.modal-content {
  flex: 10;
  flex-direction: column;
  padding-bottom: 2rem;
}
.modal-action {
  flex: 2;
}

@media screen and (max-width: 991px) {
  .login-sign {
    height: 3rem;
    top: 5vh;
    right: calc(10vw - 4rem);
  }
  .sign-btn {
    line-height: 3rem;
    font-size: 1.4rem;
    &:first-child {
      margin-right: 2rem;
    }
  }
}
@media screen and (max-width: 740px) {
  .modal {
    top: calc(50% - 8rem);
    height: 18rem;
    left: calc(50% - 12rem - 1rem);
    width: 24rem;
    padding: 3rem 1rem 1rem 1rem;
  }
  .modal-head {
    top: -6rem;
    width: 18rem;
    height: 5rem;
    padding: 2rem;
  }
  .modal-title {
    margin-bottom: 0.5rem;
  }
  .social-title {
    margin-bottom: 0.5rem;
  }
}
@media screen and (max-width: 480px) {
  .login-sign {
    right: calc(10vw - 2rem);
  }
  .modal {
    top: calc(50% - 11rem);
  }
}
</style>

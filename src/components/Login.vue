<template lang="pug">
  .auth
    .login-sign
      a.sign-btn(@click='login = "in"'
      v-bind:class='{"text-light": light}') Sign In
      a.sign-btn(@click='login = "up"'
      v-bind:class='{"text-light": light}') Sign Up
    .modal-overlay(@click='login = false' v-if='login')
    a.close-btn(@click='login = false' v-if='login')
    form.modal(v-if='login')
      .modal-head
        h4.social-title(v-text='login === "in" ? "Sign In" : "Sign Up"')
        .social-img
          a.social-link.social-google(@click='signInGoogle')
          a.social-link.social-twitter
          a.social-link.social-facebook
      p.modal-title or Be Classical
      .modal-content
        .input-box
          .input-icon.icon-mail
          input.input-line(name='email' type='email' placeholder='Email...'
          v-model='email')
        .input-box
          .input-icon.icon-lock
          input.input-line(name='password' type='password' placeholder='Password...'
          v-model='password')
      a.modal-action(v-text='login === "in" ? "Enter" : "Get Started"'
        @click='enter')

    transition(name='note')
      notification(v-bind:message='message' v-if='message.length > 0'
      v-on:click.native='message = ""')
</template>

<script>
import Firebase from '../appconfig/firebase';
import Notification from './Notification';

export default {
  name: 'login',
  props: ['light'],
  components: {
    Notification,
  },
  data() {
    return {
      login: false,
      email: '',
      password: '',
      message: '',
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
        .catch((error) => {
          switch (error.code) {
            case 'auth/weak-password':
              this.message = 'The password should be at least six symbols.';
              break;
            case 'auth/email-already-in-use':
              this.message = 'There already exists an account with the given email address.';
              break;
            case 'auth/invalid-email':
              this.message = 'The email address is not valid.';
              break;
            default:
              this.message = error.code;
          }
        }
      );
    },
    signIn() {
      Firebase.auth.signInWithEmailAndPassword(
        this.email, this.password)
        .catch((error) => {
          switch (error.code) {
            case 'auth/user-not-found':
              this.message = 'There is no user corresponding to the given email.';
              break;
            case 'auth/wrong-password':
              this.message = 'The password is invalid for the given email';
              break;
            case 'auth/invalid-email':
              this.message = 'The email address is not valid.';
              break;
            default:
              this.message = error.code;
          }
        }
      );
    },
    signInGoogle() {
      const provider = Firebase.googleAuth;
      Firebase.auth.signInWithRedirect(provider);
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
.text-light {
  color: $color-light;
  border-color: $color-green;
  &:hover {
    border-color: lighten($color-grey, 20);
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
.social-title {
  flex: 1;
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
@media screen and (max-width: 480px) {
  .login-sign {
    right: calc(10vw - 2rem);
  }
}
</style>

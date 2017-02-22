<template lang="pug">
  .profile
    span.user-name Name
    a.user-img Avatar
</template>

<script>
// import Firebase from '../appconfig/firebase';

export default {
  name: 'profile',
  props: {
    user: Object,
  },
  data() {
    return {
    };
  },
  created() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

.profile {
  position: absolute;
  height: 4rem;
  width: 15vw;
  top: 6vh;
  right: calc(10vw - 6rem);
  display: flex;
  justify-content: space-between;
}
.user-name, .user-img {
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

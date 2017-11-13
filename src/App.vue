<template lang="pug">
  .app
    main-header
    login
    profile
    router-view
    main-footer
</template>

<script>
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Login from './components/Login';
import Profile from './components/Profile';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter,
    Login,
    Profile
  }
};
</script>

<template lang="pug">
  .container
    main-header
    shop
    main-footer
    login
</template>

<script>
import Shop from '../../components/pages/Shop';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import Login from '../../components/Login';

export default {
  name: 'app',
  components: {
    Shop,
    MainHeader,
    MainFooter,
    Login,
  },
};
</script>

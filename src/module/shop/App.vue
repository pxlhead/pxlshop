<template lang="pug">
  .container
    main-header
    shop
    main-footer
</template>

<script>
import Shop from '../../components/pages/Shop';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';

export default {
  name: 'app',
  components: {
    Shop,
    MainHeader,
    MainFooter,
  },
};
</script>

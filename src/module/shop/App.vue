<template lang="pug">
  .wrapper
    shop
    main-footer
</template>

<script>
import Shop from '../../components/pages/Shop';
import MainFooter from '../../components/MainFooter';

export default {
  name: 'app',
  components: {
    Shop,
    MainFooter,
  },
};
</script>

<template lang="pug">
  .container
    main-header
    index
    main-footer
</template>

<script>
import MainHeader from '../../components/MainHeader';
import Index from '../../components/pages/Index';
import MainFooter from '../../components/MainFooter';

export default {
  name: 'app',
  components: {
    MainHeader,
    Index,
    MainFooter,
  },
};
</script>

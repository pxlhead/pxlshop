<template lang="pug">
    shop
</template>

<script>
import Shop from '../../components/pages/Shop';

export default {
  name: 'app',
  components: {
    Shop,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

html {
  font-size: 10px;
}
body {
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: #666;
}
h1, h2, h3, h4 {
  color: #fff;
}
h4 {
  font-weight: 400;
  margin-top: 0;
}
a {
  color: #666;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: #8BC784;
}
li {
  list-style-type: none;
}
</style>

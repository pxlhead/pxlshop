<template lang='pug'>
  ul.social-list
    li.social-item
      a.social-link
        img(src='~@/assets/icons/twitter.svg')
    li.social-item
      a.social-link
        img(src='~@/assets/icons/facebook.svg')
    li.social-item
      a.social-link
        img(src='~@/assets/icons/youtube.svg')
    li.social-item
      a.social-link
        img(src='~@/assets/icons/instagram.svg')
</template>

<script>
export default {
  name: 'socialList'
};
</script>

<style lang='scss'>
.social-list {
  width: 60%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
}
.social-link {
  flex-basis: 20%;
  display: block;
  &:hover {
    opacity: 0.7;
  }
}
</style>

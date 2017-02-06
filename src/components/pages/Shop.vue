<template lang="pug">
  div
    .content
      h2 Welcome to our creative store
      section.products
        fieldset.filter
        .gallery
          .gallery-column
            .gallery-row
              .gallery-item
                img.item-img
                h2.item-title
                p.item-price
        aside.sidebar
        nav.pagination
    main-footer
</template>

<script>
import MainFooter from '../MainFooter';

export default {
  name: 'shop',
  components: {
    MainFooter,
  },
  data() {
    return {
      productsInRow: 2,
      products: {
        'Book of Design': '135',
        'Palm pattern': '35',
        'Balzac pattern': '129',
        'Deer Hunter': '55',
        'Fieldnotes Quote Book': '35',
        'Typography Poster': '55',
        'Leaf pattern': '55',
        'Sevens Design poster': '55',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: #252525;
}
</style>

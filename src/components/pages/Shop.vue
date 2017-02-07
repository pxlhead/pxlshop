<template lang="pug">
  .content
    h1
      | Welcome to our creative store - we sell uncommon design
      | illustrations that smack you right in the heart.
    hr
    section.products
      .gallery
        .filter
          .select-wrap
            select
              option(v-for='category in categories'
              v-bind:value='category.value') Category: {{ category.text }}
          .select-wrap
            select
              option(v-for='size in sizes'
              v-bind:value='size.value') Size: {{ size.text }}
        .gallery-column
          .gallery-row(v-for='n in 4')
            .gallery-item(v-for='(price, name, index) in products'
            v-if='index == 2 * n - 1 || index == 2 * n - 2')
              img.item-img(src='https://unsplash.it/500/500/?random')
              h2.item-title {{ name }}
              span.item-price {{ price }}
      aside.sidebar
        .widget-products
          h3.widget-title Top Rated
          ul.products-list
            li
              a product-title
              span.product-stars
              span.product-price
        .widget-tags
        .widget-cart
        .widget-viewed
        .widget-payment
    nav.pagination
</template>

<script>
export default {
  name: 'shop',
  data() {
    return {
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
      categories: [
        { text: 'All', value: 'c0' },
        { text: 'Patterns', value: 'c1' },
        { text: 'Illustrations', value: 'c2' },
        { text: 'Photos', value: 'c3' },
      ],
      sizes: [
        { text: 'All', value: 'c0' },
        { text: 'Small', value: 's1' },
        { text: 'Medium', value: 's2' },
        { text: 'Large', value: 's3' },
        { text: 'Extra Large', value: 's4' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1, h2, h3 {
  color: #252525;
}
h1 {
  font-size: 3.8vw;
}
hr {
  border: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
}
.filter {
  padding: 2rem 0;
  width: 100%;
  border: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.select-wrap {
  flex-basis: 40%;
  margin-right: 10%;
  padding: 1rem 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
}
.select-wrap::before {
  content: '>';
  display: block;
  position: absolute;
  top: 30%;
  right: 0;
  width: 1rem;
  height: 1rem;
  transform: rotate(90deg);
}
select {
  width: 100%;
  appearance: none;
  background-color: inherit;
  border: 0;
  letter-spacing: 0.1rem;
  text-transform: none;
  font-size: 1.6rem;
  color: #666;
}
.content {
  padding: 8rem 15rem;
}
.products, .gallery-row, .gallery-column {
  display: flex;
}
.gallery {
  flex: 3;
}
.sidebar {
  flex: 2;
}
.gallery-column {
  flex-direction: column;
}
.gallery-row {
  justify-content: space-between;
}
.gallery-item {
  flex-basis: 46%;
}
.item-img {
  width: 100%;
  height: auto;
}
</style>

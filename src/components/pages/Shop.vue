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
            .gallery-product(v-for='(product, index) in products'
            v-if='index == 2 * n - 1 || index == 2 * n - 2')
              img.product-img(v-bind:src='product.img')
              h2.product-title {{ product.name }}
              span.product-price {{ product.price }}
      aside.sidebar
        .widget-top
          h3.widget-title Top Rated
          ul.top-list
            li.top-product(v-for='product in products'
            v-if='product.stars == 5 || product.stars == 4')
              .top-product-info
                a {{ product.name }}
                span.product-stars {{ product.stars }}
                span.product-price {{ product.price }}
              .top-product-img
                img.product-img(v-bind:src='product.img')
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
      products: [
        {
          name: 'Book of Design',
          price: '135',
          stars: '4',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Palm pattern',
          price: '35',
          stars: '5',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Balzac pattern',
          price: '129',
          stars: '3',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Deer Hunter',
          price: '55',
          stars: '5',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Fieldnotes Quote Book',
          price: '35',
          stars: '3',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Fieldnotes Quote Book',
          price: '67',
          stars: '2',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Typography Poster',
          price: '132',
          stars: '4',
          img: 'https://unsplash.it/500/500/?random',
        }, {
          name: 'Sevens Design poster',
          price: '89',
          stars: '2',
          img: 'https://unsplash.it/500/500/?random',
        },
      ],
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

$color-dark: #252525;
$color-grey: #666;

$border: 1px solid rgba(0, 0, 0, 0.2);

h1, h2, h3 {
  color: $color-dark;
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
  border-bottom: $border;
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
  color: $color-grey;
}
.content {
  padding: 8rem 15rem;
}
.products,
.gallery-row,
.gallery-column,
.sidebar,
.top-list,
.top-product {
  display: flex;
}
.gallery {
  flex: 2;
}
.sidebar {
  flex-direction: column;
  margin-left: 3vw;
  flex: 1;
}
.widget-title {
  letter-spacing: 0.1rem;
}
.top-list {
  padding: 0;
  flex-direction: column;
  justify-content: space-around;
}
.top-product {
  margin-bottom: 5rem;
  border-bottom: $border;
}
.top-product-info {
  flex: 3;
}
.top-product-img {
  flex: 1;
}
.gallery-column {
  flex-direction: column;
}
.gallery-row {
  justify-content: space-between;
}
.gallery-product {
  flex-basis: 46%;
}
.product-img {
  width: 100%;
  height: auto;
}
</style>

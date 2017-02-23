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
            select(v-model='selectedCategory')
              option(v-for='category in categories'
              v-bind:value='category') Category: {{ category }}
            span.select-arrow
          .select-wrap
            select(v-model='selectedSort')
              option(v-for='sort in sorts'
              v-bind:value='sort') Sort by: {{ sort }}
            span.select-arrow
        transition-group.gallery-column(name='gallery-anim' tag='div'
        mode="out-in")
            .gallery-product(v-for='(product, index) in filteredProducts'
            v-bind:key='index'
            v-if='index >= productsOnPage * (activePage - 1)\
            && index < productsOnPage * activePage')
              .product-img
                img(v-bind:src='product.url' v-bind:alt='product.name')
                .product-actions
                  a.cart-link
                  a.star.star-link(v-bind:class='{"star-full": starAdded}'
                  @click='starAdded = !starAdded')
              h2.product-title {{ product.name }}
              span.product-author {{ product.author }}
              span.product-price ${{ product.price + '.00' }}
      aside.sidebar
        .widget-top
          h3.widget-title Top Rated
          ul.top-list
            li.top-product(v-for='product in products'
            v-if='product.stars == 5 || product.stars == 4')
              .top-product-info
                a.product-title {{ product.name }}
                .product-stars
                  span.star(v-for='n in 5'
                  v-bind:class='{ "star-full": n <= product.stars }')
                span.product-price ${{ product.price + '.00' }}
              .top-product-img
                img.product-img(v-bind:src='product.url'
                v-bind:alt='product.name')
        .widget-tags
        .widget-cart
        .widget-viewed
        .widget-payment
          h3.widget-title Payment Options
          p.payment-details
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            | do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          .payment-icon
            img(src='../../assets/icons/paypal.svg')
            span PayPal
    nav.pagination
      a.nav-prev(v-bind:class='{ "nav-disable": activePage == 1 }'
      @click='changePage(activePage - 1)')
        | Prev Page
      .nav-pages
        a.page-num(@click='changePage(n)'
        v-for='n in Math.ceil(filteredProducts.length / productsOnPage)'
        v-bind:class='{ "page-active": n == activePage }') {{ n }}
      a.nav-next(@click='changePage(activePage + 1)'
      v-bind:class='{ "nav-disable": activePage ==\
      Math.ceil(filteredProducts.length / productsOnPage) }')
        | Next Page
</template>

<script>
import Firebase from '../../appconfig/firebase';

export default {
  name: 'shop',
  firebase: {
    products: Firebase.dbProductsRef,
  },
  data() {
    return {
      selectedCategory: 'all',
      selectedSort: 'none',
      categories: ['all', 'illustrations', 'patterns', 'photos'],
      sorts: ['none', 'newest', 'popular'],
      filteredProducts: [],
      productsOnPage: 9,
      activePage: 1,
      starAdded: false,
    };
  },
  created() {
    this.filteredProducts = this.products;
  },
  methods: {
    changePage(page) {
      this.activePage = page;
    },
  },
  watch: {
    selectedCategory(newCategory) {
      if (newCategory === 'all') {
        this.filteredProducts = this.products;
        return;
      }
      this.filteredProducts = this.products.filter(prod => prod.type
        === newCategory);
      this.activePage = 1;
    },
    selectedSort(newSort) {
      switch (newSort) {
        case 'popular':
          this.filteredProducts = this.products.sort((prodA, prodB) => (
            prodA.stars <= prodB.stars ? 1 : -1
          ));
          break;
        case 'newest':
          this.filteredProducts = this.products.sort((prodA, prodB) => (
            Date.parse(prodA.date) <= Date.parse(prodB.date) ? 1 : -1
          ));
          break;
        default:
          this.filteredProducts = this.products;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7BEFB2;
$color-light: #fff;

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
.content {
  padding: 12vh 10vw 0 10vw;
}
.products {
  display: flex;
  padding-bottom: 3rem;
}
.filter {
  padding: 2rem 0;
  width: 100%;
  border: 0;
  display: flex;
  justify-content: space-between;
}
.select-wrap {
  flex-basis: 30%;
  padding: 1rem 0;
  position: relative;
  border-bottom: $border;
  font-size: 1.6rem;
  cursor: pointer;
  .select-arrow {
    display: block;
    background-color: $color-light;
    background: url('../../assets/arrow.svg') no-repeat center center;
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 1rem;
    right: 0;
    z-index: -10;
  }
}
select {
  width: 100%;
  appearance: none;
  background-color: transparent;
  border: 0;
  text-transform: capitalize;
  font-size: 1.6rem;
  color: $color-grey;
  cursor: pointer;
  outline: none;
}
.gallery {
  flex: 2.5;
}
.gallery-anim-enter-active, .gallery-anim-leave-active {
  transition: all 1s;
}
.gallery-anim-leave-to, .gallery-anim-enter-to {
  opacity: 0;
}
.gallery-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gallery-product {
  flex-basis: calc(90% / 3);
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.product-img {
  overflow: hidden;
  position: relative;
  &:hover .product-actions {
    transform: translateX(0%);
  }
  img {
    transition: all 1s ease;
    &:hover {
      transform:scale(1.2);
    }
  }
}
.product-actions {
  position: absolute;
  top: calc(50% - 3rem);
  right: 1rem;
  width: 3rem;
  background-color: $color-light;
  transform: translateX(200%);
  transition: 1s;
  a {
    display: block;
    height: 3rem;
    width: 100%;
    &:hover {
      background-color: $color-green;
    }
  }
  .star-full {
    &::before {
      color: $color-dark;
    }
  }
}
.cart-link {
  background: url('../../assets/icons/cart.svg') no-repeat center center;
  background-size: 40%;
}
.star-link {
  text-align: center;
  line-height: 3rem;
  vertical-align: middle;
  font-size: 1rem;
}
.product-title {
  font-size: 1.5vw;
  flex: 1;
  margin-bottom: 0.3rem;
}
.product-price, .product-author {
  font-size: 1vw;
}
.product-author {
  padding-bottom: 0.5rem;
}

// sidebar section
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
}
.widget-title {
  letter-spacing: 0.1rem;
  padding: 2rem 0;
  margin-bottom: 0;
}
.top-list {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.top-product {
  display: flex;
  border-bottom: $border;
  padding: 2rem 0;
}
.top-product-info {
  flex: 3;
  display: flex;
  flex-direction: column;
  .product-title {
    font-size: 1vw;
    margin-bottom: 0;
  }
  .product-stars, .product-price {
    flex: 1;
    padding-top: 1rem;
  }
}
.star {
  &::before {
    content: '\2606';
    color: $color-grey;
  }
}
.star-full {
  &::before {
    content: '\2605';
    color: $color-green;
  }
}
.top-product-img {
  flex-basis: 5rem;
}
.widget-payment {
  flex-basis: 15rem;
  padding: 0 1rem;
  background-color: darken($color-light, 5);
  margin-top: 2rem;
}
.payment-details {
  font-size: 1vw;
  margin-top: 0;
}
.payment-icon {
  height: 3rem;
  img {
    height: 1.2rem;
    width: 1.2rem;
  }
  span {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    background-color: $color-dark;
    color: $color-light;
    padding-top: 0.1rem;
  }
}
.pagination {
  display: flex;
  width: 100%;
  padding: 5rem 0;
  justify-content: space-between;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  >a {
    flex-basis: 20%;
    position: relative;
    opacity: 0.7;
    &::before {
      content: '';
      position: absolute;
      background: url('../../assets/arrow.svg') no-repeat top center;
      width: 2rem;
      height: 2rem;
      top: -10%;
    }
    &:hover {
      opacity: 1;
      color: $color-grey;
    }
  }
}
.nav-prev {
  text-align: right;
  &::before {
    left: 0;
    transform: rotate(90deg);
  }
}
.nav-next {
  &::before {
    right: 0;
    transform: rotate(-90deg);
  }
}
.nav-disable {
  opacity: 0.4;
  &:hover {
    color: inherit;
  }
  pointer-events: none;
}
.nav-pages {
  flex-basis: 10%;
  display: flex;
  justify-content: space-around;
}
.page-num {
  color: $color-dark;
  &:hover {
    color: $color-green;
  }
}
.page-active {
  color: $color-green;
  pointer-events: none;
}

@media screen and (max-width: 991px) {
  .gallery-product {
    flex-basis: calc(90% / 2);
  }
  .product-title {
    font-size: 2.5vw;
  }
  .product-price, .product-author {
    font-size: 1.5vw;
  }
  .select-wrap {
    flex-basis: 40%;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 5vw;
  }
  .filter {
    flex-direction: column;
  }
  .content {
    padding: 12vh 15vw 0 15vw;
  }
  .products {
    flex-direction: column;
  }
  .gallery, .sidebar {
    flex: 1;
  }
  .gallery-product {
    flex-basis: 100%;
  }
  .product-title {
    font-size: 4vw;
  }
  .product-price, .product-author {
    font-size: 3vw;
  }
}
</style>

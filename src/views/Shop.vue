<template lang="pug">
  .content
    h1
      | Welcome to our creative store - we sell uncommon design
      | illustrations that smack you right in the heart.
    section.products
      .gallery
        .filter
          .select-wrap
            select(v-model='activeSort')
              option(v-for='sort in sorts'
                :value='sort') Sort by: {{ sort }}
            span.select-arrow
        transition-group.gallery-row(name='gallery-anim' tag='div' mode='out-in')
          product(v-for='product in activeProducts'  :key='product.id'  :product='product')
      aside.sidebar
        .widget-top
          h3.widget-title Top Rated
          ul.top-list
            li.top-product(v-for='product in topProducts')
              .top-product-info
                a.product-title {{ product.title }}
                .product-stars
                  span.star(v-for='n in 5'
                    :class='{ "star-full": true }')
                span.product-price ${{ product.price }}.00
              .top-product-img
                img.product-img(:src='product.img' alt='product.title')
        .widget-cart(v-if='cartProducts')
          h3.widget-title Cart Review
          ul.cart-list
            li.cart-product(v-for='(product, key) in cartProducts')
              a.product-thumbnail
                img(:src='product.img' alt='product.title')
              .product-description
                a.product-title {{ product.title }}
                span.product-price $ {{ product.price }}
              a.product-remove
          .cart-subtotal
            span Subtotal
            span $ {{ cartAmount }}
          .cart-links
            a.cart-view(@click='changePage("Cart")') View Cart
            a.cart-checkout(@click='changePage("Checkout")') Checkout
        .widget-payment
          h3.widget-title Payment Options
          p.payment-details
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            | do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          .payment-option
            a.option-img
              img(src='~@/assets/icons/paypal.svg')
            a.option-img
              img(src='~@/assets/icons/visa.svg')
            a.option-img
              img(src='~@/assets/icons/mastercard.svg')
    nav.pagination
      router-link.nav-prev(:class='{ "nav-disable": page == 1 }'
        :to='`/shop/${page - 1}`') Prev Page
      .nav-pages
        router-link.page-num(v-for='n in maxPage'  :key='n'
          :class='{ "page-active": n == page }'
          :to='`/shop/${n}`') {{ n }}
      router-link.nav-next(:class='{ "nav-disable": !hasMore }'
        :to='`/shop/${page + 1}`') Next Page
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import Product from '@/components/Product';

export default {
  name: 'shop',
  components: { Product },
  data() {
    return {
      activeSort: 'new',
      sorts: ['new', 'top']
    };
  },
  beforeCreate() {
    store.dispatch('fetchProducts', { sort: 'new' });
  },
  computed: {
    ...mapGetters([
      'activeProducts',
      'topProducts',
      'cartProducts',
      'cartAmount'
    ]),
    page() {
      return Number(this.$route.params.page) || 1;
    },
    maxPage() {
      const { productsPerPage, ids } = this.$store.state.products;
      return Math.ceil(ids[this.activeSort].length / productsPerPage);
    },
    hasMore() {
      return this.page < this.maxPage;
    }
  },
  watch: {
    activeSort() {
      this.$store.dispatch('fetchProducts', { sort: this.activeSort });
    }
  }
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7BEFB2;
$color-light: #fff;

$border: 1px solid rgba(0, 0, 0, 0.2);

.content {
  padding: 12vh 10vw 0 10vw;
}
.products {
  display: flex;
  padding-bottom: 3rem;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
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
    background: url('~@/assets/icons/arrow.svg') no-repeat center center;
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
.gallery-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
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
  flex-basis: 10rem;
}
.widget-cart {
  flex-basis: 15rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
      background: url('~@/assets/icons/arrow.svg') no-repeat top center;
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
  display: flex;
  justify-content: space-around;
}
.page-num {
  width: 2rem;
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
  .product-price, .product-author {
    font-size: 1.5vw;
  }
  .select-wrap {
    flex-basis: 40%;
  }
}

@media screen and (max-width: 800px) {
  .filter {
    flex-direction: column;
  }
  .content {
    padding: 12vh 15vw 0 15vw;
  }
  .products {
    flex-direction: column;
  }
  .gallery {
    flex: 1;
  }
  .sidebar {
    display: none;
  }
  .gallery-product {
    flex-basis: 100%;
  }
  .product-title {
    font-size: 3vw;
  }
  .product-price, .product-author {
    font-size: 3vw;
  }
  .cart-link {
    height: 3rem;
  }
}
</style>

 <template lang='pug'>
  .content
    h1 Review Your Cart
    section.basket
      .cart
        h2.aside-title Your cart
        .cart-table
          .table-cell(style='order: 1;')
            h3 PRODUCT
          figure.table-cell(:style='{ order: (index + 2) }'
            v-for='(product, key, index) in cartProducts')
            img(:src='product.img' alt='product.title')
          .table-cell(style='order: 1;')
            h3 NAME
          .table-cell(:style='{ order: (index + 2) }'
            v-for='(product, key, index) in cartProducts') {{ product.title }}
          .table-cell(style='order: 1;')
            h3 PRICE
          .table-cell(:style='{ order: (index + 2) }'
            v-for='(product, key, index) in cartProducts') $ {{ product.price }}
          .table-cell(style='order: 1;')
            h3 REMOVE
          .table-cell(:style='{ order: (index + 2) }'
            v-for='(product, key, index) in cartProducts')
            a.product-remove(@click='')
        .cart-footer
          input.cart-coupon(type='text' placeholder='Put your code here...')
          a.action-btn Apply
          a.action-btn Renew Cart
      .payment
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
        .payment-total
          h2 Cart Total
          .subtotal-line
            p Subtotal
            p ${{ cartAmount }}
          .total-line
            p Total
            p ${{ cartAmount }}
          a.action-btn Proceed to Checkout
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'cart',
  computed: {
    ...mapGetters([
      'cartProducts',
      'cartAmount'
    ])
  }
};
</script>

<style lang='scss' scoped>

$color-grey: #666;
$color-green: #7befb2;

.content {
  padding: 12vh 10vw 0 10vw;
}
input:checked {
  appearance: none;
}
.basket {
  display: flex;
}
.cart {
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
}
.cart-table {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 90%;
  margin-bottom: 3rem;
}
.table-cell {
  box-sizing: border-box;
  flex-grow: 1;
  width: 25%;
  padding: 1rem;
  overflow: hidden;
  border-bottom: 2px solid lighten($color-grey, 50);
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-footer {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 50%;
  justify-content: space-between;
}
.cart-coupon {
  outline: none;
  border: 0;
  border-bottom: 2px solid lighten($color-grey, 50);
  padding: 1rem;
  &:hover {
    border-color: $color-green;
  }
}
@media screen and (max-width: 991px) {
  .basket {
    flex-direction: column;
  }
  .cart-footer {
    width: 70%;
  }
  .payment-option {
    width: 60%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 480px) {
  .cart-footer {
    width: 90%;
    font-size: 1.2rem;
  }
}
</style>

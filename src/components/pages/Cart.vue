 <template lang="pug">
  .content
    h1 Review Your Cart
    section.basket
      .cart
        h2.aside-title  You have 3 item
        .cart-table
          .cart-header
            .cart-item
            h3.cart-item NAME
            h3.cart-item PRICE
          .cart-product(v-for='(product, key) in productsInCart')
            figure.item-img
              img(v-bind:src='product.url' alt='product.name')
            p.cart-item {{ product.name }}
            p.cart-item $ {{ product.price }}
            a.product-remove(@click='removeFromCart(key)')
          .cart-footer
            form.cart-coupon
              input.coupon-line(type='text' placeholder='Put you code here...')
              a.action-btn Apply
            a.action-btn Renew Cart
      .payment
        .payment-content
          h2.payment-title Payment Options
          p.payment-text
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          .payment-option
            figure.option-img.img-paypal
              img(src='../../assets/icons/paypal.svg')
            figure.option-img.img-paypal
              img(src='../../assets/icons/visa.svg')
            figure.option-img.img-paypal
              img(src='../../assets/icons/mastercard.svg')
        .payment-total
          h2.total-title Cart Total
          .subtotal-line
            p.line-text Subtotal
            p.line-price ${{ cartAmount() }}
          .total-line
            p.line-text Total
            p.line-price ${{ cartAmount() }}
          a.action-btn Proceed to Checkout
</template>

<script>
import Firebase from '../../appconfig/firebase';

export default {
  name: 'cart',
  props: ['user', 'productsInCart'],
  data() {
    return {
    };
  },
  methods: {
    cartAmount() {
      return Object.values(this.productsInCart)
        .reduce((sum, product) => sum + Number(product.price), 0);
    },
    removeFromCart(key) {
      Firebase.dbUsersRef.child(`${this.user.uid}/cart/${key}`).remove();
      this.$delete(this.productsInCart, key);
    },
  },
};
</script>

<style lang="scss" scoped>

$color-dark: #252525;
$color-grey: #666;
$color-green: #7befb2;
$color-light: #fff;

h1, h2, h3 {
  color: $color-dark;
}
h1 {
  font-size: 3.8vw;
  margin-bottom: 10rem;
}
input:checked {
  appearance: none;
}
.content {
  padding: 12vh 10vw 0 10vw;
}
.basket {
  display: flex;
}
.aside-title {
  position: absolute;
  top: calc(50% - 6rem);
  left: -5vw;
  font-size: 2rem;
  transform: rotate(90deg);
  transform-origin: left;
  color: $color-dark;
  margin: 0;
  letter-spacing: 0.2rem;
}
.cart {
  flex:3;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
}
.cart-table {
  display: table;
  padding: 0 2vw;
}
.cart-header, .cart-product {
  display: table-row;
  border-bottom: 2px solid lighten($color-grey, 50);
}
.cart-header {
  border-top: 2px solid lighten($color-grey, 50);
}
.cart-product{
  padding: 2rem 0;
}
.cart-item {
  display: table-cell;
  text-align: center;
  font-size: 1.8rem;
  color: lighten($color-grey, 10)
}
.input-line {
  flex: none;
  flex-basis: 18%;
  min-width: 3rem;
  text-align: center;
  border: 0;
}
.item-img {
  width: 5rem;
}
.cart-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  height: 4rem;
}
.cart-coupon {
  flex-basis: 20%;
  display: flex;
}
.coupon-line {
  flex: 2;
  outline: none;
  border: 0;
  border-bottom: 2px solid lighten($color-grey, 50);
  padding: 2rem;
  &:hover {
    border-color: $color-green;
  }
}
.payment {
  flex:1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2vw;
  margin-bottom: 20rem;
}
.payment-content {
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lighten($color-grey, 56);
  padding: 3rem;
  margin-bottom: 3rem;
}
.payment-title, .payment-text {
  flex-basis: 10%;
}
.payment-option {
  flex-basis: 20%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.option-img {
  flex-basis: 18%;
  margin: 0;
}
.payment-total {
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border: 1px solid lighten($color-grey, 50);
  .action-btn {
    margin-top: 2rem;
  }
}
.total-title {
  flex: 1;
}
.subtotal-line, .total-line {
  flex: 1;
  display: flex;
  border-bottom: 2px solid lighten($color-grey, 50);
  justify-content: space-between;
}
.line-text, .line-price {
  flex-basis: 10%;
}
.total-line {
  .line-text, .line-price {
    font-weight: 500;
    color: $color-dark;
  }
}
@media screen and (max-width: 991px) {
  .basket {
    flex-direction: column;
  }
  .cart-item {
    flex-basis: 13%;
    font-size: 1.3rem;
  }
  .input-line {
    width: 1.2rem;
    flex-basis: 0;
  }
  .item-img {
    margin: 0;
    margin-top: 1rem;
  }
  .cart-item:nth-child(3) {
    flex-basis: 25%;
  }
  .cart-item:first-child {
    flex-basis: 13rem;
  }
}
@media screen and (max-width: 480px) {
  .cart-item {
    flex-basis: 10%;
    font-size: 1rem;
  }
  .input-line {
    width: 1rem;
    flex-basis: 0;
    // min-width: 0;
  }
  .item-img {
    margin: 0;
    margin-top: 1rem;
  }
  .cart-item:nth-child(3) {
    flex-basis: 25%;
  }
  .cart-item:first-child {
    flex-basis: 13rem;
  }
}
</style>

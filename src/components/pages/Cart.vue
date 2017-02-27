 <template lang="pug">
  .content
    h1 Review Your Cart
    section.basket
      .cart
        h2.aside-title  You have 3 item
        .cart-table
          .cart-header
            h3.cart-title NAME
            h3.cart-title PRICE
            h3.cart-title QUANTITY
            h3.cart-title TOTAL
          .cart-item(v-for='n in 3')
            a.item-close
            figure.item-img
              img(src='https://unsplash.it/800/800/?random' alt='')
            p.item-name Fox Illustration by pxlhead studio
            p.item-price $15
            input.item-quantity(type="number" step="1" min="1" name="quantity" value="1")
            p.item-total $15
          .cart-footer
            form.cart-coupon
              input.coupon-line(type='text' placeholder='Put you code here...')
              a.coupon-btn Apply
            a.cart-renew Renew Cart
      .payment
        .payment-content
          h2.payment-title Payment Options
          p.payment-text
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          .payment-option
            figure.option-img.img-paypal
              img(src='../../assets/shop/paypal-icon.svg')
            figure.option-img.img-paypal
              img(src='../../assets/shop/visa-icon.svg')
            figure.option-img.img-paypal
              img(src='../../assets/shop/mastercard-icon.svg')
        .payment-total
          h2.total-title Cart Total
          .subtotal-line
            p.line-text Subtotal
            p.line-price $15
          .total-line
            p.line-text Total
            p.line-price $15
          a.total-btn Proceed to Checkout
</template>

<script>
export default {
  name: 'cart',
  data() {
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
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
}
.cart-header, .cart-item {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 2px solid lighten($color-grey, 50);
}
.cart-header {
  border-top: 2px solid lighten($color-grey, 50);
}
.cart-item {
  padding: 2.5em 0;
}
.cart-title, .item-name, .item-price, .item-quantity, .item-total {
  flex-basis: 17%;
  text-align: center;
      line-height: 6rem;
  font-size: 1.8rem;
  color: lighten($color-grey, 10)
}
.cart-title:nth-child(1) {
  flex-basis: 45%;
  text-align: center;
}
.item-img {
  flex-basis: 8%;
}
.item-close {
  flex-basis: 2rem;
  height: 2rem;
  margin-top: 4rem;
  background-image: url('../../assets/close-btn.svg');
  background-position: center center;
  background-size: cover;
  &:hover {
    opacity: 0.7;
  }
}
.item-name {
  flex-basis: 36%;
  text-align: center;
}
.item-quantity {
  border: 0;
}
.cart-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
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
  &:hover{
    border-color: $color-green;
  }
}
.coupon-btn{
  flex: 1;
  padding: 2rem;
  background-color: $color-green;
  &:hover{
    background-color: darken($color-green, 10);
    color: inherit;
  }
}
.cart-renew {
  flex-basis: 10%;
  text-align: center;
  align-self: flex-end;
  padding: 2rem;
  background-color: $color-green;
  &:hover{
    background-color: darken($color-green, 10);
    color: inherit;
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
.total-btn {
  margin-top: 4rem;
  text-align: center;
  align-self: flex-end;
  padding: 2rem;
  background-color: $color-green;
  &:hover{
    background-color: darken($color-green, 10);
    color: inherit;
  }
}
@media screen and (max-width: 991px) {
  .basket {
    flex-direction: column;
  }
  .item-close {
    flex-basis: 3rem;
  }
  .item-price {
    flex-basis: 7%;
  }
}
@media screen and (max-width: 480px) {
  .item-img {
    display: none;
  }
}
</style>

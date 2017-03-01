<template lang="pug">
  .content
    h1 Finalize Your Order
    section.checkout
      .shipping
        .main-form
          form.order-form
            h2.aside-title  Billing
            .input-box
              input.input-line(type='text' placeholder='First Name...')
              input.input-line(type='text', placeholder='Second Name...')
            .input-box
              input.input-line(type='email' placeholder='Email...')
              input.input-line(type='text' placeholder='Phone...')
            .input-box
              input.input-line(type='text' placeholder='Country...')
            .input-box
              input.input-line(type='text' placeholder='Billing Address 1...')
            .input-box
              input.input-line(type='text' placeholder='Billing Address 2...')
            .input-box
              input.input-line(type='text' placeholder='City...')
              input.input-line(type='text' placeholder='Zip...')
            .input-box
              .input-checkbox
                input.input-check(type='checkbox' id='address')
                label.input-label(for='address') Remember address?
              .input-checkbox
                input.input-check(type='checkbox' id='shipping')
                label.input-label(for='shipping') Same shipping address?
          form.order-form
            h2.aside-title  Shipping
            .input-box
              input.input-line(type='text' placeholder='First Name...')
              input.input-line(type='text', placeholder='Second Name...')
            .input-box
              input.input-line(type='email' placeholder='Email...')
              input.input-line(type='text' placeholder='Phone...')
            .input-box
              input.input-line(type='text' placeholder='Country...')
            .input-box
              input.input-line(type='text' placeholder='Shipping Address')
            .input-box
              input.input-line(type='text' placeholder='City...')
              input.input-line(type='text' placeholder='Zip...')
      .payment
        .payment-content
          h2 Payment Options
          .payment-option
            a.option-img
              img(src='../../assets/icons/paypal.svg')
            a.option-img
              img(src='../../assets/icons/visa.svg')
            a.option-img
              img(src='../../assets/icons/mastercard.svg')
          form.payment-data
            input.input-line(type='text' placeholder='Owner Name...')
            input.input-line(type='text', placeholder='Account Number...')
            input.input-line(type='text' placeholder='Date...')
            input.input-line(type='text', placeholder='CVV Code...')
        .payment-total
          h2 Cart Total
          .subtotal-line
            p.line-text Subtotal
            p.line-price $15
          .total-line
            p.line-text Total
            p.line-price $15
          a.action-btn Place Your Order
</template>

<script>
export default {
  name: 'checkout',
};
</script>

<style lang="scss" scoped>

  $color-dark: #252525;
  $color-grey: #666;
  $color-green: #7befb2;
  $color-light: #fff;

h1, h2, h3, h4 {
  color: $color-dark;
}
h1 {
  font-size: 3.8vw;
  margin-bottom: 5rem;
}
.content {
  padding: 12vh 10vw 0 10vw;
}
.checkout {
  display: flex;
  margin-bottom: 5rem;
  justify-content: space-between;
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
.shipping {
  flex-basis: 65%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.main-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.order-form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 5rem;
  border: 2px solid lighten($color-grey, 50);
}
.input-checkbox {
  flex-basis: 40%;
  padding: 2rem;
}
.input-check {
  appearance: none;
  background-color: lighten($color-grey, 56);
  border: 2px solid lighten($color-grey, 50);
  border-radius: 5px;
  padding: 1rem;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
  &:checked {
    background-color: $color-green;
  }
}
.input-label {
  padding: 0 1rem;
}
.payment {
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
}
.payment-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lighten($color-grey, 55);
  border: 1px solid lighten($color-grey, 50);
  padding: 2rem;
  margin-bottom: 5rem;
}
.payment-option {
  display: flex;
  justify-content: space-around;
}
.option-img {
  padding: 0 1rem;
 &:hover {
  opacity: 0.8;
 }
}
.payment-data {
  display: flex;
  flex-direction: column;
  .input-line {
    flex: 1;
    background-color: inherit;
    border-color: lighten($color-grey, 40);
  }
}
.payment-total {
  padding: 2rem;
  background-color: lighten($color-grey, 55);
  border: 1px solid lighten($color-grey, 50);
  display: flex;
  flex-direction: column;
  .action-btn {
    margin-top: 2rem;
  }
}
.subtotal-line, .total-line {
  display: flex;
  border-bottom: 2px solid lighten($color-grey, 40);
  justify-content: space-between;
}
.total-line {
 .line-text, .line-price {
   font-weight: 500;
   color: $color-dark;
 }
}
@media screen and (max-width: 991px) {
  .checkout {
   flex-direction: column;
  }
 }
@media screen and (max-width: 480px) {
  .input-box {
    flex-direction: column;
  }
}
</style>

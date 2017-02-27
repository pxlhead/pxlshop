<template lang="pug">
  .content
    h1 Finalize Your Order
    section.checkout
      .shipping
        .main-form
          form.billing-form
            h2.aside-title  Billing
            .form-input
              input.input-line(type='text' placeholder='First Name...')
              input.input-line(type='text', placeholder='Second Name...')
            .form-input
              input.input-line(type='text' placeholder='Email...')
              input.input-line(type='number' placeholder='Phone...')
            .form-input
              input.input-line(type='text' placeholder='Country...')
            .form-input
              input.input-line(type='text' placeholder='Billing Address 1...')
            .form-input
              input.input-line(type='text' placeholder='Billing Address 2...')
            .form-input
              input.input-line(type='text' placeholder='City...')
              input.input-line(type='number' placeholder='Zip...')
            .form-input
              .input-checkbox
                input.input-check(type='checkbox')
                label.input-label Remember address to account?
              .input-checkbox
                input.input-check(type='checkbox')
                label.input-label Shipping Address
          form.shipping-form
            h2.aside-title  Shipping
            .form-input
              input.input-line(type='text' placeholder='First Name...')
              input.input-line(type='text', placeholder='Second Name...')
            .form-input
              input.input-line(type='text' placeholder='Email...')
              input.input-line(type='number' placeholder='Phone...')
            .form-input
              input.input-line(type='text' placeholder='Country...')
            .form-input
              input.input-line(type='text' placeholder='Billing Address 1...')
            .form-input
              input.input-line(type='text' placeholder='Billing Address 2...')
            .form-input
              input.input-line(type='text' placeholder='City...')
              input.input-line(type='number' placeholder='Zip...')
      .payment
        .payment-content
          h2.payment-title Payment Options
          .payment-option
            a.option-img.img-paypal
              img(src='../../assets/shop/paypal-icon.svg')
            a.option-img.img-paypal
              img(src='../../assets/shop/visa-icon.svg')
            a.option-img.img-paypal
              img(src='../../assets/shop/mastercard-icon.svg')
          form.payment-data
            .form-input
              input.input-line(type='text' placeholder='Owner Name...')
              input.input-line(type='text', placeholder='Account Number...')
            .form-input
              input.input-line(type='text' placeholder='Date...')
              input.input-line(type='text', placeholder='CVV Code...')
        .payment-total
          h2.total-title Cart Total
          .subtotal-line
            p.line-text Subtotal
            p.line-price $15
          .total-line
            p.line-text Total
            p.line-price $15
          a.total-btn Place Your Order
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
  margin-bottom: 10rem;
}
input {
  outline: none;
  border: 0;
  border-bottom: 2px solid lighten($color-grey, 50);
  padding: 2rem;
  &:hover{
    border-color: $color-green;
  }
}
.content {
  padding: 12vh 10vw 0 10vw;
}
.checkout {
  display: flex;
  margin-bottom: 10rem;
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
  flex: 3;
  position: relative;
  display: flex;
  flex-direction: column;
}
.main-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
}
.billing-form, .shipping-form {
  position: relative;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 10rem;
  border: 2px solid lighten($color-grey, 50);
}
.form-input {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  width: 100%;
  justify-content: space-between;
}
.input-line {
  flex-basis: 40%;
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
  &:checked {
    background-color: $color-green;
  }
}
.input-label {
  padding: 0 2rem;
  vertical-align: middle;
}
.payment {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
.payment-content {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lighten($color-grey, 56);
  border: 1px solid lighten($color-grey, 50);
  padding: 2rem;
  margin-bottom: 10rem;
}
.payment-title, .payment-text {
  flex-basis: 10%;
}
.payment-option {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.option-img {
  padding: 0 1rem;
  border: 2px solid lighten($color-grey, 56);
 &:hover {
  opacity: 0.7;
  border: 2px solid $color-grey;
 }
}
.payment-total {
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: lighten($color-grey, 56);
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
  .checkout {
   flex-direction: column;
  }
 }
@media screen and (max-width: 480px) {
  .form-input {
    flex-direction: column;
  }
}
</style>

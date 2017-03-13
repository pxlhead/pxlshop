<template lang="pug">
  .content
    h1 Finalize Your Order
    section.checkout
      .info
        form.order-form
          h2.aside-title  Billing
          .input-box
            input.input-line(type='text' placeholder='First Name...'
            v-model='billing.firstName' name='firstName')
            input.input-line(type='text', placeholder='Second Name...'
            v-model='billing.secondName' name='secondName')
          .input-box
            input.input-line(type='email' placeholder='Email...'
            v-model='email' name='email')
            input.input-line(type='text' placeholder='Phone...'
            v-model.number='phone' name='phone')
          .input-box
            input.input-line(type='text' placeholder='Country...'
            v-model='billing.country' name='country')
          .input-box
            input.input-line(type='text' placeholder='Billing Address'
            v-model='billing.address' name='address')
          .input-box
            input.input-line(type='text' placeholder='City...'
            v-model='billing.city' name='city')
            input.input-line(type='text' placeholder='Zip...'
            v-model.number='billing.zip' name='zip')
          .input-box
            .input-checkbox
              input.input-check(type='checkbox' id='address'
              @click='remAddress')
              label.input-label(for='address') Remember address?
            .input-checkbox
              input.input-check(type='checkbox' id='shipping'
              @click='completeShipping')
              label.input-label(for='shipping') Same shipping address?
        form.order-form
          h2.aside-title  Shipping
          .input-box
            input.input-line(type='text' placeholder='First Name...'
            v-model='shipping.firstName' name='firstName')
            input.input-line(type='text', placeholder='Second Name...'
            v-model='shipping.secondName' name='secondName')
          .input-box
            input.input-line(type='text' placeholder='Country...'
            v-model='shipping.country' name='country')
          .input-box
            input.input-line(type='text' placeholder='Shipping Address'
            v-model='shipping.address' name='address')
          .input-box
            input.input-line(type='text' placeholder='City...'
            v-model='shipping.city' name='city')
            input.input-line(type='text' placeholder='Zip...'
            v-model.number='shipping.zip' name='zip')
      .payment
        .widget-payment
          h2.widget-title Payment Options
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
            p Subtotal
            p $15
          .total-line
            p Total
            p $15
          a.action-btn Place Your Order
</template>

<script>
import Firebase from '../../appconfig/firebase';

export default {
  name: 'checkout',
  props: ['user'],
  data() {
    return {
      billing: {
        firstName: '',
        secondName: '',
        country: '',
        address: '',
        city: '',
        zip: '',
      },
      shipping: {
        firstName: '',
        secondName: '',
        country: '',
        address: '',
        city: '',
        zip: '',
      },
      email: '',
      phone: '',
    };
  },
  methods: {
    remAddress() {
      Firebase.dbUsersRef.child(`${this.user.uid}/address`).set(this.billing);
    },
    completeShipping() {
      this.shipping = this.billing;
    },
  },
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
}
.info {
  flex: 2;
  position: relative;
}
.order-form {
  position: relative;
  padding: 2rem;
  margin-bottom: 3rem;
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
  margin-left: 5rem;
}
.widget-payment {
  margin: 0;
}
.payment-option {
  width: 70%;
}
.payment-data {
  display: flex;
  flex-direction: column;
  .input-line {
    flex: 1;
    margin: 1rem 0;
    background-color: inherit;
    border-color: lighten($color-grey, 40);
  }
}
@media screen and (max-width: 991px) {
  .checkout {
   flex-direction: column;
  }
  .payment {
    margin: 0;
  }
  .payment-option {
    width: 40%;
  }
 }
@media screen and (max-width: 480px) {
  .input-box {
    flex-direction: column;
  }
}
</style>

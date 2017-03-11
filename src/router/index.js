/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/pages/Index';
import Shop from '@/components/pages/Shop';
import About from '@/components/pages/About';
import Contacts from '@/components/pages/Contacts';

import Cart from '@/components/pages/Cart';
import Checkout from '@/components/pages/Checkout';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      props: true,
    }, {
      // BUG: on page refresh can't get productsInCart
      path: '/shop',
      name: 'Shop',
      component: Shop,
      props: true,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      props: true,
    }, {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      props: true,
    }, {
      path: '*',
      component: Index,
    },
  ],
  scrollBehavior(to, from) {
    return { x: 0, y: 0 };
  },
});

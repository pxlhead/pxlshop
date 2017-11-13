/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import Shop from '../views/Shop';
import About from '../views/About';
import Contacts from '../views/Contacts';
import Cart from '../views/Cart';
import Checkout from '../views/Checkout';


Vue.use(Router);

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/shop/:page(\\d+)?', component: Shop },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout }
  ]
});

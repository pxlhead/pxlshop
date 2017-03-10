import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/pages/Index';
import Shop from '@/components/pages/Shop';
import About from '@/components/pages/About';
import Contacts from '@/components/pages/Contacts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      props: true,
    }, {
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
    },
  ],
});

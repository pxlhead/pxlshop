import 'normalize.css';
import '@/assets/scss/style.scss';

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

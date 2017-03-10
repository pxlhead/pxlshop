import 'normalize.css';
import '@/assets/style.scss';

import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App';
import router from './router';

Vue.use(VueFire);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

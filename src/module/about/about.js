import 'assets/style.scss';
import 'normalize.css';
import Vue from 'vue';
import VueFire from 'vuefire';
import App from './App';

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

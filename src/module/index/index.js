import 'assets/style.scss';
import 'normalize.css';
import Vue from 'vue';
// import VueRouter from 'vue-router';
import App from './App';

// Vue.use(VueRouter);
//
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/app',
//       component: App
//     },
//   ]
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import products from './modules/products';
import cart from './modules/cart';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  ratings: {},
  errorMessage: null,
  completeMessage: null
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    products,
    cart,
    user
  },
  strict: debug
});

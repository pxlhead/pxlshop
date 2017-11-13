import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.SET_RATINGS](state, { ratedProducts, uid }) {
    ratedProducts.forEach((product) => {
      Vue.set(state.ratings, product.id, product.ratings[uid]);
    });
  },

  [types.SET_ERROR_MESSAGE](state, { message }) {
    state.errorMessage = message;
  },

  [types.CLEAR_ERROR_MESSAGE](state) {
    state.errorMessage = null;
  },

  [types.SET_COMPLETE_MESSAGE](state, { message }) {
    state.completeMessage = message;
  },

  [types.CLEAR_COMPLETE_MESSAGE](state) {
    state.completeMessage = null;
  }
};

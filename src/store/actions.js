import * as types from './mutation-types';

export default {
  handleSuccess({ commit }, { message = 'Success' }) {
    commit(types.SET_COMPLETE_MESSAGE, message);
    setTimeout(() => commit(types.CLEAR_COMPLETE_MESSAGE), 3000);
  },

  handleError({ commit }, { message = 'An unknown error has occurred.' }) {
    commit(types.SET_ERROR_MESSAGE, message);
    setTimeout(() => commit(types.CLEAR_ERROR_MESSAGE), 3000);
  },

  setRatedProducts({ getters, commit }) {
    const { uid } = getters.activeUser;
    const ratedProducts = getters.activeProducts.filter(product =>
      product.ratings && product.ratings[uid]);
    commit(types.SET_RATINGS, { ratedProducts, uid });
  }

  // TODO: add rateProduct
  // rateProduct({}, {}) {}
};

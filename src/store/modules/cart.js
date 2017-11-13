import * as types from '../mutation-types';

const state = {
  addedProducts: []
};

const mutations = {
  [types.ADD_TO_CART](state, { id }) {
    state.addedProducts.push(id);
  },

  [types.REMOVE_FROM_CART](state, { id }) {
    state.addedProducts.splice(state.addedProducts.indexOf(id), 1);
  }
};

export default {
  state,
  mutations
};

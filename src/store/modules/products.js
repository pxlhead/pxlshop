import Vue from 'vue';
import {
  fetchProducts
} from '@/api';
import * as types from '../mutation-types';

const state = {
  activeSort: null,
  productsPerPage: 12,
  ids: {
    new: [],
    top: []
  },
  all: {}
};

const getters = {
  activeIds(state, getters, rootState) {
    const { activeSort, productsPerPage, ids } = state;

    const page = Number(rootState.route.params.page) || 1;
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;

    return ids[activeSort].slice(start, end);
  },

  activeProducts(state, getters) {
    return getters.activeIds.map(id => state.all[id]);
  },

  topProducts(state) {
    return state.ids.top.slice(0, 3).map(id => state.all[id]);
  }
};

const mutations = {
  [types.SET_ACTIVE_SORT](state, { sort }) {
    state.activeSort = sort;
  },

  [types.SET_IDS](state, { ids }) {
    ids.forEach(id => state.ids[state.activeSort].push(id));
  },

  [types.SET_PRODUCTS](state, { products }) {
    products.forEach((product) => {
      Vue.set(state.all, product.id, product.data());
    });
  }
};

const actions = {
  fetchProducts({
    state,
    getters,
    commit,
    dispatch
  }, { sort }) {
    commit(types.SET_ACTIVE_SORT, { sort });
    if (getters.activeIds.length) return Promise.resolve();
    const queryData = {
      sort,
      limit: state.productsPerPage
    };
    const sortedIds = state.ids[sort];
    if (sortedIds.length) queryData.last = sortedIds[sortedIds.length - 1];
    return fetchProducts(queryData)
      .then((snapshots) => {
        const products = snapshots.docs;
        commit(types.SET_PRODUCTS, { products });
        const ids = products.map(product => product.id);
        commit(types.SET_IDS, { ids });
        if (getters.activeUser) dispatch('setRatedProducts');
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

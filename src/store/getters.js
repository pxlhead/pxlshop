export default {
  cartProducts(state) {
    return state.cart.addedProducts.map(id => state.products.all[id]);
  },

  cartAmount(state, getters) {
    return getters.cartProducts.reduce((sum, product) => sum + product.price, 0);
  }
};

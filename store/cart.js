import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart-store",

  state: () => {
    return {
      orders: [],
    };
  },

  actions: {
    addProduct(payload) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === payload.productId
      );

      if (curentIndex === -1) {
        this.orders.push(payload);
      } else {
        this.orders[curentIndex].quantity += 1;
      }
    },

    resetCart() {
      this.orders = [];
    },

    deleteProductById(id) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );

      this.orders.splice(curentIndex, 1);
    },

    isProductExist(id) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );

      return curentIndex === -1 ? false : true;
    },

    changeQuantity(id, payload) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );

      payload === "plus"
        ? (this.orders[curentIndex].quantity += 1)
        : this.deleteProductById(id);
    },
  },

  getters: {
    ordersList: (state) => state.orders,
  },
});

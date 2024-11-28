import { defineStore } from "pinia";
/**
 *
 */
export const useOrderStore = defineStore({
  id: "order-store",

  state: () => {
    return {orders: []};
  },

  getters: {
    getOrders: (state) => state.orders,
  },

  actions: {
    addProduct(payload) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === payload.productId
      );

      if (curentIndex === -1) this.orders.push({ ...payload, quantity: 1 });
    },

    deleteAllProducts() {
      this.orders = [];
    },

    isProductExist(id) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );

      return curentIndex === -1 ? false : true;
    },

    deleteProductById(id) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );

      curentIndex === -1 ? false : this.orders.splice(curentIndex, 1);
    },

    getQuantityById(id) {
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );

      if (curentIndex !== -1) return this.orders[curentIndex].quantity;
    },

    changeQuantity(id, qty) {
      console.log("id :>> ", id, "\nqty :>> ", qty);
      const curentIndex = this.orders.findIndex(
        (order) => order.productId === id
      );
      if (Number(qty) > 0 && curentIndex !== -1) {
        this.orders[curentIndex].quantity = qty;
      } else {
        this.deleteProductById(id);
      }
    },
  },
});

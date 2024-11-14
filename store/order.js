import { defineStore } from "pinia";

export const useOrderStore = defineStore({
  id: "order-store",

  state: () => {
    return { order: [] };
  },

  getters: {
    order: (state) => state.order,
  },

  actions: {
    addProduct(payload) {
      if (!!this.order.length) {
        for (let i = 0; i < this.order.length; i++) {
          if (this.order[i].id === payload) {
            this.order[i].quantity++;
            return;
          }
        }
      }
      this.order.push({ "id": payload, "quantity": 1 });
    },
  },
});

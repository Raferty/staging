import { defineStore } from "pinia";

export const useOrderStore = defineStore({
  id: "order-store",

  state: () => {
    return { order: [] };
  },

  getters: {
    getOrder: (state) => state.order,
  },

  actions: {
    addProduct(payload) {
      if (!!this.order.length) {
        for (let i = 0; i < this.order.length; i++) {
          console.log(
            "this.order[i].id :>> ",
            this.order[i].id,
            "\npayload.id",
            payload.id
          );
          if (this.order[i].id === payload.id) {
            this.order[i].quantity++;
            return;
          }
        }
      }
      this.order.push({ ...payload, quantity: 1 });
    },
    removeProduct(payload) {
      return;
    },
    counterProduct(payload) {
      return;
    },
  },
});

import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [], // Массив товаров в корзине
  }),
  actions: {
    addItem(product) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeItem(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    increaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) item.quantity++;
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeItem(productId);
      }
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});

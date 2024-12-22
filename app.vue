<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from "vue";

class OrderStore {
  orders = [];
  getOrders =  this.orders;

  addProduct(payload) {
    const curentIndex = this.orders.findIndex(
      (order) => order.productId === payload.productId
    );

    if (curentIndex === -1) this.orders.push({ ...payload, quantity: 1 });
  }

  deleteAllProducts() {
    this.orders = [];
  }

  isProductExist(id) {
    const curentIndex = this.orders.findIndex(
      (order) => order.productId === id
    );

    return curentIndex === -1 ? false : true;
  }

  deleteProductById(id) {
    const curentIndex = this.orders.findIndex(
      (order) => order.productId === id
    );

    curentIndex === -1 ? false : this.orders.splice(curentIndex, 1);
  }

  getQuantityById(id) {
    const curentIndex = this.orders.findIndex(
      (order) => order.productId === id
    );

    if (curentIndex !== -1) return this.orders[curentIndex].quantity;
  }

  changeQuantity(id, qty) {
    const curentIndex = this.orders.findIndex(
      (order) => order.productId === id
    );
    if (Number(qty) > 0 && curentIndex !== -1) {
      this.orders[curentIndex].quantity = qty;
    } else {
      this.deleteProductById(id);
    }
  }
}

const useOrderStore = reactive(new OrderStore());
provide("useOrderStore", useOrderStore);

</script>

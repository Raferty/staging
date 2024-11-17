<template>
  <div class="orders-list">
    <div v-for="order in cartStore.ordersList" class="orders-list__item">
      <div class="orders-list__title">
        {{ order.title }} | {{ order.quantity }}
      </div>
      <div class="orders-list__actions">
        <UiButton @click="cartStore.changeQuantity(order.productId, 'minus')"
          >-</UiButton
        >
        <UiButton @click="cartStore.changeQuantity(order.productId, 'plus')"
          >+</UiButton
        >

        <UiButton @click="cartStore.deleteProductById(order.productId)"
          >Delete</UiButton
        >
      </div>
    </div>
    <div>
      <UiButton @click="cartStore.resetCart">reset</UiButton>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "./store/cart";

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.orders-list {
  position: absolute;
  right: 100px;
  top: 100px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 16px;
  width: 340px;
  background-color: #fff;
  &__item {
    display: flex;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #000;

    &:last-child {
      border-bottom: 0;
    }
  }

  &__actions {
    width: 100px;
  }
}
</style>

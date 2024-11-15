<template>
    <div class="cart-menu">
      <h2>Корзина</h2>
      <ul v-if="cartItems.length">
        <li v-for="item in cartItems" :key="item.id">
          <span>{{ item.name }}</span>
          <span>Количество: {{ item.quantity }}</span>
          <button @click="removeItem(item.id)">Удалить</button>
          <button @click="increaseQuantity(item.id)">+</button>
          <button @click="decreaseQuantity(item.id)">-</button>
        </li>
      </ul>
      <div v-else>
        <p>Корзина пуста</p>
      </div>
      <button @click="clearCart" class="clear-cart">Очистить корзину</button>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from "~/store/cart";
  
  const cartStore = useCartStore();
  const cartItems = cartStore.cartItems;
  
  const removeItem = (id) => cartStore.removeItem(id);
  const increaseQuantity = (id) => cartStore.increaseQuantity(id);
  const decreaseQuantity = (id) => cartStore.decreaseQuantity(id);
  const clearCart = () => cartStore.clearCart();
  </script>
  
  <style scoped>
  .cart-menu {
    border: 1px solid #ddd;
    padding: 1rem;
    max-width: 300px;
  }
  .clear-cart {
    margin-top: 1rem;
    background: red;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>
  
<template>
  <ul>
    <!-- список продукции -->
    <li v-for="product in ProductsData" :key="product.id">
      {{ product.title }}
    </li>
  </ul>
</template>
  
<script setup>
import { ProductsData } from '@/fakedata/products';

// Вычисляемое свойство для отфильтрованного массива
const filteredProductsData = computed(() => {
  let result = [];

  // код фильтрации массива

  return result;
});
</script>
  
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
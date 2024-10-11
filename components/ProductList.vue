<template>
    <ul>
      <!-- список продукции -->
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [
          { id: 1, name: 'Продукт 1' },
          { id: 2, name: 'Продукт 2' },
          { id: 3, name: 'Продукт 3' }
        ]
      }
    }
  }
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
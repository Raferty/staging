<!-- components/ProductList.vue -->

<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :title="product.title" :category="product.category" :price="product.price" :image="product.image" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        { id: 1, title: 'Продукт 1', category: 'Категория 1', price: 100, image: 'https://example.com/image1.jpg' },
        { id: 2, title: 'Продукт 2', category: 'Категория 2', price: 200, image: 'https://example.com/image2.jpg' },
        { id: 3, title: 'Продукт 3', category: 'Категория 3', price: 300, image: 'https://example.com/image3.jpg' }
      ]
    }
  }
}
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
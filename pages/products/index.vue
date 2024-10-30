<template>
  <ProductsFilter v-model:why="productsFilteredList" :products-list="productsList" />
  <ProductsList :products-filtered-list="productsFilteredList" />
</template>

<script setup>
const productsList = ref(await useProductsAPI());
const productsFilteredList = ref()
console.log("ProductsFilteredList", productsFilteredList)
</script>
<style lang="scss" scoped></style>

<template>Странца продукта
  <ProductCard :id="product.id" :title="product.title" :category="product.category" :price="product.price"
    :image="product.image" :rate="product.rating.rate" />
</template>

<script setup>
const route = useRoute();
const products_id = route.params.id
console.log("Текущий ID продукта", products_id);
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${products_id}`)
// Эндпоинт базы данных https://fakestoreapi.com/products/1
// Сделать запрос к базе данных с помощью https://nuxt.com/docs/getting-started/data-fetching
// Вывести карточку продукта в шаблон с помощью компонента ProductCard
</script>

<style lang="scss" scoped></style>

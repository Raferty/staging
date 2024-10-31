<template>Странца продукта</template>

<script setup>
const route = useRoute();

console.log("Текущий ID продукта", route.params.id);

// Эндпоинт базы данных https://fakestoreapi.com/products/1
// Сделать запрос к базе данных с помощью https://nuxt.com/docs/getting-started/data-fetching
// Вывести карточку продукта в шаблон с помощью компонента ProductCard
</script>

<style lang="scss" scoped></style>
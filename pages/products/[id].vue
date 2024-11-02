<template>Странца продукта
<ProductCard 
:id="product.id" 
:title="product.title" 
:category="product.category" 
:price="product.price"
:image="product.image"/>
</template>

<script setup> //Почему не выводится информация о ProductCard?
const route_params = useRoute();
const productID = route_params.params.id;
console.log("Текущий ID продукта", productID);
const {data : product} = await useFetch('https://fakestoreapi.com/products/${productID}');
</script>

<style lang="scss" scoped></style>

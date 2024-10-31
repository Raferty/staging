<template>
  <UiTitle tag="h1">Filter</UiTitle>
  {{ filters }}
  <ProductsFilter @update-filter="filterHandle" />
  <UiTitle tag="h1">Products</UiTitle>
  <ProductsList :products="filterProducts" />
</template>

<script setup>
// Связка двух компонентов

const { data: ProductsData } = await useFetch(
  `https://fakestoreapi.com/products`
);

const filters = ref();

const filterHandle = (event) => {
  filters.value = event;
};

const filterProducts = computed(() => {
  return filters.value
    ? ProductsData.value
        .filter((elem) => elem.category === filters.value?.category)
        .filter(
          (product) =>
            product.price > filters.value?.price.from &&
            product.price < filters.value?.price.to
        )
    : ProductsData.value;
});
</script>

<style lang="scss" scoped></style>

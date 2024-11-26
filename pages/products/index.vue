<template>
  <NuxtLayout name="default">
    <UiTitle tag="h1">Filter</UiTitle>
    <ProductsFilter @update-filter="filterHandle" />
    <UiTitle tag="h1">Products</UiTitle>
    <ProductsList :products="filterProducts" />

    <template #aside>
      <OrdersList />
    </template>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
// Связка двух компонентов

const ProductsData = ref([]);

try {
  const { data, error } = await useFetch(`https://fakestoreapi.com/products`);

  if (data.value) {
    ProductsData.value = data.value;
  }

  console.log("error", error);
} catch (error) {
  console.log("error", error);
}

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

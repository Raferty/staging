<template>
  <ProductsFilter
    v-model:filter="productsFilter"
    :categories="categories"
    :products-filter="productsFilter"
  />
  <ProductsList :products-filtered-list="productsFilteredList" />
</template>

<script setup>
const productsList = await useProductsAPI();
const categories = await useProductsAPI("categories");
const productsFilter = reactive({
  checkedCategory: categories,
  price: {
    minPrice: Math.min(...productsList.map((e) => e.price)),
    maxPrice: Math.max(...productsList.map((e) => e.price)),
  },
  sortBy: "",
});

const productsFilteredList = computed(() => {
    switch (productsFilter.sortBy) {
    case "asc":
      productsList.sort((d1, d2) => {
        return d1.title.toLowerCase() > d2.title.toLowerCase() ? 1 : -1;
      });
      break;
    case "price":
      productsList.sort((d1, d2) => {
        return d1.price > d2.price ? 1 : -1;
      });
      break;
    case "rate":
      productsList.sort((d1, d2) => {
        return d1.rating.rate > d2.rating.rate ? 1 : -1;
      });
      break;
    default:
      productsList.sort((d1, d2) => {
        return d1.id > d2.id ? 1 : -1;
      });
  }
  // Фильтруем товары
  return productsList
    // По категории
    .filter((product) => {
      console.log("Ok?", productsFilter);
      return (productsFilter.checkedCategory ?? []).includes(
        product.category
      );
    })
    // По ценам
    .filter((product) => {
      return (
        product.price >= productsFilter.price.minPrice &&
        product.price <=
          (productsFilter.price.maxPrice
            ? productsFilter.price.maxPrice
            : Math.max(...productsList.map((e) => e.price)))
      );
    });
})



</script>
<style lang="scss" scoped></style>

<template>
  <ProductsFilter v-model:filter="productsFilter"
  :products-list="productsList"
  @submit-category="setCategory"
  @change-sort="getSorted"/>
  <ProductsList :products-filtered-list="productsFilteredList" />
</template>

<script setup>
const productsList = await useProductsAPI();
const categories = await useProductsAPI("categories");
const productsFilter = ref()
const productsFilteredList = ref(productsList)

function setCategory(params) {
  productsFilter.value.checkedCategory = params[0]? params : categories;
  getFilteredValue();
}

function getFilteredValue (){
  // Фильтруем товары
  let value = productsList
    // По категории
    .filter((product) => {
      console.log("Ok?");
      return (productsFilter.value.checkedCategory ?? []).includes(product.category);
    })
    // По ценам
    .filter((product) => {
      return product.price >= productsFilter.value.price.minPrice
      && product.price <= (productsFilter.value.price.maxPrice? productsFilter.value.price.maxPrice : Math.max(...productsList.map((e) => e.price)));
  });
  productsFilteredList.value = value;
  productsFilter.value.sortBy = "";
}


function getSorted(param) {
  switch (param) {
    case "asc":
      productsFilteredList.value.sort((d1, d2) => {
  return d1.title.toLowerCase() > d2.title.toLowerCase() ? 1 : -1;
});
      break;
    case "price":
      productsFilteredList.value.sort((d1, d2) => {
  return d1.price > d2.price ? 1 : -1;
});
      break;
    case "rate":
      productsFilteredList.value.sort((d1, d2) => {
  return d1.rating.rate > d2.rating.rate ? 1 : -1;
});
      break;
    default:
      productsFilteredList.value.sort((d1, d2) => {
  return d1.id > d2.id ? 1 : -1;
});
  }
}

</script>
<style lang="scss" scoped></style>

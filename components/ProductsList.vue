<template>
  <ProductsFilter :products-list="productsList"/>
  <div>
    <!-- <section class="products-info">
      <div class="products-info_sort">
        <label for="select-list">Sort<br></label>
        <select id="select-list" @change="sort($event.target.value)">
          <option value='default'>Default</option>
          <option value='abc'>By ABC</option>
          <option value='price'>By price</option>
          <option value='rate'>By rate</option>
        </select>
      </div>
      <div class="products-info__sum">Сумма к оплате - $ {{ productsSum }}</div>
    </section> -->
    <UiTitle tag="h1">Products</UiTitle>
    <section class="products-list">
      <div class="products-list__item" v-for="product in productsList" :key="product.id">
        <ProductCard :id="product.id" :title="product.title" :category="product.category" :price="product.price"
          :image="product.image" :rate="product.rating.rate" />
      </div>
    </section>
  </div>
</template>

<script setup>

const { data: ProductsData } = await useFetch(
  `https://fakestoreapi.com/products`
);

const productsSum = computed(() => {
  return ProductsData.value
    .map((i) => i.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
});
let sortParam;
let productsList = shallowRef(ProductsData.value);
function sort(value) {
  sortParam = value;
  productsList.value = SortedList()
};
function SortedList() {
  switch (sortParam) {
    case 'abc': return ProductsData.value.sort(sortByABC);
    case 'price': return ProductsData.value.sort(sortByPrice);
    case 'rate': return ProductsData.value.sort(sortByRate);
    default: return ProductsData.value.sort(sortById);
  }
};
let sortByABC = function (d1, d2) { return (d1.title.toLowerCase() > d2.title.toLowerCase()) ? 1 : -1; };
let sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
let sortByRate = function (d1, d2) { return (d1.rating.rate > d2.rating.rate) ? 1 : -1; };
let sortById = function (d1, d2) { return (d1.id > d2.id) ? 1 : -1; };
</script>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, auto));
  grid-gap: 20px;

  &__item {
    display: grid;

    @media all and (min-width: 1200px) {
      flex: 1 1 calc(33.333% - 32px);
    }
  }
}

.products-info {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #111;
  margin-bottom: 32px;
  padding: 16px;
}
</style>

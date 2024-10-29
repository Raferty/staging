<template>
  <ProductsFilter @filter="filteredList" :products-list="productsList" />
  <div>
    <section class="products-info">
      <div class="products-info_sort">
        <label for="select-list">Sort<br></label>
        <select id="select-list" @change="sortedList($event.target.value)">
          <option value='default'>Default</option>
          <option value='abc'>By ABC</option>
          <option value='price'>By price</option>
          <option value='rate'>By rate</option>
        </select>
      </div>
      <div class="products-info__sum">Сумма к оплате - $ {{ productsSum }}</div>
    </section>
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

const rawData = await useProductsAPI();
let productsList = ref(rawData);
let sortState;

const productsSum = shallowRef(computed(() => {
  return productsList.value
    .map((i) => i.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
}));

/**
 * Обновляет список @see productsList для @see ProductCard компонента
 *
 * @param  {array[] | undefined} filters - массив с именами категорий.
 */
function filteredList(filters) {
  productsList.value = rawData.filter((e) => { return (filters ?? []).includes(e.category) });
  sortedList(sortState) // Как сохранить состояние сортировки без костылей?
}


function sortedList(sortParam) {
  sortState = sortParam
  switch (sortParam) {
    case 'abc': productsList.value.sort(sortByABC);
      break
    case 'price': productsList.value.sort(sortByPrice);
      break
    case 'rate': productsList.value.sort(sortByRate);
      break
    default: productsList.value.sort(sortById);
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

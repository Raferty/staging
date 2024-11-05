<template>
  <div>
    <UiTitle tag="h1">Products</UiTitle>
    <span class="products-info__sum">Сумма - $ {{ productsSum }}</span>
    <section class="products-list">
      <div
        class="products-list__item"
        v-for="product in productsFilteredList"
        :key="product.id"
      >
        <ProductCard
          :id="product.id"
          :title="product.title"
          :category="product.category"
          :price="product.price"
          :image="product.image"
          :rate="product.rating.rate"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  productsFilteredList: {},
});

const productsSum = computed(() => {
  console.log("props.productsFilteredList", props.productsFilteredList)
  return props.productsFilteredList
    .map((i) => i.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
});
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  cursor: pointer;
  padding: 0px 10px;
  line-height: 28px;
  border-radius: 4px;
  transition: background 0.2s ease;
  font-weight: 600;
  font-size: 22px;
  color: #0941ac;
}
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
</style>

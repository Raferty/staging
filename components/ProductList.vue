<template>
  <section class="products-info">
    <div class="products-info__sum">Сумма к оплате - $ {{ productsSum }}</div>
  </section>
  <section class="products-list">
    <div
      class="products-list__item"
      v-for="product in ProductsData"
      :key="product.id"
    >
      <ProductCard
        :title="product.title"
        :category="product.category"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </section>
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
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  &__item {
    flex: 1 1 auto;

    @media all and (min-width: 1200px) {
      flex: 1 1 calc(33.333% - 32px);
    }
  }
}

.products-info {
  border-radius: 8px;
  border: 1px solid #111;
  margin-bottom: 32px;
  padding: 16px;
}
</style>

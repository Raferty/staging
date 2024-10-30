<template>
  <div>
    <UiTitle tag="h1">Products</UiTitle>
    <section class="products-list">
      <div class="products-list__item" v-for="product in productsFilteredList" :key="product.id">
        <ProductCard :id="product.id" :title="product.title" :category="product.category" :price="product.price"
          :image="product.image" :rate="product.rating.rate" />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  productsFilteredList: {
  }
});
console.log('Props', props)
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

</style>

<template>
    <section class="products-info">
    </section>
    <section class="products-list">
        <div class="products-list__item" v-for="product in ProductsData" :key="product.id">
            <ProductCard :title="product.title" :category="product.category" :price="product.price" :image="product.image" />
        </div>
    </section>
  </template>
  
  <script setup>
    import { ProductsData } from '@/fakedata/products';
</script>

  <style lang="scss">

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
        border: 1px solid #111; margin-bottom: 32px;
        margin-bottom: 32px;
        padding: 16px;
    }
</style>
  
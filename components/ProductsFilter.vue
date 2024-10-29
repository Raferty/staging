<template>
  <section>
    <UiTitle tag="h1">Filter</UiTitle>
    <div class="products-filter">
      <form action="" method="">
        <fieldset class="products-filter__categories">
          <legend>Categories</legend>
          <label class="products-filter__category" v-for="category in categories" :key="category">
            <input type="checkbox" :value="category" v-model="checkedCategory" />
            <span>{{ category }}</span>
          </label>
          <input @click="$emit('filter', checkedCategory)" type="button" value="Search">
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  productsList: {
  }
});
const categories = await useProductsAPI("categories")

const checkedCategory = ref([])

</script>

<style lang="scss" scoped>
.products-filter {
  width: 100%;

  &__categories {
    border: none;
    padding: 0;

    legend {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 24px;
    }

    input[type=button] {
      float: right;
      max-width: 220px;
      height: 48px;
      cursor: pointer;
      border-radius: 4px;
      background-color: #000000;
      font-weight: 600;
      font-size: 22px;
      color: #ffffff;

      /* Наведение мыши */
      &:hover {
        background-color: #666;
      }

      /* Активное состояние */
      &:active:not(:disabled){
        background-color: #323232;
        transition: background 0.2s ease;
      }

    }
  }

  &__category {
    display: inline-block;
    margin: 0 5px 0 0;
    user-select: none;
    position: relative;

    /* Наведение мыши */
    :hover {
      color: #666;
    }

    input[type=checkbox] {
      z-index: -1;
      opacity: 0;
      display: block;
      width: 0;
      height: 0;

      /* Отмеченное состояние */
      &:checked+span {
        background: #0941AC;
        color: #ffffff;
      }

      /* Активное состояние */
      &:active:not(:disabled)+span {
        background: #88caff;
      }
    }

    span {
      display: inline-block;
      cursor: pointer;
      padding: 0px 10px;
      line-height: 28px;
      border-radius: 4px;
      transition: background 0.2s ease;
      font-weight: 600;
      font-size: 22px;
      color: #0941AC;
    }

  }
}
</style>

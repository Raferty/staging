<template>
  <section>
    <UiTitle tag="h1">Filter</UiTitle>
    <div class="products-filter">
      <fieldset class="products-filter__categories">
        <UiTitle tag="h2">Category</UiTitle>
        <label
          class="products-filter__category"
          v-for="category in categories"
          :key="category"
        >
          <input type="checkbox" :value="category" v-model="checkedSet" />
          <span>{{ category }}</span>
        </label>
        <UiTitle tag="h2">Price</UiTitle>
        <label for="min">
          <input id="min" type="number" v-model="min" />
        </label>
        <label for="max">
          <input id="max" type="number" v-model="max" />
        </label>
        <input type="button" @click="$emit('submitCategory', checkedSet)" value="Submit" />
      </fieldset>
    </div>
  </section>
  <section class="products-info">
    <div class="products-info_sort">
      <UiTitle tag="h2">Sort</UiTitle>
      <label>
        <select v-model="sortParam" @change="$emit('changeSort',sortParam)">
          <option v-for="option in sortOptions" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </label>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(['submitCategory', 'changeSort'])

const props = defineProps({
  productsList: {},
});
const filter = defineModel("filter");

const categories = await useProductsAPI("categories");
const checkedSet = ref([]);
const min = ref(Math.min(...props.productsList.map((e) => e.price)));
const max = ref(Math.max(...props.productsList.map((e) => e.price)));
const sortParam = ref("");
const sortOptions = ref([
  { text: "Default", value: "" },
  { text: "By asc", value: "asc" },
  { text: "By price", value: "price" },
  { text: "By rate", value: "rate" },
]);

filter.value = {
  checkedCategory: ref(categories),
  price: {
    minPrice: ref(min),
    maxPrice: ref(max),
  },
  sortBy: ref(sortParam)
}



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

    input[type="button"] {
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
      &:active:not(:disabled) {
        background-color: #323232;
        transition: background 0.2s ease;
      }
    }

    input[type="number"] {
      max-width: 220px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid #111;
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

    input[type="checkbox"] {
      z-index: -1;
      opacity: 0;
      display: block;
      width: 0;
      height: 0;

      /* Отмеченное состояние */
      &:checked + span {
        background: #0941ac;
        color: #ffffff;
      }

      /* Активное состояние */
      &:active:not(:disabled) + span {
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
      color: #0941ac;
    }
  }
}

.products-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>

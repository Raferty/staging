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
        <input type="button" @click="setCategory(checkedSet)" value="Submit" />
        <UiTitle tag="h2">Price</UiTitle>
        <label for="min">
          <input id="min" type="number" v-model="minPrice" />
        </label>
        <label for="max">
          <input id="max" type="number" v-model="maxPrice" />
        </label>
      </fieldset>
    </div>
  </section>
  <section class="products-info">
    <div class="products-info_sort">
      <UiTitle tag="h2">Sort</UiTitle>
      <label>
        <select v-model="sortParam" @change="getSorted(sortParam)">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </label>
    </div>
    <span class="products-info__sum">Сумма к оплате - $ {{ productsSum }}</span>
  </section>
</template>

<script setup>
const props = defineProps({
  productsList: {},
});
const why = defineModel("why");
const categories = await useProductsAPI("categories");

const checkedCategory = ref(categories);
const checkedSet = ref([]);
function setCategory(params) {
  console.log("Param", params);
  checkedCategory.value = params;
  getProductsByFilter();
}

const minPrice = ref(Math.min(...props.productsList.map((e) => e.price)));
const maxPrice = ref(Math.max(...props.productsList.map((e) => e.price)));

const sortParam = ref("");
const options = ref([
  { text: "Default", value: "" },
  { text: "By asc", value: "asc" },
  { text: "By price", value: "price" },
  { text: "By rate", value: "rate" },
]);

function getProductsByFilter() {
  // Фильтруем товары
  let state = props.productsList;
  console.log(
    "checkedCategory\n ",
    checkedCategory.value,
    "minPrice",
    minPrice
  );
  let filtered = ref();
  filtered = state
    // По категории
    .filter((product) => {
      return (checkedCategory.value ?? []).includes(product.category);
    })

    // По брендам
    // .filter(product => {
    //   return selectBrand == 0 || product.brand == selectBrand;
    // })

    // По ценам
    .filter((product) => {
      return product.price >= minPrice.value && product.price <= maxPrice.value;
    });

  // По полю поиска
  // .filter(product => {
  //   return inputSearch == '' || product.title.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1;
  // });
  console.log("filtered ==>>>", filtered);
  why.value = filtered;
  sortParam.value = "";
}

function getSorted(param) {
  console.log("Get sort!!!");
  switch (param) {
    case "asc":
      why.value.sort(sortByABC);
      break;
    case "price":
      why.value.sort(sortByPrice);
      break;
    case "rate":
      why.value.sort(sortByRate);
      break;
    default:
      why.value.sort(sortById);
  }
}
let sortByABC = function (d1, d2) {
  return d1.title.toLowerCase() > d2.title.toLowerCase() ? 1 : -1;
};
let sortByPrice = function (d1, d2) {
  return d1.price > d2.price ? 1 : -1;
};
let sortByRate = function (d1, d2) {
  return d1.rating.rate > d2.rating.rate ? 1 : -1;
};
let sortById = function (d1, d2) {
  return d1.id > d2.id ? 1 : -1;
};

getProductsByFilter();

const productsSum = shallowRef(
  computed(() => {
    console.log("filtered ???", why);
    return why.value
      .map((i) => i.price)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  })
);
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

<template>
    <section class="products-filter">
      <div class="products-filter__container">
        <UiTitle tag="h3">Categories</UiTitle>
        <div class="products-filter__categories categories">
          <div
            v-for="(category, index) in CategoriesData"
            :key="index"
            class="categories__item"
            :class="{ 'categories__item--active': category === currentCategory }"
            @click="selectCategory(category)"
          >
            {{ category }}
          </div>
        </div>
        <UiTitle tag="h3">Price</UiTitle>
        <div class="products-filter__prices prices">
          <div class="prices__item">
            <div class="ui-input">
              <label for="proce_from" class="ui-input__label">from</label>
              <input
                v-model="priceFrom"
                id="proce_from"
                type="text"
                class="ui-input__input"
              />
            </div>
          </div>
          <div class="prices__item">
            <div class="ui-input">
              <label for="proce_to" class="ui-input__label">to</label>
              <input
                v-model="priceTo"
                id="proce_to"
                type="text"
                class="ui-input__input"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="products-filter__actions">
        <UiButton
          block
          size="large"
          class="products-filter__button"
          @click="$emit('updateFilter', filterData)"
          >Search</UiButton
        >
      </div>
    </section>
  </template>
  
  <script setup>
  const { data: CategoriesData } = await useFetch(
    `https://fakestoreapi.com/products/categories`
  );
  
  // переменные для блоков фильтра
  const currentCategory = ref("");
  const priceFrom = ref();
  const priceTo = ref();
  
  const selectCategory = (value) => {
    currentCategory.value = value;
  };
  
  // собранные данные которые нужно эмитом отправить наружу
  const filterData = computed(() => ({
    category: currentCategory.value,
    price: {
      from: priceFrom.value,
      to: priceTo.value,
    },
  }));
  </script>
  
  <style lang="scss" scoped>
  .products-filter {
    display: flex;
    align-items: flex-end;
    margin-bottom: 36px;
    background-color: #eeeded;
    padding: 16px;
    border-radius: 4px;
  
    &__categories {
      margin-bottom: 36px;
    }
  
    &__container {
      flex: 1;
    }
  
    &__actions {
      width: 220px;
      margin-left: 32px;
    }
  }
  
  .button {
    width: 100%;
    height: 48px;
    color: #fff;
    border-radius: 4px;
    background-color: #000;
    border: 1px solid #000;
    cursor: pointer;
    font-size: 22px;
    font-weight: 600;
  
    &:active {
      background-color: rgba($color: #000000, $alpha: 0.8);
    }
  }
  
  .prices {
    display: flex;
    gap: 12px;
  }
  
  .categories {
    display: flex;
    gap: 24px;
  
    &__item {
      font-size: 22px;
      line-height: 24px;
      color: #0941ac;
      padding: 2px 12px;
      font-weight: 600;
      transition: all 0.2s ease-in;
      border-radius: 4px;
  
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #0941ac;
      }
  
      &--active {
        color: #fff;
        background-color: #0941ac;
      }
    }
  }
  
  .ui-input {
    &__label {
      display: block;
      font-weight: 600;
      font-size: 12px;
      margin-bottom: 4px;
    }
  
    &__input {
      height: 36px;
      border-radius: 4px;
      border: 1px solid #000;
      padding: 0 12px;
    }
  }
  </style>
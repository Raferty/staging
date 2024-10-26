<template>
  <div class="product-card">
    <picture class="product-card__picture">
      <img src="/public/image/51eg55uWmdL._AC_UX679_ 1.png" alt="красная футболка" />
      <img src="/public/image/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_ 1.png" alt="белая футболка с черными руковаим">
      <img src="/public/image/71YXzeOuslL._AC_UY879_ 1.png" alt="синяя водолазка">
    </picture>
    <div class="product-card__info">
      <div class="product-card__about">
        <div class="product-card__name">{{ title }}</div>
        <div class="product-card__category">{{ category }}</div>
      </div>
      <div class="product-card__digit">
        <div class="product-card__price">$ {{ price }}</div>
        <div class="product-card__price product-card__price--ruble">₽ {{ DollarToRuble }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  category: String,
  price: [String, Number],
})

const DollarToRuble = computed(() => {
  const exchangeRate = 96.1079;
  const result = parseInt(props.price) * exchangeRate;
  return result.toFixed(2);
})
</script>

<style lang="scss" scoped>
.product-card {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #111;

  &__picture {
    margin-bottom: 16px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    font-weight: 600;
  }

  &__category {
    color: #757575;
  }

  &__digit {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 120px;
    margin-left: 16px;
  }

  &__price {
    text-align: right;
    font-weight: 600;

  &--ruble {
    font-size: 10px;
    }
  }
}
</style>
<template>
  <nuxt-link :to="`/products/${id}`" class="product-card">
    <picture class="product-card__picture">
      <img :src="image" alt="" />
    </picture>
    <div class="product-card__info">
      <div class="product-card__about">
        <div class="product-card__name">{{ title }}</div>
        <div class="product-card__category">{{ category }}</div>
      </div>
      <div class="product-card__digit">
        <div class="product-card__price">$ {{ price }}</div>
        <div class="product-card__price product-card__price--ruble">
          ₽ {{ DollarToRuble }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  id: [String, Number],
  title: String,
  image: String,
  category: String,
  price: [String, Number],
});

const DollarToRuble = computed(() => {
  const exchangeRate = 96.1079;
  const result = parseInt(props.price) * exchangeRate;
  return result.toFixed(2);
});
</script>

<style lang="scss" scoped>
.product-card {
  display: grid;
  text-decoration: none;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #111;

  &__picture {
    align-content: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__name {
    color: #1c1c1c;
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

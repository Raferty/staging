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
        <div class="product-card__rate">Rate {{ rate }}</div>
        <div class="product-card__price">$ {{ price }}</div>
        <div class="product-card__price product-card__price--ruble">
          ₽ {{ useDollarToRouble(price) }}
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
  rate: [String, Number],
});

</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 8px;
  text-decoration: none;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #111;

  &__picture {
    display: flex;
    align-content: center;
    justify-content: center;

    img {
      object-fit: contain;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 8px;
    align-content: center;
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
    flex-wrap: wrap;
    row-gap: 8px;
    width: 100%;
    margin-left: 16px;
  }

  &__rate {
    font-weight: 800;
  }

  &__price {
    text-align: center;
    font-weight: 600;

    &--ruble {
      text-align: center;
      font-size: 10px;
    }
  }
}
</style>

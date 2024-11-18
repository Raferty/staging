<template>
  <div class="product-card">
    <nuxt-link nuxt-link :to="`/products/${id}`">
      <picture class="product-card__picture">
        <img :src="image" alt="" class="product-card__image" />
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

    <UiButton
      v-if="authStore.isAuth"
      @click.prevent="cartStore.addProduct(localData)"
    >
      add product
    </UiButton>
    <UiButton
      v-if="authStore.isAuth && cartStore.isProductExist(localData.productId)"
      @click.prevent="cartStore.deleteProductById(localData.productId)"
    >
      delete product
    </UiButton>
  </div>
</template>

<script setup>
import { useAuthStore } from "./store/auth";
import { useCartStore } from "./store/cart";

const authStore = useAuthStore();
const cartStore = useCartStore();

const props = defineProps({
  id: [String, Number],
  title: String,
  image: String,
  category: String,
  price: [String, Number],
});

const localData = {
  productId: props.id,
  title: props.title,
  image: props.image,
  quantity: 1,
};

const DollarToRuble = computed(() => {
  const exchangeRate = 96.1079;
  const result = parseInt(props.price) * exchangeRate;
  return result.toFixed(2);
});
</script>

<style lang="scss" scoped>
.product-card {
  text-decoration: none;
  display: block;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #111;

  &__picture {
    margin-bottom: 16px;
    height: 430px;
  }

  &__image {
    max-height: 100%;
  }

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    color: #1c1c1c;
    font-weight: 600;
    min-height: 56px;
    margin-bottom: 16px;
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

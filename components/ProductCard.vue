<template>
  <div class="product-card">
    <div class="product-card__countdow">{{ resultTime }}</div>
    <div class="products-cart-message">
      {{ message }}

      <button @click.stop="updateMessage">Up!</button>
    </div>

    <nuxt-link nuxt-link :to="`/products/${id}`">
      <div>{{ cartStore.message }}</div>
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

    <UiButton v-if="authStore.isAuth" @click.prevent="handleProduct">
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
import { EToast } from "vue3-modern-toast";
import { useAuthStore } from "./store/auth";
import { useCartStore } from "./store/cart";

const time = ref(new Date(2025, 2, 1, 12, 0, 0));
const timerInterval = ref(null);
const resultTime = ref({});

const startInterval = () => {
  timerInterval.value = setInterval(countDown, 1000);
};

function countDown() {
  const countDownDate = time.value.getTime();
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log({
    days,
    hours,
    minutes,
    seconds,
  });

  resultTime.value = {
    days,
    hours,
    minutes,
    seconds,
  };
}

startInterval();

onMounted(() => {});

const authStore = useAuthStore();
const cartStore = useCartStore();

const { $toast } = useNuxtApp();

const handleProduct = () => {
  cartStore.addProduct(localData);

  $toast.configure({
    position: {
      bottom: 20,
      left: 20,
      // Vous pouvez aussi utiliser bottom et left
    },
  });

  $toast.show({
    message: "Hello World!",
    type: EToast.SUCCESS,
    duration: 3000,
    dismissible: true,
    icon: "✨",
  });
};

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

import { inject } from "vue";
import { setInterval } from "#imports";

const { message, updateMessage } = inject("message");
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

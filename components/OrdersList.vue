<template>
  <div class="orders-list" :class="classes">
    <div class="orders-list__toggle" @click="isHide = !isHide"></div>
    <div class="orders-list__header">
      <UiTitle tag="h3" class="orders-list__title">Cart</UiTitle>
      <div class="orders-list__clear" @click="cartStore.resetCart">clear</div>
    </div>
    <div class="orders-list__items">
      <div v-for="order in cartStore.ordersList" class="orders-list__item">
        <div class="orders-list__container">
          <div class="orders-list__tumb">
            <img :src="order.image" alt="" class="orders-list__image" />
          </div>
          <div class="orders-list__title">
            {{ order.title }} | {{ order.quantity }}
          </div>
        </div>
        <div class="orders-list__actions">
          <div class="orders-list__actions-buttons">
            <UiButton
              @click="cartStore.changeQuantity(order.productId, 'minus')"
              >-</UiButton
            >
            <UiButton @click="cartStore.changeQuantity(order.productId, 'plus')"
              >+</UiButton
            >
          </div>
          <div>
            <IconBasket
              class="orders-list__icon"
              @click="cartStore.deleteProductById(order.productId)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="orders-list__actions">
      <UiButton block size="large" @click="saveUserCart">Buy $</UiButton>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "./store/cart";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const cartStore = useCartStore();

const isHide = ref(props.visible);

const classes = computed(() => ({
  [`--hide`]: !isHide.value,
}));

const saveUserCart = () => {
  localStorage.setItem("userCart", JSON.stringify(cartStore.ordersList));
};
</script>

<style lang="scss" scoped>
.orders-list {
  position: relative;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 16px;
  width: 460px;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(0);
  transition: all 0.4s ease-in;

  &.--hide {
    transform: translateX(100%);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__clear {
    margin-bottom: 12px;
    cursor: pointer;
  }

  &__items {
    flex: 1;
  }

  &__item {
    display: flex;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #d9d9d9;

    &:last-child {
      border-bottom: 0;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    height: 60px;

    &-buttons {
      display: flex;
      gap: 4px;
    }
  }

  &__toggle {
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    border-radius: 4px;
    position: absolute;
    left: -34px;
    top: 20px;
    z-index: 10;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: url("~/assets/icons/cart.svg") center center no-repeat;
    background-size: 24px 24px;
    border-right: 0;
    cursor: pointer;
  }

  &__container {
    display: flex;
  }

  &__tumb {
    margin-right: 16px;
  }

  &__image {
    width: 72px;
  }

  &__icon {
    cursor: pointer;
    width: 32px;
    height: 32px;
  }
}
</style>

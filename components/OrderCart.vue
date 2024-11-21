<template>
  <div id="cart" class="cart" @mouseleave="hidden = true">
    <button class="cart__button" @mouseenter="hidden = false">
      <div class="cart__button__icon-container">
        <svg viewBox="0 0 48 48" width="48" height="48" class="icon">
          <use href="public\icons.svg#orders"></use>
        </svg>
      </div>
    </button>
    <div class="cart__order">
      <div class="cart__order__container" :hidden>
        <div class="cart__order__item-container">
          <div class="cart__order__item" v-for="order in cart">
            <picture class="cart__order__picture">
              <img :src="order.image" alt="" />
            </picture>
            <div class="cart__order__about">
              <div class="cart__order__about__title">{{ order.title }}</div>
              <div class="cart__order__about__category">
                {{ order.category }}
              </div>
              <div class="cart__order__about__price">$ {{ order.price }}</div>
            </div>
            <div class="cart__order__item__counter-container">
              <CounterCartButton
                class="cart__order__item__counter"
                v-if="orderStore.isProductExist(order.productId)"
                @counter="(e) => orderStore.changeQuantity(order.productId, e)"
                :quantity="order.quantity"
                >{{ order.quantity }}</CounterCartButton
              >
              <button
                class="cart__button bin"
                @click="() => orderStore.changeQuantity(order.productId, 0)"
              >
                <div class="cart__button__icon-container">
                  <svg viewBox="0 0 24 24" width="24" height="24" class="icon">
                    <use href="public\icons.svg#bin"></use>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="cart__order__button-container" v-if="cart.length > 0">
          <button class="cart__order__button">
            <span>Buy $ {{ productsSum }}</span>
          </button>
          <button
            class="cart__order__button"
            @click="orderStore.deleteAllProducts()"
          >
            <span>Clear All</span>
          </button>
        </div>
        <UiLabel tag="h3" v-else="!cart.length > 0"
          >There's nothing here yet</UiLabel
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const hidden = ref("");
import { useOrderStore } from "./store/cart";

const orderStore = useOrderStore();
const cart = orderStore.getOrders;

const productsSum = computed(() => {
  if (!!cart)
    return cart
      .map((e) => e.price * e.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
});
</script>

<style lang="scss">
$button-height: 48px;
$item-height: 96px;
$container-width: 460px;
.cart {
  position: relative;
  &__button {
    display: flex;
    cursor: pointer;
    align-items: center;
    height: $button-height;
    border: none;
    padding: 0;
    background-color: transparent;
    &.bin {
    height: calc($button-height/2);
    }
    &__icon-container {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  &__order {
    display: flex;
    position: absolute;
    top: 40px;
    right: 0;
    transform: translateY(-4px);
    transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
    max-height: calc(100vh - 48px);
    &__container {
      border-radius: 8px;
      padding: 12px 14px;
      width: $container-width;
      border: 1px solid transparent;
      background: white;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: background-color 0.5s;
      overflow: auto;
    }
    &__button-container {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
    &__item-container {
      display: flex;
      flex-direction: column;
      transition: border-color 0.5s;
    }
    &__item {
      display: flex;
      align-items: center;
      height: $item-height;
      border-bottom: solid 1px #213547;
      &__counter-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        width: 50%;
      }
      &__counter {
        height: calc($button-height/2);
        box-sizing: border-box;
      }
    }

    &__picture {
      height: $item-height;
      width: $item-height;
      display: flex;
      align-content: center;
      justify-content: center;

      img {
        object-fit: contain;
      }
    }
    &__about {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      font-size: 16px;
      line-height: 120%;
      &__title {
        height: 50%;
        overflow: hidden;
        font-weight: 600;
      }
      &__category {
        font-weight: 400;
        color: #757575;
      }
      &__price {
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
      }
    }
    &__button {
      width: 100%;
      height: $button-height;
      border: none;
      padding-bottom: 0;
      margin-top: 8px;
      padding: 0 14px;
    }
  }
}
</style>

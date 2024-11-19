<template>
  <div id="cart" class="card" @mouseleave="hidden = true">
    <button class="card__button" @mouseenter="hidden = false">
      <div class="card__button__container">
        <svg viewBox="0 0 48 48" width="48" height="48" class="icon">
          <use
            href="public\icons.svg#orders"
          ></use>
        </svg>
      </div>
    </button>
    <div class="card__order">
      <div class="card__order__container" :hidden>
        <div class="card__order__items" >
          <div class="card__order__item" v-for="card in order">
            <picture class="card__order__picture">
              <img :src="card.image" alt="" />
            </picture>
            <div class="card__order__about">
              <div class="card__order__name">{{ card.title }}</div>
              <div class="card__order__category">{{ card.category }}</div>
              <div class="card__order__price">$ {{ card.price }}</div>
            </div>
          </div>
        </div>
        <button class="card__order__item button">
          <span class="products-info__sum">Buy $ {{ productsSum }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const hidden = ref("");
import { useAuthStore } from "./store/auth";
import { useOrderStore } from "./store/card";

const authStore = useAuthStore();
const orderStore = useOrderStore();
const order = orderStore.getOrders;

const productsSum = computed(() => {
  if (!!order)
    return order
      .map((e) => e.price * e.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
});
</script>

<style lang="scss">
.card {
  position: relative;
  &__button {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0 12px;
    height: 48px;
    border: 0;
    padding: 0;
    background-color: transparent;
    background-image: none;
    color: #213547;
    transition: color 0.5s;
    &__container {
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
      padding: 12px 0;
      min-width: 192px;
      border: 1px solid transparent;
      background: white;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: background-color 0.5s;
      overflow: auto;
    }
    &__items {
      display: flex;
      flex-direction: column;
      padding: 0 14px;
      transition: border-color 0.5s;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 6px;
      position: relative;
    }
    &__picture {
      width: 72px;
      height: 92px;
    }
    &__about{
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    &__item.button {
      padding-bottom: 0;
      margin-top: 8px;
      padding: 0 14px;
    }
  }
}
</style>

<template>
  <div class="counter">
    <div class="counter__cart">
      <button
        class="counter__cart__button"
        @click="$emit('counter', quantity - 1)"
      >
        <UiLabel tag="h1">-</UiLabel>
      </button>
      <a class="counter__cart__value" href="#cart">
        <slot />
      </a>
      <button
        class="counter__cart__button"
        @click="$emit('counter', quantity + 1)"
      >
        <UiLabel tag="h1">+</UiLabel>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  quantity: 0,
});
</script>

<style lang="scss">
.counter {
  width: 100%;
    height: 100%;
  &__cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.059);
    border: none !important;
    border-radius: 4px;
    line-height: 20px;
    color: #222;
    font-weight: 500;
    font-size: 16px !important;
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: calc(100% / 3);
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
    &__value {
      display: flex;
      height: 100%;
      align-items: center;
      flex-grow: 1;
      justify-content: center;
      white-space: nowrap;
      text-decoration: none;
    }
  }
}
</style>

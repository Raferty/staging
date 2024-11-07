<template>
  <span class="title" :class="[`title__${tag}`]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  tag: String,
})
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  line-height: 1%;

  &__h1 {
    font-size: 32px;
  }

  &__h2 {
    font-size: 24px;
  }

  &__h3 {
    font-size: 19px;
  }

  &__h4 {
    font-size: 16px;
  }

  &__h5 {
    font-size: 14px;
  }

  &__h6 {
    font-size: 12px;
    line-height: 24px;
  }
}
</style>

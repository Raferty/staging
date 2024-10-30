<template>
  <h1 class="title" :class="[`title__${tag}`]">
    <slot />
  </h1>
</template>

<script setup>
defineProps({
  tag: String,
})
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  margin-bottom: 24px;
  margin-top: 48px;

  &__h1 {
    font-size: 48px;
  }

  &__h2 {
    font-size: 24px;
    margin-top: 24px;
  }

  &__h3 {
    font-size: 22px;
    margin-top: 24px;
  }
}
</style>

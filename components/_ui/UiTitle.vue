<template>
  <component :is="tag" class="title" :class="[`title--${tag}`]">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: String,
});
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  margin-bottom: 24px;

  &--h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  &--h2 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  &--h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }
}
</style>
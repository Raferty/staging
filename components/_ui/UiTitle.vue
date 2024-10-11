<template>
<h1 class="title" :class="[`title--${tag}`]">
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

  &--h1 {
    font-size: 48px;
  }
}
</style>

<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped></style>

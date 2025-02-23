<template>
  <li class="item">
    <slot name="icon" />
    <slot name="default"></slot>
    <slot name="icon2" />
  </li>
</template>

<script setup>
defineProps({
  item: [String, Object],
});
</script>

<style lang="scss" scoped>
.item {
  padding: 10px;
}
</style>

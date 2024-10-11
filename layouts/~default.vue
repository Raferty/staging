<template>
  <TheHeader />
  <main class="main l-default">
    <slot />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  flex: 1;
  width: 100%;
}
</style>

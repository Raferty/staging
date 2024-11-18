<template>
  <TheHeader />
  <main class="main l-default">
    <slot />
  </main>
  <aside class="aside">
    <slot name="aside"></slot>
  </aside>
  <TheFooter />
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  flex: 1;
  width: 100%;
}

.aside {
  position: fixed;
  right: 0;
  top: 96px;
  bottom: 120px;
}
</style>

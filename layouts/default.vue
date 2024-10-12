<template>
  <TheHeader />
  <main class="main l-default">
    <suspense>
      <slot />
    </suspense>
  </main>
  <TheFooter />
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  flex: 1;
  width: 100%;
}
</style>

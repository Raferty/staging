<template>
  <header class="header">
    <div class="header__container l-default">
      <Logo />
      <NavigationMenu />
      <LoginUser v-if="!authStore.isAuth" />
      <OrderCard />
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from "./store/auth";

const authStore = useAuthStore();
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 0;
  margin-bottom: 32px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

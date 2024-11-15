<template>
  <header class="header">
    <div class="header__container l-default">
      <Logo />
      <NavigationMenu />
      <div>Block for future search field</div>
    </div>
  </header>
</template>

<script setup></script>

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
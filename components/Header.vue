<template>
  <header>
    <Navigation />
    <!-- хэдер -->
    <h1>Articles</h1>
  </header>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: 'Header',
  components: { Navigation }
}
</script>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>
<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in routes" :key="item.name" class="nav__item">
        <NuxtLink
          :to="item.link"
          class="nav__link"
          :class="{ 'nav__link--active': item.link === route.path }"
          >{{ item.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();

const routes = ref([
  {
    name: "Main",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Articles",
    link: "/articles",
  },
]);
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    gap: 12px;
    display: flex;
    align-items: center;
  }

  &__link {
    color: #111111;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.4s ease-in;

    &:hover,
    &--active {
      color: #0941ac;
    }
  }
}
</style>
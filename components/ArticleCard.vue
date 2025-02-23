<template>
  <div class="article-card">
    <figure class="article-card__figure">
      <picture class="article-card__picture">
        <img
          :src="image"
          alt=""
          class="article-card__image"
        />
        <div v-if="false" class="article-card__plug">
          Image Plug
        </div>
      </picture>
      <figcaption class="article-card__figcaption">{{ author }}</figcaption>
    </figure>

    <div class="article-card__info">
      <div class="article-card__name">{{ title }}</div>

      <nuxt-link :to="url" target="_blank">Read more</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  author: String,
  image: String,
  url: String,
});
</script>

<style lang="scss" scoped>
.article-card {

  &__picture {
    position: relative;
    margin-bottom: 8px;
    width: 100%;
    height: 230px;
    overflow: hidden;
  }

  &__plug {
    width: 100%;
    height: 230px;
    background-color: #727272;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
  }

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__figure {
    margin-bottom: 16px;
  }

  &__figcaption {
    color: #727272;
    font-weight: 600;
    font-size: 12px;
  }

  &__info {
  }

  &__name {
    font-weight: 600;
    min-height: 60px;
    margin-bottom: 24px;
  }
}
</style>

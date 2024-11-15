<template>
  <section class="articles-list">
    <div class="articles-list__item" v-for="article in ArticlesData" :key="article.id">
      <ArticleCard  :title="article.title" :author="article.author" :image="article.urlToImage" :url="article.url" />
    </div>
  </section>
</template>

<script setup>
import { ArticlesData } from '@/fakedata/articles';
</script>

<style lang="scss" scoped>
.articles-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;


  &__item {
    flex: 1 1 auto;

    @media all and (min-width: 1200px) {
      flex: 1 1 calc(33.333% - 32px);
    }

  }
}

.articles-info {
  border-radius: 8px;
  border: 1px solid #111;
  margin-bottom: 32px;
  padding: 16px;
}
</style>
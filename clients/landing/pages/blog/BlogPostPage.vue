<template>
  <div class="blog-post">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
// This component acts as a wrapper for dynamic blog post content
</script>

<style scoped>
.blog-post {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-btn
          variant="text"
          color="primary"
          class="mb-4"
          :to="{ name: 'blog-list' }"
        >
          <v-icon start>mdi-arrow-left</v-icon>
          Back to Blog Posts
        </v-btn>

        <v-card class="blog-post">
          <v-card-title class="my-4">
            <h2>{{ post.title }}</h2>
          </v-card-title>
          <v-card-subtitle class="mb-4">
            <time>{{ post.date }}</time>
          </v-card-subtitle>
          <v-divider />
          <v-card-text class="text-body-1">
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { BlogPost } from "./types";

defineProps<{
  post: BlogPost;
}>();
</script>

<style scoped>
.blog-post :deep(h2) {
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
}

.blog-post :deep(h3) {
  font-size: 1.8rem;
  line-height: 1.3;
  margin: 2rem 0 1rem;
}

.blog-post :deep(p) {
  margin: 0 0 1.5rem 0;
}
</style>

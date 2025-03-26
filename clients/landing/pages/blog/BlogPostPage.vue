<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="blog-post">
          <v-card-title>
            <h2>{{ post.title }}</h2>
          </v-card-title>
          <v-card-subtitle class="mb-4">
            <time>{{ post.date }}</time>
          </v-card-subtitle>
          <v-divider />
          <v-card-text>
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

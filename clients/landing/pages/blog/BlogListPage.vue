<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h3 mb-6">Blog Posts</h1>
        <v-row>
          <v-col
            v-for="post in blogPosts"
            :key="post.slug"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card :to="`/blog/${post.slug}`" class="h-100">
              <v-card-text>
                <h2 class="text-h5 mb-2">{{ post.title }}</h2>
                <div class="text-caption text-medium-emphasis mb-2">
                  {{ post.date }}
                </div>
                <p class="text-body-2 text-medium-emphasis">
                  {{ post.excerpt }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { blogPosts } from "./blog-list";
</script>

<template>
  <div class="blog-list">
    <h1>Blog Posts</h1>
    <div class="posts">
      <div v-for="post in blogPosts" :key="post.slug" class="post-card">
        <router-link :to="`/blog/${post.slug}`" class="post-link">
          <h2>{{ post.title }}</h2>
          <p class="date">{{ post.date }}</p>
          <p class="excerpt">{{ post.excerpt }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const blogPosts = ref<BlogPost[]>([
  {
    title: "First Blog Post",
    date: "March 25, 2025",
    excerpt:
      "Welcome to our first blog post! This is a sample post to demonstrate the blog functionality.",
    slug: "2025-03-25-first-post",
  },
]);
</script>

<style scoped>
.blog-list {
  padding: 2rem;
}

.posts {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.post-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-link {
  text-decoration: none;
  color: inherit;
}

h2 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.date {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
}

.excerpt {
  color: #666;
  line-height: 1.6;
  margin: 0;
}
</style>

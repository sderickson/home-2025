<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">Welcome!</h1>

    <div class="prose prose-lg">
      <p class="mb-6">
        This site is my personal corner of the internet where I share my
        thoughts, projects, and experiences. Thanks for stopping by!
        <i class="mdi mdi-hand-wave text-cyan" />
      </p>

      <div class="mt-8">
        <router-link to="/about"> Learn more about me → </router-link>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Latest Updates</h2>

        <ul>
          <li><strong>2025-03-26</strong>: Built this site!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

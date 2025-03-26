<template>
  <div class="missing-post">
    <h1>Blog Post Not Found</h1>
    <p>Sorry, we couldn't find the blog post you're looking for.</p>
    <router-link to="/blog" class="back-link">
      Return to Blog List
    </router-link>
  </div>
</template>

<style scoped>
.missing-post {
  text-align: center;
  padding: 3rem 1rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.back-link:hover {
  background-color: #3aa876;
}
</style>

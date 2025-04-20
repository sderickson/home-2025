<template>
  <div class="max-w-3xl mx-auto px-4 py-4">
    <v-card>
      <v-card-title>Welcome!</v-card-title>
      <v-card-text>
        <div class="prose prose-lg">
          <p class="mb-6">
            This site is my personal corner of the internet where I share my
            thoughts, projects, and experiences. Thanks for stopping by!
            <i class="mdi mdi-hand-wave text-cyan" />
          </p>
        </div>
      </v-card-text>
    </v-card>

    <v-card class="mt-4">
      <v-card-title>Latest Updates</v-card-title>
      <v-table>
        <tbody>
          <tr>
            <td>2025-04-20</td>
            <td>
              Added blog post:
              <router-link to="/blog/2025-04-18-Theory-of-Dx">
                Theory of DX
              </router-link>
            </td>
          </tr>
          <tr>
            <td>2025-04-11</td>
            <td>
              Added blog post:
              <router-link to="/blog/2025-04-11-Reliability">
                The Reliability Problem
              </router-link>
            </td>
          </tr>
          <tr>
            <td>2025-04-05</td>
            <td>
              Added blog post:
              <router-link to="/blog/2025-04-04-Planning-And-Execution">
                Planning and Execution
              </router-link>
            </td>
          </tr>
          <tr>
            <td>2025-03-28</td>
            <td>
              Added blog post:
              <router-link to="/blog/2025-03-27-Doc-Driven-AI">
                Doc-Driven AI
              </router-link>
            </td>
          </tr>
          <tr>
            <td>2025-03-26</td>
            <td>
              Added blog post:
              <router-link to="/blog/2025-03-25-learned-so-far">
                Learned So Far
              </router-link>
            </td>
          </tr>
          <tr>
            <td>2025-03-25</td>
            <td>Built this site!</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

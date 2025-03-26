<template>
  <v-container>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <h1 class="text-h3 mb-4">Blog Post Not Found</h1>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <v-btn color="primary" :to="'/blog'" prepend-icon="mdi-arrow-left">
          Return to Blog List
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

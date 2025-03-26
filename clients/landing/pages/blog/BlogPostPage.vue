<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// This component acts as a wrapper for dynamic blog post content
</script>

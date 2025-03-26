<template>
  <v-app theme="light">
    <v-navigation-drawer v-model="drawer" color="cyan-darken-2">
      <v-list>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          to="/"
          :active="route.path === '/'"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-post"
          title="Blog"
          to="/blog"
          :active="route.path.startsWith('/blog')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="cyan-darken-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Home 2025</v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-yellow-lighten-5">
      <v-container fluid class="pa-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const drawer = ref(true);
const route = useRoute();
</script>

<style scoped>
.v-navigation-drawer {
  transition: transform 0.2s ease-in-out;
}

.v-list-item--active {
  background-color: rgb(var(--v-theme-cyan-lighten-3));
}
</style>

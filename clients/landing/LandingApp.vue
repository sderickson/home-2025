<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
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

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Home 2025</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
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
</style>

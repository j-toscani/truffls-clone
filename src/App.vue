<script setup lang="ts">
import { computed } from "vue";
import { routes } from "./router/index";
import TopNavigation from "./components/TopNavigation.vue";

const navigation = computed(() =>
  routes.map(({ name, path }) => ({
    label: name[0].toUpperCase() + name.slice(1),
    path,
  }))
);
</script>

<template>
  <header>
    <TopNavigation :navigation="navigation" />
  </header>
  <main class="wrapper">
    <RouterView />
  </main>
</template>

<style scoped></style>

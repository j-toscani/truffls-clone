<script setup lang="ts">
import { computed, ref, provide } from "vue";
import { routes } from "./router/index";
import TopNavigation from "./components/TopNavigation.vue";

const currentId = ref(1);
const later = ref([]);
const interview = ref([]);

provide("current", currentId);
provide("later", later);
provide("interview", interview);

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

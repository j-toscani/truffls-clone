<script setup lang="ts">
import { computed, ref, provide, onMounted } from "vue";
import { routes } from "./router/index";
import TopNavigation from "./components/TopNavigation.vue";
import useLocalStorage from "./composables/useLocalStorage";
import type { ApplicantTeaser } from "./types/ApplicantTeaser.interface";

const { restore } = useLocalStorage();

const currentId = ref(null);
const later = ref([]);
const interview = ref([]);

provide("current", currentId);
provide("later", later);
provide("interview", interview);

onMounted(() => {
  currentId.value = restore("currentId", 1);
  later.value = restore<ApplicantTeaser[]>("later", []);
  interview.value = restore<ApplicantTeaser[]>("interview", []);
});

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

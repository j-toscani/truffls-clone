<template>
  <nav>
    <RouterLink v-for="item in navigation" :to="item.path" :key="item.path">
      {{ item.label }}
    </RouterLink>
  </nav>
</template>
<script setup lang="ts">
import type navigationElement from "@/types/NavigationElement.interface";

defineProps<{ navigation: navigationElement[] }>();
</script>
<style scoped>
a {
  color: black;
}

a:not(:last-child)::after {
  content: "|";
  display: inline-block;
  margin: 0 0.5rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
</style>

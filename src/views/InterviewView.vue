<template>
  <ApplicationTeaserList :applicants="applicants" />
</template>
<script setup lang="ts">
import ApplicationTeaserList from "@/components/ApplicationTeaserList.vue";
import { applicants } from "@/mocks/apllicants";
</script>
<style scoped></style>

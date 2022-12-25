<template>
  <ApplicationTeaserList :applicants="later!" />
</template>
<script setup lang="ts">
import ApplicationTeaserList from "@/components/ApplicationTeaserList.vue";
import type { ApiApplicant } from "@/types/ApiApplicant.interface";
import { inject } from "vue";
import type { Ref } from "vue";

const later = inject<Ref<ApiApplicant[]>>("later");
</script>
<style scoped></style>

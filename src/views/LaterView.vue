<template>
  <ApplicationTeaserList :applicants="later!" />
</template>
<script setup lang="ts">
import ApplicationTeaserList from "@/components/ApplicationTeaserList.vue";
import { inject } from "vue";
import type { Ref } from "vue";
import type { ApplicantTeaser } from "@/types/ApplicantTeaser.interface";

const later = inject<Ref<ApplicantTeaser[]>>("later");
</script>
<style scoped></style>

<template>
  <ul>
    <ApplicantTeaser
      v-for="applicant in applicants"
      :key="applicant.fullName"
      :applicant="applicant"
    ></ApplicantTeaser>
  </ul>
</template>

<script setup lang="ts">
import ApplicantTeaser from "./ApplicantTeaser.vue";
import type { ApplicantTeaser as ApplicantTeaserType } from "@/types/ApplicantTeaser.interface";

defineProps<{ applicants: ApplicantTeaserType[] }>();
</script>

<style scoped>
ul {
  padding: 2rem;
  margin: 0;
}
</style>

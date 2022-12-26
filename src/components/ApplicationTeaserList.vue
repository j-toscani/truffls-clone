<template>
  <ul>
    <ApplicantTeaser
      v-for="applicant in applicants"
      :key="applicant.fullName"
      :applicant="applicant"
      class="teaser"
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
  padding: 0rem 2rem 2rem;
  margin: 0;
}

.teaser:not(:first-of-type) {
  border-top: 1px solid black;
  padding-top: 0.5rem;
  margin-top: 0.75rem;
}
</style>

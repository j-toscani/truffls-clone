<template>
  <ul>
    <ApplicantTeaser
      v-for="applicant in applicantTeasers"
      :key="applicant.fullName"
      :applicant="applicant"
    ></ApplicantTeaser>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ApiApplicant } from "@/types/ApiApplicant.interface";
import ApplicantTeaser from "./ApplicantTeaser.vue";

const props = defineProps<{ applicants: ApiApplicant[] }>();
const applicantTeasers = computed(() =>
  props.applicants.map((applicant) => ({
    fullName: `${applicant.firstName} ${applicant.lastName}`,
    jobDescription: applicant.company.title,
    image: applicant.image,
  }))
);
</script>

<style scoped>
ul {
  padding: 2rem;
  margin: 0;
}
</style>

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
import ApplicantTeaser from "@/components/ApplicantTeaser.vue";
const applicants = [
  {
    fullName: "Jon Doe",
    jobDescription: "Developer",
    image: "https://picsum.photos/300/300",
  },
];
</script>

<style scoped>
ul {
  padding: 2rem;
  margin: 0;
}
</style>

<template>
  <ApplicationTeaserList :applicants="applicants" />
</template>
<script setup lang="ts">
import ApplicationTeaserList from "@/components/ApplicationTeaserList.vue";

const applicants = [
  {
    fullName: "Jon Doe",
    jobDescription: "Developer",
    image: "https://picsum.photos/300/300",
  },
];
</script>
<style scoped></style>

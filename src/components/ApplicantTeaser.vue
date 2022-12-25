<template>
  <li>
    <img :src="applicant.image" :alt="altText" />
    <div class="applicant-info">
      <div class="applicant-name">{{ applicant.fullName }}</div>
      <div class="applicant-job">{{ applicant.jobDescription }}</div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { ApplicantTeaser } from "@/types/ApplicantTeaser";
import { computed } from "vue";

const props = defineProps<{
  applicant: ApplicantTeaser;
}>();

const altText = computed(
  () => `Image of applicant: ${props.applicant.fullName}`
);
</script>

<style scoped>
li {
  display: flex;
  gap: 1rem;
}

.applicant-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.applicant-name,
.applicant-job {
  line-height: 1.5;
}

img {
  max-height: 4rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
}
</style>

<template>
  <ApplicationTeaserList :applicants="interview!" />
</template>
<script setup lang="ts">
import ApplicationTeaserList from "@/components/ApplicationTeaserList.vue";
import { inject } from "vue";
import type { Ref } from "vue";
import type { ApplicantTeaser } from "@/types/ApplicantTeaser.interface";

const interview = inject<Ref<ApplicantTeaser[]>>("interview");
</script>
<style scoped></style>

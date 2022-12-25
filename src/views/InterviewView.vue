<template>
  <ApplicationTeaserList :applicants="interview!" />
</template>
<script setup lang="ts">
import ApplicationTeaserList from "@/components/ApplicationTeaserList.vue";
import type { ApiApplicant } from "@/types/ApiApplicant.interface";
import { inject } from "vue";
import type { Ref } from "vue";

const interview = inject<Ref<ApiApplicant[]>>("interview");
</script>
<style scoped></style>

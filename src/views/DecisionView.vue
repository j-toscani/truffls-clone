<template>
  <div class="decision-container">
    <ApplicantDisplay v-if="applicant" :applicant="applicant" />
    <div class="button-container">
      <button>
        <Done class="done" />
        <small> Job Interview </small>
      </button>
      <button>
        <Close class="close" />
        <small> Maybe Later </small>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import { onMounted, ref } from "vue";
import ApplicantDisplay from "@/components/ApplicantDisplay.vue";
import Done from "@material-design-icons/svg/filled/done.svg?component";
import Close from "@material-design-icons/svg/outlined/close.svg?component";

import fetchApplicant from "@/lib/fetchApplicant";
const applicant = ref(null);

onMounted(async () => {
  try {
    applicant.value = await fetchApplicant(1);
  } catch (error) {
    console.log(error);
  }
});
</script>
<style scoped>
.decision-container {
  display: grid;
  grid-template-rows: 1fr 6rem;
}

.button-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.done {
  stroke-width: 4px;
  stroke: green;
}
.close {
  stroke-width: 4px;
  stroke: red;
}

small {
  white-space: nowrap;
}

button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
  border: none;
}
</style>

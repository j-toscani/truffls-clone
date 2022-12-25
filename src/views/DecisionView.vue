<template>
  <div class="decision-container">
    <Transition mode="out-in">
      <ApplicantDisplay
        v-if="applicant"
        :key="applicant.id"
        :applicant="applicant"
      />
    </Transition>
    <div class="button-container">
      <button>
        <Done class="done" @click="addToInterview" />
        <small> Job Interview </small>
      </button>
      <button>
        <Close class="close" @click="addToLater" />
        <small> Maybe Later </small>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import type { ApiApplicant } from "@/types/ApiApplicant.interface";
import { onMounted, ref, inject, watch } from "vue";
import type { Ref } from "vue";
import ApplicantDisplay from "@/components/ApplicantDisplay.vue";
import Done from "@material-design-icons/svg/filled/done.svg?component";
import Close from "@material-design-icons/svg/outlined/close.svg?component";
import fetchApplicant from "@/lib/fetchApplicant";

const currentId = inject<Ref<number>>("current");
const later = inject<Ref<ApiApplicant[]>>("later");
const interview = inject<Ref<ApiApplicant[]>>("interview");
const applicant = ref<ApiApplicant | null>(null);

watch(currentId!, async (value) => {
  try {
    applicant.value = await fetchApplicant(value);
  } catch (error) {
    console.log(error);
  }
});

function addToLater() {
  if (!applicant.value || !currentId) return;
  later!.value.push(applicant.value);
  currentId.value++;
}
function addToInterview() {
  if (!applicant.value || !currentId) return;
  interview!.value.push(applicant.value);
  currentId.value++;
}

onMounted(async () => {
  try {
    applicant.value = await fetchApplicant(currentId?.value ?? 1);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
@keyframes pulse {
  0% {
    background-color: #ccc;
  }
  100% {
    background-color: #999;
  }
}

.dummy-content {
  width: 340px;
  margin: 0 auto;
  height: 100%;
}

.animated {
  height: 100%;
  animation: pulse 2s linear 0s infinite forwards alternate;
}

.decision-container {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr min(6rem, 25%);
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

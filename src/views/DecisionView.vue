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
      <BaseButton @click="addToInterview">
        <Done class="done" />
        <small> Job Interview </small>
      </BaseButton>
      <BaseButton @click="addToLater">
        <Close class="close" />
        <small> Maybe Later </small>
      </BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import type { ApiApplicant } from "@/types/ApiApplicant.interface";
import { ref, inject, watch } from "vue";
import type { Ref } from "vue";
import ApplicantDisplay from "@/components/ApplicantDisplay.vue";
import Done from "@material-design-icons/svg/filled/done.svg?component";
import Close from "@material-design-icons/svg/outlined/close.svg?component";
import fetchApplicant from "@/lib/fetchApplicant";
import BaseButton from "@/components/BaseButton.vue";
import useLocalStorage from "@/composables/useLocalStorage";
import type { ApplicantTeaser } from "@/types/ApplicantTeaser.interface";

const { save } = useLocalStorage();

const currentId = inject<Ref<number>>("current");
const later = inject<Ref<ApplicantTeaser[]>>("later");
const interview = inject<Ref<ApplicantTeaser[]>>("interview");
const applicant = ref<ApiApplicant | null>(null);

watch(
  currentId!,
  async (value) => {
    if (!value) return;
    try {
      applicant.value = await fetchApplicant(value);
    } catch (error) {
      console.log(error);
    }
  },
  { immediate: true }
);

function addToList(list: Ref<ApplicantTeaser[]>) {
  if (!applicant.value || !currentId) return;
  list.value.push(createApplicantTeaser(applicant.value));
  currentId.value++;
  saveState();
}

function createApplicantTeaser(applicant: ApiApplicant) {
  return {
    fullName: `${applicant.firstName} ${applicant.lastName}`,
    jobDescription: applicant.company.title,
    image: applicant.image,
  };
}

function addToLater() {
  addToList(later!);
}

function addToInterview() {
  addToList(interview!);
}

function saveState() {
  save<number>(currentId!.value, "currentId");
  save<ApplicantTeaser[]>(later?.value ?? [], "later");
  save<ApplicantTeaser[]>(interview?.value ?? [], "interview");
}
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
</style>

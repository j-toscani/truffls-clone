<template>
  <div>
    <img :src="props.applicant.image" width="320" height="240" />
    <h2>{{ fullName }}</h2>
    <ul>
      <li>
        <School />
        {{ applicant.university }}
      </li>
      <li>
        <Mail />
        {{ applicant.email }}
      </li>
      <li>
        <Work />
        {{ applicant.company.name }}
      </li>
      <li>
        <Person />
        {{ applicant.company.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import { computed } from "vue";

import type { ApiApplicant } from "@/types/ApiApplicant.interface";
import Mail from "@material-design-icons/svg/filled/contact_mail.svg?component";
import School from "@material-design-icons/svg/filled/school.svg?component";
import Work from "@material-design-icons/svg/filled/work.svg?component";
import Person from "@material-design-icons/svg/filled/person.svg?component";

const props = defineProps<{ applicant: ApiApplicant }>();

const fullName = computed(
  () => `${props.applicant.firstName} ${props.applicant.lastName}`
);
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 0;
}

img {
  aspect-ratio: 4/3;
  object-fit: contain;
}

li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

div {
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
}
</style>

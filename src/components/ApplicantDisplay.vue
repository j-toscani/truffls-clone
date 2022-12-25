<template>
  <div>
    <img :src="props.applicant.image" alt="" />
    <div>{{ fullName }}</div>
    <ul>
      <li>
        <Mail />
        {{ applicant.email }}
      </li>
      <li></li>
      <li></li>
      <li>

      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ApiApplicant } from "@/types/ApiApplicant.interface";

import Mail from "@material-design-icons/svg/filled/contact_mail.svg?component";

import { computed } from "vue";

const props = defineProps<{ applicant: ApiApplicant }>();

const fullName = computed(
  () => `${props.applicant.firstName} ${props.applicant.lastName}`
);
</script>

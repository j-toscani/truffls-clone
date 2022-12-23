<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Applications</RouterLink>
      <RouterLink to="/later">Later</RouterLink>
      <RouterLink to="/interviews">Interviews</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

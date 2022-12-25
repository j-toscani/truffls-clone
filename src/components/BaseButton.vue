<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
button {
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}

@media (hover: hover) {
  button:hover {
    background-color: rgba(220,220,220);
  }
}

button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
}
</style>
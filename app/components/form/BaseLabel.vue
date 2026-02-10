<script setup lang="ts">
defineProps<{
  htmlFor?: string;
  label?: string;
  required?: boolean;
  error?: string;
}>();
</script>

<template>
  <label
    v-if="label"
    :for="htmlFor"
    class="block text-sm font-bold"
    :class="[error ? 'text-maximiza-error' : 'text-maximiza-gris1']"
  >
    {{ label }}
    <span
      v-if="required"
      class="font-black"
      :class="[error ? 'text-maximiza-error' : 'text-maximiza-verde1']"
      >*</span
    >
  </label>
</template>

<script setup lang="ts">
defineProps<{
  htmlFor?: string;
  label?: string;
  subLabel?: string;
  required?: boolean;
  error?: string;
  subLabelType?: string;
}>();

const SUBLABELS: Record<string, string> = {
  BS: "en Bolívares",
  APPLY: "En caso de aplicar",
};
</script>

<template>
  <label
    v-if="label"
    :for="htmlFor"
    class="block mb-1 text-base font-semibold"
    :class="[error ? 'text-error' : 'text-black-alt/85']"
  >
    {{ label }} <span v-if="subLabel || subLabelType" class="font-normal text-xs">{{ `(${subLabel || SUBLABELS[subLabelType!]})` }}</span>
    <span
      v-if="required"
      class="ml-1 font-black"
      :class="[error ? 'text-error' : 'text-primary']"
      >*</span
    >
  </label>
</template>

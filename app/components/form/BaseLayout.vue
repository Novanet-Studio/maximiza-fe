<script setup lang="ts">
defineProps<{
  style?: string;
  useButtons?: boolean;
}>();
</script>

<template>
  <div :class="`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 ${style}`">
    <slot />


  </div>
  <div v-if="useButtons" class="col-span-full flex justify-end">
    <slot name="button-bar" />
  </div>
</template>

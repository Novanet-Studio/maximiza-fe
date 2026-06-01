<script setup lang="ts">
  defineProps<{
    style?: string
  }>()
</script>

<template>
  <div :class="`grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${style}`">
    <slot />

    <div class="col-span-full flex justify-end">
      <slot name="button-bar" />
    </div>
  </div>
</template>

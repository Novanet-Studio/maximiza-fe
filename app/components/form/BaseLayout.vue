<script setup lang="ts">
defineProps<{
  style?: string;
}>();
</script>

<template>
  <div
    :class="`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${style}`"
  >
    <slot />

    <div class="col-span-full flex justify-end">
      <slot name="button-bar" />
    </div>
  </div>

</template>

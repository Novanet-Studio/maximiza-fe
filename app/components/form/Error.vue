<script setup lang="ts">
defineProps<{
  error?: string;
}>();
</script>

<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <p
      v-if="error"
      class="text-maximiza-error text-sm mt-1 font-normal flex items-center gap-1"
    >
      <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
      {{ error }}
    </p>
  </transition>
</template>

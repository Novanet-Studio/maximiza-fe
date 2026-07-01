<script setup lang="ts">
defineProps<{
  error?: string
}>()
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
    <div
      v-if="error"
      class="text-error mt-1 grid grid-cols-[20px_1fr] items-center gap-1 text-sm"
    >
      <font-awesome-icon
        class="text-base"
        :icon="['fas', 'circle-exclamation']"
      />

      <p v-html="error" />
    </div>
  </transition>
</template>

<script setup lang="ts">
  defineProps<{
    estilo?: string
  }>()
</script>

<template>
  <header class="flex h-20 items-center">
    <div :class="['mx-auto w-full px-4', estilo]">
      <NuxtLink to="/" class="block w-48 sm:w-56">
        <!-- images -->
        <img class="h-auto w-full" src="/images/logo-maximiza.svg" alt="Maximiza Logo" />
      </NuxtLink>
    </div>
  </header>
</template>

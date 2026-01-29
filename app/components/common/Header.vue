<script setup lang="ts">
defineProps<{
  estilo?: string;
}>();
</script>

<template>
  <header class="flex items-center h-20">
    <div :class="['w-full mx-auto px-4', estilo]">
      <NuxtLink to="/" class="block w-48 sm:w-56">
        <img
          class="w-full h-auto"
          src="/images/logo-maximiza.svg"
          alt="Maximiza Logo"
        />
      </NuxtLink>
    </div>
  </header>
</template>

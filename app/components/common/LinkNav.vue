<script setup lang="ts">
defineProps<{
  to: string;
  text: string;
  estilo?: string;
  direction?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="px-4 py-2 text-sm text-maximiza-gris4 hover:font-black hover:text-maximiza-verde2 transition-colors duration-200"
    :class="estilo"
  >
    {{ text }}
  </NuxtLink>
</template>

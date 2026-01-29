<script setup lang="ts">
const route = useRoute();

// Por defecto el header (logo) se muestra, a menos que la página diga lo contrario
const showHeader = computed(() => {
  return route.meta.showHeader !== false;
});
</script>

<template>
  <div
    class="min-h-screen max-w-7xl mx-auto flex flex-col font-montserrat overflow-hidden"
  >
    <div class="w-full py-7 relative flex justify-between">
      <CommonHeader v-if="showHeader" />

      <CommonNavigation />
    </div>

    <main class="px-4 flex transition-opacity duration-500">
      <slot />
    </main>

    <CommonFooter />
  </div>
</template>

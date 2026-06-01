<script setup lang="ts">
  const route = useRoute()

  const showHeader = computed(() => {
    return route.meta.showHeader !== false
  })
</script>

<template>
  <div class="font-montserrat mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden">
    <div class="relative flex w-full justify-between py-7">
      <CommonHeader v-if="showHeader" />

      <CommonNavigation />
    </div>

    <main class="flex px-4 transition-opacity duration-500">
      <slot />
    </main>

    <CommonFooter />
  </div>
</template>

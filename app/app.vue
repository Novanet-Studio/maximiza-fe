<script setup lang="ts">
const overlay = ref<any>(null);
const router = useRouter();

router.beforeEach((to, from, next) => {
  if (overlay.value) {
    overlay.value.startTransition();

    setTimeout(() => {
      next();
    }, 500);
  } else {
    next();
  }
});

router.afterEach(() => {
  if (overlay.value) {
    setTimeout(() => {
      overlay.value.finishTransition();
    }, 100);
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPwaManifest />
    <PageOverlay ref="overlay" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
}
</style>

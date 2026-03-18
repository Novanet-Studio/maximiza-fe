<template>
  <div class="min-h-dvh w-full flex flex-col">
    <AppHeader />

    <main class="w-full flex-1 flex flex-col transition-opacity duration-500">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

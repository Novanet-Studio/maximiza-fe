<template>
  <div class="flex min-h-dvh w-full flex-col">
    <AppHeader />

    <main class="flex w-full flex-1 flex-col transition-opacity duration-500">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<template>
  <div class="flex min-h-dvh w-full flex-col">
    <AppHeader />

    <main class="flex w-full flex-1 flex-col transition-opacity duration-500">
      <slot />
    </main>

    <AppFooter />

    <!-- WhatsApp Floating Button -->
    <a
      href="https://wa.me/584228539447"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-primary hover:bg-primary-alt focus:ring-primary/30 fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:ring-4 focus:outline-none"
      aria-label="Contactar por WhatsApp"
    >
      <span
        class="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-25"
      ></span>
      <FontAwesomeIcon
        :icon="['fab', 'whatsapp']"
        class="relative z-10 h-7 w-7 text-[28px]"
        style="font-size: 28px; width: 28px; height: 28px"
      />
    </a>
  </div>
</template>

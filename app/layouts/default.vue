<template>
  <!-- The bottom padding reserves the fixed ticker's height so it never covers the footer.
       Ticker disabled for now: --ticker-h is 0; restore it to 2.25rem when re-enabling AppTicker. -->
  <div class="flex min-h-dvh w-full flex-col pb-(--ticker-h) [--ticker-h:0px]">
    <AppHeader />

    <main class="flex w-full flex-1 flex-col transition-opacity duration-500">
      <slot />
    </main>

    <AppFooter />

    <!-- <AppTicker class="fixed inset-x-0 bottom-0 z-40" /> -->

    <a
      href="https://wa.me/584228539447"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-primary hover:bg-primary-alt focus:ring-primary/30 fixed right-6 bottom-[calc(1.5rem+var(--ticker-h,0px))] z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:ring-4 focus:outline-none"
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

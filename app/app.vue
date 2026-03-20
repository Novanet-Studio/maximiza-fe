<script setup lang="ts">
import { useJsonLd } from '~/composables/useJsonLd';

useJsonLd({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Maximiza Casa de Bolsa",
  "url": "https://maximiza.com.ve",
  "logo": "https://maximiza.com.ve/images/brand/imagotipo.svg",
  "sameAs": [
    "https://www.linkedin.com/company/maximizacasadebolsa/",
    "https://x.com/maximiza"
  ]
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

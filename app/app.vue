<script setup lang="ts">
import { useJsonLd } from '~/composables/useJsonLd';
import { jsonld } from '~/assets/data/jsonld';

useJsonLd(jsonld.organization);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

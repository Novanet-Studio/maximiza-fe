<script setup lang="ts">
  import { useJsonLd } from '~/composables/useJsonLd'
  import { jsonld } from '~/assets/data/jsonld'



  useJsonLd(jsonld.organization)

  const route = useRoute()
  const siteConfig = useSiteConfig()

  useHead({
    link: [
      {
        rel: 'canonical',
        href: () => `${siteConfig.url}${route.path}`,
      },
    ],
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

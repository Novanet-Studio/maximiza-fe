<script setup lang="ts">
  import { metadata } from '@/assets/data/metadata'
  import { jsonld } from '~/assets/data/jsonld'

  useSeoMeta(metadata.blog)

  useJsonLd(jsonld.blog)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'Perspectivas Estratégicas <br /> y Análisis de Mercado'"
      :description="'Inteligencia financiera para el análisis de tendencias globales, macroeconómicos y perspectivas del mercado de capitales venezolano. Optimice sus inversiones con datos empíricos de alto valor.'"
      :image="{
        src: '/images/hero/maxmiza-manos-sujetando-calculadora-y-boligrafo.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/pattern-blog.webp',
      }"
    />

    <CommonTextBanner
      :description="'Todos los artículos'"
      :background="'/images/textBanner/contact.webp'"
      is-divider
    />

    <ModulesBlogArticlesGrid />
  </div>
</template>

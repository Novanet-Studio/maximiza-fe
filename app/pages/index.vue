<script setup lang="ts">
import { metadata } from '@/assets/data/metadata'
import { useJsonLd } from '~/composables/useJsonLd'
import { jsonld } from '~/assets/data/jsonld'

useSeoMeta(metadata.home)

useJsonLd(jsonld.home)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'Maximiza: experiencia <br /> y liderazgo'"
      :description="'Contamos con 33 años de experiencia en el mercado bursátil venezolano, ofreciendo todo tipo de servicio de intermediación bursátil en el área de corretaje de Títulos Valores, Finanzas Corporativas e Inversión y Manejo de Capital.'"
      :button="{
        text: 'Quiero invertir',
        link: '#',
      }"
      :image="{
        src: '/images/hero/maximiza-aro-forma-abstracta-cristal.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/pattern-home.webp',
      }"
    />

    <CommonTextBanner
      :description="'Pertenecemos a un ecosistema financiero consolidado a nivel nacional e internacional; somos miembros de la Bolsa de Valores de Caracas (BVC) y autorizados por la SUNAVAL. Nuestras alianzas estratégicas onshore y offshore nos otorgan una capacidad de respuesta inigualable  para estructurar soluciones a la medida, conectando de forma fluida el mercado venezolano con los flujos de capital global.'"
      :background="'/images/textBanner/home.webp'"
    />

    <ModulesHomePersonTypeSelect />

    <SharedOurServices />

    <ModulesHomeBookSection />
  </div>
</template>

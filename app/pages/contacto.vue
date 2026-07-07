<script setup lang="ts">
import { metadata } from '@/assets/data/metadata'
import commonData from '@/assets/data/common.json'
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
} from '@/assets/animations/motion'

import { useJsonLd } from '~/composables/useJsonLd'
import { jsonld } from '~/assets/data/jsonld'

const contactMethods = [
  {
    title: 'Atención al cliente',
    value: commonData.email,
    icon: '/images/pages/contact/items/maximiza-logo-instagram-icono.webp',
  },
  {
    title: 'Master',
    value: commonData.phone,
    icon: '/images/pages/contact/items/maximiza-contacto-master-icono.webp',
  },
  {
    title: 'Fax',
    value: commonData.fax,
    icon: '/images/pages/contact/items/maximiza-contacto-fax-icono.webp',
  },
]

useSeoMeta(metadata.contacto)

useJsonLd(jsonld.contact)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'Inicie la estructuración de su nueva estrategia financiera'"
      :description="'Evaluación confidencial para proteger su tesorería de la volatilidad o diseñar un financiamiento a la medida para su ciclo productivo.'"
      :image="{
        src: '/images/hero/maxmiza-mano-femenina-sujetando-boligrafo-organizando-monedas.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/pattern-contacto.webp',
      }"
    />

    <ModulesContactForm />

    <motion.section
      class="container mx-auto px-4 py-16 md:px-0"
      :variants="generalContainerVariants"
      initial="hidden"
      whileInView="visible"
      :viewport="{ once: true, margin: '-50px' }"
    >
      <div
        class="flex flex-col items-center gap-16 lg:flex-row lg:items-stretch lg:gap-24"
      >
        <motion.div
          class="flex w-full max-w-[471px] flex-col shadow-lg lg:w-1/2"
          :variants="generalItemVariants"
        >
          <div class="h-100 w-full lg:h-112.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1148587256353!2d-66.8666605885711!3d10.491610989597191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a591b8dcdeec3%3A0x1118acd802417a6e!2sMaximiza%20Casa%20de%20Bolsa%20C.A!5e0!3m2!1ses!2sve!4v1773170192534!5m2!1ses!2sve"
              class="h-full w-full border-0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div class="bg-black-alt flex grow flex-col justify-center p-10">
            <h3 class="mb-2 text-white">Dirección</h3>
            <p class="text-white-alt">{{ commonData.address }}</p>
          </div>
        </motion.div>

        <motion.div
          class="flex w-full flex-col justify-center gap-8 pl-12 md:w-auto lg:w-1/2"
          :variants="generalContainerVariants"
        >
          <motion.div
            v-for="(method, index) in contactMethods"
            :key="index"
            :variants="generalItemVariants"
            class="border-gray flex h-28 w-full border bg-white"
          >
            <div
              class="bg-black-alt mt-2 flex h-18 w-18 shrink-0 -translate-x-1/2 items-center justify-center p-6"
            >
              <img
                :src="method.icon"
                :alt="method.title"
                :title="method.title"
                class="h-18 w-18 object-contain"
              />
            </div>
            <div class="flex grow -translate-x-5 flex-col justify-center py-8">
              <h5 class="text-black-alt">{{ method.title }}</h5>
              <p class="text-gray">{{ method.value }}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  </div>
</template>

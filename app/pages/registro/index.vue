<script setup lang="ts">
import { motion } from 'motion-v'

import { metadata } from '~/assets/data/metadata'
import { jsonld } from '~/assets/data/jsonld'

import {
  generalContainerVariants,
  generalItemVariants,
  overlayVariants,
} from '~/assets/animations/motion'

useSeoMeta(metadata.registro)

useJsonLd(jsonld.register)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'¡Bienvenido a Maximiza <br /> Casa de Bolsa!'"
      :description="'Abre tu Cuenta de Corretaje Bursátil de forma rápida, cumpliendo con la normativa de la Superintendencia Nacional de Valores (SNV).'"
      :image="{
        src: '/images/hero/maxmiza-hombres-en-traje-sentados-de-frente-escritorio.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/pattern-registro.webp',
      }"
    />

    <motion.section
      class="container flex w-full flex-col items-center justify-center overflow-hidden pt-17.5 pb-40"
      :variants="generalContainerVariants"
      initial="hidden"
      whileInView="visible"
      :viewport="{ once: true, margin: '-50px' }"
    >
      <CommonSectionHeader
        title="¿Qué tipo de registro deseas realizar?"
        description="Selecciona una opción para comenzar:"
      />

      <div
        class="flex w-full max-w-2xl flex-col items-center justify-around max-sm:gap-16 md:flex-row"
      >
        <NuxtLink title="Persona natural" to="/registro/persona-natural">
          <motion.button
            type="button"
            class="group flex flex-col items-center gap-4"
            :variants="generalItemVariants"
            initial="hidden"
            whileHover="hover"
            animate="visible"
          >
            <div
              class="bg-white-alt relative h-[275px] w-[275px] overflow-hidden p-4"
            >
              <motion.div
                class="bg-primary absolute top-0 left-0 z-0 h-full"
                :variants="overlayVariants"
              />

              <img
                src="/images/pages/home/maximiza-planta-cristal-inversionista-natural.webp"
                alt="Person Type Natural"
                title="Person Type Natural"
                class="relative z-10 h-full w-full object-contain"
              />
            </div>

            <label
              for="person-type-natural"
              class="text-black-alt font-serif text-2xl font-extrabold transition-colors duration-300 group-hover:text-black md:text-xl"
              >Persona natural</label
            >
          </motion.button>
        </NuxtLink>

        <NuxtLink title="Persona jurídica" to="/registro/persona-juridica">
          <motion.button
            type="button"
            class="group flex flex-col items-center gap-4"
            :variants="generalItemVariants"
            initial="hidden"
            whileHover="hover"
            animate="visible"
          >
            <div
              class="bg-white-alt relative h-[275px] w-[275px] overflow-hidden p-4"
            >
              <motion.div
                class="bg-black-alt absolute top-0 left-0 z-0 h-full"
                :variants="overlayVariants"
              />

              <img
                src="/images/pages/home/maximiza-edificios-cristal-inversionista-juridico.webp"
                alt="Person Type Jurídica"
                title="Person Type Jurídica"
                class="relative z-10 h-full w-full object-contain"
              />
            </div>

            <label
              for="person-type-jurídica"
              class="text-black-alt font-serif text-2xl font-extrabold transition-colors duration-300 group-hover:text-black md:text-xl"
              >Persona jurídica</label
            >
          </motion.button>
        </NuxtLink>
      </div>
    </motion.section>
  </div>
</template>

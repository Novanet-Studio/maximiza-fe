<script setup lang="ts">
import { metadata } from '@/assets/data/metadata'
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
} from '~/assets/animations/motion'
import { useJsonLd } from '~/composables/useJsonLd'
import { jsonld } from '~/assets/data/jsonld'

useSeoMeta(metadata.servicios)

useJsonLd(jsonld.services)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'Aceleramos y protegemos <br /> el valor de su capital'"
      :description="'Gestionamos activos líquidos e instrumentos de financiamiento nacionales e internacionales para impulsar el crecimiento patrimonial y corporativo.'"
      :button="{
        text: 'Explore nuestras soluciones financieras',
        link: '#',
      }"
      :image="{
        src: '/images/hero/maxmiza-operadores-financieros.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/pattern-servicios.webp',
      }"
    />

    <SharedOurServices is-reverse />

    <motion.section
      class="container mx-auto flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden py-16"
      :variants="generalContainerVariants"
      initial="hidden"
      animate="visible"
    >
      <motion.header
        class="flex flex-col"
        :variants="generalItemVariants"
        initial="hidden"
        animate="visible"
      >
        <h2 class="text-left">Apertura Privada de Cuenta de Corretaje</h2>

        <h3 class="mb-8 text-left">
          (Inversionistas Corporativos e Individuales)
        </h3>

        <p class="text-gray text-left text-base lg:text-lg">
          Comience su recorrido de inversión y diversificación con el respaldo,
          la discreción y la solidez institucional de Maximiza. En estricto y
          riguroso apego al marco regulatorio tutelado por la Superintendencia
          Nacional de Valores (SUNAVAL), hemos diseñado un proceso de apertura
          de cuentas fluido, transparente y de confidencialidad extrema.
          <br />
          <br />
          Para proceder con la integración formal de su expediente fiduciario,
          le invitamos a descargar y evaluar nuestro Contrato de Cuenta de
          Corretaje Bursátil, junto con la documentación estándar de
          Identificación del Inversor. Nuestro equipo élite de asesores
          patrimoniales le acompañará y guiará de manera personalizada en cada
          paso del proceso: desde la validación de la Ficha de Registro de
          Firmas hasta la delegación del Poder de manejo de cuenta custodia.
          Nuestro objetivo primordial es garantizar que su incursión estratégica
          en el mercado de capitales sea expedita, tecnológicamente segura y
          absolutamente blindada desde la perspectiva legal y jurídica.
        </p>
      </motion.header>

      <div
        class="mx-auto mt-32 flex w-full max-w-5xl flex-col items-center justify-center gap-x-8 gap-y-40 px-4 md:mt-48 md:flex-row md:items-stretch md:gap-y-0 md:px-0 lg:gap-x-16"
      >
        <motion.div
          class="border-white-alt2 group relative flex w-full max-w-[340px] flex-col items-center border bg-white pt-32 pb-12 transition-colors duration-300 lg:pt-40"
          :variants="generalItemVariants"
          initial="hidden"
          animate="visible"
        >
          <div
            class="bg-white-alt absolute top-0 left-1/2 flex aspect-square w-[220px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden p-0 transition-transform duration-300 lg:w-64 lg:p-0"
          >
            <img
              src="/images/pages/home/maximiza-inversionista-individual.webp"
              alt="Persona natural"
              title="Persona natural"
              class="relative z-10 h-full w-full object-contain"
            />
          </div>

          <h3 class="text-black-alt pb-8 text-2xl font-extrabold">
            Persona natural
          </h3>

          <NuxtLink
            title="Quiero registrarme"
            :to="'/registro/persona-natural'"
          >
            <UiButton
              :text="'Quiero registrarme'"
              :icon="'arrow-right-to-bracket'"
              variant="primary"
            />
          </NuxtLink>
        </motion.div>

        <motion.div
          class="border-white-alt2 group relative flex w-full max-w-[340px] flex-col items-center border bg-white pt-32 pb-12 transition-colors duration-300 lg:pt-40"
          :variants="generalItemVariants"
          initial="hidden"
          animate="visible"
        >
          <div
            class="bg-white-alt absolute top-0 left-1/2 flex aspect-square w-[220px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden p-0 transition-transform duration-300 lg:w-64 lg:p-0"
          >
            <img
              src="/images/pages/home/maximiza-inversionistas-juridico.webp"
              alt="Persona jurídica"
              title="Persona jurídica"
              class="relative z-10 h-full w-full object-contain"
            />
          </div>

          <h3 class="text-black-alt pb-8 text-2xl font-extrabold">
            Persona jurídica
          </h3>

          <NuxtLink
            title="Quiero registrarme"
            :to="'/registro/persona-juridica'"
          >
            <UiButton
              :text="'Quiero registrarme'"
              :icon="'arrow-right-to-bracket'"
              variant="secondary"
            />
          </NuxtLink>
        </motion.div>
      </div>
    </motion.section>
  </div>
</template>

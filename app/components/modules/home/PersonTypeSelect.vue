<script setup lang="ts">
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
  overlayVariants,
} from '@/assets/animations/motion'
</script>

<template>
  <motion.section
    class="container flex w-full flex-col items-center justify-center overflow-hidden py-17.5"
    :variants="generalContainerVariants"
    initial="hidden"
    whileInView="visible"
    :viewport="{ once: true, margin: '-50px' }"
  >
    <CommonSectionHeader
      title="Alcance internacional, ejecución local impecable"
      description="Brindamos atención táctica y estratégica para todos nuestros clientes en el extenso universo del mercado de capitales"
    />

    <div
      class="flex w-full max-w-2xl flex-col items-center justify-evenly gap-10 md:flex-row md:gap-0"
    >
      <NuxtLink to="/registro/persona-natural">
        <motion.button
          type="button"
          class="group flex cursor-pointer flex-col items-center gap-4"
          :variants="generalItemVariants"
          initial="hidden"
          whileHover="hover"
          animate="visible"
        >
          <div
            class="bg-white-alt relative h-[275px] w-[275px] overflow-hidden p-4 md:h-[190px] md:w-[190px] xl:h-[275px] xl:w-[275px]"
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

      <NuxtLink to="/registro/persona-juridica">
        <motion.button
          type="button"
          class="group flex cursor-pointer flex-col items-center gap-4"
          :variants="generalItemVariants"
          initial="hidden"
          whileHover="hover"
          animate="visible"
        >
          <div
            class="bg-white-alt relative h-[275px] w-[275px] overflow-hidden p-4 md:h-[190px] md:w-[190px] xl:h-[275px] xl:w-[275px]"
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
</template>

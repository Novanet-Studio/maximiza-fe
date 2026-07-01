<script setup lang="ts">
import { motion } from 'motion-v'
import companyData from '@/assets/data/common.json'
import { generalItemVariants } from '@/assets/animations/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <section class="bg-white-alt flex w-full items-center justify-center py-40">
    <div
      class="container mx-auto mt-20 flex justify-center px-4 sm:px-12 md:mt-0"
    >
      <motion.div
        :variants="generalItemVariants"
        initial="hidden"
        whileInView="visible"
        :viewport="{ once: true, margin: '-100px' }"
        class="border-gray/30 relative flex w-full max-w-5xl flex-col items-stretch border bg-white md:flex-row"
      >
        <!-- Text Content -->
        <div
          class="z-0 flex w-full flex-col items-start p-4 px-6 text-left max-sm:pt-52 md:w-3/5 md:items-end md:p-6 md:text-right lg:p-10"
        >
          <h2
            class="mb-4 text-left text-2xl leading-[26px] md:text-right md:text-base md:leading-[18.09px] lg:text-2xl lg:leading-[26px]"
          >
            Memoria y <br class="hidden lg:block" />
            liderazgo intelectual
          </h2>

          <p
            class="text-gray text mb-1 w-full max-w-md text-left text-base leading-[24px] md:text-right md:text-[9.74px] md:leading-[18.09px] lg:text-base lg:leading-[24px]"
          >
            El mercado de valores tiene historia. <br />
            Obra clave de 2022, auspiciada por nuestra firma, que documenta la
            resiliencia, evolución y perspectivas del ecosistema bursátil
            venezolano. Testimonio de nuestro arraigo histórico y compromiso con
            el desarrollo económico nacional.
          </p>

          <h5
            class="text-black-alt mt-4 mb-2 w-full text-left text-lg font-bold md:text-right lg:text-xl"
          >
            Más información
          </h5>

          <div
            class="text-gray flex w-full flex-col flex-wrap items-start justify-end gap-x-3 pb-8 text-left font-medium md:flex-row md:items-center md:pb-0 md:text-right lg:gap-x-5"
          >
            <a
              :title="companyData.email"
              :href="`mailto:${companyData.email}`"
              class="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <FontAwesomeIcon
                :icon="faEnvelope"
                class="text-primary text-xl"
              />
              {{ companyData.email }}
            </a>
            <a
              :title="companyData.phone"
              :href="`tel:${companyData.phone.replace(/[\s-()]/g, '')}`"
              class="flex items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-80"
            >
              <FontAwesomeIcon :icon="faPhone" class="text-primary text-xl" />
              {{ companyData.phone }}
            </a>
          </div>
        </div>

        <!-- Book Image (Absolute Positioning) -->
        <div
          class="pointer-events-none absolute top-0 left-1/2 z-10 flex w-50 -translate-x-1/2 -translate-y-[45%] justify-center sm:w-60 md:top-1/2 md:left-3/5 md:w-70 md:translate-x-0 md:-translate-y-1/2 lg:w-80 xl:w-90"
        >
          <img
            src="/images/pages/home/book.webp"
            alt="Pasado, presente y futuro del mercado de valores en Venezuela"
            title="Pasado, presente y futuro del mercado de valores en Venezuela"
            class="w-full object-contain shadow-[15px_15px_24px_-3px_rgba(0,_0,_0,_0.5)]"
          />
        </div>
      </motion.div>
    </div>
  </section>
</template>

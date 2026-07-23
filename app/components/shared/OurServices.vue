<script setup lang="ts">
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
} from '@/assets/animations/motion'

const services = [
  {
    title: 'Intermediación bursátil',
    description:
      'Ejecución algorítmica y transparente en el mercado de valores para la optimización de carteras de renta fija y variable.',
    image: '/images/pages/home/services/1.webp',
  },
  {
    title: 'Finanzas corporativas',
    description:
      'Asesoría analítica integral en valoración de empresas, fusiones, adquisiciones (M&A) y reestructuración de capital.',
    image: '/images/pages/home/services/2.webp',
  },
  {
    title: 'Estructuración y colocación de deuda',
    description:
      'Colocación de papeles comerciales e instrumentos indexados para blindar y potenciar la liquidez empresarial.',
    image: '/images/pages/home/services/3.webp',
  },
]

const props = withDefaults(
  defineProps<{
    isReverse?: boolean
  }>(),
  {
    isReverse: false,
  }
)
</script>

<template>
  <motion.div
    id="Soluciones-financieras"
    :variants="generalContainerVariants"
    initial="hidden"
    whileInView="visible"
    :viewport="{ once: true, margin: '-120px' }"
    class="mb-8 md:mb-20"
  >
    <CommonContentWithColumns
      backgroundImage="/images/pages/home/our-services-banner.webp"
      title="Soluciones <br /> financieras integrales"
    >
      <motion.div :variants="generalItemVariants">
        <h4 class="content-with-columns mb-4 text-white">
          Legitimación de capitales
        </h4>

        <p class="content-with-columns text-white">
          Diseñamos vehículos de inversión y financiamiento estrictamente
          adaptados a la coyuntura económica imperante, alineando su perfil de
          riesgo con los objetivos de crecimiento patrimonial a largo plazo.
        </p>
      </motion.div>
    </CommonContentWithColumns>

    <div
      class="container grid w-full -translate-y-10 grid-cols-1 justify-items-center gap-12 md:translate-y-0 md:grid-cols-[repeat(3,180px)] md:justify-between md:gap-8 lg:grid-cols-[repeat(3,280px)] lg:gap-12 xl:gap-16"
    >
      <CommonContentCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :content="service.description"
        :styles="{
          title: 'text-black-alt',
          content:
            'text-[12px] leading-[20px] md:text-[10.33px] md:leading-[13.89px] lg:text-[13.18px] lg:leading-[20.77px] text-gray',
          wrapper: `flex-1 p-8 md:p-4 lg:p-8 ${props.isReverse ? '' : 'pt-8'} flex flex-col justify-start gap-[10px] lg:gap-[30px]`,
        }"
        :image="{ url: service.image, alt: service.title }"
        class="h-full"
        is-vertical
        :is-reverse="props.isReverse"
      />
    </div>
  </motion.div>
</template>

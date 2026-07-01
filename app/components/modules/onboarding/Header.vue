<script setup lang="ts">
import companyData from '@/assets/data/common.json'

import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
} from '~/assets/animations/motion'

interface Props {
  title: string
  description: string
  banner: {
    src: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <motion.div
    :variants="generalContainerVariants"
    initial="hidden"
    whileInView="visible"
    :viewport="{ once: true, margin: '-120px' }"
    class="mt-[10vh] max-sm:pb-20"
  >
    <CommonContentWithColumns
      :backgroundImage="props.banner.src"
      :title="props.title"
    >
      <motion.div :variants="generalItemVariants">
        <p class="content-with-columns text-start text-white">
          {{ props.description }}
        </p>
      </motion.div>
    </CommonContentWithColumns>

    <div
      class="container grid w-full translate-y-0 grid-cols-1 justify-items-center gap-12 md:grid-cols-3 md:justify-around md:gap-8 lg:gap-12 xl:gap-16"
    >
      <CommonContentCard
        subtitle="Paso 1:"
        title="Onboardings de la CVV"
        content="Realiza tu registro o actualización de datos en la Caja Venezolana de Valores (CVV) y descarga la lanilla firmada:"
        :image="{
          url: '/images/pages/registro/header/1.webp',
          alt: 'Onboardings_de_la_CVV',
        }"
        :styles="{
          title: 'text-black-alt mb-4',
          content: 'text-gray',
          wrapper: `flex-1 p-6 md:p-4 lg:p-6 flex flex-col justify-start`,
        }"
        :button="{
          label: 'Onboarding SITRAD',
          link: '/https://www.cajavenezolana.com/sitradweb/login.php',
          icon: 'hand-point-right',
        }"
        is-vertical
      />

      <CommonContentCard
        subtitle="Paso 2:"
        title="Registro en línea"
        content="Completa el formulario de registro digital. Nuestro sistema genera y completa automáticamente las siguientes planillas:"
        :image="{
          url: '/images/pages/registro/header/2.webp',
          alt: 'Registro_en_linea',
        }"
        :styles="{
          title: 'text-black-alt mb-4',
          content: 'text-gray',
          wrapper: `flex-1 p-6 md:p-4 lg:p-6 flex flex-col justify-start`,
        }"
        is-vertical
      >
        <ul class="mt-4 flex flex-col">
          <li class="text-gray flex items-start gap-2">
            <FontAwesomeIcon icon="check" class="text-primary mt-1" />

            <p class="">Ficha única de identificación del inversionista</p>
          </li>
          <li class="text-gray flex items-start gap-2">
            <FontAwesomeIcon icon="check" class="text-primary mt-1" />

            <p class="">Ficha de registro de firmas</p>
          </li>
          <li class="text-gray flex items-start gap-2">
            <FontAwesomeIcon icon="check" class="text-primary mt-1" />

            <p class="">Declaración jurada y destino de los fondos</p>
          </li>
          <li class="text-gray flex items-start gap-2">
            <FontAwesomeIcon icon="check" class="text-primary mt-1" />

            <p class="">Poder de apertura y manejo de cuenta</p>
          </li>
        </ul>
      </CommonContentCard>

      <CommonContentCard
        subtitle="Paso 3:"
        title="Envío de recaudos"
        content="Una vez cuentes con todas las planillas y los recaudos completos, envíalos por correo electrónico a:"
        :image="{
          url: '/images/pages/registro/header/3.webp',
          alt: 'Envio_de_recaudos',
        }"
        :styles="{
          title: 'text-black-alt mb-4',
          content: 'text-gray',
          wrapper: `flex-1 p-6 md:p-4 lg:p-6 flex flex-col justify-start`,
        }"
        is-vertical
      >
        <div class="mt-4 flex items-center gap-2">
          <FontAwesomeIcon icon="envelope" class="text-primary mt-1" />

          <a
            :title="companyData.email"
            :href="`mailto:${companyData.email}`"
            class="text-gray text-xs lg:text-base"
            >{{ companyData.email }}</a
          >
        </div>
      </CommonContentCard>
    </div>
  </motion.div>
</template>

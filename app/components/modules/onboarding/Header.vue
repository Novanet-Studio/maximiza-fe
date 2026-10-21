<script setup lang="ts">
  import companyData from '@/assets/data/common.json'

  import { motion } from 'motion-v'
  import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion'

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
    <CommonContentWithColumns :backgroundImage="props.banner.src" :title="props.title">
      <motion.div :variants="generalItemVariants">
        <p class="content-with-columns text-start text-white">
          {{ props.description }}
        </p>
      </motion.div>
    </CommonContentWithColumns>

    <div
      class="container grid w-full translate-y-0 grid-cols-1 justify-items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16"
    >
      <CommonContentCard
        subtitle="Paso 1:"
        title="Registro en Línea"
        content="Completa el formulario de registro digital. Nuestro sistema genera y completa automáticamente las siguientes planillas:"
        :image="{
          url: '/images/pages/registro/header/maximiza-2.webp',
          alt: 'Registro_en_linea',
        }"
        :styles="{
          title: 'text-black-alt mb-4',
          content: 'text-gray',
          wrapper: `flex-1 p-6 md:p-6 lg:p-8 flex flex-col justify-start`,
        }"
        class="w-full [&_img]:h-48 [&_img]:w-full [&_img]:object-cover md:[&_img]:h-52 lg:[&_img]:h-60"
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

        <div class="mt-auto pt-6">
          <NuxtLink title="Comenzar registro" to="#registro-formulario">
            <UiButton text="Comenzar registro" icon="hand-point-right" />
          </NuxtLink>
        </div>
      </CommonContentCard>

      <CommonContentCard
        subtitle="Paso 2:"
        title="Envío de Recaudos"
        content="Una vez cuentes con todas las planillas y los recaudos completos, envíalos por correo electrónico a:"
        :image="{
          url: '/images/pages/registro/header/maximiza-3.webp',
          alt: 'Envio_de_recaudos',
        }"
        :styles="{
          title: 'text-black-alt mb-4',
          content: 'text-gray',
          wrapper: `flex-1 p-6 md:p-6 lg:p-8 flex flex-col justify-start`,
        }"
        class="w-full [&_img]:h-48 [&_img]:w-full [&_img]:object-cover md:[&_img]:h-52 lg:[&_img]:h-60"
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

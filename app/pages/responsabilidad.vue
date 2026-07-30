<script setup lang="ts">
import { metadata } from '@/assets/data/metadata'
import { useJsonLd } from '~/composables/useJsonLd'

import { jsonld } from '~/assets/data/jsonld'
import { motion } from 'motion-v'

import {
  generalItemVariants,
  generalContainerVariants,
} from '~/assets/animations/motion'

const openPopoverIndex = ref<number | null>(null)

const supports: { image: string; alt: string }[] = [
  {
    image: '/images/pages/responsabilidad/supports/1.webp',
    alt: 'sup_1',
  },
  {
    image: '/images/pages/responsabilidad/supports/2.webp',
    alt: 'sup_2',
  },
  {
    image: '/images/pages/responsabilidad/supports/3.webp',
    alt: 'sup_3',
  },
  {
    image: '/images/pages/responsabilidad/supports/4.webp',
    alt: 'sup_4',
  },
]

const warnings: {
  image: string
  alt: string
  title: string
  content: string
}[] = [
    {
      image:
        '/images/pages/responsabilidad/warnings/maximiza-legitimacion-capitales-icono.webp',
      alt: 'warning_1',
      title: 'Prevención y control de legitimación de capitales',
      content:
        'Mantenemos protocolos tecnológicos de vanguardia y una debida diligencia constante y exhaustiva para blindar el sistema fi nanciero nacional y salvaguardar los intereses de nuestros inversionistas, garantizando un ecosistema de inversión enteramente puro, lícito y transparente.',
    },
    {
      image:
        '/images/pages/responsabilidad/warnings/maximiza-conozca-cliente-icono.webp',
      alt: 'warning_2',
      title: 'Estándar "Conozca a su cliente" (KYC)',
      content:
        'Cumplimos rigurosamente y sin excepciones con los procesos de verifi cación de identidad, perfi lamiento de riesgo y origen de fondos, respaldando la ejecución de las operaciones de nuestra base de clientes con los más altos y exigentes estándares de seguridad de la industria fi nanciera internacional.',
    },
    {
      image:
        '/images/pages/responsabilidad/warnings/maximiza-codigo-etica-icono.webp',
      alt: 'warning_3',
      title: 'Código de ética y conducta profesional',
      content:
        'Contamos con un marco normativo interno inquebrantable que rige e inspecciona sistemáticamente el accionar de nuestra junta directiva, gerentes, empleados y accionistas, previniendo asimetrías de información, mitigando riesgos operativos y asegurando la reputación institucional intachable que nos caracteriza.',
    },
  ]

const links: {
  description: string
  button: { link: string }
  image: { url: string; alt: string }
}[] = [
    {
      description:
        'Decreto con rango valor y fuerza de ley del mercado de valores',
      button: {
        link: 'https://historico.tsj.gob.ve/gaceta_ext/diciembre/30122015/E-30122015-4474.pdf#page=1',
      },
      image: {
        url: '/images/pages/responsabilidad/links/1.webp',
        alt: 'link_1',
      },
    },
    {
      description:
        'Ley orgánica contra la delincuencia organizada y financiamiento al terrorismo (LOCDOFT)',
      button: {
        link: 'https://res.cloudinary.com/novanet-studio/image/upload/v1663620373/maximiza/downloads/LOCDOFT_xkzdu7.pdf',
      },
      image: {
        url: '/images/pages/responsabilidad/links/2.webp',
        alt: 'link_2',
      },
    },
    {
      description: 'Ley orgánica de drogas (LOD)',
      button: {
        link: 'http://historico.tsj.gob.ve/gaceta/noviembre/5112010/5112010-2989.pdf#page=1',
      },
      image: {
        url: '/images/pages/responsabilidad/links/3.webp',
        alt: 'link_3',
      },
    },
    {
      description: 'Providencia 209 - Gaceta oficial 42115',
      button: {
        link: 'https://res.cloudinary.com/novanet-studio/image/upload/v1663620677/maximiza/downloads/Providencia_209-GO_42115_izkots.pdf',
      },
      image: {
        url: '/images/pages/responsabilidad/links/4.webp',
        alt: 'link_4',
      },
    },
    {
      description: 'Demás circulares enmarcadas por la SUNAVAL',
      button: {
        link: '#',
      },
      image: {
        url: '/images/pages/responsabilidad/links/5.webp',
        alt: 'link_5',
      },
    },
    {
      description:
        'Gaceta oficial normas relativas <br /> al buen gobierno corporativo',
      button: {
        link: 'https://res.cloudinary.com/novanet-studio/image/upload/v1663620767/maximiza/downloads/G.O_Normas_Relativas_al_buen_Gobierno_Corporativo_tgiqhy.pdf',
      },
      image: {
        url: '/images/pages/responsabilidad/links/6.webp',
        alt: 'link_6',
      },
    },
  ]

useSeoMeta(metadata.responsabilidadSocial)

useJsonLd(jsonld.socialResponsibility)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero :title="'Responsabilidad social <br /> y buen gobierno corporativo'"
      :description="'Combinamos el servicio social con estrictos controles de riesgo, <br /> asegurando un entorno de inversión seguro, ético y legal.'"
      :image="{
        src: '/images/hero/maxmiza-mano-sujetando-bombillo-relleno-de-monedas.webp',
        alt: 'Hero Background',
      }" :pattern="{
        src: '/images/hero/pattern-responsabilidad.webp',
      }" />

    <CommonContentWithColumns backgroundImage="/images/backgrounds/responsabilidad-1.webp"
      title="Responsabilidad <br /> social corporativa" cover-wrapper>
      <Motion :variants="generalItemVariants">
        <h4 class="content-with-columns mb-4 text-white">
          Compromiso Integral ESG y Fortalecimiento Social
        </h4>

        <p class="content-with-columns text-white">
          En la alta gerencia de Maximiza entendemos que la verdadera generación
          de valor trasciende con creces el pago trimestral de dividendos
          financieros. Adoptamos de forma endógena los criterios de
          sostenibilidad ESG (Ambiental, Social y de Gobernanza) como pilares
          fundamentales para participar activamente en el renacimiento
          productivo de la sociedad venezolana.
        </p>
      </Motion>
    </CommonContentWithColumns>

    <motion.section class="container mx-auto flex w-full flex-col space-y-8 py-16" :variants="generalContainerVariants"
      initial="hidden" animate="visible">
      <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:gap-24">
        <Motion :variants="generalItemVariants" class="flex flex-col items-center">
          <img src="/images/pages/responsabilidad/cards/1.webp" alt="Bienestar social" title="Bienestar social"
            class="aspect-video h-auto w-full object-cover" />
          <div class="bg-primary relative z-10 -mt-6 w-[75%] px-3 py-4 lg:px-6">
            <h6 class="text-center text-white">Bienestar social</h6>
          </div>
        </Motion>
        <Motion :variants="generalItemVariants" class="flex flex-col items-center">
          <img src="/images/pages/responsabilidad/cards/2.webp" alt="Donaciones dirigidas" title="Donaciones dirigidas"
            class="aspect-video h-auto w-full object-cover" />
          <div class="bg-primary relative z-10 -mt-6 w-[75%] px-3 py-4 lg:px-6">
            <h6 class="text-center text-white">Donaciones dirigidas</h6>
          </div>
        </Motion>
        <Motion :variants="generalItemVariants" class="flex flex-col items-center">
          <img src="/images/pages/responsabilidad/cards/3.webp" alt="Comité social" title="Comité social"
            class="aspect-video h-auto w-full object-cover" />
          <div class="bg-primary relative z-10 -mt-6 w-[75%] px-3 py-4 lg:px-6">
            <h6 class="text-center text-white">Comité social</h6>
          </div>
        </Motion>
      </div>

      <Motion :variants="generalItemVariants" class="w-full">
        <p class="text-gray">
          A través de nuestro estructurado Comité Social, canalizamos recursos,
          tiempo y conocimientos para respaldar el accionar de fundaciones,
          instituciones educativas de base y programas formativos
          especializados, dejando una huella tangible, solidaria y medible en
          pro del crecimiento de las futuras generaciones de nuestra nación.
        </p>
      </Motion>

      <motion.section class="flex w-full flex-col gap-4 max-sm:items-center md:flex-row md:justify-between lg:gap-8"
        :variants="generalContainerVariants" initial="hidden" animate="visible">
        <motion.img v-for="(support, index) in supports" :key="index" :variants="generalItemVariants"
          class="w-full max-w-[183px] md:max-w-[136px] lg:max-w-[183px]" :src="support.image" :alt="support.alt" />
      </motion.section>
    </motion.section>

    <CommonContentWithColumns backgroundImage="/images/backgrounds/responsabilidad-2.webp"
      title="Buen gobierno <br /> corporativo" cover-wrapper>
      <motion.div :variants="generalItemVariants">
        <h4 class="content-with-columns mb-4 text-white">
          El pilar inquebrantable de nuestra integridad
        </h4>

        <p class="content-with-columns text-white">
          Nuestra adopción temprana y respeto estricto a las mejores prácticas
          de gobierno corporativo brindan la seguridad jurídica, operativa y
          económica esencial para un crecimiento sostenible y la atracción
          constante de inversiones institucionales.
        </p>
        <br />
        <p class="content-with-columns text-white">
          En Maximiza Casa de Bolsa, nuestras operaciones están protegidas por
          un riguroso ecosistema ético y regulatorio global.
        </p>
      </motion.div>
    </CommonContentWithColumns>

    <motion.section class="container mx-auto w-full max-w-5xl px-0 py-16 md:px-8" :variants="generalContainerVariants"
      initial="hidden" animate="visible">
      <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <motion.li v-for="(warning, index) in warnings" :key="`warning-${index}`" :variants="generalItemVariants"
          class="relative w-full transition-[z-index] duration-300"
          :class="openPopoverIndex === index ? 'z-50' : 'z-0'">
          <AppPopover position="bottom" class="block! w-full!"
            @toggled="(val) => (openPopoverIndex = val ? index : null)">
            <template #trigger>
              <div
                class="stretch border-white-alt2 flex h-full w-full cursor-pointer items-center border bg-white transition-shadow hover:shadow-md">
                <div class="bg-white-alt h-30 w-26" />
                <div
                  class="bg-black-alt absolute flex aspect-square h-18 w-18 translate-x-1/5 items-center justify-center p-6">
                  <img :src="warning.image" :alt="warning.alt" title="warning.alt"
                    class="h-full w-full object-contain" />
                </div>
                <div class="flex flex-1 items-center justify-between px-6 py-4">
                  <h5 class="text-black-alt" v-html="warning.title" />
                  <FontAwesomeIcon :icon="['fas', 'chevron-down']" class="text-black-alt shrink-0" />
                </div>
              </div>
            </template>
            <div class="w-full max-w-sm min-w-64 text-left">
              <p class="text-gray text-sm leading-relaxed md:text-base">
                {{ warning.content }}
              </p>
            </div>
          </AppPopover>
        </motion.li>
      </div>
    </motion.section>

    <CommonContentWithColumns title="Marco Regulatorio y Cumplimiento Legal"
      background-image="/images/backgrounds/soluciones-financieras.webp" is-split-background auto-columns :columns="{
        left: 'md:w-[35%]',
        right: 'md:w-[65%]',
      }">
      <CommonContentCard v-for="(item, index) in links" :key="`link-${index}`" :content="item.description" :styles="{
        content:
          'text-[18px] leading-[26px] md:text-[12px] md:leading-[20px] lg:text-[20px] lg:leading-[24px] text-gray',
        wrapper: 'flex-1 p-4 flex flex-col justify-center',
      }" :button="{
          label: 'Descargar',
          link: item.button.link,
          icon: 'download',
          size: 'md',
        }" :image="{ url: item.image.url, alt: item.image.alt }" is-image-full />
    </CommonContentWithColumns>
  </div>
</template>

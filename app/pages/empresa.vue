<script setup lang="ts">
import { motion } from 'motion-v'
import { metadata } from '@/assets/data/metadata'

import { useJsonLd } from '~/composables/useJsonLd'
import { jsonld } from '~/assets/data/jsonld'

import {
  headerItemVariants,
  generalContainerVariants,
  generalItemVariants,
} from '@/assets/animations/motion'

const institutionalValues = ref([
  {
    label: 'Confianza',
    description: 'fiduciaria integral',
    image: '/images/pages/empresa/items/1.webp',
  },
  {
    label: 'Responsabilidad',
    description: 'patrimonial rigurosa',
    image: '/images/pages/empresa/items/2.webp',
  },
  {
    label: 'Compromiso',
    description: 'analitico de excelencia',
    image: '/images/pages/empresa/items/3.webp',
  },
  {
    label: 'Pensamiento',
    description: 'estrategico anticipado',
    image: '/images/pages/empresa/items/4.webp',
  },
  {
    label: 'Transparencia',
    description: 'operativa absoluta',
    image: '/images/pages/empresa/items/5.webp',
  },
])

const alliesLogos = ref([
  {
    src: '/images/pages/empresa/allies/1.webp',
    alt: 'Alianzas 1',
  },
  {
    src: '/images/pages/empresa/allies/2.webp',
    alt: 'Alianzas 2',
  },
  {
    src: '/images/pages/empresa/allies/3.webp',
    alt: 'Alianzas 3',
  },
  {
    src: '/images/pages/empresa/allies/4.webp',
    alt: 'Alianzas 4',
  },
  {
    src: '/images/pages/empresa/allies/5.webp',
    alt: 'Alianzas 5',
  },
  {
    src: '/images/pages/empresa/allies/6.webp',
    alt: 'Alianzas 6',
  },
])

useSeoMeta(metadata.empresa)

useJsonLd(jsonld.about)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'Arquitectos de su futuro financiero'"
      :description="'Aliados estratégicos en ingeniería financiera avanzada: gestión patrimonial, activos alternativos y financiamiento corporativo a gran escala con máxima integridad.'"
      :button="{
        text: 'Configure su estrategia patrimonial',
        link: '#',
      }"
      :image="{
        src: '/images/hero/maxmiza-bolsa-de-valores-de-caracas.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/pattern-empresa.webp',
      }"
    />

    <CommonTextBanner
      :description="'Constituidos en 1992, atesoramos más de tres décadas de trayectoria y experiencia en el mercado de capitales venezolano. Estamos comprometidos con ofrecer a nuestros clientes soluciones integrales a través de servicios especializados de corretaje de títulos valores y asesoría en finanzas corporativas. Somos miembros de la Bolsa de Valores de Caracas (BVC) y autorizados por la SUNAVAL'"
      :background="'/images/textBanner/empresa.webp'"
    />

    <motion.section
      class="container flex min-h-dvh w-full flex-col items-center justify-center py-16"
      :variants="generalContainerVariants"
      initial="hidden"
      animate="visible"
    >
      <CommonSectionHeader
        title="Banca de inversión y asesoría corporativa de clase mundial"
      />

      <div class="mt-6 flex w-full max-w-6xl flex-col gap-16 px-4 md:px-0">
        <motion.div
          class="flex w-full flex-col items-center md:flex-row"
          :variants="generalItemVariants"
        >
          <div
            class="bg-primary relative z-10 flex h-62.5 w-62.5 shrink-0 items-center justify-center p-4"
          >
            <img
              src="/images/pages/empresa/maximiza-faro-poligonal-trazo.webp"
              alt="Especialistas en asesoría"
              title="Especialistas en asesoría"
              class="h-full w-full object-contain"
            />
          </div>
          <div
            class="to-white-alt2 z-0 -mt-30 flex w-full max-w-[940px] grow flex-col justify-center bg-linear-to-b from-white p-8 pt-40 md:m-0 md:-ml-31.25 md:bg-linear-to-r md:p-16 md:pr-4 md:pl-36 lg:h-[342px]"
          >
            <h4 class="text-black-alt mb-2 text-xl leading-[22px]">
              Foco corporativo especializado
            </h4>
            <p
              class="text-gray text-xl leading-[28px] md:text-base md:leading-[24px] lg:text-xl lg:leading-[28px]"
            >
              Brindamos asesoría analítica exhaustiva a corporaciones nacionales
              y entidades extranjeras en la intrincada valoración de empresas de
              gran capitalización, estructuración de fusiones y adquisiciones
              (M&A), y diseño de financiamientos a la medida.
            </p>
          </div>
        </motion.div>

        <motion.div
          class="flex w-full flex-col items-center md:flex-row-reverse"
          :variants="generalItemVariants"
        >
          <div
            class="bg-black-alt relative z-10 flex h-62.5 w-62.5 shrink-0 items-center justify-center p-4"
          >
            <img
              src="/images/pages/empresa/maximiza-rey-poligonal-trazo.webp"
              alt="Alianzas formales"
              title="Alianzas formales"
              class="h-full w-full object-contain"
            />
          </div>
          <div
            class="from-white-alt2 z-0 -mt-30 flex w-full max-w-[940px] grow flex-col justify-center bg-linear-to-t to-white p-8 pt-40 md:m-0 md:-mr-31.25 md:bg-linear-to-r md:p-16 md:pr-36 md:pl-4 lg:h-[342px]"
          >
            <h4
              class="text-black-alt mb-2 text-xl leading-[22px] md:text-right"
            >
              Ecosistema de promoción financiera
            </h4>
            <p
              class="text-gray text-xl leading-[28px] md:text-right md:text-base md:leading-[24px] lg:text-xl lg:leading-[28px]"
            >
              Nuestro ADN innovador nos ha llevado a participar activamente en
              la cimentación de vehículos financieros líderes, tales como Silk &
              CO (banca de inversión regional) y Vitral Advisors LLC (RIA
              registrado en la SEC, Nueva York), lo que nos capacita para
              ofrecer soluciones transfronterizas sin fricciones.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>

    <CommonContentWithColumns
      title="Filosofía y ADN corporativo"
      background-image="/images/backgrounds/mision-y-vision.webp"
      is-split-background
      auto-columns
      :columns="{
        left: 'md:w-[25%]',
        right: 'md:w-[75%]',
      }"
    >
      <CommonContentCard
        title="Misión"
        content="Diseñar y estructurar soluciones de inversión y financiamiento innovadoras que aporten una capa inexpugnable de seguridad, maximicen la rentabilidad y cultiven la confianza absoluta, garantizando un servicio de excelencia y sofisticación a nuestra clientela institucional y privada."
        :image="{
          url: '/images/pages/empresa/mision-item.webp',
          alt: 'Misión',
        }"
        :styles="{
          title:
            'text-xl leading-[22px] md:text-sm md:leading-[18px] lg:text-xl lg:leading-[22px] text-black-alt mb-2 md:mb-4',
          content:
            'text-lg leading-[26px] md:text-xs md:leading-[20px] lg:text-lg lg:leading-[26px] text-gray',
          wrapper: 'flex-1 p-4 pt-6 flex flex-col justify-center',
        }"
        maxWidth="350"
      />

      <CommonContentCard
        title="Visión"
        content="Consolidarnos indiscutiblemente como el referente principal y más respetado de la banca de inversión en el mercado venezolano, impulsando el tejido productivo del país a través de la máxima eficiencia operativa, la transparencia innegociable y la alineación total de intereses con nuestros stakeholders."
        :image="{
          url: '/images/pages/empresa/vision-item.webp',
          alt: 'Visión',
        }"
        :styles="{
          title:
            'text-xl leading-[22px] md:text-sm md:leading-[18px] lg:text-xl lg:leading-[22px] text-black-alt mb-2 md:mb-4',
          content:
            'text-lg leading-[26px] md:text-xs md:leading-[20px] lg:text-lg lg:leading-[26px] text-gray',
          wrapper: 'flex-1 p-4 pt-6 flex flex-col justify-center',
        }"
        maxWidth="350"
      />
    </CommonContentWithColumns>

    <motion.section
      class="bg-black-alt hidden w-full flex-col items-center py-16 md:flex"
      :style="{
        backgroundImage: `url(${'/images/backgrounds/valores.webp'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      :variants="generalContainerVariants"
      initial="hidden"
      whileInView="visible"
      :viewport="{ once: true }"
    >
      <ul
        class="container mx-auto flex w-full flex-col justify-center gap-4 md:flex-row lg:gap-12"
      >
        <motion.li
          v-for="(value, index) in institutionalValues"
          :key="`empresa_item_${index}`"
          class="flex flex-1 flex-col justify-center border-l-1 border-white pl-4"
          :variants="headerItemVariants"
        >
          <h5 class="font-semibold text-white">{{ value.label }}</h5>
          <p class="text-white">{{ value.description }}</p>
        </motion.li>
      </ul>
    </motion.section>

    <ModulesEmpresaManagementTeam class="hidden md:flex" />

    <motion.section
      class="container mb-20 hidden w-full md:flex"
      :variants="generalContainerVariants"
      initial="hidden"
      animate="visible"
    >
      <div
        class="mx-auto flex w-full flex-col items-center justify-center gap-8 md:flex-row"
      >
        <div class="flex w-2/5 flex-col gap-4">
          <h3 class="text-black-alt text-right">
            Red global de <br />
            alianzas estratégicas
          </h3>
          <p class="text-gray text-right">
            Nuestra solidez operativa se encuentra cimentada y respaldada en
            décadas de relaciones formales e institucionales ininterrumpidas con
            las firmas financieras más prestigiosas del hemisferio.
          </p>
        </div>

        <div
          class="`md:p-8 bg-white-alt grid grid-cols-3 gap-6 p-4 lg:p-12 xl:p-16"
        >
          <motion.img
            v-for="(logo, index) in alliesLogos"
            :key="`empresa_allies_${index}`"
            :src="logo.src"
            :alt="logo.alt"
            :title="logo.alt"
            class="aspect-square"
            :variants="generalItemVariants"
          />
        </div>
      </div>
    </motion.section>

    <ModulesEmpresaBalanceSection />
  </div>
</template>

<script setup lang="ts">
  import { metadata } from '@/assets/data/metadata'
  import { useJsonLd } from '~/composables/useJsonLd'

  import { jsonld } from '~/assets/data/jsonld'
  import { motion } from 'motion-v'

  import { generalItemVariants, generalContainerVariants } from '~/assets/animations/motion'

  const openPopoverIndex = ref<number | null>(null)

  const supports: { image: string; alt: string }[] = [
    {
      image: '/images/pages/responsabilidad/supports/maximiza-1.webp',
      alt: 'sup_1',
    },
    {
      image: '/images/pages/responsabilidad/supports/maximiza-2.webp',
      alt: 'sup_2',
    },
    {
      image: '/images/pages/responsabilidad/supports/maximiza-3.webp',
      alt: 'sup_3',
    },
    {
      image: '/images/pages/responsabilidad/supports/maximiza-4.webp',
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
      image: '/images/pages/responsabilidad/warnings/maximiza-identificacion-riesgo-icono.webp',
      alt: 'warning_1',
      title: 'Identificación del Riesgo',
      content:
        'Reconocemos los riesgos inherentes de LC/FT/FPADM según el tipo de cliente, productos, servicios, canales de distribución y zonas geográficas. Analizamos el entorno operativo para detectar vulnerabilidades antes de iniciar cualquier relación comercial o transacción bursátil.',
    },
    {
      image: '/images/pages/responsabilidad/warnings/maximiza-medicion-evaluacion-icono.webp',
      alt: 'warning_2',
      title: 'Medición y Evaluación',
      content:
        'Cuantificamos la probabilidad de ocurrencia y el impacto de los riesgos detectados. Aplicamos una Matriz de Riesgo para clasificar a los inversionistas en niveles (bajo, medio, alto) y determinar de forma objetiva el perfil financiero y transaccional esperado del cliente.',
    },
    {
      image: '/images/pages/responsabilidad/warnings/maximiza-control-mitigacion-icono.webp',
      alt: 'warning_3',
      title: 'Control y Mitigación',
      content:
        'Implementamos controles internos robustos mediante las políticas de "Conozca a su Inversionista" y debida diligencia (simplificada, estándar e intensificada). Estas medidas reducen la exposición al riesgo y garantizan el estricto cumplimiento normativo exigido por SUNAVAL.',
    },
    {
      image: '/images/pages/responsabilidad/warnings/maximiza-monitoreo-continuo-icono.webp',
      alt: 'warning_4',
      title: 'Monitoreo Continuo',
      content:
        'Realizamos un seguimiento constante de las operaciones mediante sistemas automatizados. Comparamos la actividad real del inversionista con su perfil declarado para detectar anomalías, actualizar las matrices de riesgo y, de ser necesario, generar alertas y reportes a la UNIF.',
    },
  ]

  const links: {
    description: string
    button: { link: string }
    image: { url: string; alt: string }
  }[] = [
    {
      description: 'Constitución de la República Bolivariana de Venezuela',
      button: {
        link: 'https://www.asambleanacional.gob.ve/storage/documentos/botones/constitucion-nacional-20191205135853.PDF',
      },
      image: {
        url: '/images/pages/responsabilidad/links/maximiza-7.webp',
        alt: 'link_1',
      },
    },
    {
      description:
        'Ley Orgánica Contra la Delincuencia Organizada y Financiamiento al Terrorismo (LOCDOFT), Gaceta Oficial Nro. 39.912 del 30 de abril de 2012.',
      button: {
        link: 'https://res.cloudinary.com/novanet-studio/image/upload/v1663620373/maximiza/downloads/LOCDOFT_xkzdu7.pdf',
      },
      image: {
        url: '/images/pages/responsabilidad/links/maximiza-2.webp',
        alt: 'link_2',
      },
    },
    {
      description:
        'Ley Orgánica de Drogas, Gaceta Oficial Nro. 39.510 del 15/09/2010 (reimpresa por error inmaterial en la Gaceta Oficial Nro. 39.546 del 05/11/2010).',
      button: {
        link: 'http://historico.tsj.gob.ve/gaceta/noviembre/5112010/5112010-2989.pdf#page=1',
      },
      image: {
        url: '/images/pages/responsabilidad/links/maximiza-3.webp',
        alt: 'link_3',
      },
    },
    {
      description:
        'Decreto con Rango, Valor y Fuerza de Ley de Mercado de Valores, Gaceta Oficial Ext. Nro. 6.211 del 30 de diciembre de 2015.',
      button: {
        link: 'https://historico.tsj.gob.ve/gaceta_ext/diciembre/30122015/E-30122015-4474.pdf#page=1',
      },
      image: {
        url: '/images/pages/responsabilidad/links/maximiza-1.webp',
        alt: 'link_1',
      },
    },
    {
      description: 'Providencia Nro. 025, Gaceta Oficial Nro. 43.096 del 27 de marzo de 2025.',
      button: {
        link: 'https://drive.google.com/file/d/1hxVYY5kNajB1shV6Q4f-zDQgZkcz0TDc/view?usp=sharing',
      },
      image: {
        url: '/images/pages/responsabilidad/links/maximiza-4.webp',
        alt: 'link_4',
      },
    },
  ]

  useSeoMeta(metadata.cumplimiento)

  useJsonLd(jsonld.compliance)
</script>

<template>
  <div class="flex h-auto w-full flex-col">
    <CommonHero
      :title="'Buen Gobierno Corporativo'"
      :description="'Las buenas prácticas en gobierno corporativo aportan seguridad económica y jurídica, fomentando el crecimiento sostenible de la compañía.'"
      :image="{
        src: '/images/hero/maximiza-mano-sujetando-bombillo-relleno-de-monedas.webp',
        alt: 'Hero Background',
      }"
      :pattern="{
        src: '/images/hero/maximiza-pattern-responsabilidad.webp',
      }"
    />

    <CommonContentWithColumns
      backgroundImage="/images/backgrounds/maximiza-responsabilidad-1.webp"
      title="Administración de Riesgo de LC/FT/FPADM y Otros Ilícitos"
      cover-wrapper
    >
      <Motion :variants="generalItemVariants">
        <p class="content-with-columns text-white">
          Comprometidos con la transparencia y las normativas de la SUNAVAL, implementamos un sólido
          Sistema de Administración de Riesgo de LC/FT/FPADM y Otros Ilícitos. Mediante políticas de
          debida diligencia, enfoque basado en riesgo y monitoreo continuo, prevenimos y mitigamos
          los riesgos asociados a la legitimación de capitales, financiamiento al terrorismo y
          proliferación de armas de destrucción masiva, garantizando operaciones bursátiles seguras,
          éticas y confiables que protegen a nuestros inversionistas y fortalecen la integridad del
          mercado de valores.
        </p>
      </Motion>
    </CommonContentWithColumns>

    <motion.section
      class="container mx-auto w-full max-w-5xl px-0 py-16 md:px-8"
      :variants="generalContainerVariants"
      initial="hidden"
      animate="visible"
    >
      <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <motion.li
          v-for="(warning, index) in warnings"
          :key="`warning-${index}`"
          :variants="generalItemVariants"
          class="relative w-full transition-[z-index] duration-300"
          :class="openPopoverIndex === index ? 'z-50' : 'z-0'"
        >
          <AppPopover
            position="bottom"
            class="block! w-full!"
            @toggled="(val) => (openPopoverIndex = val ? index : null)"
          >
            <template #trigger>
              <div
                class="stretch border-white-alt2 flex h-full w-full cursor-pointer items-center border bg-white transition-shadow hover:shadow-md"
              >
                <div class="bg-white-alt h-30 w-26" />
                <div
                  class="bg-black-alt absolute flex aspect-square h-18 w-18 translate-x-1/5 items-center justify-center p-6"
                >
                  <img
                    :src="warning.image"
                    :alt="warning.alt"
                    title="warning.alt"
                    class="h-full w-full object-contain"
                  />
                </div>
                <div class="flex flex-1 items-center justify-between px-6 py-4">
                  <h5 class="text-black-alt" v-html="warning.title" />
                  <FontAwesomeIcon
                    :icon="['fas', 'chevron-down']"
                    class="text-black-alt shrink-0"
                  />
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

    <CommonContentWithColumns
      title="Marco Legal"
      background-image="/images/backgrounds/maximiza-soluciones-financieras.webp"
      is-split-background
      auto-columns
      :columns="{
        left: 'md:w-[35%]',
        right: 'md:w-[65%]',
      }"
    >
      <CommonContentCard
        v-for="(item, index) in links"
        :key="`link-${index}`"
        :content="item.description"
        :styles="{
          content:
            'text-[18px] leading-[26px] md:text-[12px] md:leading-[20px] lg:text-[20px] lg:leading-[24px] text-gray',
          wrapper: 'flex-1 p-4 flex flex-col justify-center',
        }"
        :button="{
          label: 'Descargar',
          link: item.button.link,
          icon: 'download',
          size: 'md',
        }"
        :image="{ url: item.image.url, alt: item.image.alt }"
        is-image-full
      />
    </CommonContentWithColumns>

    <CommonContentWithColumns
      backgroundImage="/images/backgrounds/maximiza-responsabilidad-2.webp"
      title="Responsabilidad <br/> Social Corporativa"
      cover-wrapper
    >
      <motion.div :variants="generalItemVariants">
        <h4 class="content-with-columns mb-4 text-white">
          Compromiso Integral ESG y Fortalecimiento Social
        </h4>

        <p class="content-with-columns text-white">
          En la alta gerencia de Maximiza entendemos que la verdadera generación de valor trasciende
          con creces el pago trimestral de dividendos financieros. Adoptamos de forma endógena los
          criterios de sostenibilidad ESG (Ambiental, Social y de Gobernanza) como pilares
          fundamentales para participar activamente en el renacimiento productivo de la sociedad
          venezolana.
        </p>
      </motion.div>
    </CommonContentWithColumns>

    <motion.section
      class="container mx-auto flex w-full flex-col space-y-8 py-16"
      :variants="generalContainerVariants"
      initial="hidden"
      animate="visible"
    >
      <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:gap-24">
        <Motion :variants="generalItemVariants" class="flex flex-col items-center">
          <img
            src="/images/pages/responsabilidad/cards/maximiza-1.webp"
            alt="Bienestar social"
            title="Bienestar social"
            class="aspect-video h-auto w-full object-cover"
          />
          <div class="bg-primary relative z-10 -mt-6 w-[75%] px-3 py-4 lg:px-6">
            <h6 class="text-center text-white">Bienestar social</h6>
          </div>
        </Motion>
        <Motion :variants="generalItemVariants" class="flex flex-col items-center">
          <img
            src="/images/pages/responsabilidad/cards/maximiza-2.webp"
            alt="Donaciones dirigidas"
            title="Donaciones dirigidas"
            class="aspect-video h-auto w-full object-cover"
          />
          <div class="bg-primary relative z-10 -mt-6 w-[75%] px-3 py-4 lg:px-6">
            <h6 class="text-center text-white">Donaciones dirigidas</h6>
          </div>
        </Motion>
        <Motion :variants="generalItemVariants" class="flex flex-col items-center">
          <img
            src="/images/pages/responsabilidad/cards/maximiza-3.webp"
            alt="Comité social"
            title="Comité social"
            class="aspect-video h-auto w-full object-cover"
          />
          <div class="bg-primary relative z-10 -mt-6 w-[75%] px-3 py-4 lg:px-6">
            <h6 class="text-center text-white">Comité social</h6>
          </div>
        </Motion>
      </div>

      <Motion :variants="generalItemVariants" class="w-full">
        <p class="text-gray">
          A través de nuestro estructurado Comité Social, canalizamos recursos, tiempo y
          conocimientos para respaldar el accionar de fundaciones, instituciones educativas de base
          y programas formativos especializados, dejando una huella tangible, solidaria y medible en
          pro del crecimiento de las futuras generaciones de nuestra nación.
        </p>
      </Motion>

      <motion.section
        class="flex w-full flex-col gap-4 max-sm:items-center md:flex-row md:justify-between lg:gap-8"
        :variants="generalContainerVariants"
        initial="hidden"
        animate="visible"
      >
        <motion.img
          v-for="(support, index) in supports"
          :key="index"
          :variants="generalItemVariants"
          class="w-full max-w-[183px] md:max-w-[136px] lg:max-w-[183px]"
          :src="support.image"
          :alt="support.alt"
        />
      </motion.section>
    </motion.section>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    showHeader: true,
  })

  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt, truncateText } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const showModal = ref(false)
  const selectedHistoriaId = ref<string | number | null>(null)

  const openModal = (item: any) => {
    selectedHistoriaId.value = item.id
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
    selectedHistoriaId.value = null
  }

  const { empresaData, fetchEmpresa } = useMaximizaQueries()

  onMounted(() => {
    fetchEmpresa()
  })

  useSeoMeta({
    title: 'Maximiza para invertir en la bolsa',
    description:
      'Somos una casa de bolsa que ofrece herramientas para invertir en la bolsa y gestionar instrumentos financieros.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847321/maximiza/v4/maximiza_empresa_miniatura_2ef6217989.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="empresaData" class="w-full">
      <CommonHero
        :text="empresaData.principal.contenido"
        :image="empresaData.principal.imagen"
        :inverted="true"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <h1 class="hero-title text-left">
            {{ empresaData.principal.titulo }}
          </h1>
        </template>
      </CommonHero>

      <section class="mx-auto mt-12 md:mt-16 xl:mt-24 xl:px-0">
        <ul class="flex flex-wrap justify-between gap-4">
          <li
            v-for="item in empresaData.historia"
            :key="item.id"
            class="mb-12 flex w-full flex-1 flex-col items-start md:mb-8 md:flex-row xl:mb-0"
          >
            <div class="mb-4 shrink-0 md:mb-0">
              <NuxtImg
                :src="getImageUrl(item.imagen)"
                :alt="getImageAlt(item.imagen)"
                provider="cloudinary"
                class="h-auto w-full min-w-[220px] object-cover"
              />
            </div>

            <div class="flex w-full flex-col md:pl-2">
              <h3 class="mb-2 text-lg font-black text-maximiza-verde1 md:text-2xl">
                {{ item.titulo }}
              </h3>

              <div
                class="prose prose-p:my-0 mb-4 text-sm font-light leading-relaxed text-maximiza-gris4"
                v-html="renderMarkdown(truncateText(item.contenido, 190))"
              ></div>

              <button
                class="cursor-pointer self-start bg-maximiza-verde1 px-4 py-2 text-xs text-maximiza-blanco1 transition-colors hover:bg-maximiza-verde6 md:text-sm"
                @click="openModal(item)"
              >
                Conocer más
              </button>
            </div>
          </li>
        </ul>
      </section>

      <section class="mt-8 px-4 md:mt-12 xl:mt-24 xl:px-0">
        <h2 class="mb-4 text-center text-xl font-black text-maximiza-negro1 md:text-2xl">
          {{ empresaData.equipo.titulo }}
        </h2>
        <p class="mx-auto text-sm font-normal text-maximiza-gris3 md:text-base xl:text-xl">
          {{ empresaData.equipo.contenido }}
        </p>
      </section>

      <section class="mb-0 mt-4 px-4 xl:px-0">
        <ul class="flex w-full flex-col md:flex-row">
          <li
            v-for="item in empresaData.nosotros"
            :key="item.id"
            class="group relative mb-4 h-[30vh] w-full cursor-pointer overflow-hidden md:mb-0 md:h-[24vh] md:w-1/3 lg:h-[41vh]"
          >
            <NuxtImg
              :src="getImageUrl(item.imagen)"
              :alt="getImageAlt(item.imagen)"
              provider="cloudinary"
              class="absolute inset-0 z-0 h-full w-full object-cover filter transition-all duration-500 md:grayscale-0 md:group-hover:grayscale"
            />

            <div class="absolute top-0 z-10 flex w-full flex-col justify-end">
              <h3
                class="relative z-20 bg-maximiza-verde1 py-3 text-center text-lg font-black text-maximiza-blanco1"
              >
                {{ item.titulo }}
              </h3>

              <div
                class="translate-y-full transform bg-maximiza-blanco2 p-2 text-xs font-light text-maximiza-gris1 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 md:text-sm"
              >
                <div v-html="renderMarkdown(item.contenido)"></div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="mt-16 bg-maximiza-blanco2 py-4 md:mt-20 md:py-6 xl:py-8">
        <div class="mx-auto max-w-7xl px-4 text-center">
          <h2 class="mb-4 text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl">
            {{ empresaData.aliados.titulo }}
          </h2>
          <p class="mb-8 font-normal text-maximiza-gris2 md:mb-12">
            {{ empresaData.aliados.contenido }}
          </p>

          <div class="mx-auto w-full md:w-[90%]">
            <AboutAlies />
          </div>
        </div>
      </section>

      <section class="mx-auto mb-16 mt-16 max-w-7xl px-4 md:mb-24 md:mt-20">
        <div class="mb-12">
          <h2
            class="mb-8 text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
          >
            Balances mensuales
          </h2>

          <div
            v-for="anio in empresaData.balances"
            :key="anio.id"
            class="mb-8 flex flex-col items-center border-b border-maximiza-gris5 pb-8 last:border-0 lg:flex-row"
          >
            <h3
              class="mb-4 text-lg font-black text-maximiza-gris1 md:text-2xl lg:mb-0 lg:w-[10%] lg:pr-8 lg:text-right"
            >
              {{ anio.ano }}
            </h3>

            <ul class="grid w-full grid-cols-2 gap-1 md:grid-cols-4 lg:w-[90%] lg:grid-cols-6">
              <li v-for="mes in anio.mes" :key="mes.id">
                <a
                  :href="mes.descarga"
                  download
                  target="_blank"
                  class="group flex items-center justify-start border-maximiza-blanco1 bg-maximiza-blanco2 px-4 py-3 text-xs font-medium text-maximiza-gris2 transition-colors duration-300 hover:bg-maximiza-verde1 hover:text-maximiza-blanco1 md:justify-center md:text-sm"
                >
                  <font-awesome-icon
                    :icon="['fas', 'download']"
                    class="mr-2 text-maximiza-verde1 transition-colors group-hover:text-maximiza-blanco1"
                  />
                  <span class="capitalize">{{ mes.mes }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2
            class="mb-8 text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
          >
            Balances auditados
          </h2>

          <div
            v-for="anio in empresaData.balances_auditados"
            :key="anio.id"
            class="mb-8 flex flex-col items-center border-b border-maximiza-gris5 pb-8 last:border-0 lg:flex-row"
          >
            <h3
              class="mb-4 text-lg font-black text-maximiza-gris1 md:text-2xl lg:mb-0 lg:w-[10%] lg:pr-8 lg:text-right"
            >
              {{ anio.ano }}
            </h3>

            <ul class="grid w-full grid-cols-2 gap-1 md:grid-cols-4 lg:w-[90%]">
              <li v-for="mes in anio.mes" :key="mes.id">
                <a
                  :href="mes.descarga"
                  download
                  target="_blank"
                  class="group flex items-center justify-start border-maximiza-blanco1 bg-maximiza-blanco2 px-4 py-3 text-xs font-medium text-maximiza-gris2 transition-colors duration-300 hover:bg-maximiza-verde1 hover:text-maximiza-blanco1 md:justify-center md:text-sm"
                >
                  <font-awesome-icon
                    :icon="['fas', 'download']"
                    class="mr-2 text-maximiza-verde1 transition-colors group-hover:text-maximiza-blanco1"
                  />
                  <span class="capitalize">{{ mes.mes }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CommonModal
        v-if="showModal"
        :id="selectedHistoriaId"
        :data="empresaData.historia"
        image-field-name="imagen"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt, truncateText } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const showModal = ref(false)
  const selectedInfoId = ref<string | number | null>(null)

  const openModal = (item: any) => {
    selectedInfoId.value = item.id
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
    selectedInfoId.value = null
  }

  const { legalData, fetchCumplimiento } = useMaximizaQueries()

  onMounted(() => {
    fetchCumplimiento()
  })

  useSeoMeta({
    title: 'Maximiza: Legitimación de capitales',
    description:
      'Las instituciones financieras pueden usarse para la legitimación de capitales, ¿cómo prevenir que eso ocurra?',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_cumplimiento_miniatura_3c4db9b532.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="legalData" class="w-full">
      <CommonHero
        :text="legalData.principal.contenido"
        :image="legalData.principal.imagen"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <h1 class="hero-title text-left">
            {{ legalData.principal.titulo }}
          </h1>
        </template>
      </CommonHero>

      <section class="mx-auto mb-16 mt-12 px-4 md:mb-24 md:mt-24 xl:px-0">
        <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <li v-for="item in legalData.informacion" :key="item.id" class="flex w-full flex-col">
            <div class="flex h-full flex-col">
              <h3 class="text-lg font-black text-maximiza-verde1 md:text-xl">
                {{ item.titulo }}
              </h3>

              <div
                class="prose prose-p:my-0 mb-4 text-sm font-light leading-5 text-maximiza-gris1"
                v-html="renderMarkdown(truncateText(item.contenido, 90))"
              ></div>

              <button class="button-primary --small w-fit" @click="openModal(item)">
                Conocer más
              </button>
            </div>
          </li>
        </ul>
      </section>

      <section class="mx-auto mb-16 px-4 md:mb-24 xl:px-0">
        <div class="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
          <div class="w-full shrink-0 md:w-[40%] xl:w-[31%]">
            <NuxtImg
              :src="getImageUrl(legalData.codigo.imagen)"
              :alt="getImageAlt(legalData.codigo.imagen)"
              provider="cloudinary"
              class="h-auto w-full object-cover"
            />
          </div>

          <div class="w-full md:w-[60%] xl:w-[67%]">
            <h2 class="mb-4 text-left text-xl font-black text-maximiza-verde1 md:text-2xl">
              {{ legalData.codigo.titulo }}
            </h2>
            <div
              class="border-b-2 border-maximiza-gris5 pb-8 text-justify text-sm font-light leading-relaxed text-maximiza-negro1 md:columns-2 md:gap-12 md:text-base md:leading-loose xl:text-lg"
              v-html="renderMarkdown(legalData.codigo.contenido)"
            ></div>
          </div>
        </div>
      </section>

      <section class="mx-auto mb-16 px-4 md:mb-24 xl:px-0">
        <h2
          class="mb-8 w-full text-center text-xl font-black text-maximiza-negro1 md:mb-12 md:text-2xl xl:text-3xl"
        >
          {{ legalData.normativas_titulo }}
        </h2>

        <ul class="flex flex-wrap justify-between gap-y-8 md:gap-y-12">
          <li
            v-for="item in legalData.descargas"
            :key="item.id"
            class="md:bg-transparent flex w-full items-center gap-4 bg-maximiza-blanco1 p-4 shadow-sm md:w-[48%] md:p-0 md:shadow-none xl:w-[32%]"
          >
            <div class="flex w-[15%] shrink-0 flex-col md:w-[12%]">
              <div
                class="flex h-8 w-full items-center justify-center bg-maximiza-verde1 py-2 text-maximiza-blanco1 md:h-9"
              >
                <font-awesome-icon :icon="['fas', 'eye']" class="text-xs md:text-sm" />
              </div>
              <a
                :href="item.vinculo"
                download
                target="_blank"
                class="hover:bg-gray-200 flex h-8 w-full items-center justify-center bg-maximiza-blanco2 py-2 text-maximiza-verde1 transition-colors md:h-9"
              >
                <font-awesome-icon :icon="['fas', 'download']" class="text-xs md:text-sm" />
              </a>
            </div>

            <p
              class="w-[85%] text-sm font-medium leading-snug text-maximiza-gris2 md:w-[88%] md:text-base"
            >
              {{ item.documento }}
            </p>
          </li>
        </ul>
      </section>

      <CommonModal
        v-if="showModal"
        :id="selectedInfoId"
        :data="legalData.informacion"
        @close="closeModal"
      />
    </div>
  </div>
</template>

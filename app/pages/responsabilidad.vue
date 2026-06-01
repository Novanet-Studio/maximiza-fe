<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const activeAccordion = ref<string | number | null>(null)

  const toggleAccordion = (id: string | number) => {
    activeAccordion.value = activeAccordion.value === id ? null : id
  }

  const { responsabilidadData, fetchResponsabilidad } = useMaximizaQueries()

  onMounted(() => {
    fetchResponsabilidad()
  })

  useSeoMeta({
    title: 'Responsabilidad',
    description:
      'Contamos con la generación de dividendos para la empresa y el planteamiento del impacto social.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_responsabilidad_miniatura_cd2b3fa7fc.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="responsabilidadData" class="w-full">
      <CommonHero
        :text="responsabilidadData.principal.contenido"
        :image="responsabilidadData.principal.imagen"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <div
            class="hero-title text-left"
            v-html="renderMarkdown(responsabilidadData.principal.titulo)"
          ></div>
        </template>
      </CommonHero>

      <section class="mx-auto mb-16 mt-16 px-4 md:mb-24 md:mt-24 xl:px-0">
        <h2
          class="mb-12 text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
        >
          {{ responsabilidadData.contribucion }}
        </h2>

        <ul
          class="flex flex-col flex-wrap justify-between gap-y-4 sm:flex-row sm:gap-x-6 sm:gap-y-0"
        >
          <li
            v-for="item in responsabilidadData.contribuciones_secciones"
            :key="item.id"
            class="relative w-full bg-maximiza-blanco2 shadow-sm sm:flex-1"
          >
            <button
              @click="toggleAccordion(item.id)"
              class="flex h-full w-full items-center justify-between border-b border-maximiza-gris5 p-2 text-left transition-colors hover:bg-maximiza-gris5"
              :class="{ 'bg-maximiza-gris5': activeAccordion === item.id }"
            >
              <h3
                class="pr-4 text-base font-black text-maximiza-verde1 sm:text-xs md:text-base lg:text-lg"
              >
                {{ item.titulo }}
              </h3>

              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                class="ml-2 shrink-0 text-maximiza-verde1 transition-transform duration-300"
                :class="{ 'rotate-180': activeAccordion === item.id }"
              />
            </button>

            <div
              class="absolute left-0 top-full z-20 w-full overflow-hidden bg-maximiza-blanco1 shadow-lg transition-all duration-300 ease-in-out"
              :class="
                activeAccordion === item.id ? 'visible opacity-100' : 'invisible h-0 opacity-0'
              "
            >
              <div class="border-t border-maximiza-gris5 p-2">
                <div
                  class="prose prose-p:my-0 prose-a:text-maximiza-verde1 text-sm leading-relaxed text-maximiza-gris1 md:text-base"
                  v-html="renderMarkdown(item.contenido)"
                ></div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="mx-auto mb-16 mt-16 px-4 md:mb-24 md:mt-24 xl:px-0">
        <h2
          class="mb-8 w-full text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
        >
          Causas que apoyamos
        </h2>

        <div
          class="prose prose-p:my-0 prose-a:text-maximiza-verde1 mx-auto mb-12 max-w-4xl text-center text-sm font-normal leading-relaxed text-maximiza-gris2 md:text-base"
          v-html="renderMarkdown(responsabilidadData.colaboracion_texto.contenido)"
        ></div>

        <AwarenessCharitableCauses />
      </section>
    </div>
  </div>
</template>

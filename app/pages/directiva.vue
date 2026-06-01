<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  // Control de acordeón
  const activeAccordion = ref<string | number | null>(null)

  const toggleAccordion = (id: string | number) => {
    activeAccordion.value = activeAccordion.value === id ? null : id
  }

  const { directivaData, fetchDirectiva } = useMaximizaQueries()

  onMounted(() => {
    fetchDirectiva()
  })

  useSeoMeta({
    title: 'Junta directiva',
    description: directivaData.value?.principal?.contenido || 'Conoce a nuestra junta directiva.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847321/maximiza/v4/maximiza_directiva_miniatura_c37955065e.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="directivaData" class="w-full">
      <CommonHero
        :text="directivaData.principal.contenido"
        :image="directivaData.principal.imagen"
        :inverted="true"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <h1 class="hero-title text-left">
            {{ directivaData.principal.titulo }}
          </h1>
        </template>
      </CommonHero>

      <section class="mx-auto mb-20 mt-0 md:mb-32 md:mt-16 md:px-4 xl:px-0">
        <div class="rounded-sm border border-maximiza-gris5">
          <div
            v-for="seccion in directivaData.secciones.seccion"
            :key="seccion.id"
            class="border-t border-maximiza-gris5 first:border-t-0"
          >
            <button
              @click="toggleAccordion(seccion.id)"
              class="group relative flex w-full flex-wrap items-center bg-[#f4f4f4] p-0 text-left transition-colors hover:bg-[#ddd]"
              :aria-expanded="activeAccordion === seccion.id"
            >
              <span
                class="border-gray-600 absolute right-4 top-8 z-10 h-3 w-3 origin-center border-b-2 border-r-2 transition-transform duration-300 md:right-8 md:h-4 md:w-4"
                :class="
                  activeAccordion === seccion.id
                    ? 'translate-y-1 rotate-45'
                    : '-translate-y-1 -rotate-[135deg]'
                "
              ></span>

              <div class="flex w-full items-center">
                <div class="w-[38.5vw] shrink-0 md:w-[34vw] xl:w-[310px]">
                  <NuxtImg
                    :src="getImageUrl(seccion.imagen)"
                    :alt="getImageAlt(seccion.imagen)"
                    provider="cloudinary"
                    class="block h-auto w-full object-cover"
                  />
                </div>

                <h2
                  class="m-0 flex flex-col justify-center pl-3 text-lg font-black text-maximiza-verde1 md:pl-6 md:text-2xl"
                >
                  {{ seccion.titulo }}
                </h2>
              </div>
            </button>

            <div
              v-show="activeAccordion === seccion.id"
              class="bg-white overflow-hidden transition-all duration-300 ease-in"
            >
              <div class="animate-fade-in p-8 md:p-12">
                <ul class="flex w-full flex-wrap gap-y-8">
                  <li
                    v-for="persona in seccion.personas"
                    :key="persona.id"
                    class="w-full pr-0 md:w-1/2 md:pr-6"
                  >
                    <h3 class="text-xl font-black leading-8 text-maximiza-negro1 md:text-2xl">
                      {{ persona.persona }}
                    </h3>
                    <p class="mb-1 font-medium text-maximiza-gris4">
                      {{ persona.cargo }}
                    </p>
                    <small class="block text-xs leading-5 text-maximiza-gris3">
                      {{ persona.descripcion }}
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .animate-fade-in {
    animation: fadeIn 0.35s ease-in;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

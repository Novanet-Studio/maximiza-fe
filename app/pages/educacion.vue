<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const { educacionData, fetchEducacion } = useMaximizaQueries()

  onMounted(() => {
    fetchEducacion()
  })

  useSeoMeta({
    title: 'Educación en corretaje de títulos valores',
    description:
      'Somos pioneros en ofrecer programas de capacitación para mejorar la educación financiera en Venezuela.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_educacion_miniatura_5a3e3b347e.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="educacionData" class="w-full">
      <CommonHero
        :text="educacionData.principal.contenido"
        :image="educacionData.principal.imagen"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <h1 class="hero-title text-left">
            {{ educacionData.principal.titulo }}
          </h1>
        </template>
      </CommonHero>

      <section class="mx-auto mb-16 mt-16 px-4 md:mb-24 md:mt-24 xl:px-0">
        <h2
          class="mb-12 text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
        >
          {{ educacionData.items_titulo }}
        </h2>

        <ul
          class="flex flex-col flex-wrap justify-between gap-12 md:flex-row lg:flex-nowrap lg:gap-8"
        >
          <li
            v-for="item in educacionData.items"
            :key="item.id"
            class="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:gap-8 lg:w-1/3 lg:flex-col lg:items-center lg:gap-6"
          >
            <div
              class="h-[120px] w-[120px] shrink-0 md:h-[100px] md:w-[100px] lg:h-[140px] lg:w-[140px]"
            >
              <NuxtImg
                :src="getImageUrl(item.imagen)"
                :alt="getImageAlt(item.imagen)"
                provider="cloudinary"
                class="h-full w-full object-contain"
              />
            </div>

            <div class="w-full text-center md:text-left lg:text-center">
              <h3 class="mb-1 text-lg font-black text-maximiza-negro1 md:text-xl">
                {{ item.titulo }}
              </h3>
              <div
                class="prose prose-p:my-0 text-sm leading-relaxed text-maximiza-gris4"
                v-html="renderMarkdown(item.contenido)"
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <section class="mx-auto mb-16 px-4 md:mb-24 xl:px-0">
        <h2
          class="mb-12 text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
        >
          {{ educacionData.programas_titulo }}
        </h2>

        <div class="flex flex-col gap-20 md:gap-32">
          <div
            v-for="(programa, index) in educacionData.programas"
            :key="programa.id"
            class="flex flex-col items-start gap-2 lg:flex-row lg:gap-4"
          >
            <div class="w-full lg:w-1/4" :class="{ 'lg:order-last': Number(index) % 2 !== 0 }">
              <NuxtImg
                :src="getImageUrl(programa.imagen)"
                :alt="getImageAlt(programa.imagen)"
                provider="cloudinary"
                class="h-auto w-full object-cover"
              />
            </div>

            <div
              class="w-full lg:w-3/4"
              :class="{
                'text-left': Number(index) % 2 === 0,
                'lg:text-right': Number(index) % 2 !== 0,
              }"
            >
              <ul class="flex w-full flex-col">
                <li
                  v-for="mercado in programa.mercados"
                  :key="mercado.id"
                  class="border-b-2 border-maximiza-gris5 py-2 first:pt-0 last:border-b-0 md:py-4"
                >
                  <h3 class="mb-1 text-lg font-black text-maximiza-verde1 md:text-xl">
                    {{ mercado.titulo }}
                  </h3>
                  <div
                    class="text-sm leading-relaxed text-maximiza-gris1 md:text-base lg:text-lg"
                    v-html="renderMarkdown(mercado.contenido)"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CommonContactBanner />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt, truncateText } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const { capitalData, fetchCapital } = useMaximizaQueries()

  onMounted(() => {
    fetchCapital()
  })

  useSeoMeta({
    title: 'Inversión de capital en empresas venezolanas',
    description:
      'Sabemos que Venezuela es un gran lugar para invertir y, cuando sea el momento, será necesario el capital para reactivar el país. ¡Conoce nuestra iniciativa!',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_capital_miniatura_b983816160.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="capitalData" class="w-full">
      <!-- HERO -->
      <CommonHero
        :image="capitalData.principal.imagen"
        :inverted="true"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <h1 class="hero-title text-left">
            {{ capitalData.principal.titulo }}
          </h1>
        </template>
      </CommonHero>

      <section class="mx-auto mb-16 mt-16 px-4 md:mt-24 xl:px-0">
        <h2
          class="mb-12 text-center text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl"
        >
          {{ capitalData.partners_titulo }}
        </h2>

        <ul class="mx-auto flex w-full flex-col gap-16 md:w-[90%] md:gap-24">
          <li
            v-for="(item, index) in capitalData.partners_secciones"
            :key="item.id"
            class="flex flex-col items-center gap-8 md:flex-row md:gap-12"
          >
            <div
              class="w-full shrink-0 md:w-[35%]"
              :class="{ 'md:order-last': Number(index) % 2 !== 0 }"
            >
              <NuxtImg
                :src="getImageUrl(item.imagen)"
                :alt="getImageAlt(item.imagen)"
                provider="cloudinary"
                class="h-auto w-full object-cover md:max-h-[28vh]"
              />
            </div>

            <div
              class="w-full md:w-[65%]"
              :class="{
                'text-left': Number(index) % 2 === 0,
                'md:text-right': Number(index) % 2 !== 0,
              }"
            >
              <div
                class="prose prose-p:my-0 text-sm font-normal leading-relaxed text-maximiza-gris1 md:text-base xl:text-lg"
                v-html="renderMarkdown(item.contenido)"
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <CommonContactBanner />
    </div>
  </div>
</template>

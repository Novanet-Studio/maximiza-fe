<script setup lang="ts">
  import MarkdownIt from 'markdown-it'
  import { getBlogQuery } from '~/schemas/blog.schemas'

  import { formatDate, getImageAlt, getImageUrl, truncateText } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const {
    public: { strapi },
  } = useRuntimeConfig()

  const { data: blogData } = await useAsyncData(async () => {
    try {
      const response = await $fetch<{ data: any }>(`${strapi.url}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: { query: getBlogQuery },
      })

      return {
        principal: response?.data?.blog?.principal,
        articulos: response?.data?.articulos || [],
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
      return null
    }
  })

  useSeoMeta({
    title: 'Maximiza: Artículos con información financiera',
    description: blogData.value?.principal?.contenido || 'Artículos financieros.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_blog_miniatura_7827d40e96.webp',
  })
</script>

<template>
  <div v-if="blogData" class="w-full">
    <CommonHero
      :text="blogData.principal.contenido"
      :image="blogData.principal.imagen"
      :show-logo="false"
    >
      <template #custom-title>
        <div class="hero-title text-left" v-html="renderMarkdown(blogData.principal.titulo)"></div>
      </template>
    </CommonHero>

    <section class="mx-auto mb-16 mt-12 px-4 md:mb-24 md:mt-24 xl:px-0">
      <ul class="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
        <li
          v-for="articulo in blogData.articulos"
          :key="articulo.documentId"
          class="group relative flex w-full flex-col bg-maximiza-blanco2 pb-8 shadow-sm"
        >
          <div class="relative h-[28vh] w-full md:h-[20vh] lg:h-[22vh]">
            <NuxtImg
              :src="getImageUrl(articulo.imagen)"
              :alt="getImageAlt(articulo.imagen)"
              provider="cloudinary"
              class="absolute inset-0 z-10 h-full w-full object-cover"
            />
            <div class="absolute bottom-0 left-0 z-20 w-[90%] bg-maximiza-verde1 p-3 md:p-4">
              <h4 class="text-sm font-bold leading-tight text-maximiza-blanco2 md:text-base">
                {{ articulo.titulo }}
              </h4>
            </div>
          </div>

          <p class="px-4 pt-4 text-xs font-medium text-maximiza-gris1 md:text-sm">
            {{ formatDate(articulo.fecha) }}
          </p>

          <div
            class="prose prose-p:my-0 p-4 text-sm font-normal leading-relaxed text-maximiza-gris1 md:text-base"
            v-html="renderMarkdown(truncateText(articulo.descripcion, 150))"
          ></div>

          <NuxtLink
            :to="`/blog/${articulo.slug}`"
            class="button-primary --small absolute bottom-[-15px] right-[15px]"
          >
            Ver post
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

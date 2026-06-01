<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { getImageAlt, getImageUrl } from '~/lib/utils'
  import { getArticuloBySlugQuery } from '~/schemas/blog.schemas'

  const route = useRoute()
  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const slug = route.params.slug as string
  const {
    public: { strapi },
  } = useRuntimeConfig()

  const { data: articulo } = await useAsyncData(`articulo-${slug}`, async () => {
    try {
      const response = await $fetch<{ data: any }>(`${strapi.url}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json' },
        body: { query: getArticuloBySlugQuery, variables: { slug } },
      })

      return response?.data?.articulos?.[0] || null
    } catch (error) {
      console.error('Error fetching articulo:', error)
      return null
    }
  })

  if (!articulo.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Artículo no encontrado',
    })
  }

  useSeoMeta({
    title: articulo.value?.titulo,
    description: articulo.value?.descripcion?.substring(0, 160) || 'Artículo de Maximiza',
    ogImage: getImageUrl(articulo.value?.imagen),
  })

  const currentUrl = ref('')

  onMounted(() => {
    currentUrl.value = window.location.href
  })

  const share = (platform: 'twitter' | 'linkedin') => {
    const url = encodeURIComponent(currentUrl.value)
    const text = encodeURIComponent(articulo.value?.titulo || '')

    let shareUrl = ''
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    }

    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
</script>

<template>
  <div v-if="articulo" class="bg-white w-full">
    <section class="mx-auto px-4 xl:px-0">
      <NuxtLink
        to="/blog"
        class="mb-6 inline-block text-sm font-black text-maximiza-verde1 md:text-base"
      >
        « Volver al blog
      </NuxtLink>

      <div class="relative mb-8 h-[35vh] w-full md:h-[55vh] lg:h-[45vh]">
        <NuxtImg
          :src="getImageUrl(articulo.imagen)"
          :alt="getImageAlt(articulo.imagen)"
          provider="cloudinary"
          class="h-full w-full object-cover shadow-sm"
        />
      </div>

      <div
        class="text-white relative z-10 mx-auto -mt-16 bg-maximiza-verde1 px-4 py-4 text-center shadow-lg md:-mt-20 md:px-12"
      >
        <h1 class="text-xl font-black leading-tight text-maximiza-blanco2 md:text-2xl">
          {{ articulo.titulo }}
        </h1>
      </div>
    </section>

    <article class="mx-auto mb-20 px-4 md:mb-32 xl:px-0">
      <div
        class="prose prose-headings:text-maximiza-verde1 prose-a:text-maximiza-verde1 prose-strong:text-maximiza-negro1 mt-8 max-w-none text-base font-light text-maximiza-gris1 md:columns-2 md:gap-6 md:text-lg"
        style="line-height: 1.3"
        v-html="renderMarkdown(articulo.descripcion)"
      ></div>

      <div class="mt-12">
        <h3 class="mb-4 text-lg font-bold text-maximiza-negro1">Comparte este artículo</h3>
        <div class="flex gap-4">
          <button
            @click="share('linkedin')"
            class="text-white flex h-10 w-10 items-center justify-center rounded-full bg-[#0077b5] transition-opacity hover:opacity-90"
            aria-label="Compartir en LinkedIn"
          >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-maximiza-blanco2" />
          </button>

          <button
            @click="share('twitter')"
            class="text-white flex h-10 w-10 items-center justify-center rounded-full bg-[#000] transition-opacity hover:opacity-90"
            aria-label="Compartir en Twitter"
          >
            <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-maximiza-blanco2" />
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
  .prose h2 {
    @apply mb-4 mt-8 text-left text-xl font-bold md:text-2xl;
  }
  .prose p {
    @apply mb-4;
  }
</style>

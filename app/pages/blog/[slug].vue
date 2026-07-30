<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { motion } from 'motion-v'

import { useJsonLd } from '~/composables/useJsonLd'
import { jsonld } from '~/assets/data/jsonld'

import {
  generalContainerVariants,
  generalItemVariants,
} from '~/assets/animations/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useArticles } from '~/composables/useArticles'
import { marked } from 'marked'
import { articleExcerpt } from '~/lib/utils'

const route = useRoute()
const slug = route.params.slug as string
const requestUrl = useRequestURL()

const { getArticleBySlug } = useArticles()

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  getArticleBySlug(slug)
)

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artículo no encontrado',
    fatal: true,
  })
}

useSeoMeta({
  title: article.value.titulo,
  description: articleExcerpt(article.value.descripcion, 200),
  ogTitle: article.value.titulo,
  ogDescription: articleExcerpt(article.value.descripcion, 200),
  ogImage: article.value.imagen?.url || '/images/article-placeholder.webp',
  ogUrl: requestUrl.href,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  themeColor: '#00735f',
})

useJsonLd(
  jsonld.article(article.value, articleExcerpt(article.value.descripcion, 200))
)

const shareLinkedIn = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(requestUrl.href)}`
})

const shareX = computed(() => {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(requestUrl.href)}&text=${encodeURIComponent(article.value?.titulo || '')}`
})

const parsedContent = computed(() => {
  const raw = article.value?.descripcion || ''
  return marked.parse(raw) as string
})
</script>

<template>
  <div class="relative mt-[10vh] flex min-h-dvh w-full flex-col bg-white pb-40">
    <div class="absolute inset-0 z-0 h-100">
      <img
        src="/images/pages/blog/article-banner.webp"
        alt="Background"
        title="Background"
        class="h-full w-full object-cover object-center"
      />
    </div>

    <motion.article
      class="container mx-auto translate-y-30 bg-white lg:translate-y-40"
      :variants="generalContainerVariants"
      initial="hidden"
      whileInView="visible"
      :viewport="{ once: true }"
    >
      <motion.header
        class="relative z-10 mx-auto flex w-full flex-col md:max-h-96 md:flex-row"
        :variants="generalItemVariants"
      >
        <div class="w-full shrink-0 md:w-1/2">
          <img
            :src="article?.imagen?.url || '/images/article-placeholder.webp'"
            :alt="article?.titulo"
            title="article?.titulo"
            class="h-64 w-full object-cover object-center sm:h-80 md:h-full"
          />
        </div>

        <div
          class="bg-white-alt relative flex min-h-48 w-full items-center justify-center overflow-hidden md:w-1/2"
        >
          <img
            src="/images/pages/blog/polygon-assets.webp"
            alt="Pattern"
            title="Pattern"
            class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          />

          <div
            class="relative z-10 flex w-full items-center p-8 text-center md:p-12 md:text-left"
          >
            <h1 v-html="article?.titulo" class="m-0 w-full" />
          </div>
        </div>
      </motion.header>

      <motion.main
        class="text-gray column-fill-balance gap-8 p-4 text-left text-sm leading-relaxed font-light md:columns-2 md:text-base lg:gap-16 lg:p-8"
        :variants="generalItemVariants"
      >
        <div v-html="parsedContent" class="prose" />
      </motion.main>

      <motion.footer
        class="border-gray/30 mt-12 flex items-center justify-between border-t py-6"
        :variants="generalItemVariants"
      >
        <div
          class="text-primary flex w-full flex-col items-start gap-2 sm:w-auto"
        >
          <p class="">Comparte este artículo</p>
          <div class="flex items-center gap-2">
            <a
              title="Ir a shareLinkedIn"
              :href="shareLinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black-alt hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon :icon="faLinkedinIn" class="text-2xl" />
            </a>
            <a
              title="Ir a shareX"
              :href="shareX"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black-alt hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FontAwesomeIcon :icon="faXTwitter" class="text-2xl" />
            </a>
          </div>
        </div>

        <NuxtLink
          title="Volver al blog"
          to="/blog"
          class="text-black-alt hover:text-primary flex w-full items-center justify-end gap-1 transition-colors sm:w-auto"
        >
          <FontAwesomeIcon :icon="faArrowLeft" />
          <p class="text-primary font-semibold">Volver al blog</p>
        </NuxtLink>
      </motion.footer>
    </motion.article>
  </div>
</template>

<style scoped>
.column-fill-balance {
  column-fill: balance;
}
</style>

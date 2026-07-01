<script setup lang="ts">
import { motion } from 'motion-v'
import { generalItemVariants } from '~/assets/animations/motion'
import { formatDate } from '~/lib/utils'

interface Props {
  article: MXMZ.Article
}

const { article } = defineProps<Props>()
</script>

<template>
  <NuxtLink :title="article.titulo" :to="`/blog/${article.slug}`">
    <motion.article
      class="border-gray/20 group flex h-full cursor-pointer flex-col border bg-white max-sm:max-w-[280px]"
      :variants="generalItemVariants"
    >
      <div class="bg-white-alt relative w-full overflow-hidden">
        <img
          :src="article.imagen?.url || '/images/article-placeholder.webp'"
          :alt="article.titulo"
          :title="article.titulo"
          class="h-[175px] w-[280px] object-cover transition-transform duration-500 group-hover:scale-105 md:h-[138px] md:w-[220px] lg:h-[175px] lg:w-[280px]"
        />
      </div>

      <div class="flex flex-1 flex-col gap-2 p-4 lg:p-6">
        <span class="text-gray text-sm leading-tight">{{
          formatDate(article.fecha)
        }}</span>
        <h4 class="heading-[18px] text-black-alt text-base">
          {{ article.titulo }}
        </h4>
      </div>
    </motion.article>
  </NuxtLink>
</template>

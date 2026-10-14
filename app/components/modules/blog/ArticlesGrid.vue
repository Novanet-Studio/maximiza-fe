<script setup lang="ts">
  import { motion } from 'motion-v'
  import { generalContainerVariants } from '~/assets/animations/motion'
  import { useArticles } from '~/composables/useArticles'

  const { getAllArticles } = useArticles()

  // Fetched during setup (SSR included) rather than onMounted, so the article grid is already
  // in the server-rendered HTML — getAllArticles() already catches its own errors and degrades
  // to an empty array, so no extra try/catch is needed here.
  const { data: articles, pending: isLoading } = await useAsyncData(
    'all-articles',
    () => getAllArticles(),
    { default: () => [] }
  )
</script>

<template>
  <motion.section
    class="container mx-auto w-full py-16 lg:px-4"
    :variants="generalContainerVariants"
    initial="hidden"
    animate="visible"
  >
    <div v-if="isLoading" class="flex w-full items-center justify-center py-24">
      <AppLoader />
    </div>

    <div
      v-else
      class="mx-auto grid max-w-[940px] grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:gap-[50px]"
    >
      <ModulesBlogArticle v-for="article in articles" :key="article.slug" :article="article" />
    </div>
  </motion.section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'
import { generalContainerVariants } from '~/assets/animations/motion'
import { useArticles } from '~/composables/useArticles'

const { getAllArticles } = useArticles()

const articles = ref<MXMZ.Article[]>([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    articles.value = await getAllArticles()
  } catch (error) {
    console.error('Error fetching articles:', error)
  } finally {
    isLoading.value = false
  }
})
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
      <ModulesBlogArticle
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </div>
  </motion.section>
</template>

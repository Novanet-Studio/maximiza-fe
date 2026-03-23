<script setup lang="ts">
import { motion } from 'motion-v';
import { generalItemVariants } from '~/assets/animations/motion';
import { formatDate } from '~/lib/utils';

interface Props {
    article: MXMZ.Article;
}

const { article } = defineProps<Props>();

</script>

<template>
    <NuxtLink :title="article.titulo" :to="`/blog/${article.slug}`">
        <motion.article class="bg-white border border-gray/20 flex flex-col h-full cursor-pointer group"
            :variants="generalItemVariants">
            <div class="w-full overflow-hidden bg-white-alt relative">
                <img :src="article.imagen?.url || '/images/article-placeholder.webp'" :alt="article.titulo"
                    :title="article.titulo" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div class="p-6 flex-1 flex flex-col gap-2">                
                <span class="text-gray text-sm leading-tight">{{ formatDate(article.fecha) }}</span>
                <h4 class="text-black-alt font-bold leading-tight">{{ article.titulo }}</h4>
            </div>
        </motion.article>
    </NuxtLink>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { motion } from 'motion-v';

import { useJsonLd } from '~/composables/useJsonLd';
import { jsonld } from '~/assets/data/jsonld';

import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useArticles } from '~/composables/useArticles'
import { marked } from 'marked'
import { articleExcerpt } from '~/lib/utils';

const route = useRoute();
const slug = route.params.slug as string;
const requestUrl = useRequestURL();

const { getArticleBySlug } = useArticles();

const { data: article } = await useAsyncData(`article-${slug}`, () => getArticleBySlug(slug));

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado', fatal: true });
}

useSeoMeta({
    title: article.value.titulo,
    description: articleExcerpt(article.value.descripcion, 200),
    ogTitle: article.value.titulo,
    ogDescription: articleExcerpt(article.value.descripcion, 200),
    ogImage: article.value.imagen?.url || '/images/article-placeholder.webp',
    ogUrl: requestUrl.href,
    ogType: "article",
    twitterCard: "summary_large_image",
    themeColor: "#00735f",
});

useJsonLd(jsonld.article(article.value, articleExcerpt(article.value.descripcion, 200)));


const shareLinkedIn = computed(() => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(requestUrl.href)}`;
});

const shareX = computed(() => {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(requestUrl.href)}&text=${encodeURIComponent(article.value?.titulo || '')}`;
});

const parsedContent = computed(() => {
    const raw = article.value?.descripcion || '';
    return marked.parse(raw) as string;
});

</script>

<template>
    <div class="relative w-full min-h-dvh mt-[10vh] pb-40 flex flex-col bg-white">
        <div class="h-100 absolute inset-0 z-0">
            <img src="/images/pages/blog/article-banner.webp" alt="Background" title="Background"
                class="w-full h-full object-cover object-center" />
        </div>

        <motion.article class="container mx-auto bg-white translate-y-30 lg:translate-y-40"
            :variants="generalContainerVariants" initial="hidden" whileInView="visible" :viewport="{ once: true }">

            <motion.header class="relative z-10 w-full md:max-h-96 mx-auto flex flex-col md:flex-row"
                :variants="generalItemVariants">

                <div class="w-full md:w-1/2 shrink-0">
                    <img :src="article?.imagen?.url || '/images/article-placeholder.webp'" :alt="article?.titulo"
                        title="article?.titulo" class="w-full h-64 sm:h-80 md:h-full object-cover object-center" />
                </div>

                <div
                    class="w-full md:w-1/2 relative bg-white-alt flex items-center justify-center overflow-hidden min-h-48">
                    <img src="/images/pages/blog/polygon-assets.webp" alt="Pattern" title="Pattern"
                        class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" />

                    <div class="relative z-10 w-full p-8 md:p-12 flex items-center text-center md:text-left">
                        <h1 v-html="article?.titulo" class="w-full m-0" />
                    </div>
                </div>
            </motion.header>

            <motion.main
                class="text-gray text-sm md:text-base leading-relaxed md:columns-2 p-4 lg:p-8 gap-8 lg:gap-16 font-light column-fill-balance text-left"
                :variants="generalItemVariants">
                <div v-html="parsedContent" class="prose" />
            </motion.main>

            <motion.footer
                class="mt-12 pt-6 border-t border-gray/30 flex flex-col sm:flex-row items-start justify-between"
                :variants="generalItemVariants">


                <div class="w-full px-8 text-primary sm:w-auto flex flex-col items-start gap-2">
                    <p class="p2">Comparte este artículo</p>
                    <div class="flex items-center gap-4">
                        <a title="Ir a shareLinkedIn" :href="shareLinkedIn" target="_blank" rel="noopener noreferrer"
                            class="text-black-alt hover:text-primary transition-colors" aria-label="LinkedIn">
                            <FontAwesomeIcon :icon="faLinkedinIn" class="text-2xl" />
                        </a>
                        <a title="Ir a shareX" :href="shareX" target="_blank" rel="noopener noreferrer"
                            class="text-black-alt hover:text-primary transition-colors" aria-label="Twitter">
                            <FontAwesomeIcon :icon="faXTwitter" class="text-2xl" />
                        </a>
                    </div>
                </div>

                <NuxtLink title="Volver al blog" to="/blog"
                    class="w-full sm:w-auto text-black-alt hover:text-primary transition-colors flex items-center gap-1 justify-end">
                    <FontAwesomeIcon :icon="faArrowLeft" />
                    <p class="p2">Volver al blog</p>
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
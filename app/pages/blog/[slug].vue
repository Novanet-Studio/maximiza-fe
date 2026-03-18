<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useArticles } from '~/composables/useArticles'
import { marked } from 'marked'

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
    description: article.value.descripcion || 'Artículo de Blog',
    ogTitle: article.value.titulo,
    ogDescription: article.value.descripcion || 'Artículo de Blog',
    ogImage: article.value.imagen?.url || '/images/article-placeholder.webp',
    ogUrl: requestUrl.href,
    ogType: "article",
    twitterCard: "summary_large_image",
    themeColor: "#00735f",
});

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
            <img src="/images/pages/blog/article-banner.webp" alt="Background"
                class="w-full h-full object-cover object-center" />
        </div>

        <motion.article class="container w-full mx-auto bg-white translate-y-20 2xl:translate-y-30 "
            :variants="generalContainerVariants" initial="hidden" whileInView="visible" :viewport="{ once: true }">

            <motion.header class="relative z-10 w-full h-96 mx-auto flex flex-col md:flex-row"
                :variants="generalItemVariants">

                <div class="w-full md:w-1/2 ">
                    <img :src="article?.imagen?.url || '/images/article-placeholder.webp'" :alt="article?.titulo"
                        class="w-full h-full object-cover" />
                </div>

                <div class="w-full md:w-1/2 relative bg-white flex items-center overflow-hidden">
                    <img src="/images/pages/blog/polygon-assets.webp" alt="Pattern"
                        class="absolute pointer-events-none" />

                    <div class="absolute w-full h-full p-8 flex items-center">
                        <h1 v-html="article?.titulo" />
                    </div>
                </div>
            </motion.header>

            <motion.main
                class="text-gray text-sm md:text-base leading-relaxed md:columns-2 pt-8 px-8 gap-16 font-light column-fill-balance text-left"
                :variants="generalItemVariants">
                <div v-html="parsedContent" class="prose" />
            </motion.main>

            <motion.footer
                class="mt-12 pt-6 border-t border-gray/30 flex flex-col sm:flex-row items-start justify-between"
                :variants="generalItemVariants">


                <div class="w-full px-8 text-primary sm:w-auto flex flex-col items-start gap-2">
                    <p class="p2">Comparte este artículo</p>
                    <div class="flex items-center gap-4">
                        <a :href="shareLinkedIn" target="_blank" rel="noopener noreferrer"
                            class="text-black-alt hover:text-primary transition-colors" aria-label="LinkedIn">
                            <FontAwesomeIcon :icon="faLinkedinIn" class="text-2xl" />
                        </a>
                        <a :href="shareX" target="_blank" rel="noopener noreferrer"
                            class="text-black-alt hover:text-primary transition-colors" aria-label="Twitter">
                            <FontAwesomeIcon :icon="faXTwitter" class="text-2xl" />
                        </a>
                    </div>
                </div>

                <NuxtLink to="/blog"
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
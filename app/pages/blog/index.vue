<script setup lang="ts">
import { metadata } from '@/assets/data/metadata';

useSeoMeta(metadata.blog);
</script>

<template>
    <div class="w-full h-auto flex flex-col">
        <CommonHero :title="'Perspectivas estratégicas <br /> y análisis de mercado'"
            :description="'Inteligencia financiera para el análisis de tendencias globales, macroeconómicos y perspectivas del mercado de capitales venezolano. Optimice sus inversiones con datos empíricos de alto valor.'"
            :image="{
                src: '/images/hero/main-blog.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-blog.webp',
            }" />

        <CommonTextBanner :description="'Todos los artículos'" :background="'/images/textBanner/contact.webp'"
            is-divider />

        <ModulesBlogArticlesGrid />
    </div>
</template>
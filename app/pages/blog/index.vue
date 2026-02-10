<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getBlogQuery } from "~/schemas/blog.schemas";
 
import {
  formatDate,
  getImageAlt,
  getImageUrl,
  truncateText,
} from "~/lib/utils";

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const graphql = useStrapiGraphQL();

const { data: blogData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getBlogQuery);

    return {
      principal: response?.data?.blog?.principal,
      articulos: response?.data?.articulos || [],
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
});

useSeoMeta({
  title: "Maximiza: Artículos con información financiera",
  description: blogData.value?.principal?.contenido || "Artículos financieros.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_blog_miniatura_7827d40e96.webp",
});
</script>

<template>
  <div v-if="blogData" class="w-full">
    <CommonHero
      :text="blogData.principal.contenido"
      :image="blogData.principal.imagen"
      :show-logo="false"
    >
      <template #custom-title>
        <div
          class="hero-title text-left"
          v-html="renderMarkdown(blogData.principal.titulo)"
        ></div>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-12 md:mt-24 mb-16 md:mb-24">
      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-y-16 gap-x-8"
      >
        <li
          v-for="articulo in blogData.articulos"
          :key="articulo.documentId"
          class="w-full relative bg-maximiza-blanco2 flex flex-col pb-8 shadow-sm group"
        >
          <div class="relative w-full h-[28vh] md:h-[20vh] lg:h-[22vh]">
            <NuxtImg
              :src="getImageUrl(articulo.imagen)"
              :alt="getImageAlt(articulo.imagen)"
              provider="cloudinary"
              class="absolute inset-0 w-full h-full object-cover z-10"
            />
            <div
              class="absolute bottom-0 left-0 w-[90%] z-20 bg-maximiza-verde1 p-3 md:p-4"
            >
              <h4
                class="text-maximiza-blanco2 font-bold text-sm md:text-base leading-tight"
              >
                {{ articulo.titulo }}
              </h4>
            </div>
          </div>

          <p
            class="text-maximiza-gris1 text-xs md:text-sm pt-4 px-4 font-medium"
          >
            {{ formatDate(articulo.fecha) }}
          </p>

          <div
            class="text-maximiza-gris1 font-normal text-sm md:text-base leading-relaxed p-4 prose prose-p:my-0"
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

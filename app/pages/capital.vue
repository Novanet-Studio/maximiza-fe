<script setup lang="ts">
import MarkdownIt from "markdown-it";

import { getImageUrl, getImageAlt, truncateText } from "~/lib/utils";

import { getCapitalQuery } from "~/schemas/capital.schema";

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const graphql = useStrapiGraphQL();
const { data: capitalData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getCapitalQuery);
    return response?.data?.capital || null;
  } catch (error) {
    console.error("Error fetching capital:", error);
    return null;
  }
});

useSeoMeta({
  title: "Inversión de capital en empresas venezolanas",
  description:
    "Sabemos que Venezuela es un gran lugar para invertir y, cuando sea el momento, será necesario el capital para reactivar el país. ¡Conoce nuestra iniciativa!",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_capital_miniatura_b983816160.webp",
});
</script>

<template>
  <div v-if="capitalData" class="w-full">
    <!-- HERO -->
    <CommonHero
      :image="capitalData.principal.imagen"
      :inverted="true"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ capitalData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-16 md:mt-24 mb-16">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl text-center mb-12"
      >
        {{ capitalData.partners_titulo }}
      </h2>

      <ul class="flex flex-col gap-16 md:gap-24 w-full md:w-[90%] mx-auto">
        <li
          v-for="(item, index) in capitalData.partners_secciones"
          :key="item.id"
          class="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div
            class="w-full md:w-[35%] shrink-0"
            :class="{ 'md:order-last': Number(index) % 2 !== 0 }"
          >
            <NuxtImg
              :src="getImageUrl(item.imagen)"
              :alt="getImageAlt(item.imagen)"
              provider="cloudinary"
              class="w-full h-auto object-cover md:max-h-[28vh]"
            />
          </div>

          <div
            class="w-full md:w-[65%]"
            :class="{
              'text-left': Number(index) % 2 === 0,
              'md:text-right': Number(index) % 2 !== 0,
            }"
          >
            <div
              class="text-maximiza-gris1 font-normal text-sm md:text-base xl:text-lg leading-relaxed prose prose-p:my-0"
              v-html="renderMarkdown(item.contenido)"
            ></div>
          </div>
        </li>
      </ul>
    </section>

    <CommonContactBanner />
  </div>
</template>

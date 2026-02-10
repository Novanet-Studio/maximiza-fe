<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getEducacionQuery } from "~/schemas/educacion.schemas";
import { getImageUrl, getImageAlt } from "~/lib/utils";

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const graphql = useStrapiGraphQL();
const { data: educacionData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getEducacionQuery);
    return response?.data?.educacion || null;
  } catch (error) {
    console.error("Error fetching educacion:", error);
    return null;
  }
});

useSeoMeta({
  title: "Educación en corretaje de títulos valores",
  description:
    "Somos pioneros en ofrecer programas de capacitación para mejorar la educación financiera en Venezuela.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_educacion_miniatura_5a3e3b347e.webp",
});
</script>

<template>
  <div v-if="educacionData" class="w-full">
    <CommonHero
      :text="educacionData.principal.contenido"
      :image="educacionData.principal.imagen"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ educacionData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-16 md:mt-24 mb-16 md:mb-24">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl text-center mb-12"
      >
        {{ educacionData.items_titulo }}
      </h2>

      <ul
        class="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-12 lg:gap-8"
      >
        <li
          v-for="item in educacionData.items"
          :key="item.id"
          class="flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-center w-full lg:w-1/3 gap-6 md:gap-8 lg:gap-6"
        >
          <div
            class="w-[120px] h-[120px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] shrink-0"
          >
            <NuxtImg
              :src="getImageUrl(item.imagen)"
              :alt="getImageAlt(item.imagen)"
              provider="cloudinary"
              class="w-full h-full object-contain"
            />
          </div>

          <div class="text-center md:text-left lg:text-center w-full">
            <h3 class="text-maximiza-negro1 font-black text-lg md:text-xl mb-1">
              {{ item.titulo }}
            </h3>
            <div
              class="text-maximiza-gris4 text-sm leading-relaxed prose prose-p:my-0"
              v-html="renderMarkdown(item.contenido)"
            ></div>
          </div>
        </li>
      </ul>
    </section>

    <section class="mx-auto px-4 xl:px-0 mb-16 md:mb-24">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl text-center mb-12"
      >
        {{ educacionData.programas_titulo }}
      </h2>

      <div class="flex flex-col gap-20 md:gap-32">
        <div
          v-for="(programa, index) in educacionData.programas"
          :key="programa.id"
          class="flex flex-col lg:flex-row items-start gap-2 lg:gap-4"
        >
          <div
            class="w-full lg:w-1/4"
            :class="{ 'lg:order-last': Number(index) % 2 !== 0 }"
          >
            <NuxtImg
              :src="getImageUrl(programa.imagen)"
              :alt="getImageAlt(programa.imagen)"
              provider="cloudinary"
              class="w-full h-auto object-cover"
            />
          </div>

          <div
            class="w-full lg:w-3/4"
            :class="{
              'text-left': Number(index) % 2 === 0,
              'lg:text-right': Number(index) % 2 !== 0,
            }"
          >
            <ul class="w-full flex flex-col">
              <li
                v-for="mercado in programa.mercados"
                :key="mercado.id"
                class="border-b-2 border-maximiza-gris5 py-2 md:py-4 last:border-b-0 first:pt-0"
              >
                <h3
                  class="text-maximiza-verde1 font-black text-lg md:text-xl mb-1"
                >
                  {{ mercado.titulo }}
                </h3>
                <div
                  class="text-maximiza-gris1 text-sm md:text-base lg:text-lg leading-relaxed"
                  v-html="renderMarkdown(mercado.contenido)"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CommonContactBanner />
  </div>
</template>

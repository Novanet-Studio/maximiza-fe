<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getDirectivaQuery } from "~/schemas/directiva.schemas";

import { getImageUrl, getImageAlt } from "~/lib/utils";

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

// Control de acordeón
const activeAccordion = ref<string | number | null>(null);

const toggleAccordion = (id: string | number) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};

const graphql = useStrapiGraphQL();
const { data: directivaData } = await useAsyncData(
  "directiva-data",
  async () => {
    try {
      const response = await graphql<any>(getDirectivaQuery);
      return response?.data?.directiva || null;
    } catch (error) {
      console.error("Error fetching directiva:", error);
      return null;
    }
  },
);

useSeoMeta({
  title: "Junta directiva",
  description:
    directivaData.value?.principal?.contenido ||
    "Conoce a nuestra junta directiva.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847321/maximiza/v4/maximiza_directiva_miniatura_c37955065e.webp",
});
</script>

<template>
  <div v-if="directivaData" class="w-full">
    <CommonHero
      :text="directivaData.principal.contenido"
      :image="directivaData.principal.imagen"
      :inverted="true"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ directivaData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto md:px-4 xl:px-0 mt-0 md:mt-16 mb-20 md:mb-32">
      <div class="border border-maximiza-gris5 rounded-sm">
        <div
          v-for="seccion in directivaData.secciones.seccion"
          :key="seccion.id"
          class="border-t border-maximiza-gris5 first:border-t-0"
        >
          <button
            @click="toggleAccordion(seccion.id)"
            class="w-full bg-[#f4f4f4] hover:bg-[#ddd] transition-colors p-0 text-left relative group flex flex-wrap items-center"
            :aria-expanded="activeAccordion === seccion.id"
          >
            <span
              class="absolute right-4 md:right-8 top-8 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-gray-600 transition-transform duration-300 origin-center z-10"
              :class="
                activeAccordion === seccion.id
                  ? 'rotate-45 translate-y-1'
                  : '-rotate-[135deg] -translate-y-1'
              "
            ></span>

            <div class="w-full flex items-center">
              <div class="w-[38.5vw] md:w-[34vw] xl:w-[310px] shrink-0">
                <NuxtImg
                  :src="getImageUrl(seccion.imagen)"
                  :alt="getImageAlt(seccion.imagen)"
                  provider="cloudinary"
                  class="w-full h-auto object-cover block"
                />
              </div>

              <h2
                class="text-maximiza-verde1 font-black text-lg md:text-2xl pl-3 md:pl-6 flex flex-col justify-center m-0"
              >
                {{ seccion.titulo }}
              </h2>
            </div>
          </button>

          <div
            v-show="activeAccordion === seccion.id"
            class="overflow-hidden transition-all duration-300 ease-in bg-white"
          >
            <div class="p-8 md:p-12 animate-fade-in">
              <ul class="flex flex-wrap w-full gap-y-8">
                <li
                  v-for="persona in seccion.personas"
                  :key="persona.id"
                  class="w-full md:w-1/2 pr-0 md:pr-6"
                >
                  <h3
                    class="text-maximiza-negro1 font-black text-xl md:text-2xl leading-8"
                  >
                    {{ persona.persona }}
                  </h3>
                  <p class="text-maximiza-gris4 font-medium mb-1">
                    {{ persona.cargo }}
                  </p>
                  <small class="text-maximiza-gris3 text-xs block leading-5">
                    {{ persona.descripcion }}
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.35s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

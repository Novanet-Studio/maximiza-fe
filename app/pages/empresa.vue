<script setup lang="ts">
definePageMeta({
  showHeader: true,
});

import MarkdownIt from "markdown-it";

import { getEmpresaQuery } from "~/schemas/empresa.schema";
import { getImageUrl, getImageAlt, truncateText } from "~/lib/utils";

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const showModal = ref(false);
const selectedHistoriaId = ref<string | number | null>(null);

const openModal = (item: any) => {
  selectedHistoriaId.value = item.id;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedHistoriaId.value = null;
};

const graphql = useStrapiGraphQL();

const { data: empresaData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getEmpresaQuery);

    return response?.data?.empresa || null;
  } catch (error) {
    console.error("Error fetching empresa:", error);
    return null;
  }
});

useSeoMeta({
  title: "Maximiza para invertir en la bolsa",
  description:
    "Somos una casa de bolsa que ofrece herramientas para invertir en la bolsa y gestionar instrumentos financieros.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847321/maximiza/v4/maximiza_empresa_miniatura_2ef6217989.webp",
});
</script>

<template>
  <div v-if="empresaData" class="w-full">
    <CommonHero
      :text="empresaData.principal.contenido"
      :image="empresaData.principal.imagen"
      :inverted="true"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ empresaData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mt-12 md:mt-16 xl:mt-24 xl:px-0 mx-auto">
      <ul class="flex flex-wrap justify-between gap-4">
        <li
          v-for="item in empresaData.historia"
          :key="item.id"
          class="w-full flex flex-1 flex-col md:flex-row items-start mb-12 md:mb-8 xl:mb-0"
        >
          <div class="mb-4 md:mb-0 shrink-0">
            <NuxtImg
              :src="getImageUrl(item.imagen)"
              :alt="getImageAlt(item.imagen)"
              provider="cloudinary"
              class="w-full min-w-[220px] h-auto object-cover"
            />
          </div>

          <div class="w-full md:pl-2 flex flex-col">
            <h3
              class="text-maximiza-verde1 font-black text-lg md:text-2xl mb-2"
            >
              {{ item.titulo }}
            </h3>

            <div
              class="text-maximiza-gris4 font-light text-sm leading-relaxed mb-4 prose prose-p:my-0"
              v-html="renderMarkdown(truncateText(item.contenido, 190))"
            ></div>

            <button
              class="bg-maximiza-verde1 hover:bg-maximiza-verde6 text-maximiza-blanco1 text-xs md:text-sm px-4 py-2 transition-colors self-start cursor-pointer"
              @click="openModal(item)"
            >
              Conocer más
            </button>
          </div>
        </li>
      </ul>
    </section>

    <section class="mt-8 md:mt-12 xl:mt-24 px-4 xl:px-0">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl mb-4 text-center"
      >
        {{ empresaData.equipo.titulo }}
      </h2>
      <p
        class="text-maximiza-gris3 font-normal text-sm md:text-base xl:text-xl mx-auto"
      >
        {{ empresaData.equipo.contenido }}
      </p>
    </section>

    <section class="mt-4 mb-0 px-4 xl:px-0">
      <ul class="flex flex-col md:flex-row w-full">
        <li
          v-for="item in empresaData.nosotros"
          :key="item.id"
          class="group relative w-full md:w-1/3 h-[30vh] md:h-[24vh] lg:h-[41vh] cursor-pointer overflow-hidden mb-4 md:mb-0"
        >
          <NuxtImg
            :src="getImageUrl(item.imagen)"
            :alt="getImageAlt(item.imagen)"
            provider="cloudinary"
            class="absolute inset-0 w-full h-full object-cover z-0 filter md:grayscale-0 md:group-hover:grayscale transition-all duration-500"
          />

          <div class="w-full top-0 absolute z-10 flex flex-col justify-end">
            <h3
              class="bg-maximiza-verde1 text-maximiza-blanco1 text-center py-3 font-black text-lg relative z-20"
            >
              {{ item.titulo }}
            </h3>

            <div
              class="bg-maximiza-blanco2 text-maximiza-gris1 font-light text-xs md:text-sm p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            >
              <div v-html="renderMarkdown(item.contenido)"></div>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="bg-maximiza-blanco2 py-4 md:py-6 xl:py-8 mt-16 md:mt-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2
          class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl mb-4"
        >
          {{ empresaData.aliados.titulo }}
        </h2>
        <p class="text-maximiza-gris2 font-normal mb-8 md:mb-12">
          {{ empresaData.aliados.contenido }}
        </p>

        <div class="w-full md:w-[90%] mx-auto">
          <AboutAlies />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 mt-16 md:mt-20 mb-16 md:mb-24">
      <div class="mb-12">
        <h2
          class="text-center font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl mb-8"
        >
          Balances mensuales
        </h2>

        <div
          v-for="anio in empresaData.balances"
          :key="anio.id"
          class="flex flex-col lg:flex-row items-center mb-8 border-b border-maximiza-gris5 pb-8 last:border-0"
        >
          <h3
            class="text-maximiza-gris1 font-black text-lg md:text-2xl lg:w-[10%] lg:text-right lg:pr-8 mb-4 lg:mb-0"
          >
            {{ anio.ano }}
          </h3>

          <ul
            class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full lg:w-[90%] gap-1"
          >
            <li v-for="mes in anio.mes" :key="mes.id">
              <a
                :href="mes.descarga"
                download
                target="_blank"
                class="group flex items-center justify-start md:justify-center bg-maximiza-blanco2 hover:bg-maximiza-verde1 text-maximiza-gris2 hover:text-maximiza-blanco1 py-3 px-4 text-xs md:text-sm font-medium transition-colors duration-300 border-maximiza-blanco1"
              >
                <font-awesome-icon
                  :icon="['fas', 'download']"
                  class="mr-2 text-maximiza-verde1 group-hover:text-maximiza-blanco1 transition-colors"
                />
                <span class="capitalize">{{ mes.mes }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2
          class="text-center font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl mb-8"
        >
          Balances auditados
        </h2>

        <div
          v-for="anio in empresaData.balances_auditados"
          :key="anio.id"
          class="flex flex-col lg:flex-row items-center mb-8 border-b border-maximiza-gris5 pb-8 last:border-0"
        >
          <h3
            class="text-maximiza-gris1 font-black text-lg md:text-2xl lg:w-[10%] lg:text-right lg:pr-8 mb-4 lg:mb-0"
          >
            {{ anio.ano }}
          </h3>

          <ul class="grid grid-cols-2 md:grid-cols-4 w-full lg:w-[90%] gap-1">
            <li v-for="mes in anio.mes" :key="mes.id">
              <a
                :href="mes.descarga"
                download
                target="_blank"
                class="group flex items-center justify-start md:justify-center bg-maximiza-blanco2 hover:bg-maximiza-verde1 text-maximiza-gris2 hover:text-maximiza-blanco1 py-3 px-4 text-xs md:text-sm font-medium transition-colors duration-300 border-maximiza-blanco1"
              >
                <font-awesome-icon
                  :icon="['fas', 'download']"
                  class="mr-2 text-maximiza-verde1 group-hover:text-maximiza-blanco1 transition-colors"
                />
                <span class="capitalize">{{ mes.mes }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <CommonModal
      v-if="showModal"
      :id="selectedHistoriaId"
      :data="empresaData.historia"
      image-field-name="imagen"
      @close="closeModal"
    />
  </div>
</template>

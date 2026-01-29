<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getCumplimientoQuery } from "~/schemas/cumplimiento.schemas";
import { getImageUrl, getImageAlt, truncateText } from "~/lib/utils";
 
  

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const showModal = ref(false);
const selectedInfoId = ref<string | number | null>(null);

const openModal = (item: any) => {
  selectedInfoId.value = item.id;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedInfoId.value = null;
};

const graphql = useStrapiGraphQL();
const { data: legalData } = await useAsyncData("legal-data", async () => {
  try {
    const response = await graphql<any>(getCumplimientoQuery);
    return response?.data?.legal || null;
  } catch (error) {
    console.error("Error fetching cumplimiento:", error);
    return null;
  }
});

useSeoMeta({
  title: "Maximiza: Legitimación de capitales",
  description:
    "Las instituciones financieras pueden usarse para la legitimación de capitales, ¿cómo prevenir que eso ocurra?",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_cumplimiento_miniatura_3c4db9b532.webp",
});
</script>

<template>
  <div v-if="legalData" class="w-full">
    <CommonHero
      :text="legalData.principal.contenido"
      :image="legalData.principal.imagen"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ legalData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-12 md:mt-24 mb-16 md:mb-24">
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <li
          v-for="item in legalData.informacion"
          :key="item.id"
          class="w-full flex flex-col"
        >
          <div class="flex flex-col h-full">
            <h3 class="text-maximiza-verde1 font-black text-lg md:text-xl">
              {{ item.titulo }}
            </h3>

            <div
              class="text-maximiza-gris1 font-light text-sm leading-5 mb-4 prose prose-p:my-0"
              v-html="renderMarkdown(truncateText(item.contenido, 90))"
            ></div>

            <button
              class="button-primary --small w-fit"
              @click="openModal(item)"
            >
              Conocer más
            </button>
          </div>
        </li>
      </ul>
    </section>

    <section class="mx-auto px-4 xl:px-0 mb-16 md:mb-24">
      <div
        class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16"
      >
        <div class="w-full md:w-[40%] xl:w-[31%] shrink-0">
          <NuxtImg
            :src="getImageUrl(legalData.codigo.imagen)"
            :alt="getImageAlt(legalData.codigo.imagen)"
            provider="cloudinary"
            class="w-full h-auto object-cover"
          />
        </div>

        <div class="w-full md:w-[60%] xl:w-[67%]">
          <h2
            class="text-maximiza-verde1 font-black text-xl md:text-2xl mb-4 text-left"
          >
            {{ legalData.codigo.titulo }}
          </h2>
          <div
            class="text-maximiza-negro1 font-light text-sm md:text-base xl:text-lg leading-relaxed md:leading-loose border-b-2 border-maximiza-gris5 pb-8 md:columns-2 md:gap-12 text-justify"
            v-html="renderMarkdown(legalData.codigo.contenido)"
          ></div>
        </div>
      </div>
    </section>

    <section class="mx-auto px-4 xl:px-0 mb-16 md:mb-24">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl text-center mb-8 md:mb-12 w-full"
      >
        {{ legalData.normativas_titulo }}
      </h2>

      <ul class="flex flex-wrap justify-between gap-y-8 md:gap-y-12">
        <li
          v-for="item in legalData.descargas"
          :key="item.id"
          class="w-full md:w-[48%] xl:w-[32%] flex items-center gap-4 bg-maximiza-blanco1 md:bg-transparent p-4 md:p-0 shadow-sm md:shadow-none"
        >
          <div class="flex flex-col w-[15%] md:w-[12%] shrink-0">
            <div
              class="bg-maximiza-verde1 text-maximiza-blanco1 flex items-center justify-center py-2 h-8 md:h-9 w-full"
            >
              <font-awesome-icon
                :icon="['fas', 'eye']"
                class="text-xs md:text-sm"
              />
            </div>
            <a
              :href="item.vinculo"
              download
              target="_blank"
              class="bg-maximiza-blanco2 text-maximiza-verde1 flex items-center justify-center py-2 h-8 md:h-9 w-full hover:bg-gray-200 transition-colors"
            >
              <font-awesome-icon
                :icon="['fas', 'download']"
                class="text-xs md:text-sm"
              />
            </a>
          </div>

          <p
            class="text-maximiza-gris2 font-medium text-sm md:text-base leading-snug w-[85%] md:w-[88%]"
          >
            {{ item.documento }}
          </p>
        </li>
      </ul>
    </section>

    <CommonModal
      v-if="showModal"
      :id="selectedInfoId"
      :data="legalData.informacion"
      @close="closeModal"
    />
  </div>
</template>

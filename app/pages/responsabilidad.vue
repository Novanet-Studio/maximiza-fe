<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getResponsabilidadQuery } from "~/schemas/responsabilidad.schemas";

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const activeAccordion = ref<string | number | null>(null);

const toggleAccordion = (id: string | number) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};

const graphql = useStrapiGraphQL();

const { data: responsabilidadData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getResponsabilidadQuery);
    return response?.data?.responsabilidad || null;
  } catch (error) {
    console.error("Error fetching responsabilidad:", error);
    return null;
  }
});

useSeoMeta({
  title: "Responsabilidad",
  description:
    "Contamos con la generación de dividendos para la empresa y el planteamiento del impacto social.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_responsabilidad_miniatura_cd2b3fa7fc.webp",
});
</script>

<template>
  <div v-if="responsabilidadData" class="w-full">
    <CommonHero
      :text="responsabilidadData.principal.contenido"
      :image="responsabilidadData.principal.imagen"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <div
          class="hero-title text-left"
          v-html="renderMarkdown(responsabilidadData.principal.titulo)"
        ></div>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-16 md:mt-24 mb-16 md:mb-24">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl text-center mb-12"
      >
        {{ responsabilidadData.contribucion }}
      </h2>

      <ul
        class="flex flex-col sm:flex-row flex-wrap justify-between gap-y-4 sm:gap-y-0 sm:gap-x-6"
      >
        <li
          v-for="item in responsabilidadData.contribuciones_secciones"
          :key="item.id"
          class="relative w-full sm:flex-1 bg-maximiza-blanco2 shadow-sm"
        >
          <button
            @click="toggleAccordion(item.id)"
            class="w-full flex items-center justify-between p-2 text-left transition-colors hover:bg-maximiza-gris5 h-full border-b border-maximiza-gris5"
            :class="{ 'bg-maximiza-gris5': activeAccordion === item.id }"
          >
            <h3
              class="text-maximiza-verde1 font-black text-base sm:text-xs md:text-base lg:text-lg pr-4"
            >
              {{ item.titulo }}
            </h3>

            <font-awesome-icon
              :icon="['fas', 'caret-down']"
              class="text-maximiza-verde1 transition-transform duration-300 ml-2 shrink-0"
              :class="{ 'rotate-180': activeAccordion === item.id }"
            />
          </button>

          <div
            class="overflow-hidden transition-all duration-300 ease-in-out bg-maximiza-blanco1 absolute z-20 w-full shadow-lg left-0 top-full"
            :class="
              activeAccordion === item.id
                ? 'opacity-100 visible'
                : 'opacity-0 invisible h-0'
            "
          >
            <div class="p-2 border-t border-maximiza-gris5">
              <div
                class="text-maximiza-gris1 text-sm md:text-base leading-relaxed prose prose-p:my-0 prose-a:text-maximiza-verde1"
                v-html="renderMarkdown(item.contenido)"
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="mx-auto px-4 xl:px-0 mt-16 md:mt-24 mb-16 md:mb-24">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl text-center mb-8 w-full"
      >
        Causas que apoyamos
      </h2>

      <div
        class="text-center text-maximiza-gris2 font-normal text-sm md:text-base leading-relaxed max-w-4xl mx-auto mb-12 prose prose-p:my-0 prose-a:text-maximiza-verde1"
        v-html="
          renderMarkdown(responsabilidadData.colaboracion_texto.contenido)
        "
      ></div>

      <AwarenessCharitableCauses />
    </section>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getMediosQuery } from "~/schemas/medios.schemas";

const graphql = useStrapiGraphQL();

const { data: mediosData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getMediosQuery);

    return response?.data?.medio || null;
  } catch (error) {
    console.error("Error fetching medio:", error);
    return null;
  }
});

useSeoMeta({
  title: "Medios de Comunicacion",
  description:
    "Exposicion de Maximiza en los medios de comunicacion tradicionales",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_medios_miniatura_488c08a954.webp",
});
</script>

<template>
  <div v-if="mediosData" class="w-full">
    <CommonHero
      :text="mediosData.principal.contenido"
      :image="mediosData.principal.imagen"
      :show-logo="false"
      :inverted="true"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ mediosData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <CommonContactBanner />
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";

const props = defineProps<{
  data: any[];
  id: number | string | null;
  imageFieldName?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

const activeItem = computed(() => {
  return props.data.find((item) => item.id === props.id);
});

const renderedContent = computed(() => {
  const content = activeItem.value?.contenido;
  if (!content) return "";

  // Adaptación para contenido directo (string)
  if (typeof content === "string") {
    return md.render(content);
  }

  // Adaptación para Strapi / Structure antigua
  if (content?.data?.contenido) {
    return md.render(content.data.contenido);
  }

  return "";
});

const imageUrl = computed(() => {
  if (!activeItem.value || !props.imageFieldName) return null;
  const imgData = activeItem.value[props.imageFieldName];

  // Adaptación para Strapi 5 / Cloudinary
  if (imgData?.data?.attributes?.url) return imgData.data.attributes.url;
  if (imgData?.url) return imgData.url;
  return null;
});
</script>

<template>
  <div
    v-if="activeItem"
    class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-maximiza-negro1/60"
  >
    <div
      class="bg-maximiza-blanco1 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative animate-fadeIn"
    >
      <button
        class="absolute top-4 right-4 text-maximiza-gris4 hover:text-maximiza-gris6 text-3xl font-light leading-none z-10 transition-colors"
        @click="emit('close')"
      >
        &times;
      </button>

      <div class="p-6 md:p-10">
        <div class="flex gap-2 mb-6">
          <div class="bg-maximiza-verde1 flex justify-center items-center">
            <NuxtImg
              class="w-full min-w-[40px] h-auto"
              v-if="imageUrl"
              :src="imageUrl"
              :title="activeItem.titulo"
              :alt="activeItem.titulo"
              provider="cloudinary"
            />
          </div>

          <h2
            class="text-2xl md:text-3xl font-maximiza-negrbg-maximiza-negro1 text-maximiza-verde1 leading-tight"
          >
            {{ activeItem.titulo }}
          </h2>
        </div>

        <div
          class="prose prose-lg max-w-none text-gray-600 prose-headings:font-bold prose-a:text-maximiza-verde1"
          v-html="renderedContent"
        ></div>
      </div>
    </div>
  </div>
</template>

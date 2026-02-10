<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getImageAlt, getImageUrl } from "~/lib/utils";
import { getArticuloBySlugQuery } from "~/schemas/blog.schemas";

const route = useRoute();
const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const slug = route.params.slug as string;

const graphql = useStrapiGraphQL();
const { data: articulo } = await useAsyncData(`articulo-${slug}`, async () => {
  try {
    const response = await graphql<any>(getArticuloBySlugQuery, { slug });

    return response?.data?.articulos?.[0] || null;
  } catch (error) {
    console.error("Error fetching articulo:", error);
    return null;
  }
});

if (!articulo.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Artículo no encontrado",
  });
}

useSeoMeta({
  title: articulo.value?.titulo,
  description:
    articulo.value?.descripcion?.substring(0, 160) || "Artículo de Maximiza",
  ogImage: getImageUrl(articulo.value?.imagen),
});

const currentUrl = ref("");

onMounted(() => {
  currentUrl.value = window.location.href;
});

const share = (platform: "twitter" | "linkedin") => {
  const url = encodeURIComponent(currentUrl.value);
  const text = encodeURIComponent(articulo.value?.titulo || "");

  let shareUrl = "";
  if (platform === "twitter") {
    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  } else if (platform === "linkedin") {
    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  }

  window.open(shareUrl, "_blank", "width=600,height=400");
};
</script>

<template>
  <div v-if="articulo" class="w-full bg-white">
    <section class="mx-auto px-4 xl:px-0">
      <NuxtLink
        to="/blog"
        class="text-maximiza-verde1 font-black text-sm md:text-base mb-6 inline-block"
      >
        « Volver al blog
      </NuxtLink>

      <div class="w-full h-[35vh] md:h-[55vh] lg:h-[45vh] mb-8 relative">
        <NuxtImg
          :src="getImageUrl(articulo.imagen)"
          :alt="getImageAlt(articulo.imagen)"
          provider="cloudinary"
          class="w-full h-full object-cover shadow-sm"
        />
      </div>

      <div
        class="bg-maximiza-verde1 text-white text-center py-4 px-4 md:px-12 -mt-16 md:-mt-20 relative z-10 mx-auto shadow-lg"
      >
        <h1
          class="font-black text-maximiza-blanco2 text-xl md:text-2xl leading-tight"
        >
          {{ articulo.titulo }}
        </h1>
      </div>
    </section>

    <article class="mx-auto px-4 xl:px-0 mb-20 md:mb-32">
      <div
        class="mt-8 text-maximiza-gris1 text-base md:text-lg font-light prose prose-headings:text-maximiza-verde1 prose-a:text-maximiza-verde1 prose-strong:text-maximiza-negro1 max-w-none md:columns-2 md:gap-6"
        style="line-height: 1.3"
        v-html="renderMarkdown(articulo.descripcion)"
      ></div>

      <div class="mt-12">
        <h3 class="text-maximiza-negro1 font-bold text-lg mb-4">
          Comparte este artículo
        </h3>
        <div class="flex gap-4">
          <button
            @click="share('linkedin')"
            class="w-10 h-10 flex items-center justify-center bg-[#0077b5] text-white rounded-full hover:opacity-90 transition-opacity"
            aria-label="Compartir en LinkedIn"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin-in']"
              class="text-maximiza-blanco2"
            />
          </button>

          <button
            @click="share('twitter')"
            class="w-10 h-10 flex items-center justify-center bg-[#000] text-white rounded-full hover:opacity-90 transition-opacity"
            aria-label="Compartir en Twitter"
          >
            <font-awesome-icon
              :icon="['fab', 'x-twitter']"
              class="text-maximiza-blanco2"
            />
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
.prose h2 {
  @apply text-left mt-8 mb-4 font-bold text-xl md:text-2xl;
}
.prose p {
  @apply mb-4;
}
</style>

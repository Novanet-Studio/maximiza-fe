<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  const props = defineProps<{
    data: any[]
    id: number | string | null
    imageFieldName?: string
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })

  const activeItem = computed(() => {
    return props.data.find((item) => item.id === props.id)
  })

  const renderedContent = computed(() => {
    const content = activeItem.value?.contenido
    if (!content) return ''

    // Adaptación para contenido directo (string)
    if (typeof content === 'string') {
      return md.render(content)
    }

    // Adaptación para Strapi / Structure antigua
    if (content?.data?.contenido) {
      return md.render(content.data.contenido)
    }

    return ''
  })

  const imageUrl = computed(() => {
    if (!activeItem.value || !props.imageFieldName) return null
    const imgData = activeItem.value[props.imageFieldName]

    // Adaptación para Strapi 5 / Cloudinary
    if (imgData?.data?.attributes?.url) return imgData.data.attributes.url
    if (imgData?.url) return imgData.url
    return null
  })
</script>

<template>
  <div
    v-if="activeItem"
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-maximiza-negro1/60 p-4"
  >
    <div
      class="animate-fadeIn relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-maximiza-blanco1 shadow-2xl"
    >
      <button
        class="hover:text-maximiza-gris6 absolute right-4 top-4 z-10 text-3xl font-light leading-none text-maximiza-gris4 transition-colors"
        @click="emit('close')"
      >
        &times;
      </button>

      <div class="p-6 md:p-10">
        <div class="mb-6 flex gap-2">
          <div class="flex items-center justify-center bg-maximiza-verde1">
            <NuxtImg
              class="h-auto w-full min-w-[40px]"
              v-if="imageUrl"
              :src="imageUrl"
              :title="activeItem.titulo"
              :alt="activeItem.titulo"
              provider="cloudinary"
            />
          </div>

          <h2
            class="font-maximiza-negrbg-maximiza-negro1 text-2xl leading-tight text-maximiza-verde1 md:text-3xl"
          >
            {{ activeItem.titulo }}
          </h2>
        </div>

        <div
          class="prose prose-lg text-gray-600 prose-headings:font-bold prose-a:text-maximiza-verde1 max-w-none"
          v-html="renderedContent"
        ></div>
      </div>
    </div>
  </div>
</template>

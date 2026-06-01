<script setup lang="ts">
  import MarkdownIt from 'markdown-it'
  import { getImageAlt, getImageUrl } from '~/lib/utils'

  interface Props {
    text?: string
    image: any

    textWrapperClass?: string

    inverted?: boolean
    showLogo?: boolean

    buttonText?: string
    buttonLink?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    inverted: false,
    showLogo: false,
  })

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')
</script>

<template>
  <section class="mb-12 flex flex-col items-center lg:min-h-[26vh] lg:flex-row xl:min-h-[46vh]">
    <div
      :class="[
        'flex w-full flex-col lg:w-1/2',
        inverted
          ? 'items-start text-left md:order-2 md:pl-8'
          : 'items-start text-left md:order-1 md:pr-8 lg:items-end lg:text-right',

        textWrapperClass,
      ]"
    >
      <img
        v-if="showLogo"
        src="/images/logo-maximiza.svg"
        alt="Maximiza logo"
        class="mb-4 hidden w-[25vw] md:block"
        :class="inverted ? 'mr-auto' : 'ml-auto'"
      />

      <slot name="custom-title" />

      <div
        v-if="text"
        class="mb-4 max-w-prose text-base font-normal leading-relaxed text-maximiza-gris3 md:mb-8 md:text-2xl"
        :class="inverted ? 'mr-auto text-left' : 'lg:ml-auto lg:text-right'"
        v-html="renderMarkdown(text)"
      />

      <div v-if="buttonText" class="mt-4">
        <NuxtLink :to="buttonLink" class="button-primary">
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>

    <div
      class="mt-6 w-full md:mt-0 lg:w-1/2"
      :class="[inverted ? 'md:order-1 md:pr-[2vw]' : 'md:order-2 md:pl-[2vw]']"
    >
      <NuxtImg
        :src="getImageUrl(image)"
        :alt="getImageAlt(image)"
        provider="cloudinary"
        class="h-auto w-full object-cover"
      />
    </div>
  </section>
</template>

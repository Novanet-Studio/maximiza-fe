<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getImageAlt, getImageUrl } from "~/lib/utils";

interface Props {
  text?: string;
  image: any;

  textWrapperClass?: string;

  inverted?: boolean;
  showLogo?: boolean;

  buttonText?: string;
  buttonLink?: string;
}

const props = withDefaults(defineProps<Props>(), {
  inverted: false,
  showLogo: false,
});

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");
</script>

<template>
  <section
    class="flex flex-col lg:flex-row items-center lg:min-h-[26vh] xl:min-h-[46vh] mb-12"
  >
    <div
      :class="[
        'w-full lg:w-1/2 flex flex-col',
        inverted
          ? 'md:pl-8 md:order-2 text-left items-start'
          : 'md:pr-8 md:order-1 text-left lg:text-right items-start lg:items-end',

        textWrapperClass,
      ]"
    >
      <img
        v-if="showLogo"
        src="/images/logo-maximiza.svg"
        alt="Maximiza logo"
        class="hidden md:block w-[25vw] mb-4"
        :class="inverted ? 'mr-auto' : 'ml-auto'"
      />

      <slot name="custom-title" />

      <div
        v-if="text"
        class="text-maximiza-gris3 font-normal text-base md:text-2xl leading-relaxed mb-4 md:mb-8 max-w-prose"
        :class="inverted ? 'text-left mr-auto' : 'lg:text-right lg:ml-auto'"
        v-html="renderMarkdown(text)"
      />

      <div v-if="buttonText" class="mt-4">
        <NuxtLink :to="buttonLink" class="button-primary">
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>

    <div
      class="w-full lg:w-1/2 mt-6 md:mt-0"
      :class="[inverted ? 'md:order-1 md:pr-[2vw]' : 'md:order-2 md:pl-[2vw]']"
    >
      <NuxtImg
        :src="getImageUrl(image)"
        :alt="getImageAlt(image)"
        provider="cloudinary"
        class="w-full h-auto object-cover"
      />
    </div>
  </section>
</template>

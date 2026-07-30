<script setup lang="ts">
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
  generalImageVariants,
} from '@/assets/animations/motion'

interface HeroProps {
  title: string
  description: string
  button?: {
    text: string
    link: string
  }
  image: {
    src: string
    alt: string
  }
  pattern?: {
    src: string
  }
}

const props = defineProps<HeroProps>()
</script>

<template>
  <motion.section
    class="mt-[10vh] w-full overflow-hidden"
    :style="{
      backgroundImage: `url(${props.pattern?.src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
    :variants="generalContainerVariants"
    initial="hidden"
    whileInView="visible"
    :viewport="{ once: true, margin: '-10px' }"
  >
    <div class="h-full w-full bg-white/75">
      <div
        class="container flex flex-col items-center justify-center py-8 max-sm:min-h-[90dvh] sm:min-h-[460px] sm:flex-row sm:py-0 xl:justify-between"
      >
        <div class="flex w-auto items-center justify-center sm:h-full">
          <div class="">
            <motion.div :variants="generalItemVariants">
              <h1 class="mb-4" v-html="props.title" />
            </motion.div>
            <motion.div :variants="generalItemVariants">
              <p
                class="text-gray max-w-[642px] text-xl leading-[28px] font-normal md:text-sm md:leading-[26px] lg:text-xl lg:leading-[28px]"
                v-html="props.description"
              />
            </motion.div>
            <motion.div :variants="generalItemVariants">
              <NuxtLink
                :title="props.button.text"
                v-if="props.button"
                :to="props.button?.link"
              >
                <UiButton
                  class="mt-4"
                  :text="props.button.text"
                  :icon="'check'"
                  size="md"
                />
              </NuxtLink>
            </motion.div>
          </div>
        </div>

        <motion.div
          class="mt-8 aspect-[554/306] h-auto w-full shrink-0 sm:mt-0 md:w-[284px] xl:w-[554px]"
          :variants="generalImageVariants"
        >
          <img
            :src="props.image.src"
            :alt="props.image.alt"
            :title="props.image.alt"
            class="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
</template>

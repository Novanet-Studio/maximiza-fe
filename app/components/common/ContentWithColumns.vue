<script setup lang="ts">
import { Motion } from 'motion-v'
import { generalItemVariants } from '~/assets/animations/motion'

const props = withDefaults(
  defineProps<{
    title?: string
    backgroundImage?: string
    isSplitBackground?: boolean
    coverWrapper?: boolean
    autoColumns?: boolean
    columns?: {
      left?: string
      right?: string
    }
  }>(),
  {
    coverWrapper: false,
    isSplitBackground: false,
    autoColumns: false,
  }
)
</script>

<template>
  <section class="relative flex w-full pb-10">
    <div class="pointer-events-none absolute inset-0 z-0 flex h-full w-full">
      <template v-if="isSplitBackground">
        <div class="bg-primary relative h-full w-full overflow-hidden md:w-1/2">
          <img
            v-if="backgroundImage"
            :src="backgroundImage"
            alt="Background"
            title="Background"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div class="hidden h-full w-1/2 bg-white md:block"></div>
      </template>
      <template v-else>
        <div
          :class="`w-full ${coverWrapper ? 'h-full' : 'h-[490px] md:h-[214px] lg:h-[340px]'} relative overflow-hidden`"
        >
          <img
            v-if="backgroundImage"
            :src="backgroundImage"
            alt="Background"
            title="Background"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </template>
    </div>

    <div
      class="relative z-10 container mx-auto flex w-full flex-col items-start justify-center pt-10 max-sm:pb-10 md:flex-row"
    >
      <div
        class="mb-8 flex w-full items-center justify-start md:mb-4"
        :class="[autoColumns === false ? 'md:w-[35%]' : columns?.left]"
      >
        <Motion :variants="generalItemVariants">
          <h2 v-if="title" class="text-white" v-html="title" />
        </Motion>
      </div>

      <div
        class="flex w-full flex-col items-center gap-8"
        :class="[autoColumns === false ? 'md:w-[65%]' : columns?.right]"
      >
        <slot />
      </div>
    </div>
  </section>
</template>

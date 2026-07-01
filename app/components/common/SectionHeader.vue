<script setup lang="ts">
import { motion } from 'motion-v'
import { generalItemVariants } from '@/assets/animations/motion'

interface Props {
  title: string
  titleClass?: string
  description?: string
}

const props = defineProps<Props>()
</script>

<template>
  <header class="mx-auto mb-8 max-w-4xl text-center">
    <motion.div :variants="generalItemVariants">
      <h2 :class="`${titleClass}`" v-html="title" />
    </motion.div>

    <motion.div v-if="description" :variants="generalItemVariants">
      <p
        class="text-gray mx-auto mt-6 mb-4 max-w-2xl text-center text-xl leading-[28px] md:text-sm md:leading-[26px] lg:text-xl lg:leading-[28px]"
        v-html="description"
      />
    </motion.div>
  </header>
</template>

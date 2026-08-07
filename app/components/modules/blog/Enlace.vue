<script setup lang="ts">
  import { motion } from 'motion-v'
  import { generalItemVariants } from '~/assets/animations/motion'
  import { formatLongDate } from '~/lib/utils'

  interface Props {
    enlace: MXMZ.Enlace
  }

  const { enlace } = defineProps<Props>()
</script>

<template>
  <a
    :href="enlace.link"
    :title="enlace.titulo"
    target="_blank"
    rel="noopener noreferrer"
    class="group w-full md:w-[359px] xl:w-[498px]"
  >
    <motion.div
      class="border-gray text-black-alt group-hover:border-primary group-hover:text-primary flex flex-col justify-center gap-[10px] border-l pl-5 transition-colors"
      :variants="generalItemVariants"
    >
      <p
        class="text-[16px] leading-[18px] font-extrabold break-words xl:text-[20px] xl:leading-[22px]"
      >
        {{ enlace.titulo }}
      </p>
      <span class="text-gray text-[12px] leading-[19px] font-normal xl:text-[15px]">
        Publicado el {{ formatLongDate(enlace.fecha) }}
      </span>
    </motion.div>
  </a>
</template>

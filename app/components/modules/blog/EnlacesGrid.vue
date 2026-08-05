<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { motion } from 'motion-v'
  import { generalContainerVariants } from '~/assets/animations/motion'
  import { useEnlaces } from '~/composables/useEnlaces'

  const { getAllEnlaces } = useEnlaces()

  const enlaces = ref<MXMZ.Enlace[]>([])
  const isLoading = ref(true)

  onMounted(async () => {
    try {
      enlaces.value = await getAllEnlaces()
    } catch (error) {
      console.error('Error fetching enlaces:', error)
    } finally {
      isLoading.value = false
    }
  })
</script>

<template>
  <motion.section
    class="w-full"
    :variants="generalContainerVariants"
    initial="hidden"
    whileInView="visible"
    :viewport="{ once: true, margin: '-50px' }"
  >
    <div
      class="relative flex items-center justify-center py-[50px]"
      :style="{
        backgroundImage: `url(/images/pages/blog/enlaces-encabezado.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div class="bg-black-alt absolute inset-0 mix-blend-color" />

      <div class="container relative">
        <p
          class="text-white-alt text-center text-[30px] leading-[32px] font-extrabold md:text-[20px] md:leading-[22px] xl:text-[30px] xl:leading-[32px]"
        >
          Enlaces de interés
        </p>
      </div>
    </div>

    <div class="relative flex w-full items-center justify-center bg-white px-[10px] py-16 xl:py-[70px]">
      <img
        src="/images/pages/blog/enlaces-links-bg.webp"
        alt=""
        class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-hard-light"
      />

      <div v-if="isLoading" class="relative flex w-full items-center justify-center py-24">
        <AppLoader />
      </div>

      <div v-else class="container relative flex flex-wrap items-center justify-between gap-y-10">
        <ModulesBlogEnlace v-for="enlace in enlaces" :key="enlace.link" :enlace="enlace" />
      </div>
    </div>
  </motion.section>
</template>

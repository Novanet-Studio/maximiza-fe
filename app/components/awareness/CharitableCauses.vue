<script setup lang="ts">
  const causas = [
    { name: 'Alimenta la solidaridad', src: '/images/causas-as.jpeg' },
    { name: 'Cámara de Comercio de Caracas', src: '/images/causas-ccc.jpeg' },
    { name: 'Fe y Alegría', src: '/images/causas-fa.jpeg' },
    { name: 'Acide', src: '/images/causas-acide.jpeg' },
  ]
</script>

<template>
  <ul class="flex w-full flex-col flex-wrap items-start justify-between gap-8 sm:flex-row sm:gap-4">
    <li
      v-for="causa in causas"
      :key="causa.name"
      class="flex w-full flex-col items-center sm:w-[48%] md:w-[22.5%]"
    >
      <img
        :src="causa.src"
        :alt="`Logo ${causa.name}`"
        :title="causa.name"
        class="mb-4 h-[50vw] w-[50vw] object-contain sm:h-[20vh] sm:w-[20vh] md:h-[12.5vw] md:w-[12.5vw] lg:h-[13vh] lg:w-[13vh]"
      />
      <p
        class="w-[75%] text-center text-sm font-bold text-maximiza-gris2 md:w-full md:text-base lg:text-lg"
      >
        {{ causa.name }}
      </p>
    </li>
  </ul>
</template>

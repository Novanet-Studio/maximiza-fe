<script setup lang="ts">
const causas = [
  { name: "Alimenta la solidaridad", src: "/images/causas-as.jpeg" },
  { name: "Cámara de Comercio de Caracas", src: "/images/causas-ccc.jpeg" },
  { name: "Fe y Alegría", src: "/images/causas-fa.jpeg" },
  { name: "Acide", src: "/images/causas-acide.jpeg" },
];
</script>

<template>
  <ul
    class="flex flex-col sm:flex-row flex-wrap justify-between items-start gap-8 sm:gap-4 w-full"
  >
    <li
      v-for="causa in causas"
      :key="causa.name"
      class="w-full sm:w-[48%] md:w-[22.5%] flex flex-col items-center"
    >
      <img
        :src="causa.src"
        :alt="`Logo ${causa.name}`"
        :title="causa.name"
        class="w-[50vw] h-[50vw] sm:w-[20vh] sm:h-[20vh] md:w-[12.5vw] md:h-[12.5vw] lg:w-[13vh] lg:h-[13vh] object-contain mb-4"
      />
      <p
        class="text-maximiza-gris2 font-bold text-center text-sm md:text-base lg:text-lg w-[75%] md:w-full"
      >
        {{ causa.name }}
      </p>
    </li>
  </ul>
</template>

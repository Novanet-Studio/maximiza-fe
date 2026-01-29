<script setup lang="ts">
const aliados = [
  { name: "Morgan Stanley", src: "/images/aliados/morgan-stanley.png" },
  {
    name: "Intesa Sanpaolo",
    src: "/images/aliados/intesa-sanpaolo.jpeg",
  },
  { name: "Vitral", src: "/images/aliados/vitral.jpeg" },
  { name: "Credit Suisse", src: "/images/aliados/credit-suisse.png" },
  { name: "Oppenheimer", src: "/images/aliados/oppenheimer.jpeg" },
  { name: "Silk", src: "/images/aliados/silk.jpeg" },
];
</script>

<template>
  <ul
    class="flex flex-wrap justify-center md:justify-between items-center w-full h-full gap-y-8 md:gap-y-0"
  >
    <li
      v-for="aliado in aliados"
      :key="aliado.name"
      class="flex justify-center items-center w-[40%] sm:w-[25%] md:w-[15%]"
    >
      <img
        :src="aliado.src"
        :alt="`Logo ${aliado.name}`"
        class="max-w-full h-auto object-contain min-h-[80px]"
      />
    </li>
  </ul>
</template>

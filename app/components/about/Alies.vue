<script setup lang="ts">
  const aliados = [
    { name: 'Morgan Stanley', src: '/images/aliados/morgan-stanley.png' },
    {
      name: 'Intesa Sanpaolo',
      src: '/images/aliados/intesa-sanpaolo.jpeg',
    },
    { name: 'Vitral', src: '/images/aliados/vitral.jpeg' },
    { name: 'Credit Suisse', src: '/images/aliados/credit-suisse.png' },
    { name: 'Oppenheimer', src: '/images/aliados/oppenheimer.jpeg' },
    { name: 'Silk', src: '/images/aliados/silk.jpeg' },
  ]
</script>

<template>
  <ul
    class="flex h-full w-full flex-wrap items-center justify-center gap-y-8 md:justify-between md:gap-y-0"
  >
    <li
      v-for="aliado in aliados"
      :key="aliado.name"
      class="flex w-[40%] items-center justify-center sm:w-[25%] md:w-[15%]"
    >
      <img
        :src="aliado.src"
        :alt="`Logo ${aliado.name}`"
        class="h-auto min-h-[80px] max-w-full object-contain"
      />
    </li>
  </ul>
</template>

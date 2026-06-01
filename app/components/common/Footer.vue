<script setup lang="ts">
  const socialLinks = ref<any[]>([
    {
      id: '1',
      icono: 'instagram',
      prefijo: 'fab',
      vinculo: 'https://www.instagram.com/maximiza_ve/',
      contenido: 'Instagram',
    },
    {
      id: '3',
      icono: 'twitter',
      prefijo: 'fab',
      vinculo: 'https://twitter.com/maximiza_ve',
      contenido: 'twitter',
    },
  ])

  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="flex flex-col items-center justify-center gap-2 px-2 py-4 md:flex-row md:justify-start md:px-0"
  >
    <ul class="flex gap-2">
      <li
        v-for="document in socialLinks"
        :key="document.id"
        class="flex h-8 w-8 items-center justify-center bg-maximiza-verde1 hover:bg-maximiza-verde6"
      >
        <a
          :href="document.vinculo"
          rel="noopener noreferrer"
          target="_blank"
          :aria-label="`Ir a ${document.contenido}`"
        >
          <font-awesome-icon
            class="text-maximiza-blanco1"
            :icon="[document.prefijo.replace(/'/g, ''), document.icono.replace(/'/g, '')]"
            size="1x"
          />
        </a>
      </li>
    </ul>
    <p class="flex items-center gap-2 text-center text-maximiza-gris1">
      © {{ currentYear }} Maximiza Casa de Bolsa - Derechos reservados
    </p>
    <p class="flex items-center gap-2 text-center text-maximiza-gris1">
      Diseñado por:
      <img class="h-7 md:h-5" src="/images/logo-nn.svg" alt="Logo Novanet Studio" />
    </p>
  </footer>
</template>

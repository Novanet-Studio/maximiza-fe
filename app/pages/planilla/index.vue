<script setup lang="ts">
  useSeoMeta({
    title: 'Registro de Planilla',
  })

  const heroImage = {
    url: 'https://res.cloudinary.com/novanet-studio/image/upload/v1769799589/maximiza/v4/onboarding_portraid_929d995c64.webp',
    alternativeText: 'Registro',
  }
</script>

<template>
  <div class="min-h-dvh w-full">
    <CommonHero
      text="Abre tu Cuenta de Corretaje Bursátil de forma rápida, cumpliendo con la normativa de la Superintendencia Nacional de Valores (SNV)."
      :image="heroImage"
      :show-logo="false"
      :inverted="true"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="mb-4 text-left text-2xl font-black text-maximiza-verde1 md:text-3xl">
          ¡Bienvenido a Maximiza Casa de Bolsa!
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto grid max-w-7xl place-content-center gap-8 md:grid-cols-2">
      <NuxtLink
        to="/planilla/natural"
        class="group flex w-full flex-col items-center rounded-lg border-2 border-maximiza-gris5 bg-maximiza-blanco1 p-10 text-center shadow-sm transition-all duration-300 hover:border-maximiza-verde1 hover:shadow-lg"
      >
        <div
          class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-maximiza-blanco2 transition-colors group-hover:bg-maximiza-verde1"
        >
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-3xl text-maximiza-verde1 group-hover:text-maximiza-blanco1"
          />
        </div>
        <h3 class="mb-4 text-xl font-black text-maximiza-negro1">Persona Natural</h3>
        <p class="text-sm text-maximiza-gris2">Para inversionistas individuales.</p>
      </NuxtLink>

      <NuxtLink
        to="/planilla/juridica"
        class="group flex w-full flex-col items-center rounded-lg border-2 border-maximiza-gris5 bg-maximiza-blanco1 p-10 text-center shadow-sm transition-all duration-300 hover:border-maximiza-verde1 hover:shadow-lg"
      >
        <div
          class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-maximiza-blanco2 transition-colors group-hover:bg-maximiza-verde1"
        >
          <font-awesome-icon
            :icon="['fas', 'building']"
            class="text-3xl text-maximiza-verde1 group-hover:text-maximiza-blanco1"
          />
        </div>
        <h3 class="mb-4 text-xl font-black text-maximiza-negro1">Persona Jurídica</h3>
        <p class="text-sm text-maximiza-gris2">Para empresas y organizaciones.</p>
      </NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Registro de Planilla",
});

const heroImage = {
  url: "https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp",
  alternativeText: "Registro",
};
</script>

<template>
  <div class="w-full min-h-dvh">
    <CommonHero
      text="Seleccione el tipo de persona para iniciar el proceso de registro."
      :image="heroImage"
      :show-logo="false"
      :inverted="true"
      :button-text="''"
    >
      <template #custom-title>
        <h1
          class="text-maximiza-verde1 font-black text-2xl md:text-3xl mb-4 text-left"
        >
          Registro de Planilla
        </h1>
      </template>
    </CommonHero>

    <section
      class="max-w-7xl mx-auto grid md:grid-cols-2 place-content-center gap-8"
    >
      <NuxtLink
        to="/planilla/natural"
        class="group w-full bg-maximiza-blanco1 border-2 border-maximiza-gris5 hover:border-maximiza-verde1 p-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
      >
        <div
          class="w-20 h-20 bg-maximiza-blanco2 rounded-full flex items-center justify-center mb-6 group-hover:bg-maximiza-verde1 transition-colors"
        >
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-3xl text-maximiza-verde1 group-hover:text-maximiza-blanco1"
          />
        </div>
        <h3 class="text-xl font-black text-maximiza-negro1 mb-4">
          Persona Natural
        </h3>
        <p class="text-maximiza-gris2 text-sm">
          Para inversionistas individuales.
        </p>
      </NuxtLink>

      <NuxtLink
        to="/planilla/juridica"
        class="group w-full bg-maximiza-blanco1 border-2 border-maximiza-gris5 hover:border-maximiza-verde1 p-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
      >
        <div
          class="w-20 h-20 bg-maximiza-blanco2 rounded-full flex items-center justify-center mb-6 group-hover:bg-maximiza-verde1 transition-colors"
        >
          <font-awesome-icon
            :icon="['fas', 'building']"
            class="text-3xl text-maximiza-verde1 group-hover:text-maximiza-blanco1"
          />
        </div>
        <h3 class="text-xl font-black text-maximiza-negro1 mb-4">
          Persona Jurídica
        </h3>
        <p class="text-maximiza-gris2 text-sm">
          Para empresas y organizaciones.
        </p>
      </NuxtLink>
    </section>
  </div>
</template>

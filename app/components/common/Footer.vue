<script setup lang="ts">
import { getFooterQuery } from "~/schemas/common.schema";

const graphql = useStrapiGraphQL();

const { data: socialLinks } = await useAsyncData<any[]>(
  async () => {
    try {
      const response = await graphql<any>(getFooterQuery);

      if (response.data.contacto.info_contacto) {
        return response.data.contacto.info_contacto;
      }

      return [];
    } catch (error) {
      console.error("Error cargando footer:", error);
      return [];
    }
  },
  {
    default: () => [],
  },
);

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="px-2 md:px-0 py-4 flex flex-col md:flex-row justify-center items-center md:justify-start gap-2"
  >
    <ul class="flex gap-2">
      <li
        v-for="document in socialLinks"
        :key="document.id"
        class="bg-maximiza-verde1 hover:bg-maximiza-verde6 w-8 h-8 flex items-center justify-center"
      >
        <a
          :href="document.vinculo"
          rel="noopener noreferrer"
          target="_blank"
          :aria-label="`Ir a ${document.contenido}`"
        >
          <font-awesome-icon
            class="text-maximiza-blanco1"
            :icon="[
              document.prefijo.replace(/'/g, ''),
              document.icono.replace(/'/g, ''),
            ]"
            size="1x"
          />
        </a>
      </li>
    </ul>
    <p class="text-maximiza-gris1 flex items-center gap-2 text-center">
      © {{ currentYear }} Maximiza Casa de Bolsa - Derechos reservados
    </p>
    <p class="text-maximiza-gris1 flex items-center gap-2 text-center">
      Diseñado por:
      <img
        class="h-7 md:h-5"
        src="/images/logo-nn.svg"
        alt="Logo Novanet Studio"
      />
    </p>
  </footer>
</template>

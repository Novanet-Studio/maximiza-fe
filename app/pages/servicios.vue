<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { getServiciosQuery } from "~/schemas/servicios.schemas";
import { getImageUrl, getImageAlt, truncateText } from "~/lib/utils";

  

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const showModal = ref(false);
const selectedItemId = ref<string | number | null>(null);

const activeAccordion = ref<string | number | null>(null);

const comissions = ref([
  {
    servicio: "Compra/Venta de títulos valores",
    detalle: "Hasta 5% del monto transado",
  },
  {
    servicio: "Estructuración de instrumentos de deuda",
    detalle: "Hasta 5% del monto emitido",
  },
  {
    servicio: "Colocación de instrumentos de deuda",
    detalle: "Hasta 5% del monto colocado",
  },
]);

const openModal = (item: any) => {
  selectedItemId.value = item.id;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedItemId.value = null;
};

const toggleAccordion = (id: string | number) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};

const graphql = useStrapiGraphQL();

const { data: serviciosData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getServiciosQuery);
    return response?.data?.servicio || null;
  } catch (error) {
    console.error("Error fetching servicios:", error);
    return null;
  }
});

useSeoMeta({
  title: "Maximiza inversiones en la bolsa",
  description:
    "Ofrecemos diferentes estrategias financieras para gestionar sus inversiones en la bolsa de valores.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp",
});
</script>

<template>
  <div v-if="serviciosData" class="w-full">
    <CommonHero
      :text="serviciosData.principal.contenido"
      :image="serviciosData.principal.imagen"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title md:text-right">
          {{ serviciosData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-16 md:mt-36 mb-16 md:mb-24">
      <div
        v-for="(grupo, index) in serviciosData.inversionista"
        :key="grupo.id"
        :id="grupo.identidad"
        class="flex flex-col lg:flex-row gap-8 mb-20 md:mb-32"
        :class="{ 'lg:flex-row-reverse': Number(index) % 2 !== 0 }"
      >
        <div class="w-full lg:w-1/3 relative h-[300px] lg:h-auto min-h-[300px]">
          <div
            class="absolute inset-0 bg-maximiza-verde1-dark/20 z-10 flex items-center justify-center p-8"
          >
            <h3
              class="text-white font-black text-2xl md:text-3xl text-center leading-tight drop-shadow-md"
            >
              {{ grupo.nombre }}
            </h3>
          </div>
          <NuxtImg
            :src="getImageUrl(grupo.imagen)"
            :alt="getImageAlt(grupo.imagen)"
            provider="cloudinary"
            class="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60"
          />
        </div>

        <div class="w-full lg:w-2/3">
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li
              v-for="item in grupo.items"
              :key="item.id"
              class="relative bg-maximiza-blanco2 shadow-sm"
            >
              <button
                @click="toggleAccordion(item.id)"
                class="w-full flex items-center justify-between text-left transition-colors hover:bg-maximiza-gris5 h-full"
                :class="{ 'bg-maximiza-gris5': activeAccordion === item.id }"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 shrink-0 bg-maximiza-verde1 flex items-center justify-center rounded-sm"
                  >
                    <NuxtImg
                      :src="getImageUrl(item.icono)"
                      alt="Icono"
                      provider="cloudinary"
                      class="w-10 h-10 object-contain brightness-0 invert"
                    />
                  </div>
                  <h4
                    class="text-maximiza-gris4 font-medium text-sm md:text-base"
                  >
                    {{ item.titulo }}
                  </h4>
                </div>
                <font-awesome-icon
                  :icon="['fas', 'caret-down']"
                  class="text-maximiza-verde1 transition-transform duration-300 ml-2"
                  :class="{ 'rotate-180': activeAccordion === item.id }"
                />
              </button>

              <div
                class="overflow-hidden transition-all duration-300 ease-in-out bg-maximiza-blanco1 absolute z-20 w-full shadow-lg left-0 top-full"
                :class="
                  activeAccordion === item.id
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible h-0'
                "
              >
                <div class="p-6">
                  <strong class="block text-maximiza-verde1 font-bold mb-2">{{
                    item.titulo
                  }}</strong>
                  <div
                    class="text-maximiza-gris2 text-sm leading-relaxed mb-4 prose prose-p:my-0 prose-a:text-maximiza-verde1"
                    v-html="renderMarkdown(truncateText(item.contenido, 200))"
                  ></div>
                  <button
                    class="button-primary --small"
                    @click="openModal(item)"
                  >
                    Leer más
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mx-auto px-4 xl:px-0 mb-16 md:mb-24 text-center">
      <h2
        class="font-black text-maximiza-negro1 text-xl md:text-2xl xl:text-3xl mb-8"
      >
        Comisiones vigentes
      </h2>

      <div class="w-full overflow-x-auto">
        <table class="w-full border-collapse">
          <tbody class="text-left">
            <tr
              v-for="(comission, index) in comissions"
              :key="comission.servicio"
              :class="{
                'border-b border-maximiza-gris5':
                  index !== comissions.length - 1,
                'bg-maximiza-blanco2': index % 2 !== 0,
              }"
            >
              <td class="w-1/2 p-2 md:p-4 border-r border-maximiza-gris5">
                <h4 class="text-maximiza-verde1 font-black text-lg md:text-xl">
                  {{ comission.servicio }}
                </h4>
              </td>
              <td
                class="w-1/2 p-2 md:p-4 text-maximiza-gris2 font-light text-base md:text-lg"
              >
                {{ comission.detalle }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <CommonContactBanner />

    <div v-if="serviciosData.inversionista">
      <div v-for="grupo in serviciosData.inversionista" :key="grupo.id">
        <CommonModal
          v-if="
            showModal && grupo.items.some((i: any) => i.id === selectedItemId)
          "
          :id="selectedItemId"
          :data="grupo.items"
          image-field-name="icono"
          @close="closeModal"
        />
      </div>
    </div>
  </div>
</template>

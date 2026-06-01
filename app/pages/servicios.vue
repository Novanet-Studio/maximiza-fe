<script setup lang="ts">
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt, truncateText } from '~/lib/utils'

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const showModal = ref(false)
  const selectedItemId = ref<string | number | null>(null)

  const activeAccordion = ref<string | number | null>(null)

  const comissions = ref([
    {
      servicio: 'Compra/Venta de títulos valores',
      detalle: 'Hasta 5% del monto transado',
    },
    {
      servicio: 'Estructuración de instrumentos de deuda',
      detalle: 'Hasta 5% del monto emitido',
    },
    {
      servicio: 'Colocación de instrumentos de deuda',
      detalle: 'Hasta 5% del monto colocado',
    },
  ])

  const openModal = (item: any) => {
    selectedItemId.value = item.id
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
    selectedItemId.value = null
  }

  const toggleAccordion = (id: string | number) => {
    activeAccordion.value = activeAccordion.value === id ? null : id
  }

  const { serviciosData, fetchServicios } = useMaximizaQueries()

  onMounted(() => {
    fetchServicios()
  })

  useSeoMeta({
    title: 'Maximiza inversiones en la bolsa',
    description:
      'Ofrecemos diferentes estrategias financieras para gestionar sus inversiones en la bolsa de valores.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
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

      <section class="mx-auto mb-16 mt-16 px-4 md:mb-24 md:mt-36 xl:px-0">
        <div
          v-for="(grupo, index) in serviciosData.inversionista"
          :key="grupo.id"
          :id="grupo.identidad"
          class="mb-20 flex flex-col gap-8 md:mb-32 lg:flex-row"
          :class="{ 'lg:flex-row-reverse': Number(index) % 2 !== 0 }"
        >
          <div class="relative h-[300px] min-h-[300px] w-full lg:h-auto lg:w-1/3">
            <div
              class="absolute inset-0 z-10 flex items-center justify-center bg-maximiza-verde1-dark/20 p-8"
            >
              <h3
                class="text-white text-center text-2xl font-black leading-tight drop-shadow-md md:text-3xl"
              >
                {{ grupo.nombre }}
              </h3>
            </div>
            <NuxtImg
              :src="getImageUrl(grupo.imagen)"
              :alt="getImageAlt(grupo.imagen)"
              provider="cloudinary"
              class="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-multiply"
            />
          </div>

          <div class="w-full lg:w-2/3">
            <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <li
                v-for="item in grupo.items"
                :key="item.id"
                class="relative bg-maximiza-blanco2 shadow-sm"
              >
                <button
                  @click="toggleAccordion(item.id)"
                  class="flex h-full w-full items-center justify-between text-left transition-colors hover:bg-maximiza-gris5"
                  :class="{ 'bg-maximiza-gris5': activeAccordion === item.id }"
                >
                  <div class="flex items-center gap-4">
                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-maximiza-verde1"
                    >
                      <NuxtImg
                        :src="getImageUrl(item.icono)"
                        alt="Icono"
                        provider="cloudinary"
                        class="h-10 w-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <h4 class="text-sm font-medium text-maximiza-gris4 md:text-base">
                      {{ item.titulo }}
                    </h4>
                  </div>
                  <font-awesome-icon
                    :icon="['fas', 'caret-down']"
                    class="ml-2 text-maximiza-verde1 transition-transform duration-300"
                    :class="{ 'rotate-180': activeAccordion === item.id }"
                  />
                </button>

                <div
                  class="absolute left-0 top-full z-20 w-full overflow-hidden bg-maximiza-blanco1 shadow-lg transition-all duration-300 ease-in-out"
                  :class="
                    activeAccordion === item.id ? 'visible opacity-100' : 'invisible h-0 opacity-0'
                  "
                >
                  <div class="p-6">
                    <strong class="mb-2 block font-bold text-maximiza-verde1">{{
                      item.titulo
                    }}</strong>
                    <div
                      class="prose prose-p:my-0 prose-a:text-maximiza-verde1 mb-4 text-sm leading-relaxed text-maximiza-gris2"
                      v-html="renderMarkdown(truncateText(item.contenido, 200))"
                    ></div>
                    <button class="button-primary --small" @click="openModal(item)">
                      Leer más
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mx-auto mb-16 px-4 text-center md:mb-24 xl:px-0">
        <h2 class="mb-8 text-xl font-black text-maximiza-negro1 md:text-2xl xl:text-3xl">
          Comisiones vigentes
        </h2>

        <div class="w-full overflow-x-auto">
          <table class="w-full border-collapse">
            <tbody class="text-left">
              <tr
                v-for="(comission, index) in comissions"
                :key="comission.servicio"
                :class="{
                  'border-b border-maximiza-gris5': index !== comissions.length - 1,
                  'bg-maximiza-blanco2': index % 2 !== 0,
                }"
              >
                <td class="w-1/2 border-r border-maximiza-gris5 p-2 md:p-4">
                  <h4 class="text-lg font-black text-maximiza-verde1 md:text-xl">
                    {{ comission.servicio }}
                  </h4>
                </td>
                <td class="w-1/2 p-2 text-base font-light text-maximiza-gris2 md:p-4 md:text-lg">
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
            v-if="showModal && grupo.items.some((i: any) => i.id === selectedItemId)"
            :id="selectedItemId"
            :data="grupo.items"
            image-field-name="icono"
            @close="closeModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

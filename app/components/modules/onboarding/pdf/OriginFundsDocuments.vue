<script setup lang="ts">
import { getLabel, occupationsOptions } from '~/assets/data/formSources'

import { MAXIMIZA_LOGO } from '~/assets/data/maximiza-logo'

const MaximizaLogo = MAXIMIZA_LOGO

const props = defineProps<{
  data: MXMZ.OnboardingWizardResult
}>()

const isNatural = computed(() => {
  return !props.data.enterpriseIdentification?.taxInformationRegistration
})

const personal = computed(() => props.data.personalData || {})
const enterprise = computed(
  () => props.data.enterpriseIdentification || ({} as any)
)
const financial = computed(() => props.data.financialInformation || ({} as any))
const institution = computed(() => props.data.institutionData || ({} as any))

const dateParts = computed(() => {
  const dateStr = institution.value.productionDate
  if (!dateStr) return { day: '__', month: '_________', year: '__' }

  const date = new Date(dateStr)
  const day = date.getDate() + 1
  const year = date.getFullYear().toString().slice(-2)

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const month = months[date.getMonth()]

  return { day, month, year }
})

const documentsList = computed(() => {
  if (isNatural.value) {
    return [
      {
        type: 'NATURAL',
        name: `${personal.value.firstName} ${personal.value.lastName}`,
        address: personal.value.address,
        id: personal.value.identification,
        profession:
          getLabel(personal.value.profession, occupationsOptions) ||
          '________________',
      },
    ]
  } else {
    const legalRepresentatives = financial.value.legalRepresentatives || []

    if (legalRepresentatives.length === 0) {
      return [
        {
          type: 'JURIDICA',
          repName: '________________',
          repAddress: '________________',
          repId: '________________',
          companyName: enterprise.value.socialReason || '________________',
        },
      ]
    }

    return legalRepresentatives.map((holder: any) => ({
      type: 'JURIDICA',
      repName: holder.name || '________________',

      repAddress: holder.address || '________________',

      repId: holder.dni || '________________',
      companyName: enterprise.value.socialReason || '________________',
    }))
  }
})
</script>

<template>
  <div class="spreadsheet" style="padding: 1rem">
    <div
      v-for="(doc, index) in documentsList"
      :key="index"
      class="page-break-container"
    >
      <header class="spreadsheet__header flex justify-end">
        <img
          class="spreadsheet__image"
          :src="MaximizaLogo"
          alt="logo"
          title="logo"
        />
      </header>

      <div class="spreadsheet__body mt-12 px-4">
        <h2 class="mb-12 text-center text-lg font-bold uppercase">
          DECLARACIÓN JURADA DE ORIGEN Y DESTINO DE LOS FONDOS
          <br />
          <span class="text-base font-normal">
            ({{ isNatural ? 'Persona Natural' : 'Persona Jurídica' }})
          </span>
        </h2>

        <div class="mb-8 leading-relaxed font-bold">
          <p>Señores</p>
          <p>Maximiza Casa de Bolsa, C.A</p>
          <p>Presente.</p>
        </div>

        <div
          v-if="doc.type === 'NATURAL'"
          class="space-y-6 text-justify text-sm leading-loose"
        >
          <p>
            Quien suscribe
            <span class="border-b border-black px-1 font-bold">{{
              doc.name
            }}</span
            >, venezolano(a), mayor de edad, domiciliado(a) en
            <span class="border-b border-black px-1 font-bold">{{
              doc.address
            }}</span>
            y titular de la Cédula de Identidad N°
            <span class="border-b border-black px-1 font-bold">{{
              doc.id
            }}</span
            >, Profesión
            <span class="border-b border-black px-1 font-bold">{{
              doc.profession
            }}</span
            >, por la presente declaro bajo fe de juramento que el origen de los
            fondos, son de mi peculio y de procedencia de actividades lícitas.
          </p>
          <p>
            Igualmente, declaro bajo fe de juramento no estar relacionado; ni
            pretender involucrar a
            <span class="font-bold">Maximiza Casa de Bolsa, C.A</span> en forma
            alguna, con las actividades ilícitas que puedan servir de
            instrumento para cometer el delito de legitimación de capitales,
            financiamiento al terrorismo, Financiamiento a la Proliferación de
            Armas de Destrucción Masiva y otros Ilícitos.
          </p>
        </div>

        <div v-else class="space-y-6 text-justify text-sm leading-loose">
          <p>
            Quien suscribe
            <span class="border-b border-black px-1 font-bold">{{
              doc.repName
            }}</span
            >, venezolano(a), mayor de edad, domiciliado(a) en
            <span class="border-b border-black px-1 font-bold">{{
              doc.repAddress
            }}</span>
            y titular de la Cédula de Identidad N°
            <span class="border-b border-black px-1 font-bold">{{
              doc.repId
            }}</span
            >, actuando en mi carácter de accionista / representante de la
            sociedad mercantil:
            <span class="border-b border-black px-1 font-bold">{{
              doc.companyName
            }}</span
            >, por la presente declaro bajo fe de juramento que el origen de los
            fondos de mi representada, son de su peculio y de procedencia de
            actividades lícitas.
          </p>
          <p>
            Igualmente, declaro bajo fe de juramento no estar relacionado; ni
            pretender involucrar a
            <span class="font-bold">Maximiza Casa de Bolsa, C.A</span> en forma
            alguna, con las actividades ilícitas que puedan servir de
            instrumento para cometer el delito de legitimación de capitales,
            Financiamiento al Terrorismo, Financiamiento a la Proliferación de
            Armas de Destrucción Masiva y otros Ilícitos.
          </p>
        </div>

        <p class="mt-8 text-justify text-sm leading-loose">
          Declaración que hago a los fines consiguientes, en Caracas a los
          <span class="border-b border-black px-2 font-bold">{{
            dateParts.day
          }}</span>
          días del mes de
          <span class="border-b border-black px-2 font-bold">{{
            dateParts.month
          }}</span>
          de 20<span class="border-b border-black px-1 font-bold">{{
            dateParts.year
          }}</span
          >.
        </p>

        <div class="mt-32 flex items-end justify-end gap-8">
          <div class="flex flex-1 flex-col items-center justify-end pb-8">
            <div class="mb-2 w-full border-b border-black"></div>
            <span class="text-sm font-bold">Firma</span>
          </div>

          <div
            class="flex h-40 w-32 shrink-0 flex-col items-center justify-end border border-black pb-2"
          >
            <span class="text-center text-[10px] font-bold"
              >Huella Dactilar</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-break-container {
  page-break-after: always;

  min-height: 100vh;
  padding-bottom: 2rem;
}

.page-break-container:last-child {
  page-break-after: auto;
}

.spreadsheet {
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
}

.spreadsheet__header {
  margin-bottom: 2rem;
}

.spreadsheet__image {
  width: 180px;
}

.text-justify {
  text-align: justify;
}

.leading-loose {
  line-height: 2;
}

@media print {
  .page-break-container {
    page-break-after: always;
    min-height: 0;
    padding-bottom: 0;
  }

  .page-break-container:last-child {
    page-break-after: auto;
  }

  .spreadsheet {
    padding: 0;
  }
}
</style>

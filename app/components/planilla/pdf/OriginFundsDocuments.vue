<script setup lang="ts">
import { getLabel, occupationsOptions } from "~/assets/data/formSources";

import { MAXIMIZA_LOGO } from "~/assets/data/maximiza-logo";

const MaximizaLogo = MAXIMIZA_LOGO;

const props = defineProps<{
  data: MXMZ.WizardPlanillaResult;
}>();

const isNatural = computed(() => {
  return !props.data.enterpriseIdentification?.taxInformationRegistration;
});

const personal = computed(() => props.data.personalData || {});
const enterprise = computed(
  () => props.data.enterpriseIdentification || ({} as any),
);
const financial = computed(
  () => props.data.financialInformation || ({} as any),
);
const institution = computed(() => props.data.institutionData || ({} as any));

// Lógica de fecha común para todos
const dateParts = computed(() => {
  const dateStr = institution.value.productionDate;
  if (!dateStr) return { day: "__", month: "_________", year: "__" };

  const date = new Date(dateStr);
  const day = date.getDate() + 1;
  const year = date.getFullYear().toString().slice(-2);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const month = months[date.getMonth()];

  return { day, month, year };
});

// Generamos una lista de documentos a renderizar
const documentsList = computed(() => {
  if (isNatural.value) {
    // CASO NATURAL: Un solo documento con datos personales
    return [
      {
        type: "NATURAL",
        name: `${personal.value.firstName} ${personal.value.lastName}`,
        address: personal.value.address,
        id: personal.value.identification,
        profession:
          getLabel(personal.value.profession, occupationsOptions) ||
          "________________",
      },
    ];
  } else {
    // CASO JURIDICA: Un documento por cada Stockholder
    const legalRepresentatives = financial.value.legalRepresentatives || [];

    console.log(legalRepresentatives);

    // Si no hay accionistas, devolvemos un array vacío o uno con datos vacíos para no romper el layout
    if (legalRepresentatives.length === 0) {
      return [
        {
          type: "JURIDICA",
          repName: "________________",
          repAddress: "________________",
          repId: "________________",
          companyName: enterprise.value.socialReason || "________________",
        },
      ];
    }

    // Mapeamos cada accionista a una estructura de página
    return legalRepresentatives.map((holder: any) => ({
      type: "JURIDICA",
      repName: holder.name || "________________",
      // Usamos la dirección del accionista, si no tiene, línea vacía
      repAddress: holder.address || "________________",
      // Usamos el DNI compuesto (V123456) del accionista
      repId: holder.dni || "________________",
      companyName: enterprise.value.socialReason || "________________",
    }));
  }
});

console.log(documentsList.value)
</script>

<template>
  <div class="spreadsheet" style="padding: 1rem">
    <!-- Iteramos sobre la lista de documentos generada -->
    <div
      v-for="(doc, index) in documentsList"
      :key="index"
      class="page-break-container"
    >
      <header class="spreadsheet__header flex justify-end">
        <img class="spreadsheet__image" :src="MaximizaLogo" alt="logo" />
      </header>

      <div class="spreadsheet__body mt-12 px-4">
        <h2 class="text-center font-bold uppercase text-lg mb-12">
          DECLARACIÓN JURADA DE ORIGEN Y DESTINO DE LOS FONDOS
          <br />
          <span class="text-base font-normal">
            ({{ isNatural ? "Persona Natural" : "Persona Jurídica" }})
          </span>
        </h2>

        <div class="mb-8 font-bold leading-relaxed">
          <p>Señores</p>
          <p>Maximiza Casa de Bolsa, C.A</p>
          <p>Presente.</p>
        </div>

        <!-- CONTENIDO PERSONA NATURAL -->
        <div
          v-if="doc.type === 'NATURAL'"
          class="text-justify leading-loose text-sm space-y-6"
        >
          <p>
            Quien suscribe
            <span class="font-bold border-b border-black px-1">{{
              doc.name
            }}</span
            >, venezolano(a), mayor de edad, domiciliado(a) en
            <span class="font-bold border-b border-black px-1">{{
              doc.address
            }}</span>
            y titular de la Cédula de Identidad N°
            <span class="font-bold border-b border-black px-1">{{
              doc.id
            }}</span
            >, Profesión
            <span class="font-bold border-b border-black px-1">{{
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

        <!-- CONTENIDO PERSONA JURIDICA (Iterado por accionista) -->
        <div v-else class="text-justify leading-loose text-sm space-y-6">
          <p>
            Quien suscribe
            <span class="font-bold border-b border-black px-1">{{
              doc.repName
            }}</span
            >, venezolano(a), mayor de edad, domiciliado(a) en
            <span class="font-bold border-b border-black px-1">{{
              doc.repAddress
            }}</span>
            y titular de la Cédula de Identidad N°
            <span class="font-bold border-b border-black px-1">{{
              doc.repId
            }}</span
            >, actuando en mi carácter de accionista / representante de la
            sociedad mercantil:
            <span class="font-bold border-b border-black px-1">{{
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

        <p class="mt-8 text-justify leading-loose text-sm">
          Declaración que hago a los fines consiguientes, en Caracas a los
          <span class="font-bold border-b border-black px-2">{{
            dateParts.day
          }}</span>
          días del mes de
          <span class="font-bold border-b border-black px-2">{{
            dateParts.month
          }}</span>
          de 20<span class="font-bold border-b border-black px-1">{{
            dateParts.year
          }}</span
          >.
        </p>

        <div class="mt-32 flex justify-end items-end gap-8">
          <div class="flex-1 flex flex-col items-center justify-end pb-8">
            <div class="w-full border-b border-black mb-2"></div>
            <span class="text-sm font-bold">Firma</span>
          </div>

          <div
            class="w-32 h-40 border border-black flex flex-col justify-end items-center pb-2 shrink-0"
          >
            <span class="text-[10px] font-bold text-center"
              >Huella Dactilar</span
            >
          </div>
        </div>

        <div class="mt-16 pt-4 text-xs font-bold">
          Nota: esta declaración debe ser impresa en papel con membrete de la
          empresa.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-break-container {
  page-break-after: always;
  /* Asegura que cada contenedor ocupe al menos una página completa visualmente */
  min-height: 100vh;
  padding-bottom: 2rem;
}

/* Evita salto de página después del último elemento para no generar una hoja en blanco extra */
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

/* Clases de utilidad para el texto */
.text-justify {
  text-align: justify;
}

.leading-loose {
  line-height: 2;
}

@media print {
  .page-break-container {
    page-break-after: always;
    min-height: 0; /* Reset height for print */
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

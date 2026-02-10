<script setup lang="ts">
import {
  getLabel,
  nationalityOptions,
  countriesOptions,
} from "~/assets/data/formSources";

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

const joinValues = (val1?: string, val2?: string) => {
  const v1 = val1?.trim();
  const v2 = val2?.trim();

  if (v1 && v2 && v1 !== v2) return `${v1}, ${v2}`;
  if (v1) return v1;
  if (v2) return v2;
  return "________________";
};

const textData = computed(() => {
  if (isNatural.value) {
    return {
      name: `${personal.value.firstName} ${personal.value.lastName}`,
      nationality: getLabel(personal.value.nationality, nationalityOptions),
      address: personal.value.address,
      id: personal.value.identification,
    };
  } else {
    const stockholder = financial.value.stockholders?.[0];
    const legalRep = financial.value.legalRepresentatives?.[0];

    const stockholderNat = stockholder?.nationality;
    const legalRepNat = legalRep?.nationality;

    return {
      repName: joinValues(stockholder?.name, legalRep?.name),

      repNationality: joinValues(stockholderNat, legalRepNat),

      repAddress: joinValues(stockholder?.address, legalRep?.address),

      repId: joinValues(stockholder?.dni, legalRep?.dni),

      companyRole: "ACCIONISTA Y REPRESENTANTE LEGAL",
      companyName: enterprise.value.socialReason || "________________",
      companyRif: `${enterprise.value.taxType || ""}-${enterprise.value.taxInformationRegistration || ""}`,
    };
  }
});
</script>

<template>
  <div class="spreadsheet" style="padding: 1rem">
    <div class="page-break-container">
      <header class="spreadsheet__header">
        <img class="spreadsheet__image" :src="MaximizaLogo" alt="logo" />
      </header>

      <div class="spreadsheet__body mt-12 px-4">
        <h2 class="text-center font-bold uppercase text-lg mb-12">
          PODER PARA APERTURA Y MANEJO DE CUENTA DE CUSTODIA
        </h2>

        <p v-if="isNatural" class="text-justify leading-loose text-sm">
          Yo,
          <span class="font-bold border-b border-black px-1">{{
            textData.name
          }}</span
          >, de nacionalidad
          <span class="font-bold border-b border-black px-1">{{
            textData.nationality
          }}</span
          >, domiciliado (a) en
          <span class="font-bold border-b border-black px-1">{{
            textData.address
          }}</span
          >, titular de la Cédula de Identidad N°
          <span class="font-bold border-b border-black px-1">{{
            textData.id
          }}</span
          >, por el presente documento DECLARO QUE: Confiero poder especial,
          pero amplio y suficiente cuanto a derecho se requiere a
          <span class="font-bold">MAXIMIZA CASA DE BOLSA, C.A.</span>,
          (anteriormente denominada “CNI Mercado de Capitales, C.A.” y “CNI
          Sociedad de Corretaje de Valores, C.A.”), originalmente inscrita ante
          el Registro Mercantil Segundo de la Circunscripción Judicial del
          Distrito Capital y Estado Miranda, en fecha 22 de julio de 1992, bajo
          el N° 43, Tomo 49 A Sdo; e inscrita ante el Registro de información
          Fiscal (RIF) bajo el N° J‐30025492‐5, para que en mi nombre y por mi
          cuenta, pueda abrir una o más cuentas o subcuentas de custodia ante la
          Caja Venezolana de Valores y/o entes custodios autorizados, y movilice
          los valores depositados en dichas cuentas. El presente mandato incluye
          las más amplias facultades de administración y disposición, sin
          limitación alguna. En consecuencia, en ejercicio de este poder, el
          nombrado apoderado, podrá respecto de los títulos valores depositados
          en el custodio, debitar o acreditar a la cuenta los valores
          necesarios, así como instruir al custodio acerca de los pagos que
          deban ser efectuados a favor de mi representado.
        </p>

        <p v-else class="text-justify leading-loose text-sm">
          Yo (nosotros),
          <span class="font-bold border-b border-black px-1">{{
            textData.repName
          }}</span
          >, de nacionalidad
          <span class="font-bold border-b border-black px-1">{{
            textData.repNationality
          }}</span
          >, domiciliado (os/as) en
          <span class="font-bold border-b border-black px-1">{{
            textData.repAddress
          }}</span
          >, titular(es) de la(s) Cédula de Identidad N° (os.)
          <span class="font-bold border-b border-black px-1">{{
            textData.repId
          }}</span
          >, (respectivamente), actuando en mí (nuestro) carácter de
          <span class="font-bold border-b border-black px-1">{{
            textData.companyRole
          }}</span>
          de la sociedad mercantil
          <span class="font-bold border-b border-black px-1">{{
            textData.companyName
          }}</span
          >, inscrita en el Registro de Información Fiscal (R.I.F.) bajo el N°
          <span class="font-bold border-b border-black px-1">{{
            textData.companyRif
          }}</span
          >, por el presente documento DECLARO QUE: Confiero poder especial,
          pero amplio y suficiente cuanto a derecho se requiere, a
          <span class="font-bold">MAXIMIZA CASA DE BOLSA, C.A.</span>,
          (anteriormente denominada “CNI Mercado de Capitales, C.A.” y “CNI
          Sociedad de Corretaje de Valores, C.A.”), originalmente inscrita ante
          el Registro Mercantil Segundo de la Circunscripción Judicial del
          Distrito Capital y Estado Miranda, en fecha 22 de julio de 1992, bajo
          el N° 43, Tomo 49 A Sdo; e inscrita ante el Registro de información
          Fiscal (RIF) bajo el N° J‐30025492‐5, para que en nombre y por cuenta
          de mi representada, pueda abrir una o más cuentas o subcuentas de
          custodia ante la Caja Venezolana de Valores y/o entes custodios
          autorizados, y movilice los valores depositados en dichas cuentas. El
          presente mandato incluye las más amplias facultades de administración
          y disposición, sin limitación alguna. En consecuencia, en ejercicio de
          este poder, el nombrado apoderado, podrá respecto de los títulos
          valores depositados en el custodio, debitar o acreditar a la cuenta
          los valores necesarios, así como instruir al custodio acerca de los
          pagos que deban ser efectuados a favor de mi representado.
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
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-break-container {
  page-break-after: always;
}

.spreadsheet {
  width: 100%;
  max-width: 100%;
  padding: 1rem;
}

.spreadsheet__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
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
  .page-break {
    page-break-before: always;
  }

  .spreadsheet {
    padding: 0;
  }
}
</style>

<script setup lang="ts">
import { MAXIMIZA_LOGO } from "~/assets/data/maximiza-logo";

const MaximizaLogo = MAXIMIZA_LOGO;

const props = defineProps<{
  data: MXMZ.WizardPlanillaResult;
}>();

interface Signatory {
  role: string;
  name: string;
  id: string;
  phone?: string;
  email?: string;
  isMainClient?: boolean;
}

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

const clientInfo = computed(() => {
  if (isNatural.value) {
    return {
      name: `${personal.value.firstName} ${personal.value.lastName}`,
      id: `C.I: ${personal.value.identification}`,
    };
  } else {
    return {
      name: enterprise.value.socialReason,
      id: `R.I.F: ${enterprise.value.taxType}-${enterprise.value.taxInformationRegistration}`,
    };
  }
});

const signatories = computed<Signatory[]>(() => {
  const list: Signatory[] = [];

  if (isNatural.value) {
    list.push({
      role: "Cliente",
      name: `${personal.value.firstName} ${personal.value.lastName}`,
      id: personal.value.identification,
      phone: personal.value.phones,
      email: personal.value.email,
      isMainClient: true,
    });

    if (personal.value.hasLegalRepresentative === "SI") {
      list.push({
        role: "Persona Autorizada",
        name: personal.value.legalRepresentativeFullname,
        id: personal.value.legalRepresentativeIdentification,
        phone: "",
        email: "",
      });
    }
  } else {
    const reps = financial.value.legalRepresentatives || [];
    reps.forEach((rep: any) => {
      list.push({
        role: "Persona Autorizada",
        name: rep.name,
        id: rep.dni || `${rep.dniType}${rep.dniNumber}`,
        phone: "",
        email: "",
      });
    });
  }

  return list;
});

const formCode = computed(() =>
  isNatural.value ? "PCL-FRF-PN" : "PCL-FRF-PJ",
);
</script>

<template>
  <div class="spreadsheet" style="padding: 1rem">
    <div class="page-break-container">
      <header class="spreadsheet__header relative">
        <img class="spreadsheet__image" :src="MaximizaLogo" alt="logo" />

        <div class="text-right text-xs font-bold absolute top-0 right-0">
          {{ formCode }}
        </div>

        <div class="text-right mt-4 w-full">
          <h2 class="font-bold text-sm uppercase">
            Contrato de Cuenta de Corretaje Bursátil
          </h2>
          <h3 class="font-bold text-sm uppercase text-gray-600">ANEXO I-B</h3>
          <h1 class="font-bold text-lg uppercase text-maximiza-verde1">
            Ficha de Registro de Firma
          </h1>
          <h4 class="font-bold text-sm uppercase">
            {{ isNatural ? "Persona Natural" : "Persona Jurídica" }}
          </h4>
        </div>
      </header>

      <div
        class="text-center font-bold text-maximiza-azul1 text-sm my-4 uppercase"
      >
        Personas autorizadas para colocar órdenes e impartir instrucciones en
        nombre del cliente
      </div>

      <div class="border border-black mb-6">
        <div class="grid grid-cols-[1fr_1fr]">
          <div class="p-1 border-r border-black">
            <div class="text-[10px] font-bold">Nombre del Cliente</div>
            <div class="font-bold uppercase text-sm">{{ clientInfo.name }}</div>
          </div>
          <div class="p-1">
            <div class="text-[10px] font-bold">
              Cédula de identidad / R.I.F.
            </div>
            <div class="font-bold uppercase text-sm">{{ clientInfo.id }}</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <template v-for="(sig, index) in signatories" :key="index">
          <div
            class="signature-card border-2 border-maximiza-verde1 break-inside-avoid"
          >
            <div class="grid grid-cols-[50px_1fr]">
              <div
                class="flex items-center justify-center border-r-2 border-maximiza-verde1 text-maximiza-verde1 font-bold text-xl bg-gray-50"
              >
                {{ sig.isMainClient ? "C" : index + (isNatural ? 0 : 1) }}
              </div>
              <div class="text-center border-b border-maximiza-verde1 py-1">
                <div class="font-bold text-sm">Ficha de Registro de Firma</div>
                <div class="font-bold text-sm text-gray-600">
                  ({{ sig.role }})
                </div>
              </div>
            </div>

            <div class="p-2">
              <div
                class="grid grid-cols-[2fr_1fr] border-b border-black pb-1 mb-1"
              >
                <div class="border-r border-black pr-2">
                  <div class="text-[10px] font-bold">Nombre:</div>
                  <div class="text-xs uppercase">{{ sig.name }}</div>
                </div>
                <div class="pl-2">
                  <div class="text-[10px] font-bold">C.I. / Pasaporte:</div>
                  <div class="text-xs uppercase">{{ sig.id }}</div>
                </div>
              </div>

              <div class="grid grid-cols-2 border-b border-black pb-1 mb-1">
                <div class="border-r border-black pr-2">
                  <div class="text-[10px] font-bold">Teléfono:</div>
                  <div class="text-xs">
                    {{ sig.phone || "________________" }}
                  </div>
                </div>
                <div class="pl-2">
                  <div class="text-[10px] font-bold">Correo electrónico:</div>
                  <div class="text-xs">
                    {{ sig.email || "________________" }}
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 border-b border-black pb-1 mb-2">
                <div class="text-[10px] font-bold mb-1">Régimen de Firmas:</div>
                <div class="flex gap-4 text-xs items-center">
                  <div class="flex items-center gap-1">
                    <span>Conjuntas</span>
                    <div class="w-4 h-4 border border-black"></div>
                  </div>
                  <div class="flex items-center gap-1">
                    <span>Indistintas</span>
                    <div class="w-4 h-4 border border-black"></div>
                  </div>
                  <div class="flex items-center gap-1 w-full">
                    <span>Otro</span>
                    <div class="border-b border-black w-full h-4"></div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 min-h-[100px]">
                <div
                  class="border-r border-black flex flex-col justify-end items-center pr-2"
                >
                  <div class="w-full border-t border-black"></div>
                  <div class="text-[10px] font-bold mt-1">Firma</div>
                </div>
                <div class="flex flex-col justify-end items-center pl-2">
                  <div class="w-full h-full border border-black relative">
                    <div
                      class="absolute bottom-1 w-full text-center text-[10px] font-bold"
                    >
                      Huella
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div
        class="mt-6 border-2 border-black p-2 text-center font-bold text-xs break-inside-avoid"
      >
        El Cliente expresamente declara que las personas cuyos datos y firma
        aparecen en las presentes Fichas de Registro de Firma, son las únicas
        autorizadas para colocar órdenes e impartir instrucciones en su nombre.
      </div>

      <div class="mt-12 border-2 border-black p-4 break-inside-avoid">
        <div class="grid grid-cols-3 gap-8 mt-8">
          <div class="flex flex-col items-center">
            <div class="w-full border-b border-black"></div>
            <div class="text-[10px]">Fecha</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-full border-b border-black"></div>
            <div class="text-[10px]">Nombre del Cliente</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-full border-b border-black"></div>
            <div class="text-[10px]">Firma del Cliente</div>
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
  padding: 1rem 2rem;
}

.spreadsheet__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.spreadsheet__image {
  width: 150px;
}

/* Utilidad para evitar que las fichas se corten al imprimir */
.break-inside-avoid {
  break-inside: avoid;
  page-break-inside: avoid;
}

@media print {
  .spreadsheet {
    padding: 0;
  }
}
</style>

<script setup lang="ts">
import {
  getLabel,
  occupationsOptions,
  economicActivityOptions,
  countriesOptions,
  maritalStatusOptions,
  genderOptions,
  nationalityOptions,
  fundsSourceOptions,
  fundsDestinationOptions,
  annualInvestmentOptions,
  knowledgeOptions,
  experienceOptions,
  investmentLevelOptions,
  currencyOptions,
  productNamesOptions,
  virtualCurrencyOptions,
} from "~/assets/data/formSources";

import { MAXIMIZA_LOGO } from "~/assets/data/maximiza-logo";

import { formatAmount, formatDate } from "~/lib/utils";

const MaximizaLogo = MAXIMIZA_LOGO;

const props = defineProps<{
  data: MXMZ.WizardPlanillaResult;
}>();

const isNatural = computed(() => {
  return !props.data.enterpriseIdentification?.taxInformationRegistration;
});

const fillArray = (arr: any[], max: number, defaultObj: any) => {
  const current = arr || [];
  const emptyCount = Math.max(0, max - current.length);
  return [...current, ...Array(emptyCount).fill(defaultObj)];
};

// Data Helpers
const personal = computed<MXMZ.PersonalData>(
  () => props.data.personalData || ({} as MXMZ.PersonalData),
);
const enterprise = computed(
  () => props.data.enterpriseIdentification || ({} as any),
);
const pep = computed<MXMZ.PepProfile>(
  () => props.data.pepProfile || ({} as MXMZ.PepProfile),
);
const financial = computed<MXMZ.FinancialInformation>(
  () => props.data.financialInformation || ({} as MXMZ.FinancialInformation),
);
const product = computed<MXMZ.ProductInformation>(
  () => props.data.productInformation || ({} as MXMZ.ProductInformation),
);

const investor = computed<MXMZ.InvestorProfile>(
  () => props.data.investorProfile || ({} as MXMZ.InvestorProfile),
);

const institutionData = computed<MXMZ.InstitutionData>(
  () => props.data.institutionData || ({} as MXMZ.InstitutionData),
);

// Labels Computed
const professionLabel = computed(() =>
  getLabel(personal.value.profession, occupationsOptions),
);
const economicActivityLabel = computed(() => {
  const code = isNatural.value
    ? financial.value.economicActivity
    : enterprise.value.economicActivity;
  return getLabel(code, economicActivityOptions);
});
const nationalityLabel = computed(() =>
  getLabel(personal.value.nationality, nationalityOptions),
);
const genderLabel = computed(() =>
  getLabel(personal.value.gender, genderOptions),
);
const maritalStatusLabel = computed(() =>
  getLabel(personal.value.maritalStatus, maritalStatusOptions),
);
const productNameLabel = computed(() =>
  getLabel(product.value.productName, productNamesOptions),
);
const currencyLabel = computed(() =>
  getLabel(product.value.currency, currencyOptions),
);
const fundsSourceLabel = computed(() =>
  getLabel(product.value.fundsSource, fundsSourceOptions),
);
const fundsDestinationLabel = computed(() =>
  getLabel(product.value.fundsDestination, fundsDestinationOptions),
);
const virtualCurrencyLabel = computed(() =>
  getLabel(product.value.virtualCurrencyUse, virtualCurrencyOptions),
);
const originCountryLabel = computed(() =>
  getLabel(product.value.originCountry, countriesOptions),
);
const destinationCountryLabel = computed(() =>
  getLabel(product.value.destinationCountry, countriesOptions),
);

onMounted(() => {
  if (process.client) {
    console.group("📋 PDF JURIDICA MOCK DATA");
    console.log(JSON.stringify(props.data, null, 2));
    console.groupEnd();
  }
});
</script>

<template>
  <div class="spreadsheet" style="padding: 1rem">
    <div class="page-break-container">
      <div class="w-full text-right text-sm font-bold">Pág. 1/3</div>

      <header class="spreadsheet__header">
        <img class="spreadsheet__image" :src="MaximizaLogo" alt="logo" />
        <h5 class="spreadsheet__main-title">
          FICHA DE IDENTIFICACIÓN DEL INVERSIONISTA PERSONA
          {{ isNatural ? "NATURAL" : "JURÍDICA" }}
        </h5>
      </header>

      <div class="spreadsheet__section">
        <div class="spreadsheet__container">
          <div class="spreadsheet__section1">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Lugar:</div>
                <div class="content">
                  {{ institutionData.place || "Caracas" }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Fechas de elaboración:</div>
                <div class="content">
                  {{ formatDate(institutionData.productionDate) }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Número o código del inversionista:</div>
                <div class="content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="spreadsheet__section">
        <h5 class="spreadsheet__title">
          DATOS DE LA INSTITUCIÓN DEL SECTOR VALORES
        </h5>
        <div class="spreadsheet__container">
          <div class="spreadsheet__section2">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>
                  Nombre de casa de bolsa o sociedades de corretaje de valores:
                </div>
                <div class="content">
                  {{ institutionData.brokerageHouseName }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Registro información fiscal:</div>
                <div class="content">
                  {{ institutionData.taxInformationRegistration }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Dirección:</div>
                <div class="content">
                  {{ institutionData.address }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="spreadsheet__section">
        <h5 class="spreadsheet__title">
          {{
            isNatural
              ? "DATOS PERSONALES DEL INVERSIONISTA"
              : "DATOS DE IDENTIFICACIÓN DE LA EMPRESA"
          }}
        </h5>

        <template v-if="isNatural">
          <div class="grid grid-cols-[5fr_8fr_8fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Documento de Identidad:</div>
                <div class="content">{{ personal.identification }}</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Nombres:</div>
                <div class="content">{{ personal.firstName }}</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Apellidos:</div>
                <div class="content">{{ personal.lastName }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[5fr_8fr_8fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Lugar y fecha de nacimiento:</div>
                <div class="content">
                  {{ personal.birthPlace }},
                  {{ formatDate(personal.birthDate) }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Nacionalidad:</div>
                <div class="content">{{ nationalityLabel }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Otra nacionalidad:</div>
                <div class="content">
                  {{ personal.otherNationality || "N/A" }}
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[5fr_9fr_7fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Género:</div>
                <div class="content">{{ genderLabel }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Profesión u Oficio:</div>
                <div class="content text-[10px]">{{ professionLabel }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Estado civil:</div>
                <div class="content">{{ maritalStatusLabel }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[7fr_7fr_7fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Nombre completo del cónyuge:</div>
                <div class="content">{{ personal.spouseName }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Documento de identidad del cónyuge:</div>
                <div class="content">{{ personal.spouseIdentification }}</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Fuente de ingreso:</div>
                <div class="content">{{ personal.incomeSource }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Dirección de domicilio:</div>
                <div class="content">{{ personal.address }}</div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-[7fr_5fr_9fr]">
            <div class="spreadsheet__item"></div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Teléfonos:</div>
                <div class="content">{{ personal.phones }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Correo electrónico:</div>
                <div class="content">{{ personal.email }}</div>
              </div>
            </div>
          </div>

          <PlanillaBlocksPepBlock :source="pep" />

          <div class="spreadsheet__item" style="text-align: center !important">
            En caso de actuación de representante legal, apoderado y/o
            autorizado
          </div>

          <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Documento de identidad:</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Nombre completo:</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Fecha y lugar de de nacimiento:</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Teléfono:</div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Datos del documento:</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div class="content">
                  {{ personal.legalRepresentativeIdentification || "N/A" }}
                </div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div class="content">
                  {{ personal.legalRepresentativeFullname || "N/A" }}
                </div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div class="content">
                  {{
                    `${formatDate(personal.legalRepresentativeBirthDate)}, ${getLabel(
                      personal.legalRepresentativeBirthPlace,
                      countriesOptions,
                    )}`
                  }}
                </div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div class="content">
                  {{ personal.legalRepresentativePhones || "N/A" }}
                </div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div class="content">
                  {{ personal.legalRepresentativeDocumentData || "N/A" }}
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="grid grid-cols-[auto_1fr_1fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Registro de información fiscal:</div>
                <div class="content">
                  {{ enterprise.taxType }}-{{
                    enterprise.taxInformationRegistration
                  }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Razón social:</div>
                <div class="content">{{ enterprise.socialReason }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Nombre comercial:</div>
                <div class="content">{{ enterprise.tradename }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 w-full">
            <div class="spreadsheet__item border-b-0 border-r-0">
              <div class="spreadsheet__form-item">
                <div>Actividad económica:</div>
              </div>
            </div>

            <div class="spreadsheet__item border-b-0">
              <div class="spreadsheet__form-item">
                <div>Actividad específica:</div>
              </div>
            </div>

            <div class="spreadsheet__item border-r-0">
              <div class="spreadsheet__form-item">
                <div class="content text-[9px] leading-tight">
                  {{ economicActivityLabel }}
                </div>
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div class="content text-[9px] leading-tight">
                  {{ financial.specificActivity }}
                </div>
              </div>
            </div>
          </div>

          <div class="w-full grid grid-cols-[135px_1fr]">
            <aside
              class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center border-b border-maximiza-blanco1"
            >
              <h5 class="text-maximiza-blanco1 font-bold">
                Datos del registro
              </h5>
            </aside>
            <div>
              <div class="grid grid-cols-[1fr_1fr_1fr]">
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Nombre del registro:</div>
                    <div class="content">
                      {{ enterprise.registerData?.recordName }}
                    </div>
                  </div>
                </div>

                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Fecha:</div>
                    <div class="content">
                      {{ formatDate(enterprise.registerData?.date) }}
                    </div>
                  </div>
                </div>

                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Número:</div>
                    <div class="content">
                      {{ enterprise.registerData?.number }}
                    </div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Tomo:</div>
                    <div class="content">
                      {{ enterprise.registerData?.took }}
                    </div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Folio:</div>
                    <div class="content">
                      {{ enterprise.registerData?.fol }}
                    </div>
                  </div>
                </div>

                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Capital social:</div>
                    <div class="content">
                      {{ formatAmount(enterprise.registerData?.socialCapital) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full grid grid-cols-[135px_1fr]">
            <aside
              class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center border-b border-maximiza-blanco1"
            >
              <h5 class="text-maximiza-blanco1 font-bold">
                Última modificación
              </h5>
            </aside>
            <div>
              <div class="grid grid-cols-[1fr_1fr_1fr]">
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Nombre del registro:</div>
                    <div class="content">
                      {{ enterprise.lastModification?.recordName }}
                    </div>
                  </div>
                </div>

                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Fecha de modificación:</div>
                    <div class="content">
                      {{ formatDate(enterprise.lastModification?.date) }}
                    </div>
                  </div>
                </div>

                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Número:</div>
                    <div class="content">
                      {{ enterprise.lastModification?.number }}
                    </div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Tomo:</div>
                    <div class="content">
                      {{ enterprise.lastModification?.took }}
                    </div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Folio:</div>
                    <div class="content">
                      {{ enterprise.lastModification?.fol }}
                    </div>
                  </div>
                </div>

                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Capital social:</div>
                    <div class="content">
                      {{
                        formatAmount(enterprise.lastModification?.socialCapital)
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full grid grid-cols-[135px_1fr]">
            <aside
              class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center"
            >
              <h5 class="text-maximiza-blanco1 font-bold">Entes públicos</h5>
            </aside>
            <div>
              <div class="grid grid-cols-[1fr_1fr]">
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Número de gaceta oficial:</div>
                    <div class="content">
                      {{ enterprise.officialGazetteNumber }}
                    </div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Fecha:</div>
                    <div class="content">
                      {{ formatDate(enterprise.publicEntitiesDate) }}
                    </div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Autoridad / Ente de adscripción:</div>
                    <div class="content">{{ enterprise.authority }}</div>
                  </div>
                </div>
                <div class="spreadsheet__item">
                  <div class="spreadsheet__form-item">
                    <div>Código ONT:</div>
                    <div class="content">{{ enterprise.ontCode }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_2fr_2fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Teléfono:</div>
                <div class="content">{{ enterprise.publicPhones }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Sitio Web:</div>
                <div class="content">{{ enterprise.website }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Correo electrónico:</div>
                <div class="content">{{ enterprise.publicEntityEmail }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Dirección:</div>
                <div class="content">{{ enterprise.publicEntityAddress }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-[1fr_2fr_2fr]">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Teléfono alternativo:</div>
                <div class="content">{{ enterprise.publicPhones2 }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Sitio Web alternativo:</div>
                <div class="content">{{ enterprise.website2 }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Correo electrónico alternativo:</div>
                <div class="content">{{ enterprise.publicEntityEmail2 }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="spreadsheet__section">
        <template v-if="!isNatural">
          <h5 class="spreadsheet__title">
            INFORMACIÓN ECONÓMICO FINANCIERA DE LA EMPRESA
          </h5>
          <PlanillaBlocksStockholdersBlock :source="financial.stockholders" />
          <PlanillaBlocksLegalRepresentativesBlock
            :source="financial.legalRepresentatives"
          />
        </template>

        <template v-else>
          <h5 class="spreadsheet__title">REFERENCIAS DEL INVERSIONISTA</h5>
          <PlanillaBlocksBankReferencesBlock :source="financial" />
        </template>
      </div>

      <div v-if="isNatural" class="spreadsheet__section">
        <h5 class="spreadsheet__title">
          INFORMACIÓN ECONÓMICO FINANCIERA DEL INVERSIONISTA
        </h5>
        <div class="grid grid-cols-2">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Actividad económica:</div>
            </div>
          </div>
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Actividad específica:</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div class="content text-[10px]">{{ economicActivityLabel }}</div>
            </div>
          </div>
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div class="content">{{ financial.specificActivity }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-break">
      <div class="w-full text-right text-sm font-bold">Pág. 2/3</div>

      <div class="spreadsheet__section">
        <h5 class="spreadsheet__title">
          INFORMACIÓN ECONÓMICO FINANCIERA
          {{ isNatural ? "DEL INVERSIONISTA" : "DE LA EMPRESA" }}
        </h5>

        <template v-if="isNatural">
          <PlanillaBlocksIncomeSourceBlock :source="financial" />
        </template>

        <template v-else>
          <PlanillaBlocksPepBlock
            :source="pep"
            :stockholders="financial.stockholders"
          />

          <div class="grid grid-cols-3">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>N° de subsidiarias / Oficinas:</div>
                <div class="content">
                  {{ enterprise.officesNumber || "N/A" }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>País con mayor presencia:</div>
                <div class="content">
                  {{
                    getLabel(
                      enterprise.countryLargestPresence,
                      countriesOptions,
                    )
                  }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>N° de empleados:</div>
                <div class="content">
                  {{ enterprise.employeesNumber || "N/A" }}
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Ventas mensuales:</div>
                <div class="content">
                  {{ formatAmount(financial.monthlySales) }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Ingresos mensuales:</div>
                <div class="content">
                  {{ formatAmount(financial.monthlyIncome) }}
                </div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Egresos mensuales:</div>
                <div class="content">
                  {{ formatAmount(financial.monthlyExpenses) }}
                </div>
              </div>
            </div>
          </div>

          <div class="spreadsheet__item font-bold text-[10px]">
            Última declaración ISLR:
          </div>
          <div class="grid grid-cols-2">
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Año:</div>
                <div class="content">{{ financial.islrYear }}</div>
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="spreadsheet__form-item">
                <div>Monto:</div>
                <div class="content">
                  {{ formatAmount(financial.islrAmount) }}
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2">
            <PlanillaBlocksProvidersBlock :source="financial.providers" />
            <PlanillaBlocksClientsBlock :source="financial.clients" />
          </div>

          <PlanillaBlocksRelatedCompaniesBlock
            :source="financial.relatedCompanies"
          />

          <PlanillaBlocksBankReferencesBlock :source="financial" />
        </template>
      </div>

      <div class="spreadsheet__section">
        <h5 class="spreadsheet__title">
          INFORMACIÓN DEL PRODUCTO O SERVICIO BURSATIL
        </h5>
        <div class="grid grid-cols-3">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Nombre del producto:</div>
              <div class="content text-[10px]">{{ productNameLabel }}</div>
            </div>
          </div>
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Monto del producto adquirido:</div>
              <div class="content">
                {{ formatAmount(product.productAmount) }}
              </div>
            </div>
          </div>
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Moneda:</div>
              <div class="content">{{ currencyLabel }}</div>
            </div>
          </div>
        </div>

        <div class="spreadsheet__item font-bold text-[10px]">
          Información sobre movilización de fondos
        </div>

        <div class="grid grid-cols-[1fr_2fr_3fr]">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Monto promedio mensual:</div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>N° transacciones por transferencias:</div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Enviar o recibir fondos del exterior:</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-[1fr_2fr_3fr]">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div class="content">
                {{ formatAmount(product.monthlyAmount) }}
              </div>
            </div>
          </div>

          <div class="spreadsheet__item grid grid-cols-2">
            <div
              class="spreadsheet__form-item border-r-2 border-maximiza-verde1"
            >
              <div>Compra:</div>
              <div class="content">Temp</div>
            </div>
            <div class="spreadsheet__form-item">
              <div>Venta:</div>
              <div class="content">Temp</div>
            </div>
          </div>

          <div class="spreadsheet__item grid grid-cols-3">
            <div
              class="spreadsheet__form-item border-r-2 border-maximiza-verde1"
            >
              <div>País origen:</div>
              <div class="content">{{ originCountryLabel || "N/A" }}</div>
            </div>

            <div
              class="spreadsheet__form-item border-r-2 border-maximiza-verde1"
            >
              <div>País destino:</div>
              <div class="content">{{ destinationCountryLabel || "N/A" }}</div>
            </div>

            <div class="spreadsheet__form-item">
              <div>Uso moneda virtual:</div>
              <div class="content">{{ product.virtualCurrencyUse }}</div>
            </div>
          </div>
        </div>

        <div
          v-if="product.sendOrReceiveFundsFromAbroad === 'SI'"
          class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]"
        >
          Enviar o recibir fondos del exterior
        </div>

        <div class="grid grid-cols-3">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Motivos por los cuales solicita los servicios:</div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Origen de los fondos:</div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div>Destino de los fondos:</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div class="content">{{ product.motives }}</div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div class="content">
                {{ getLabel(product.fundsSource, fundsSourceOptions) }}
              </div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              <div class="content">
                {{
                  getLabel(product.fundsDestination, fundsDestinationOptions)
                }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="spreadsheet__section" style="border-width: 2px">
        <h5 class="spreadsheet__title">
          ACEPTACIÓN DEL CONTRATO DE CUENTA DE CORRETAJE BURSÁTIL POR PARTE DEL
          INVERSOR
        </h5>
        <div class="p-2">
          <p
            class="spreadsheet__contract text-justify text-[9px] leading-tight"
          >
            Aceptación del contrato de cuenta de corretaje bursátil por parte
            del inversor con la firma del presente documento, el cliente
            expresamente conviene y acepta que las operaciones financieras y
            bursátiles celebradas entre maximiza y el cliente se regirán por el
            contrato de cuenta corretaje bursátil, del cual el presente anexo
            forma parte integrante, y cual fue autenticado por ante la Notaría
            Pública sexta del Municipio Chacao del estado Miranda, el 26 de
            Enero del 2007, bajo el N°56, tomo 10, de los libros de
            autenticación llevados por esa notaría, así mismo, el cliente
            declara haber leído y comprendido las operaciones objeto de los
            contratos que integran la cuenta de corretaje bursátil. De
            conformidad con lo establecido en las normas relativas a la
            administración y fiscalización de los riesgos relacionados con los
            delitos de legitimación de los capitales, financiamiento al
            terrorismo, financiamiento de la proliferación de armas de
            destrucción masiva y otros ilícitos, aplicables a los sujetos
            regulados por la Superintendencia Nacional de Valores, por lo que el
            (los) inversor(es) declara(n) bajo fe de juramento que los dineros,
            capitales y haberes, valores o títulos utilizados en las
            operaciones, no guardan relación con actividades provenientes del
            delito de legitimación de capitales u otros delitos previstos y
            sancionados en la ley orgánica contra la delincuencia organizada y
            financiamiento al terrorismo. Así mismo, el inversor expresamente
            declara que la información suministrada es cierta y completa y que
            refleja con exactitud la realidad legal y financiera del cliente y,
            autoriza suficientemente a Maximiza Casa de Bolsa, C.A., para que
            verifique los datos aportados y que han sido vertidos en esta
            planilla, señalados en la providencia N°025 y las demás
            disposiciones que tutelan esta materia
          </p>
        </div>
      </div>
    </div>

    <div class="page-break">
      <div class="w-full text-right text-sm font-bold">Pág. 3/3</div>

      <div class="spreadsheet__section">
        <h5 class="spreadsheet__title">DECLARACIÓN JURADA</h5>
        <div class="p-2 text-[10px]">
          <p class="text-left font-bold mb-1">Quién suscribe declara:</p>
          <ol class="list-none">
            <li class="text-start">
              1) Que los datos suministrados son verdaderos y autoriza a la
              institución del sector valores a verificar dicha información.
            </li>
            <li class="text-start">
              2) Que los fondos utilizados tienen origen y destino lícitos,
              según lo previsto y sancionado en el ordenamiento jurídico vigente
              en la República Bolivariana de Venezuela.
            </li>
            <li class="text-start">
              3) Que notificará de inmediato cuando se produzcan cambios en los
              datos personales y/o en movimiento de fondos reportados.
            </li>
          </ol>
        </div>
      </div>

      <div class="spreadsheet__section" style="border-width: 2px">
        <div class="grid grid-cols-4">
          <div class="spreadsheet__sign-item">
            <div>Preparado por:</div>
            <div class="mt-8 border-t border-maximiza-negro1 text-[8px]">
              Nombre y apellido:
            </div>
          </div>
          <div class="spreadsheet__sign-item">
            <div>Verificado oficial de cumplimiento:</div>
            <div class="mt-8 border-t border-maximiza-negro1 text-[8px]">
              Nombre y apellido:
            </div>
          </div>
          <div class="spreadsheet__sign-item">
            <div>Firma del inversionista:</div>
            <div class="mt-8 border-t border-maximiza-negro1 text-[8px]">
              Nombre y apellido:
            </div>
          </div>
          <div class="spreadsheet__sign-item">
            <div>Huella dactilar:</div>
          </div>
        </div>
      </div>

      <div class="spreadsheet__section">
        <h5 class="spreadsheet__title">
          PARA USO INTERNO DE MAXIMIZA CASA DE BOLSA
        </h5>
        <div class="p-2 text-[10px]">
          <span v-if="isNatural">
            <li class="text-start">1) Copia de la Cédula de identidad.</li>
            <li class="text-start">
              2) Copia del Registro de información Fiscal (R.I.F).
            </li>
            <li class="text-start">
              3) Referencia bancaria denominada en moneda nacional.
            </li>
            <li class="text-start">4) Constancia de trabajo.</li>
            <li class="text-start">
              5) Informe de atestiguamiento de ingresos.
            </li>
            <li class="text-start">
              6) Declaración jurada cada vez que realice una operación.
            </li>
            <li class="text-start">7) Otros.</li>
          </span>
          <span v-else>
            <li class="text-start">
              1) Copia del Registro de información Fiscal (R.I.F) de la empresa.
            </li>
            <li class="text-start">
              2) Copia de la Cédula de identidad y del R.I.F del (los)
              representante legal (es) de la empresa.
            </li>
            <li class="text-start">
              3) Copia del Documento constitutivo y las modificaciones
              estatutarias.
            </li>
            <li class="text-start">
              4) Referencia bancaria denominada en moneda nacional.
            </li>
            <li class="text-start">
              5) Declaración jurada cada vez que realice una operación.
            </li>
            <li class="text-start">6) Otros.</li>
          </span>
        </div>
      </div>

      <div class="p-2 text-[10px] italic">
        El Ejecutivo de Cuentas declara haberse entrevistado con el cliente,
        Quien firmó esta planilla en su presencia
      </div>
      <div class="spreadsheet__section">
        <div class="grid grid-cols-[1.5fr_1.5fr_1.5fr_0.5fr]">
          <div class="spreadsheet__item border-r-0 h-[75px]">
            Fecha de recepcion ejecutivo:
          </div>
          <div class="spreadsheet__item border-r-0 h-[75px]">
            Nombre del ejecutivo de cuentas:
          </div>
          <div class="spreadsheet__item border-r-0 h-[75px]">
            Firma del ejecutivo de cuentas:
          </div>
          <div class="spreadsheet__item h-[75px]">Pag</div>
        </div>
      </div>

      <span class="copy text-left"
        >Maximiza Casa de Bolsa. R.I.F. Nro. J-30025492-5</span
      >
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
  padding: 0.5rem;
}

.spreadsheet__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.spreadsheet__image {
  width: 180px;
}

.spreadsheet__main-title {
  text-transform: uppercase;
  text-wrap: balance;
  max-width: 60%;
  text-align: left;
  border-left: 4px solid #006548;
  font-weight: 700;
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 1.2;
}

.spreadsheet__section {
  margin-top: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  font-size: 11px;
  border: 1px solid #006548;
  overflow: hidden;
}

.spreadsheet__title {
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7rem;
  background: #006548;
  padding: 0.2rem;
  color: white;
  font-weight: bold;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
}

.spreadsheet__container {
  display: grid;
}

.spreadsheet__form-item {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  font-size: 0.5rem;

  div.content {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
  }

  * {
    text-align: left;
  }
}

.spreadsheet__item {
  min-height: 30px;
  border: 1px solid #006548;
  padding: 0.1rem;
  font-size: 0.5rem;

  &.border-r-0 {
    border-right: none;
  }

  div.content {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
    min-height: 1rem;
  }
}

.spreadsheet__section1 {
  display: flex;
  width: 100%;

  .spreadsheet__item {
    flex: 1;
  }
}

.spreadsheet__section2 {
  display: grid;
  grid-template-columns: 1fr 30%;
  border-radius: 1rem;

  .spreadsheet__item:last-child {
    grid-column: span 2;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
}

.spreadsheet__sign-item {
  border: 1px solid #006548;
  padding: 0.25rem;
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.7rem;
}

.copy {
  display: block;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.7rem;
  color: #666;
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

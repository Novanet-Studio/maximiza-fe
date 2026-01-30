<script setup lang="ts">
import { useForm, useFieldArray } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

import {
  bankingInstituteOptions,
  conditionOptions,
  isPepOptions,
  countriesOptions,
  nationalityOptions,
  docTypeOptionsAlt,
  monthlyIncomeOptions,
  economicActivityOptions,
  relatedWithPepOptions,
  docTypeOptions,
} from "~/assets/data/formSources";

const wizard = usePlanillaWizard();
const type = wizard.state.value.type;

const schema = yup.object({
  economicActivity:
    type === "natural"
      ? yup.string().required("Requerido")
      : yup.string().optional(),
  specificActivity:
    type === "natural"
      ? yup.string().required("Requerido")
      : yup.string().optional(),

  incomeSource:
    type === "natural"
      ? yup.array().min(1, "Seleccione al menos una fuente")
      : yup.array().optional(),

  company: yup.object().when("incomeSource", {
    is: (val: string[]) => val?.includes("dependencia"),
    then: () =>
      yup.object({
        name: yup.string().required("Requerido"),
        rifType: yup.string().required("Requerido"),
        rifNumber: yup
          .string()
          .required("Requerido")
          .matches(/^[0-9]+$/, "Solo números"),
        remuneration: yup.string().required("Requerido"),
        rol: yup.string().required("Requerido"),
        branch: yup.string().required("Requerido"),
        address: yup.string().optional(),
        phone: yup.string().optional(),
      }),
    otherwise: () => yup.object().optional(),
  }),

  business: yup.object().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: () =>
      yup.object({
        name: yup.string().required("Requerido"),
        rifType: yup.string().required("Requerido"),
        rifNumber: yup
          .string()
          .required("Requerido")
          .matches(/^[0-9]+$/, "Solo números"),
        fiscalAddress: yup.string().optional(),
        income: yup.string().required("Requerido"),
        constitutionDate: yup.string().required("Requerido"),
        registerData: yup.string().required("Requerido"),
        branch: yup.string().required("Requerido"),
        phone: yup.string().optional(),
        providers: yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              location: yup.string().required("Requerido"),
            }),
          )
          .max(3, "Máximo 3 registros"),
        clients: yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              location: yup.string().required("Requerido"),
            }),
          )
          .max(3, "Máximo 3 registros"),
      }),
    otherwise: () => yup.object().optional(),
  }),

  otherIncomeSource: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("otros"),
    then: (s) => s.required("Requerido"),
  }),

  otherIncomeAmount: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("otros"),
    then: (s) => s.required("Requerido"),
  }),

  monthlyIncome:
    type === "juridica"
      ? yup.string().required("Requerido")
      : yup.string().optional(),
  monthlySales:
    type === "juridica"
      ? yup.string().required("Requerido")
      : yup.string().optional(),
  monthlyExpenses:
    type === "juridica"
      ? yup.string().required("Requerido")
      : yup.string().optional(),

  islrYear:
    type === "juridica"
      ? yup
          .string()
          .required("Requerido")
          .test(
            "is-valid-year",
            `Año inválido (1900 - ${new Date().getFullYear()})`,
            (value) => {
              if (!value) return false;
              const year = parseInt(value, 10);
              const currentYear = new Date().getFullYear();
              return year >= 1900 && year <= currentYear;
            },
          )
      : yup.string().optional(),
  islrAmount:
    type === "juridica"
      ? yup.string().required("Requerido")
      : yup.string().optional(),

  bankReference: yup.object({
    institution: yup.string().required("Requerido"),
    accountNumber: yup
      .string()
      .required("Requerido")
      .matches(/^[0-9]{20}$/, "20 dígitos"),
    productType: yup.string().required("Requerido"),
    averageAmount: yup.string().required("Requerido"),
  }),

  stockholders:
    type === "juridica"
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              dniType: yup.string().required("Requerido"),
              dniNumber: yup
                .string()
                .required("Requerido")
                .matches(/^[0-9]+$/, "Solo números"),
              percentage: yup.string().required("Requerido"),
              nationality: yup.string().required("Requerido"),
              address: yup.string().required("Requerido"),
              cargo: yup.string().required("Requerido"),
              esPep: yup.string().required("Requerido"),
              relatedWithPep: yup.string().required("Requerido"),
            }),
          )
          .max(3, "Máximo 3 registros")
      : yup.array().optional(),

  legalRepresentatives:
    type === "juridica"
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              dniType: yup.string().required("Requerido"),
              dniNumber: yup
                .string()
                .required("Requerido")
                .matches(/^[0-9]+$/, "Solo números"),
              cargo: yup.string().required("Requerido"),
              nationality: yup.string().required("Requerido"),
              address: yup.string().required("Requerido"),
              condition: yup.string().required("Requerido"),
              esPep: yup.string().required("Requerido"),
              relatedWithPep: yup.string().required("Requerido"),
            }),
          )
          .max(3, "Máximo 3 registros")
      : yup.array().optional(),

  providers:
    type === "juridica"
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              location: yup.string().required("Requerido"),
            }),
          )
          .max(3, "Máximo 3 registros")
      : yup.array().optional(),

  clients:
    type === "juridica"
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              location: yup.string().required("Requerido"),
            }),
          )
          .max(3, "Máximo 3 registros")
      : yup.array().optional(),

  relatedCompanies:
    type === "juridica"
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required("Requerido"),
              activity: yup.string().required("Requerido"),
              rifType: yup.string().required("Requerido"),
              rifNumber: yup
                .string()
                .required("Requerido")
                .matches(/^[0-9]+$/, "Solo números"),
            }),
          )
          .max(3, "Máximo 3 registros")
      : yup.array().optional(),
});

const splitId = (val: string) => {
  if (!val) return { type: "J", number: "" };
  return { type: val.charAt(0), number: val.slice(1) };
};

const companyRifData = splitId(
  wizard.state.value.formData.financialInformation?.company?.rif,
);

const businessRifData = splitId(
  wizard.state.value.formData.financialInformation?.business?.rif,
);

const processArrayIds = (
  arr: any[],
  idField: string,
  typeField: string,
  numField: string,
) => {
  if (!arr || arr.length === 0) return null;
  return arr.map((item) => {
    if (item[idField] && !item[numField]) {
      const split = splitId(item[idField]);
      return { ...item, [typeField]: split.type, [numField]: split.number };
    }
    return item;
  });
};

const defaultStockholder = {
  name: "",
  dniType: "V",
  dniNumber: "",
  percentage: "",
  cargo: "",
  esPep: "NO",
  relatedWithPep: "NO",
  nationality: "VENEZOLANO",
  address: "",
  entityName: "",
  position: "",
  country: "",
  relatedIdentification: "",
  dni: "",
};

const defaultLegalRep = {
  name: "",
  dniType: "V",
  dniNumber: "",
  cargo: "",
  condition: "",
  esPep: "NO",
  relatedWithPep: "NO",
  nationality: "VENEZOLANO",
  address: "",
  dni: "",
};

const defaultProvider = { name: "", location: "" };
const defaultClient = { name: "", location: "" };
const defaultCompany = {
  name: "",
  activity: "",
  rifType: "J",
  rifNumber: "",
  rif: "",
};
const defaultBank = {
  institution: "",
  accountNumber: "",
  productType: "",
  averageAmount: "",
};

const initialStockholders = processArrayIds(
  wizard.state.value.formData.financialInformation?.stockholders,
  "dni",
  "dniType",
  "dniNumber",
) || [defaultStockholder];

const initialLegal = processArrayIds(
  wizard.state.value.formData.financialInformation?.legalRepresentatives,
  "dni",
  "dniType",
  "dniNumber",
) || [defaultLegalRep];

const initialRelated = processArrayIds(
  wizard.state.value.formData.financialInformation?.relatedCompanies,
  "rif",
  "rifType",
  "rifNumber",
) || [defaultCompany];

const initialJuridicaProviders =
  wizard.state.value.formData.financialInformation?.providers?.length > 0
    ? wizard.state.value.formData.financialInformation?.providers
    : [defaultProvider];

const initialJuridicaClients =
  wizard.state.value.formData.financialInformation?.clients?.length > 0
    ? wizard.state.value.formData.financialInformation?.clients
    : [defaultClient];

const initialBusinessProviders =
  wizard.state.value.formData.financialInformation?.business?.providers
    ?.length > 0
    ? wizard.state.value.formData.financialInformation?.business?.providers
    : [defaultProvider];

const initialBusinessClients =
  wizard.state.value.formData.financialInformation?.business?.clients?.length >
  0
    ? wizard.state.value.formData.financialInformation?.business?.clients
    : [defaultClient];

const initialBankReference =
  wizard.state.value.formData.financialInformation?.bankReference ||
  defaultBank;

const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: schema,
  initialValues: {
    economicActivity:
      wizard.state.value.formData.financialInformation?.economicActivity || "",
    specificActivity:
      wizard.state.value.formData.financialInformation?.specificActivity || "",
    incomeSource:
      wizard.state.value.formData.financialInformation?.incomeSource || [],

    company: {
      name:
        wizard.state.value.formData.financialInformation?.company?.name || "",
      rifType: companyRifData.type,
      rifNumber: companyRifData.number,
      remuneration:
        wizard.state.value.formData.financialInformation?.company
          ?.remuneration || "",
      rol: wizard.state.value.formData.financialInformation?.company?.rol || "",
      branch:
        wizard.state.value.formData.financialInformation?.company?.branch || "",
      address:
        wizard.state.value.formData.financialInformation?.company?.address ||
        "",
      phone:
        wizard.state.value.formData.financialInformation?.company?.phone || "",
    },

    business: {
      name:
        wizard.state.value.formData.financialInformation?.business?.name || "",
      rifType: businessRifData.type,
      rifNumber: businessRifData.number,
      fiscalAddress:
        wizard.state.value.formData.financialInformation?.business
          ?.fiscalAddress || "",
      income:
        wizard.state.value.formData.financialInformation?.business?.income ||
        "",
      constitutionDate:
        wizard.state.value.formData.financialInformation?.business
          ?.constitutionDate || "",
      registerData:
        wizard.state.value.formData.financialInformation?.business
          ?.registerData || "",
      branch:
        wizard.state.value.formData.financialInformation?.business?.branch ||
        "",
      phone:
        wizard.state.value.formData.financialInformation?.business?.phone || "",
      providers: initialBusinessProviders,
      clients: initialBusinessClients,
    },

    otherIncomeSource:
      wizard.state.value.formData.financialInformation?.otherIncomeSource || "",
    otherIncomeAmount:
      wizard.state.value.formData.financialInformation?.otherIncomeAmount || "",

    monthlyIncome:
      wizard.state.value.formData.financialInformation?.monthlyIncome || "",
    monthlySales:
      wizard.state.value.formData.financialInformation?.monthlySales || "",
    monthlyExpenses:
      wizard.state.value.formData.financialInformation?.monthlyExpenses || "",
    islrYear: wizard.state.value.formData.financialInformation?.islrYear || "",
    islrAmount:
      wizard.state.value.formData.financialInformation?.islrAmount || "",

    bankReference: initialBankReference,

    stockholders: initialStockholders,
    legalRepresentatives: initialLegal,
    providers: initialJuridicaProviders,
    clients: initialJuridicaClients,
    relatedCompanies: initialRelated,
  },
});

const [economicActivity] = defineField("economicActivity");
const [specificActivity] = defineField("specificActivity");
const [incomeSource] = defineField("incomeSource");

const [companyName] = defineField("company.name");
const [companyRifType] = defineField("company.rifType");
const [companyRifNumber] = defineField("company.rifNumber");
const [companyRemuneration] = defineField("company.remuneration");
const [companyRol] = defineField("company.rol");
const [companyBranch] = defineField("company.branch");
const [companyAddress] = defineField("company.address");
const [companyPhone] = defineField("company.phone");

const [businessName] = defineField("business.name");
const [businessRifType] = defineField("business.rifType");
const [businessRifNumber] = defineField("business.rifNumber");
const [businessFiscalAddress] = defineField("business.fiscalAddress");
const [businessIncome] = defineField("business.income");
const [businessConstitutionDate] = defineField("business.constitutionDate");
const [businessRegisterData] = defineField("business.registerData");
const [businessBranch] = defineField("business.branch");
const [businessPhone] = defineField("business.phone");

const [otherIncomeSource] = defineField("otherIncomeSource");
const [otherIncomeAmount] = defineField("otherIncomeAmount");

const [monthlyIncome] = defineField("monthlyIncome");
const [monthlySales] = defineField("monthlySales");
const [monthlyExpenses] = defineField("monthlyExpenses");
const [islrYear] = defineField("islrYear");
const [islrAmount] = defineField("islrAmount");

const [bankInstitution] = defineField("bankReference.institution");
const [bankProductType] = defineField("bankReference.productType");
const [bankAccountNumber] = defineField("bankReference.accountNumber");
const [bankAverageAmount] = defineField("bankReference.averageAmount");

const {
  fields: stockholderFields,
  push: addStockholder,
  remove: removeStockholder,
} = useFieldArray("stockholders");
const {
  fields: legalFields,
  push: addLegal,
  remove: removeLegal,
} = useFieldArray("legalRepresentatives");
const {
  fields: juridicaProviderFields,
  push: addJuridicaProvider,
  remove: removeJuridicaProvider,
} = useFieldArray("providers");
const {
  fields: juridicaClientFields,
  push: addJuridicaClient,
  remove: removeJuridicaClient,
} = useFieldArray("clients");
const {
  fields: companyFields,
  push: addCompany,
  remove: removeCompany,
} = useFieldArray("relatedCompanies");

const {
  fields: businessProviderFields,
  push: addBusinessProvider,
  remove: removeBusinessProvider,
} = useFieldArray("business.providers");
const {
  fields: businessClientFields,
  push: addBusinessClient,
  remove: removeBusinessClient,
} = useFieldArray("business.clients");

const handleAddStockholder = () => {
  if (stockholderFields.value.length < 3)
    addStockholder({ ...defaultStockholder });
};
const handleAddLegal = () => {
  if (legalFields.value.length < 3) addLegal({ ...defaultLegalRep });
};
const handleAddJuridicaProvider = () => {
  if (juridicaProviderFields.value.length < 3)
    addJuridicaProvider({ ...defaultProvider });
};
const handleAddJuridicaClient = () => {
  if (juridicaClientFields.value.length < 3)
    addJuridicaClient({ ...defaultClient });
};
const handleAddCompany = () => {
  if (companyFields.value.length < 3) addCompany({ ...defaultCompany });
};

const handleAddBusinessProvider = () => {
  if (businessProviderFields.value.length < 3)
    addBusinessProvider({ ...defaultProvider });
};
const handleAddBusinessClient = () => {
  if (businessClientFields.value.length < 3)
    addBusinessClient({ ...defaultClient });
};

const validate = handleSubmit((values) => {
  const payload = { ...values };

  if (type === "natural") {
    if (values.incomeSource?.includes("dependencia")) {
      if (values.company?.rifType && values.company?.rifNumber) {
        payload.company.rif = `${values.company.rifType}${values.company.rifNumber}`;
      }
    }
    if (values.incomeSource?.includes("propio")) {
      if (values.business?.rifType && values.business?.rifNumber) {
        payload.business.rif = `${values.business.rifType}${values.business.rifNumber}`;
      }
    }
  }

  if (type === "juridica") {
    payload.stockholders = values.stockholders.map((s: any) => ({
      ...s,
      dni: `${s.dniType}${s.dniNumber}`,
    }));
    payload.legalRepresentatives = values.legalRepresentatives.map(
      (l: any) => ({
        ...l,
        dni: `${l.dniType}${l.dniNumber}`,
      }),
    );
    payload.relatedCompanies = values.relatedCompanies.map((c: any) => ({
      ...c,
      rif: `${c.rifType}${c.rifNumber}`,
    }));
  }

  wizard.updateFormData({ financialInformation: payload });
  wizard.nextStep();
});

defineExpose({ validate });
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent>
    <div v-if="type === 'natural'">
      <FormTitle text="Información económica" />
      <FormBaseLayout>
        <FormBaseSelect
          name="economicActivity"
          label="Actividad económica"
          v-model="economicActivity"
          :options="economicActivityOptions"
          :error-message="errors.economicActivity"
          class="xl:col-span-2"
          required
        />

        <FormBaseInput
          name="specificActivity"
          label="Actividad específica"
          v-model="specificActivity"
          :error-message="errors.specificActivity"
          required
        />
      </FormBaseLayout>
    </div>

    <div v-if="type === 'natural'" class="flex flex-col">
      <FormTitle text="Fuente de ingresos" />

      <FormBaseLayout :style="'xl:grid-cols-4'">
        <FormBaseCheckbox
          name="source-dependencia"
          v-model="incomeSource"
          value="dependencia"
          label="Relación de dependencia"
        />

        <FormBaseCheckbox
          name="source-propio"
          v-model="incomeSource"
          value="propio"
          label="Negocio propio"
        />

        <FormBaseCheckbox
          name="source-otros"
          v-model="incomeSource"
          value="otros"
          label="Otros ingresos"
        />
      </FormBaseLayout>

      <FormError v-if="errors.incomeSource" :error="errors.incomeSource" />

      <div class="flex flex-col gap-4">
        <div
          v-if="incomeSource.includes('dependencia')"
          class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
        >
          <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
            Relación de dependencia
          </h5>
          <FormBaseLayout>
            <FormBaseInput
              name="company.name"
              label="Nombre de la empresa"
              v-model="companyName"
              :error-message="errors['company.name']"
              required
            />

            <div class="w-full">
              <FormBaseLabel htmlFor="company.rifNumber" label="RIF" required />
              <div class="flex gap-1">
                <div class="w-16 shrink-0">
                  <FormBaseSelect
                    name="company.rifType"
                    v-model="companyRifType"
                    :options="docTypeOptionsAlt"
                    :error-message="errors['company.rifType'] ? ' ' : ''"
                  />
                </div>
                <div class="w-full">
                  <FormBaseInput
                    name="company.rifNumber"
                    v-model="companyRifNumber"
                    placeholder="12345678"
                    type="tel"
                    :error-message="errors['company.rifNumber']"
                    :comment="'RIF_REQUIRED'"
                  />
                </div>
              </div>
              <FormError
                v-if="!errors['company.rifNumber'] && errors['company.rifType']"
                error="Seleccione tipo"
              />
            </div>

            <FormBaseInput
              name="company.rol"
              label="Cargo dentro de la empresa"
              v-model="companyRol"
              :error-message="errors['company.rol']"
              required
            />

            <FormBaseSelect
              name="company.branch"
              label="Ramo de la empresa"
              v-model="companyBranch"
              :options="economicActivityOptions"
              :error-message="errors['company.branch']"
              class="col-span-full"
              required
            />

            <FormBaseSelect
              label="Remuneración"
              name="company.remuneration"
              v-model="companyRemuneration"
              :options="monthlyIncomeOptions"
              :error-message="errors['company.remuneration'] ? ' ' : ''"
              :comment="'INCOMES'"
            />

            <FormBaseInput
              name="company.address"
              label="Dirección"
              v-model="companyAddress"
            />

            <FormBaseInput
              name="company.phone"
              label="Teléfono"
              v-model="companyPhone"
            />
          </FormBaseLayout>
        </div>

        <div
          v-if="incomeSource.includes('propio')"
          class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
        >
          <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
            Negocio Propio
          </h5>
          <FormBaseLayout>
            <FormBaseInput
              name="business.name"
              label="Nombre / Razón social"
              v-model="businessName"
              :error-message="errors['business.name']"
              required
            />

            <div class="w-full">
              <FormBaseLabel
                htmlFor="business.rifNumber"
                label="RIF"
                required
              />
              <div class="flex gap-1">
                <div class="w-16 shrink-0">
                  <FormBaseSelect
                    name="business.rifType"
                    v-model="businessRifType"
                    :options="docTypeOptions"
                    :error-message="errors['business.rifType'] ? ' ' : ''"
                  />
                </div>
                <div class="w-full">
                  <FormBaseInput
                    name="business.rifNumber"
                    v-model="businessRifNumber"
                    placeholder="12345678"
                    type="tel"
                    :error-message="errors['business.rifNumber']"
                    :comment="'RIF_REQUIRED'"
                  />
                </div>
              </div>
              <FormError
                v-if="
                  !errors['business.rifNumber'] && errors['business.rifType']
                "
                error="Seleccione tipo"
              />
            </div>

            <FormBaseInput
              name="business.constitutionDate"
              label="Fecha de constitución"
              v-model="businessConstitutionDate"
              type="date"
              :error-message="errors['business.constitutionDate']"
              required
            />

            <FormBaseInput
              name="business.registerData"
              label="Datos de registro"
              v-model="businessRegisterData"
              :error-message="errors['business.registerData']"
              required
            />

            <FormBaseInput
              name="business.fiscalAddress"
              label="Dirección fiscal"
              v-model="businessFiscalAddress"
            />

            <FormBaseInput
              name="business.phone"
              label="Teléfono"
              v-model="businessPhone"
            />

            <FormBaseSelect
              name="business.branch"
              label="Ramo del negocio"
              v-model="businessBranch"
              :options="economicActivityOptions"
              :error-message="errors['business.branch']"
              class="col-span-full"
              required
            />

            <FormBaseSelect
              label="Ingresos mensuales"
              name="business.income"
              v-model="businessIncome"
              :options="monthlyIncomeOptions"
              :error-message="errors['business.income'] ? ' ' : ''"
            />
          </FormBaseLayout>

          <div class="mt-8">
            <h6 class="font-bold text-maximiza-gris4 mb-4">
              Principales proveedores
            </h6>
            <div
              v-for="(field, i) in businessProviderFields"
              :key="field.key"
              class="p-4 border border-maximiza-gris5 rounded-sm mb-4"
            >
              <FormBaseLayout>
                <FormBaseInput
                  :name="`business.providers[${i}].name`"
                  label="Razón social"
                  v-model="field.value.name"
                  :error-message="errors[`business.providers[${i}].name`]"
                />
                <FormBaseInput
                  :name="`business.providers[${i}].location`"
                  label="Ubicación"
                  v-model="field.value.location"
                  :error-message="errors[`business.providers[${i}].location`]"
                />
                <template #button-bar>
                  <button
                    v-if="businessProviderFields.length > 1"
                    type="button"
                    @click="removeBusinessProvider(i)"
                    class="button-danger --small"
                  >
                    Eliminar <font-awesome-icon :icon="['fas', 'trash']" />
                  </button>
                </template>
              </FormBaseLayout>
            </div>
            <button
              v-if="businessProviderFields.length < 3"
              type="button"
              @click="handleAddBusinessProvider"
              class="button-primary --medium"
            >
              + Agregar proveedor
            </button>
          </div>

          <div class="mt-8">
            <h6 class="font-bold text-maximiza-gris4 mb-4">
              Principales clientes
            </h6>
            <div
              v-for="(field, i) in businessClientFields"
              :key="field.key"
              class="p-4 border border-maximiza-gris5 rounded-sm mb-4"
            >
              <FormBaseLayout>
                <FormBaseInput
                  :name="`business.clients[${i}].name`"
                  label="Razón social"
                  v-model="field.value.name"
                  :error-message="errors[`business.clients[${i}].name`]"
                />
                <FormBaseInput
                  :name="`business.clients[${i}].location`"
                  label="Ubicación"
                  v-model="field.value.location"
                  :error-message="errors[`business.clients[${i}].location`]"
                />
                <template #button-bar>
                  <button
                    v-if="businessClientFields.length > 1"
                    type="button"
                    @click="removeBusinessClient(i)"
                    class="button-danger --small"
                  >
                    Eliminar <font-awesome-icon :icon="['fas', 'trash']" />
                  </button>
                </template>
              </FormBaseLayout>
            </div>
            <button
              v-if="businessClientFields.length < 3"
              type="button"
              @click="handleAddBusinessClient"
              class="button-primary --medium"
            >
              + Agregar cliente
            </button>
          </div>
        </div>

        <div
          v-if="incomeSource.includes('otros')"
          class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
        >
          <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
            Otros Ingresos
          </h5>
          <FormBaseLayout>
            <FormBaseInput
              name="otherIncomeSource"
              label="Actividad generadora"
              v-model="otherIncomeSource"
              :error-message="errors.otherIncomeSource"
              required
            />

            <FormBaseSelect
              label="Ingresos mensuales (en Bs)"
              name="otherIncomeAmount"
              v-model="otherIncomeAmount"
              :options="monthlyIncomeOptions"
              :error-message="errors.otherIncomeAmount ? ' ' : ''"
            />
          </FormBaseLayout>
        </div>
      </div>
    </div>

    <div v-if="type === 'juridica'">
      <div>
        <FormTitle text="Datos financieros mensuales" />
        <FormBaseLayout class="grid-cols-1 md:grid-cols-3">
          <FormBaseInput
            name="monthlyIncome"
            label="Ingresos (en Bs)"
            v-model="monthlyIncome"
            type="number"
            :error-message="errors.monthlyIncome"
          />
          <FormBaseInput
            name="monthlySales"
            label="Ventas (en Bs)"
            v-model="monthlySales"
            type="number"
            :error-message="errors.monthlySales"
          />
          <FormBaseInput
            name="monthlyExpenses"
            label="Egresos (en Bs)"
            v-model="monthlyExpenses"
            type="number"
            :error-message="errors.monthlyExpenses"
          />
        </FormBaseLayout>
      </div>

      <div>
        <h6 class="font-bold text-maximiza-gris4 mb-4">
          Última Declaración ISLR
        </h6>
        <FormBaseLayout>
          <FormBaseInput
            name="islrYear"
            label="Año"
            v-model="islrYear"
            :error-message="errors.islrYear"
            type="number"
            :min="1900"
            :max="new Date().getFullYear()"
            required
          />

          <FormBaseInput
            name="islrAmount"
            label="Monto (en Bs)"
            v-model="islrAmount"
            :error-message="errors.islrAmount"
          />
        </FormBaseLayout>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Accionistas / Junta directiva" />

        <div class="w-full">
          <div
            v-for="(field, i) in stockholderFields"
            :key="field.key"
            class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10 mb-4"
          >
            <FormBaseLayout>
              <FormBaseInput
                :name="`stockholders[${i}].name`"
                label="Nombre completo"
                v-model="field.value.name"
                :error-message="errors[`stockholders[${i}].name`]"
                required
              />

              <div class="w-full">
                <FormBaseLabel
                  :htmlFor="`stockholders[${i}].dniNumber`"
                  label="Documento de identidad"
                  required
                />
                <div class="flex gap-1">
                  <div class="w-16 shrink-0">
                    <FormBaseSelect
                      :name="`stockholders[${i}].dniType`"
                      v-model="field.value.dniType"
                      :options="docTypeOptions"
                      :error-message="errors[`stockholders[${i}].dniType`]"
                      required
                    />
                  </div>
                  <div class="w-full">
                    <FormBaseInput
                      :name="`stockholders[${i}].dniNumber`"
                      v-model="field.value.dniNumber"
                      type="tel"
                      :error-message="errors[`stockholders[${i}].dniNumber`]"
                      :comment="'RIF_REQUIRED'"
                      required
                    />
                  </div>
                </div>
              </div>

              <FormBaseInput
                :name="`stockholders[${i}].percentage`"
                label="% Accionario"
                v-model="field.value.percentage"
                :error-message="errors[`stockholders[${i}].percentage`]"
              />

              <FormBaseInput
                :name="`stockholders[${i}].cargo`"
                label="Cargo"
                v-model="field.value.cargo"
                :error-message="errors[`stockholders[${i}].cargo`]"
              />

              <FormBaseSelect
                :name="`stockholders[${i}].nationality`"
                v-model="field.value.nationality"
                label="Nacionalidad"
                :options="nationalityOptions"
                :error-message="errors[`stockholders[${i}].nationality`]"
                required
              />

              <FormBaseInput
                :name="`stockholders[${i}].address`"
                label="Direccion"
                v-model="field.value.address"
                :error-message="errors[`stockholders[${i}].address`]"
              />

              <div class="col-span-full space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormBaseSelect
                    :name="`stockholders[${i}].esPep`"
                    label="¿Es Persona Expuesta Políticamente (PEP)?"
                    v-model="field.value.esPep"
                    :options="isPepOptions"
                    :error-message="errors[`stockholders[${i}].esPep`]"
                  />

                  <FormBaseSelect
                    :name="`stockholders[${i}].relatedWithPep`"
                    label="¿Relacionado con PEP?"
                    v-model="field.value.relatedWithPep"
                    :error-message="errors[`stockholders[${i}].relatedWithPep`]"
                    :options="relatedWithPepOptions"
                  />
                </div>

                <div v-if="field.value.esPep === 'SI'">
                  <p class="font-black text-maximiza-verde1 mb-4">
                    Detalle PEP
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormBaseInput
                      :name="`stockholders[${i}].entityName`"
                      label="Nombre del ente adscripción"
                      v-model="field.value.entityName"
                      :error-message="errors[`stockholders[${i}].entityName`]"
                    />

                    <FormBaseInput
                      :name="`stockholders[${i}].position`"
                      label="Cargo que desempeña"
                      v-model="field.value.position"
                      :error-message="errors[`stockholders[${i}].position`]"
                    />

                    <FormBaseSelect
                      :name="`stockholders[${i}].country`"
                      label="País"
                      v-model="field.value.country"
                      :options="countriesOptions"
                      :error-message="errors[`stockholders[${i}].country`]"
                    />

                    <FormBaseInput
                      :name="`stockholders[${i}].relatedIdentification`"
                      label="Identificación del relacionado (Si aplica)"
                      v-model="field.value.relatedIdentification"
                      :error-message="
                        errors[`stockholders[${i}].relatedIdentification`]
                      "
                    />
                  </div>
                </div>
              </div>

              <template #button-bar>
                <button
                  v-if="stockholderFields.length > 1"
                  type="button"
                  @click="removeStockholder(i)"
                  class="button-danger --small"
                >
                  Eliminar cuenta <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <button
          v-if="stockholderFields.length < 3"
          type="button"
          @click="handleAddStockholder"
          class="button-primary --medium mt-4"
        >
          + Agregar Accionista
        </button>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Representantes legales" />

        <div class="w-full">
          <div
            v-for="(field, i) in legalFields"
            :key="field.key"
            class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
          >
            <FormBaseLayout>
              <FormBaseInput
                :name="`legalRepresentatives[${i}].name`"
                label="Nombre"
                v-model="field.value.name"
                :error-message="errors[`legalRepresentatives[${i}].name`]"
              />

              <div class="w-full">
                <FormBaseLabel
                  :htmlFor="`legalRepresentatives[${i}].dniNumber`"
                  label="Documento de identidad"
                  required
                />
                <div class="flex gap-1">
                  <div class="w-16 shrink-0">
                    <FormBaseSelect
                      :name="`legalRepresentatives[${i}].dniType`"
                      v-model="field.value.dniType"
                      :options="docTypeOptions"
                      :error-message="
                        errors[`legalRepresentatives[${i}].dniType`]
                      "
                    />
                  </div>
                  <div class="w-full">
                    <FormBaseInput
                      :name="`legalRepresentatives[${i}].dniNumber`"
                      v-model="field.value.dniNumber"
                      type="tel"
                      :error-message="
                        errors[`legalRepresentatives[${i}].dniNumber`]
                      "
                      :comment="'RIF_REQUIRED'"
                    />
                  </div>
                </div>
              </div>

              <FormBaseInput
                :name="`legalRepresentatives[${i}].cargo`"
                label="Cargo"
                v-model="field.value.cargo"
                :error-message="errors[`legalRepresentatives[${i}].cargo`]"
              />

              <FormBaseSelect
                :name="`legalRepresentatives[${i}].condition`"
                label="Condición"
                v-model="field.value.condition"
                :options="conditionOptions"
                :error-message="errors[`legalRepresentatives[${i}].condition`]"
              />

              <FormBaseSelect
                :name="`legalRepresentatives[${i}].nationality`"
                v-model="field.value.nationality"
                label="Nacionalidad"
                :options="nationalityOptions"
                :error-message="
                  errors[`legalRepresentatives[${i}].nationality`]
                "
                required
              />

              <FormBaseInput
                :name="`legalRepresentatives[${i}].address`"
                label="Direccion"
                v-model="field.value.address"
                :error-message="errors[`legalRepresentatives[${i}].address`]"
              />

              <div class="col-span-full space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormBaseSelect
                    :name="`legalRepresentatives[${i}].esPep`"
                    label="¿Es Persona Expuesta Políticamente (PEP)?"
                    v-model="field.value.esPep"
                    :options="isPepOptions"
                    :error-message="errors[`legalRepresentatives[${i}].esPep`]"
                  />

                  <FormBaseSelect
                    :name="`legalRepresentatives[${i}].relatedWithPep`"
                    label="¿Relacionado con PEP?"
                    v-model="field.value.relatedWithPep"
                    :error-message="
                      errors[`legalRepresentatives[${i}].relatedWithPep`]
                    "
                    :options="relatedWithPepOptions"
                  />
                </div>
              </div>

              <template #button-bar>
                <button
                  v-if="legalFields.length > 1"
                  type="button"
                  @click="removeLegal(i)"
                  class="button-danger --small"
                >
                  Eliminar representante
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <button
          v-if="legalFields.length < 3"
          type="button"
          @click="handleAddLegal"
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Principales proveedores" />

        <div class="w-full">
          <div
            v-for="(field, i) in juridicaProviderFields"
            :key="field.key"
            class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
          >
            <FormBaseLayout>
              <FormBaseInput
                :name="`providers[${i}].name`"
                label="Razón social"
                v-model="field.value.name"
                :error-message="errors[`providers[${i}].name`]"
              />
              <FormBaseInput
                :name="`providers[${i}].location`"
                label="Ubicación"
                v-model="field.value.location"
                :error-message="errors[`providers[${i}].location`]"
              />

              <template #button-bar>
                <button
                  v-if="juridicaProviderFields.length > 1"
                  type="button"
                  @click="removeJuridicaProvider(i)"
                  class="button-danger --small"
                >
                  Proveedor cliente
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <button
          v-if="juridicaProviderFields.length < 3"
          type="button"
          @click="handleAddJuridicaProvider"
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Principales clientes" />

        <div class="w-full">
          <div
            v-for="(field, i) in juridicaClientFields"
            :key="field.key"
            class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
          >
            <FormBaseLayout>
              <FormBaseInput
                :name="`clients[${i}].name`"
                label="Razón social"
                v-model="field.value.name"
                :error-message="errors[`clients[${i}].name`]"
                class="mb-2"
              />
              <FormBaseInput
                :name="`clients[${i}].location`"
                label="Ubicación"
                v-model="field.value.location"
                :error-message="errors[`clients[${i}].location`]"
              />

              <template #button-bar>
                <button
                  v-if="juridicaClientFields.length > 1"
                  type="button"
                  @click="removeJuridicaClient(i)"
                  class="button-danger --small"
                >
                  Eliminar cliente
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </template>
            </FormBaseLayout>
          </div>
        </div>
        <button
          v-if="juridicaClientFields.length < 3"
          type="button"
          @click="handleAddJuridicaClient"
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Empresas relacionadas" />

        <div class="w-full">
          <div
            v-for="(field, i) in companyFields"
            :key="field.key"
            class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
          >
            <FormBaseLayout>
              <FormBaseInput
                :name="`relatedCompanies[${i}].name`"
                label="Razón social"
                v-model="field.value.name"
                :error-message="errors[`relatedCompanies[${i}].name`]"
              />
              <FormBaseInput
                :name="`relatedCompanies[${i}].activity`"
                label="Actividad económica"
                v-model="field.value.activity"
                :error-message="errors[`relatedCompanies[${i}].activity`]"
              />

              <div class="w-full">
                <FormBaseLabel
                  :htmlFor="`relatedCompanies[${i}].rifNumber`"
                  label="RIF"
                  required
                />
                <div class="flex gap-1">
                  <div class="w-16 shrink-0">
                    <FormBaseSelect
                      :name="`relatedCompanies[${i}].rifType`"
                      v-model="field.value.rifType"
                      :error-message="errors[`relatedCompanies[${i}].rifType`]"
                      :options="docTypeOptions"
                    />
                  </div>
                  <div class="w-full">
                    <FormBaseInput
                      :name="`relatedCompanies[${i}].rifNumber`"
                      v-model="field.value.rifNumber"
                      :error-message="
                        errors[`relatedCompanies[${i}].rifNumber`]
                      "
                      :comment="'RIF_REQUIRED'"
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              <template #button-bar>
                <button
                  v-if="companyFields.length > 1"
                  type="button"
                  @click="removeCompany(i)"
                  class="button-danger --small"
                >
                  Eliminar compañia
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <button
          v-if="companyFields.length < 3"
          type="button"
          @click="handleAddCompany"
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>
    </div>

    <div class="flex flex-col items-end">
      <FormTitle text="Referencia bancaria" />

      <FormBaseLayout>
        <FormBaseSelect
          name="bankReference.institution"
          label="Institución"
          :options="bankingInstituteOptions"
          v-model="bankInstitution"
          :error-message="errors['bankReference.institution']"
          required
          class="col-span-2"
        />

        <FormBaseSelect
          name="bankReference.productType"
          label="Tipo de cuenta"
          :options="['Cuenta corriente', 'Cuenta de ahorro']"
          v-model="bankProductType"
          :error-message="errors['bankReference.productType']"
          required
        />

        <FormBaseInput
          name="bankReference.accountNumber"
          label="Número de cuenta (20 dígitos)"
          v-model="bankAccountNumber"
          :maxlength="20"
          placeholder="12345..."
          :error-message="errors['bankReference.accountNumber']"
          required
        />

        <FormBaseInput
          name="bankReference.averageAmount"
          type="number"
          label="Cifras promedio mensuales (en Bs)"
          v-model="bankAverageAmount"
          :error-message="errors['bankReference.averageAmount']"
          required
        />
      </FormBaseLayout>
    </div>
  </form>
</template>

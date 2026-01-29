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

  companyName: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("dependencia"),
    then: (s) => s.required("Requerido"),
  }),
  companyRemuneration: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("dependencia"),
    then: (s) => s.required("Requerido"),
  }),
  companyRifType: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("dependencia"),
    then: (s) => s.required("Requerido"),
  }),
  companyRifNumber: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("dependencia"),
    then: (s) => s.required("Requerido").matches(/^[0-9]+$/, "Solo números"),
  }),
  companyRol: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: (s) => s.required("Requerido"),
  }),
  companyBranch: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: (s) => s.required("Requerido"),
  }),

  businessName: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: (s) => s.required("Requerido"),
  }),

  businessRifType: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: (s) => s.required("Requerido"),
  }),
  businessRifNumber: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: (s) => s.required("Requerido").matches(/^[0-9]+$/, "Solo números"),
  }),

  businessIncome: yup.string().when("incomeSource", {
    is: (val: string[]) => val?.includes("propio"),
    then: (s) => s.required("Requerido"),
  }),

  otherIncomeSource: yup.string().when("incomeSource", {
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

  bankReferences: yup
    .array()
    .of(
      yup.object({
        institution: yup.string().required("Requerido"),
        accountNumber: yup
          .string()
          .required("Requerido")
          .matches(/^[0-9]{20}$/, "20 dígitos"),
        productType: yup.string().required("Requerido"),
        averageAmount: yup.string().required("Requerido"),
      }),
    )
    .min(1, "Requerido"),

  stockholders:
    type === "juridica"
      ? yup.array().of(
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
      : yup.array().optional(),

  legalRepresentatives:
    type === "juridica"
      ? yup.array().of(
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
      : yup.array().optional(),

  providers:
    type === "juridica"
      ? yup.array().of(
          yup.object({
            name: yup.string().required("Requerido"),
            location: yup.string().required("Requerido"),
          }),
        )
      : yup.array().optional(),

  clients:
    type === "juridica"
      ? yup.array().of(
          yup.object({
            name: yup.string().required("Requerido"),
            location: yup.string().required("Requerido"),
          }),
        )
      : yup.array().optional(),

  relatedCompanies:
    type === "juridica"
      ? yup.array().of(
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
      : yup.array().optional(),
});

const splitId = (val: string) => {
  if (!val) return { type: "J", number: "" };
  return { type: val.charAt(0), number: val.slice(1) };
};

const companyRifData = splitId(
  wizard.state.value.formData.financialInformation?.companyRif,
);
const businessRifData = splitId(
  wizard.state.value.formData.financialInformation?.businessRif,
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

const initialProviders =
  wizard.state.value.formData.financialInformation?.providers?.length > 0
    ? wizard.state.value.formData.financialInformation?.providers
    : [defaultProvider];

const initialClients =
  wizard.state.value.formData.financialInformation?.clients?.length > 0
    ? wizard.state.value.formData.financialInformation?.clients
    : [defaultClient];

const initialBankReferences =
  wizard.state.value.formData.financialInformation?.bankReferences?.length > 0
    ? wizard.state.value.formData.financialInformation?.bankReferences
    : [defaultBank];

const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: schema,
  initialValues: {
    economicActivity:
      wizard.state.value.formData.financialInformation?.economicActivity || "",
    specificActivity:
      wizard.state.value.formData.financialInformation?.specificActivity || "",

    incomeSource:
      wizard.state.value.formData.financialInformation?.incomeSource || [],
    companyName:
      wizard.state.value.formData.financialInformation?.companyName || "",
    companyRemuneration:
      wizard.state.value.formData.financialInformation?.companyRemuneration ||
      "",
    companyRol:
      wizard.state.value.formData.financialInformation?.companyRol || "",
    companyBranch:
      wizard.state.value.formData.financialInformation?.companyBranch || "",

    companyAddress:
      wizard.state.value.formData.financialInformation?.companyAddress || "",
    companyRifType: companyRifData.type,
    companyRifNumber: companyRifData.number,
    companyPhone:
      wizard.state.value.formData.financialInformation?.companyPhone || "",

    businessName:
      wizard.state.value.formData.financialInformation?.businessName || "",

    businessRifType: businessRifData.type,
    businessRifNumber: businessRifData.number,
    businessAddress:
      wizard.state.value.formData.financialInformation?.businessAddress || "",
    businessIncome:
      wizard.state.value.formData.financialInformation?.businessIncome || "",

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

    bankReferences: initialBankReferences,
    stockholders: initialStockholders,
    legalRepresentatives: initialLegal,
    providers: initialProviders,
    clients: initialClients,
    relatedCompanies: initialRelated,
  },
});

const [economicActivity] = defineField("economicActivity");
const [specificActivity] = defineField("specificActivity");

const [incomeSource] = defineField("incomeSource");
const [companyName] = defineField("companyName");
const [companyRemuneration] = defineField("companyRemuneration");
const [companyRol] = defineField("companyRol");
const [companyBranch] = defineField("companyBranch");

const [companyAddress] = defineField("companyAddress");
const [companyRifType] = defineField("companyRifType");
const [companyRifNumber] = defineField("companyRifNumber");
const [companyPhone] = defineField("companyPhone");

const [businessName] = defineField("businessName");
const [businessRifType] = defineField("businessRifType");
const [businessRifNumber] = defineField("businessRifNumber");
const [businessAddress] = defineField("businessAddress");
const [businessIncome] = defineField("businessIncome");
const [otherIncomeSource] = defineField("otherIncomeSource");
const [otherIncomeAmount] = defineField("otherIncomeAmount");

const [monthlyIncome] = defineField("monthlyIncome");
const [monthlySales] = defineField("monthlySales");
const [monthlyExpenses] = defineField("monthlyExpenses");
const [islrYear] = defineField("islrYear");
const [islrAmount] = defineField("islrAmount");

const {
  fields: bankFields,
  push: addBank,
  remove: removeBank,
} = useFieldArray("bankReferences");
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
  fields: providerFields,
  push: addProvider,
  remove: removeProvider,
} = useFieldArray("providers");
const {
  fields: clientFields,
  push: addClient,
  remove: removeClient,
} = useFieldArray("clients");
const {
  fields: companyFields,
  push: addCompany,
  remove: removeCompany,
} = useFieldArray("relatedCompanies");

const validate = handleSubmit((values) => {
  const payload = { ...values };

  if (type === "natural") {
    payload.companyRif = "";
    payload.businessRif = "";

    if (
      values.incomeSource?.includes("dependencia") &&
      values.companyRifType &&
      values.companyRifNumber
    ) {
      payload.companyRif = `${values.companyRifType}${values.companyRifNumber}`;
    }

    if (
      values.incomeSource?.includes("propio") &&
      values.businessRifType &&
      values.businessRifNumber
    ) {
      payload.businessRif = `${values.businessRifType}${values.businessRifNumber}`;
    }

    delete payload.companyRifType;
    delete payload.companyRifNumber;
    delete payload.businessRifType;
    delete payload.businessRifNumber;
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
  <form class="flex flex-col" @submit.prevent>
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
              name="companyName"
              label="Nombre de la empresa"
              v-model="companyName"
              :error-message="errors.companyName"
              required
            />

            <div class="w-full">
              <FormBaseLabel htmlFor="companyRifNumber" label="RIF" required />
              <div class="flex gap-1">
                <div class="w-16 shrink-0">
                  <FormBaseSelect
                    name="companyRifType"
                    v-model="companyRifType"
                    :options="docTypeOptionsAlt"
                    :error-message="errors.companyRifType ? ' ' : ''"
                  />
                </div>
                <div class="w-full">
                  <FormBaseInput
                    name="companyRifNumber"
                    v-model="companyRifNumber"
                    placeholder="12345678"
                    type="tel"
                    :error-message="errors.companyRifNumber"
                    :comment="'RIF_REQUIRED'"
                  />
                </div>
              </div>
              <FormError
                v-if="!errors.companyRifNumber && errors.companyRifType"
                error="Seleccione tipo"
              />
            </div>

            <FormBaseInput
              name="companyRol"
              label="Cargo dentro de la empresa"
              v-model="companyRol"
              :error-message="errors.companyRol"
              required
            />

            <FormBaseSelect
              name="companyBranch"
              label="Ramo de la empresa"
              v-model="companyBranch"
              :options="economicActivityOptions"
              :error-message="errors.companyBranch"
              class="col-span-full"
              required
            />

            <FormBaseSelect
              label="Remuneración mensual"
              name="companyRemuneration"
              v-model="companyRemuneration"
              :options="monthlyIncomeOptions"
              :error-message="errors.companyRemuneration ? ' ' : ''"
              :comment="'INCOMES'"
            />

            <FormBaseInput
              name="companyAddress"
              label="Dirección"
              v-model="companyAddress"
            />

            <FormBaseInput
              name="companyPhone"
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
              name="businessName"
              label="Nombre / Razón social"
              v-model="businessName"
              :error-message="errors.businessName"
              required
            />

            <div class="w-full">
              <FormBaseLabel htmlFor="businessRifNumber" label="RIF" required />
              <div class="flex gap-1">
                <div class="w-16 shrink-0">
                  <FormBaseSelect
                    name="businessRifType"
                    v-model="businessRifType"
                    :options="docTypeOptions"
                    :error-message="errors.businessRifType ? ' ' : ''"
                  />
                </div>
                <div class="w-full">
                  <FormBaseInput
                    name="businessRifNumber"
                    v-model="businessRifNumber"
                    placeholder="12345678"
                    type="tel"
                    :error-message="errors.businessRifNumber"
                    :comment="'RIF_REQUIRED'"
                  />
                </div>
              </div>
              <FormError
                v-if="!errors.businessRifNumber && errors.businessRifType"
                error="Seleccione tipo"
              />
            </div>

            <FormBaseInput
              name="businessAddress"
              label="Dirección fiscal"
              v-model="businessAddress"
            />

            <FormBaseSelect
              label="Ingresos mensuales"
              name="businessIncome"
              v-model="businessIncome"
              :options="monthlyIncomeOptions"
              :error-message="errors.businessIncome ? ' ' : ''"
            />
          </FormBaseLayout>
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

              <!-- SECCIÓN PEP -->
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
          type="button"
          @click="
            addStockholder({
              name: '',
              dniType: 'V',
              dniNumber: '',
              percentage: '',
              cargo: '',
              nationality: '',
              address: '',
              esPep: 'NO',
              relatedWithPep: 'NO',
              entityName: '',
              position: '',
              country: '',
              relatedIdentification: '',
            })
          "
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
          type="button"
          @click="
            addLegal({
              name: '',
              dniType: 'V',
              dniNumber: '',
              nationality: '',
              address: '',

              cargo: '',
              condition: '',
              esPep: 'NO',
              relatedWithPep: 'NO',
            })
          "
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Principales proveedores" />

        <div class="w-full">
          <div
            v-for="(field, i) in providerFields"
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
                  v-if="providerFields.length > 1"
                  type="button"
                  @click="removeProvider(i)"
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
          type="button"
          @click="addProvider({ name: '', location: '' })"
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>

      <div class="flex flex-col items-end">
        <FormTitle text="Principales clientes" />

        <div class="w-full">
          <div
            v-for="(field, i) in clientFields"
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
                  v-if="clientFields.length > 1"
                  type="button"
                  @click="removeClient(i)"
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
          type="button"
          @click="addClient({ name: '', location: '' })"
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
          type="button"
          @click="
            addCompany({ name: '', activity: '', rifType: 'J', rifNumber: '' })
          "
          class="button-primary --medium mt-4"
        >
          + Agregar
        </button>
      </div>
    </div>

    <div class="flex flex-col items-end">
      <FormTitle text="Referencias bancarias" />

      <div class="flex flex-col w-full">
        <div
          v-for="(field, i) in bankFields"
          :key="field.key"
          class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
        >
          <FormBaseLayout>
            <FormBaseSelect
              :name="`bankReferences[${i}].institution`"
              label="Institución"
              :options="bankingInstituteOptions"
              v-model="field.value.institution"
              :error-message="errors[`bankReferences[${i}].institution`]"
              required
              class="col-span-2"
            />

            <FormBaseSelect
              :name="`bankReferences[${i}].productType`"
              label="Tipo de cuenta"
              :options="['Cuenta corriente', 'Cuenta de ahorro']"
              v-model="field.value.productType"
              :error-message="errors[`bankReferences[${i}].productType`]"
              required
            />

            <FormBaseInput
              :name="`bankReferences[${i}].accountNumber`"
              label="Número de cuenta (20 dígitos)"
              v-model="field.value.accountNumber"
              :maxlength="20"
              placeholder="12345..."
              :error-message="errors[`bankReferences[${i}].accountNumber`]"
              required
            />

            <FormBaseInput
              :name="`bankReferences[${i}].averageAmount`"
              type="number"
              label="Cifras promedio mensuales (en Bs)"
              v-model="field.value.averageAmount"
              :error-message="errors[`bankReferences[${i}].averageAmount`]"
              required
            />

            <template #button-bar>
              <button
                v-if="bankFields.length > 1"
                type="button"
                @click="removeBank(i)"
                class="button-danger --small"
              >
                Eliminar cuenta <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </template>
          </FormBaseLayout>
        </div>
      </div>
      <p
        v-if="errors.bankReferences"
        class="text-red-500 text-xs mt-2 font-medium"
      >
        {{ errors.bankReferences }}
      </p>

      <button
        type="button"
        @click="
          addBank({
            institution: '',
            accountNumber: '',
            productType: '',
            averageAmount: '',
          })
        "
        class="button-primary --medium mt-4"
      >
        + Agregar Cuenta
      </button>
    </div>
  </form>
</template>

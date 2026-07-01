<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import { useOnboardingWizard } from '~/composables/useOnboardingWizard'

import {
  bankingInstituteOptions,
  conditionOptions,
  isPepOptions,
  countriesOptions,
  specificActivityOptions,
  nationalityOptions,
  docTypeOptionsAlt,
  monthlyIncomeOptions,
  economicActivityOptions,
  relatedWithPepOptions,
  docTypeOptions,
} from '~/assets/data/formSources'

const wizard = useOnboardingWizard()
const type = wizard.state.value.type

const schema = yup.object({
  economicActivity:
    type === 'persona-natural'
      ? yup.string().required('Requerido')
      : yup.string().optional(),
  specificActivity:
    type === 'persona-natural'
      ? yup.string().required('Requerido')
      : yup.string().optional(),

  incomeSource:
    type === 'persona-natural'
      ? yup.array().min(1, 'Seleccione al menos una fuente')
      : yup.array().optional(),

  company: yup.object().when('incomeSource', {
    is: (val: string[]) => val?.includes('dependencia'),
    then: () =>
      yup.object({
        name: yup.string().required('Requerido'),
        rifType: yup.string().required('Requerido'),
        rifNumber: yup
          .string()
          .required('Requerido')
          .matches(/^[0-9]+$/, 'Solo números'),
        remuneration: yup.string().required('Requerido'),
        rol: yup.string().required('Requerido'),
        branch: yup.string().required('Requerido'),
        address: yup.string().optional(),
        phone: yup.string().optional(),
      }),
    otherwise: () => yup.object().optional(),
  }),

  business: yup.object().when('incomeSource', {
    is: (val: string[]) => val?.includes('propio'),
    then: () =>
      yup.object({
        name: yup.string().required('Requerido'),
        rifType: yup.string().required('Requerido'),
        rifNumber: yup
          .string()
          .required('Requerido')
          .matches(/^[0-9]+$/, 'Solo números'),
        fiscalAddress: yup.string().optional(),
        income: yup.string().required('Requerido'),
        constitutionDate: yup.string().required('Requerido'),
        registerData: yup.string().required('Requerido'),
        branch: yup.string().required('Requerido'),
        phone: yup.string().optional(),
        providers: yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              location: yup.string().required('Requerido'),
            })
          )
          .max(3, 'Máximo 3 registros'),
        clients: yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              location: yup.string().required('Requerido'),
            })
          )
          .max(3, 'Máximo 3 registros'),
      }),
    otherwise: () => yup.object().optional(),
  }),

  otherIncomeSource: yup.string().when('incomeSource', {
    is: (val: string[]) => val?.includes('otros'),
    then: (s) => s.required('Requerido'),
  }),

  otherIncomeAmount: yup.string().when('incomeSource', {
    is: (val: string[]) => val?.includes('otros'),
    then: (s) => s.required('Requerido'),
  }),

  monthlyIncome:
    type === 'persona-juridica'
      ? yup.string().required('Requerido')
      : yup.string().optional(),
  monthlySales:
    type === 'persona-juridica'
      ? yup.string().required('Requerido')
      : yup.string().optional(),
  monthlyExpenses:
    type === 'persona-juridica'
      ? yup.string().required('Requerido')
      : yup.string().optional(),

  islrYear:
    type === 'persona-juridica'
      ? yup
          .string()
          .required('Requerido')
          .test(
            'is-valid-year',
            `Año inválido (1900 - ${new Date().getFullYear()})`,
            (value) => {
              if (!value) return false
              const year = parseInt(value, 10)
              const currentYear = new Date().getFullYear()
              return year >= 1900 && year <= currentYear
            }
          )
      : yup.string().optional(),
  islrAmount:
    type === 'persona-juridica'
      ? yup.string().required('Requerido')
      : yup.string().optional(),

  bankReference: yup.object({
    institution: yup.string().required('Requerido'),
    accountNumber: yup
      .string()
      .required('Requerido')
      .matches(/^[0-9]{20}$/, '20 dígitos'),
    productType: yup.string().required('Requerido'),
    averageAmount: yup.string().required('Requerido'),
  }),

  stockholders:
    type === 'persona-juridica'
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              dniType: yup.string().required('Requerido'),
              dniNumber: yup
                .string()
                .required('Requerido')
                .matches(/^[0-9]+$/, 'Solo números'),
              percentage: yup
                .string()
                .required('Requerido')
                .test(
                  'is-valid-percentage',
                  'Porcentaje inválido (0 - 100)',
                  (value) => {
                    if (!value) return false
                    const percentage = parseFloat(value)
                    return percentage >= 0 && percentage <= 100
                  }
                ),
              nationality: yup.string().required('Requerido'),
              address: yup.string().required('Requerido'),
              cargo: yup.string().required('Requerido'),
              esPep: yup.string().required('Requerido'),
              relatedWithPep: yup.string().required('Requerido'),
            })
          )
          .max(3, 'Máximo 3 registros')
      : yup.array().optional(),

  legalRepresentatives:
    type === 'persona-juridica'
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              dniType: yup.string().required('Requerido'),
              dniNumber: yup
                .string()
                .required('Requerido')
                .matches(/^[0-9]+$/, 'Solo números'),
              cargo: yup.string().required('Requerido'),
              nationality: yup.string().required('Requerido'),
              address: yup.string().required('Requerido'),
              condition: yup.string().required('Requerido'),
              esPep: yup.string().required('Requerido'),
              relatedWithPep: yup.string().required('Requerido'),
            })
          )
          .max(3, 'Máximo 3 registros')
      : yup.array().optional(),

  providers:
    type === 'persona-juridica'
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              location: yup.string().required('Requerido'),
            })
          )
          .max(3, 'Máximo 3 registros')
      : yup.array().optional(),

  clients:
    type === 'persona-juridica'
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              location: yup.string().required('Requerido'),
            })
          )
          .max(3, 'Máximo 3 registros')
      : yup.array().optional(),

  relatedCompanies:
    type === 'persona-juridica'
      ? yup
          .array()
          .of(
            yup.object({
              name: yup.string().required('Requerido'),
              activity: yup.string().required('Requerido'),
              rifType: yup.string().required('Requerido'),
              rifNumber: yup
                .string()
                .required('Requerido')
                .matches(/^[0-9]+$/, 'Solo números'),
            })
          )
          .max(3, 'Máximo 3 registros')
      : yup.array().optional(),
})

const splitId = (val: string) => {
  if (!val) return { type: 'J', number: '' }
  return { type: val.charAt(0), number: val.slice(1) }
}

const companyRifData = splitId(
  wizard.state.value.formData.financialInformation?.company?.rif
)

const businessRifData = splitId(
  wizard.state.value.formData.financialInformation?.business?.rif
)

const processArrayIds = (
  arr: any[],
  idField: string,
  typeField: string,
  numField: string
) => {
  if (!arr || arr.length === 0) return null
  return arr.map((item) => {
    if (item[idField] && !item[numField]) {
      const split = splitId(item[idField])
      return { ...item, [typeField]: split.type, [numField]: split.number }
    }
    return item
  })
}

const defaultStockholder = {
  name: '',
  dniType: 'V',
  dniNumber: '',
  percentage: '',
  cargo: '',
  esPep: 'NO',
  relatedWithPep: 'NO',
  nationality: 'VENEZOLANO',
  address: '',
  entityName: '',
  position: '',
  country: '',
  relatedIdentification: '',
  dni: '',
}

const defaultLegalRep = {
  name: '',
  dniType: 'V',
  dniNumber: '',
  cargo: '',
  condition: '',
  esPep: 'NO',
  relatedWithPep: 'NO',
  nationality: 'VENEZOLANO',
  address: '',
  dni: '',
}

const defaultProvider = { name: '', location: '' }
const defaultClient = { name: '', location: '' }
const defaultCompany = {
  name: '',
  activity: '',
  rifType: 'J',
  rifNumber: '',
  rif: '',
}
const defaultBank = {
  institution: '',
  accountNumber: '',
  productType: '',
  averageAmount: '',
}

const initialStockholders = processArrayIds(
  wizard.state.value.formData.financialInformation?.stockholders,
  'dni',
  'dniType',
  'dniNumber'
) || [defaultStockholder]

const initialLegal = processArrayIds(
  wizard.state.value.formData.financialInformation?.legalRepresentatives,
  'dni',
  'dniType',
  'dniNumber'
) || [defaultLegalRep]

const initialRelated = processArrayIds(
  wizard.state.value.formData.financialInformation?.relatedCompanies,
  'rif',
  'rifType',
  'rifNumber'
) || [defaultCompany]

const initialJurídicaProviders =
  wizard.state.value.formData.financialInformation?.providers?.length > 0
    ? wizard.state.value.formData.financialInformation?.providers
    : [defaultProvider]

const initialJurídicaClients =
  wizard.state.value.formData.financialInformation?.clients?.length > 0
    ? wizard.state.value.formData.financialInformation?.clients
    : [defaultClient]

const initialBusinessProviders =
  wizard.state.value.formData.financialInformation?.business?.providers
    ?.length > 0
    ? wizard.state.value.formData.financialInformation?.business?.providers
    : [defaultProvider]

const initialBusinessClients =
  wizard.state.value.formData.financialInformation?.business?.clients?.length >
  0
    ? wizard.state.value.formData.financialInformation?.business?.clients
    : [defaultClient]

const initialBankReference =
  wizard.state.value.formData.financialInformation?.bankReference || defaultBank

const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: schema,
  initialValues: {
    economicActivity:
      wizard.state.value.formData.financialInformation?.economicActivity || '',
    specificActivity:
      wizard.state.value.formData.financialInformation?.specificActivity || '',
    incomeSource:
      wizard.state.value.formData.financialInformation?.incomeSource || [],

    company: {
      name:
        wizard.state.value.formData.financialInformation?.company?.name || '',
      rifType: companyRifData.type,
      rifNumber: companyRifData.number,
      remuneration:
        wizard.state.value.formData.financialInformation?.company
          ?.remuneration || '',
      rol: wizard.state.value.formData.financialInformation?.company?.rol || '',
      branch:
        wizard.state.value.formData.financialInformation?.company?.branch || '',
      address:
        wizard.state.value.formData.financialInformation?.company?.address ||
        '',
      phone:
        wizard.state.value.formData.financialInformation?.company?.phone || '',
    },

    business: {
      name:
        wizard.state.value.formData.financialInformation?.business?.name || '',
      rifType: businessRifData.type,
      rifNumber: businessRifData.number,
      fiscalAddress:
        wizard.state.value.formData.financialInformation?.business
          ?.fiscalAddress || '',
      income:
        wizard.state.value.formData.financialInformation?.business?.income ||
        '',
      constitutionDate:
        wizard.state.value.formData.financialInformation?.business
          ?.constitutionDate || '',
      registerData:
        wizard.state.value.formData.financialInformation?.business
          ?.registerData || '',
      branch:
        wizard.state.value.formData.financialInformation?.business?.branch ||
        '',
      phone:
        wizard.state.value.formData.financialInformation?.business?.phone || '',
      providers: initialBusinessProviders,
      clients: initialBusinessClients,
    },

    otherIncomeSource:
      wizard.state.value.formData.financialInformation?.otherIncomeSource || '',
    otherIncomeAmount:
      wizard.state.value.formData.financialInformation?.otherIncomeAmount || '',

    monthlyIncome:
      wizard.state.value.formData.financialInformation?.monthlyIncome || '',
    monthlySales:
      wizard.state.value.formData.financialInformation?.monthlySales || '',
    monthlyExpenses:
      wizard.state.value.formData.financialInformation?.monthlyExpenses || '',
    islrYear: wizard.state.value.formData.financialInformation?.islrYear || '',
    islrAmount:
      wizard.state.value.formData.financialInformation?.islrAmount || '',

    bankReference: initialBankReference,

    stockholders: initialStockholders,
    legalRepresentatives: initialLegal,
    providers: initialJurídicaProviders,
    clients: initialJurídicaClients,
    relatedCompanies: initialRelated,
  },
})

const [economicActivity] = defineField('economicActivity')
const [specificActivity] = defineField('specificActivity')
const [incomeSource] = defineField('incomeSource')

const [companyName] = defineField('company.name')
const [companyRifType] = defineField('company.rifType')
const [companyRifNumber] = defineField('company.rifNumber')
const [companyRemuneration] = defineField('company.remuneration')
const [companyRol] = defineField('company.rol')
const [companyBranch] = defineField('company.branch')
const [companyAddress] = defineField('company.address')
const [companyPhone] = defineField('company.phone')

const [businessName] = defineField('business.name')
const [businessRifType] = defineField('business.rifType')
const [businessRifNumber] = defineField('business.rifNumber')
const [businessFiscalAddress] = defineField('business.fiscalAddress')
const [businessIncome] = defineField('business.income')
const [businessConstitutionDate] = defineField('business.constitutionDate')
const [businessRegisterData] = defineField('business.registerData')
const [businessBranch] = defineField('business.branch')
const [businessPhone] = defineField('business.phone')

const [otherIncomeSource] = defineField('otherIncomeSource')
const [otherIncomeAmount] = defineField('otherIncomeAmount')

const [monthlyIncome] = defineField('monthlyIncome')
const [monthlySales] = defineField('monthlySales')
const [monthlyExpenses] = defineField('monthlyExpenses')
const [islrYear] = defineField('islrYear')
const [islrAmount] = defineField('islrAmount')

const [bankInstitution] = defineField('bankReference.institution')
const [bankProductType] = defineField('bankReference.productType')
const [bankAccountNumber] = defineField('bankReference.accountNumber')
const [bankAverageAmount] = defineField('bankReference.averageAmount')

const {
  fields: stockholderFields,
  push: addStockholder,
  remove: removeStockholder,
} = useFieldArray('stockholders')
const {
  fields: legalFields,
  push: addLegal,
  remove: removeLegal,
} = useFieldArray('legalRepresentatives')
const {
  fields: jurídicaProviderFields,
  push: addJurídicaProvider,
  remove: removeJurídicaProvider,
} = useFieldArray('providers')
const {
  fields: jurídicaClientFields,
  push: addJurídicaClient,
  remove: removeJurídicaClient,
} = useFieldArray('clients')
const {
  fields: companyFields,
  push: addCompany,
  remove: removeCompany,
} = useFieldArray('relatedCompanies')

const {
  fields: businessProviderFields,
  push: addBusinessProvider,
  remove: removeBusinessProvider,
} = useFieldArray('business.providers')
const {
  fields: businessClientFields,
  push: addBusinessClient,
  remove: removeBusinessClient,
} = useFieldArray('business.clients')

const handleAddStockholder = () => {
  if (stockholderFields.value.length < 3)
    addStockholder({ ...defaultStockholder })
}
const handleAddLegal = () => {
  if (legalFields.value.length < 3) addLegal({ ...defaultLegalRep })
}
const handleAddJurídicaProvider = () => {
  if (jurídicaProviderFields.value.length < 3)
    addJurídicaProvider({ ...defaultProvider })
}
const handleAddJurídicaClient = () => {
  if (jurídicaClientFields.value.length < 3)
    addJurídicaClient({ ...defaultClient })
}
const handleAddCompany = () => {
  if (companyFields.value.length < 3) addCompany({ ...defaultCompany })
}

const handleAddBusinessProvider = () => {
  if (businessProviderFields.value.length < 3)
    addBusinessProvider({ ...defaultProvider })
}
const handleAddBusinessClient = () => {
  if (businessClientFields.value.length < 3)
    addBusinessClient({ ...defaultClient })
}

const validate = handleSubmit((values) => {
  const payload = { ...values }

  if (type === 'persona-natural') {
    if (values.incomeSource?.includes('dependencia')) {
      if (values.company?.rifType && values.company?.rifNumber) {
        payload.company.rif = `${values.company.rifType}${values.company.rifNumber}`
      }
    }
    if (values.incomeSource?.includes('propio')) {
      if (values.business?.rifType && values.business?.rifNumber) {
        payload.business.rif = `${values.business.rifType}${values.business.rifNumber}`
      }
    }
  }

  if (type === 'persona-juridica') {
    payload.stockholders = values.stockholders.map((s: any) => ({
      ...s,
      dni: `${s.dniType}${s.dniNumber}`,
    }))
    payload.legalRepresentatives = values.legalRepresentatives.map(
      (l: any) => ({
        ...l,
        dni: `${l.dniType}${l.dniNumber}`,
      })
    )
    payload.relatedCompanies = values.relatedCompanies.map((c: any) => ({
      ...c,
      rif: `${c.rifType}${c.rifNumber}`,
    }))
  }

  wizard.updateFormData({ financialInformation: payload })
  wizard.nextStep()
})

defineExpose({ validate })
</script>

<template>
  <form class="form-section" @submit.prevent>
    <div v-if="type === 'persona-natural'" class="form-section">
      <FormTitle text="Información económica" />

      <FormBaseLayout :style="'lg:grid-cols-2'">
        <FormBaseSelect
          name="economicActivity"
          label="Actividad económica"
          class="col-span-full"
          v-model="economicActivity"
          :options="economicActivityOptions"
          :error-message="errors.economicActivity"
          required
        />

        <FormBaseSelect
          name="specificActivity"
          label="Actividad específica"
          class="col-span-full"
          v-model="specificActivity"
          :options="specificActivityOptions"
          :error-message="errors.specificActivity"
          required
        />
      </FormBaseLayout>
    </div>

    <FormBaseDivider v-if="type === 'persona-natural'" />

    <div v-if="type === 'persona-natural'" class="form-section">
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

      <div class="form-section">
        <div
          v-if="incomeSource.includes('dependencia')"
          class="form-subsection"
        >
          <h5 class="form-subsection-title">Relación de dependencia</h5>
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

            <FormBaseInput
              label="Remuneración"
              subLabelType="BS"
              name="company.remuneration"
              v-model="companyRemuneration"
              type="number"
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

        <div v-if="incomeSource.includes('propio')" class="form-subsection">
          <h5 class="form-subsection-title">Negocio Propio</h5>
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
              :comment="'RIF_REQUIRED'"
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

            <FormBaseInput
              label="Ingresos mensuales"
              subLabelType="BS"
              name="business.income"
              v-model="businessIncome"
              type="number"
              :comment="'INCOMES'"
              :error-message="errors['business.income'] ? ' ' : ''"
            />
          </FormBaseLayout>

          <div class="form-subsection --alt">
            <h6 class="form-subsection-title --alt">Principales proveedores</h6>

            <div v-for="(field, i) in businessProviderFields" :key="field.key">
              <FormBaseLayout use-buttons>
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
                  <UiButton
                    v-if="businessProviderFields.length > 1"
                    :text="''"
                    :icon="'close'"
                    size="icon"
                    variant="danger"
                    :onClick="() => removeBusinessProvider(i)"
                  />
                </template>
              </FormBaseLayout>
            </div>

            <span class="self-end">
              <UiButton
                v-if="businessProviderFields.length < 3"
                suffix-icon
                text="Agregar proveedor"
                :icon="'plus'"
                size="sm"
                :onClick="handleAddBusinessProvider"
              />
            </span>
          </div>

          <div class="form-subsection --alt flex flex-col">
            <h6 class="form-subsection-title --alt">Principales clientes</h6>
            <div v-for="(field, i) in businessClientFields" :key="field.key">
              <FormBaseLayout use-buttons>
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
                  <UiButton
                    v-if="businessClientFields.length > 1"
                    :text="''"
                    :icon="'close'"
                    size="icon"
                    variant="danger"
                    :onClick="() => removeBusinessClient(i)"
                  />
                </template>
              </FormBaseLayout>
            </div>
            <span class="self-end">
              <UiButton
                v-if="businessClientFields.length < 3"
                suffix-icon
                text="Agregar cliente"
                :icon="'plus'"
                size="sm"
                :onClick="handleAddBusinessClient"
              />
            </span>
          </div>
        </div>

        <div v-if="incomeSource.includes('otros')" class="form-subsection">
          <h5 class="form-subsection-title">Otros Ingresos</h5>
          <FormBaseLayout>
            <FormBaseSelect
              class="col-span-full"
              name="otherIncomeSource"
              label="Actividad generadora"
              v-model="otherIncomeSource"
              :options="economicActivityOptions"
              :error-message="errors.otherIncomeSource"
              required
            />

            <FormBaseInput
              label="Ingresos mensuales"
              subLabelType="BS"
              name="otherIncomeAmount"
              v-model="otherIncomeAmount"
              type="number"
              :error-message="errors.otherIncomeAmount ? ' ' : ''"
              :comment="'INCOMES'"
            />
          </FormBaseLayout>
        </div>
      </div>
    </div>

    <div v-if="type === 'persona-juridica'" class="form-section">
      <FormTitle text="Datos financieros mensuales" />

      <FormBaseLayout class="grid-cols-1 md:grid-cols-3">
        <FormBaseInput
          name="monthlyIncome"
          label="Ingresos"
          subLabelType="BS"
          v-model="monthlyIncome"
          type="number"
          :error-message="errors.monthlyIncome"
        />
        <FormBaseInput
          name="monthlySales"
          label="Ventas"
          subLabelType="BS"
          v-model="monthlySales"
          type="number"
          :error-message="errors.monthlySales"
        />
        <FormBaseInput
          name="monthlyExpenses"
          label="Egresos"
          subLabelType="BS"
          v-model="monthlyExpenses"
          type="number"
          :error-message="errors.monthlyExpenses"
        />
      </FormBaseLayout>

      <h6 class="text-gray text-sm font-bold">Última Declaración ISLR</h6>

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
          label="Monto"
          subLabelType="BS"
          v-model="islrAmount"
          :error-message="errors.islrAmount"
        />
      </FormBaseLayout>

      <div class="form-subsection --alt flex flex-col">
        <h6 class="form-subsection-title --alt">
          Accionistas / Junta directiva
        </h6>

        <div class="w-full">
          <div
            v-for="(field, i) in stockholderFields"
            :key="field.key"
            class="border-white-alt2 mb-6 border-b pb-6 last:mb-0 last:border-0 last:pb-0"
          >
            <FormBaseLayout use-buttons>
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
                      required
                    />
                  </div>
                </div>
              </div>

              <FormBaseInput
                :name="`stockholders[${i}].percentage`"
                label="% Accionario"
                v-model="field.value.percentage"
                type="number"
                :max="100"
                :min="0"
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
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  <p class="text-primary mb-4 font-black">Detalle PEP</p>
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                      label="Identificación del relacionado (En caso de aplicar)"
                      v-model="field.value.relatedIdentification"
                      :error-message="
                        errors[`stockholders[${i}].relatedIdentification`]
                      "
                    />
                  </div>
                </div>
              </div>

              <template #button-bar>
                <UiButton
                  v-if="stockholderFields.length > 1"
                  :text="''"
                  :icon="'close'"
                  size="icon"
                  variant="danger"
                  :onClick="() => removeStockholder(i)"
                />
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <span class="self-end">
          <UiButton
            v-if="stockholderFields.length < 3"
            suffix-icon
            text="Agregar accionista"
            :icon="'plus'"
            size="sm"
            :onClick="handleAddStockholder"
          />
        </span>
      </div>

      <div class="form-subsection --alt flex flex-col">
        <h6 class="form-subsection-title --alt">Representantes legales</h6>

        <div class="w-full">
          <div v-for="(field, i) in legalFields" :key="field.key">
            <FormBaseLayout use-buttons>
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
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                <UiButton
                  v-if="legalFields.length > 1"
                  :text="''"
                  :icon="'close'"
                  size="icon"
                  variant="danger"
                  :onClick="() => removeLegal(i)"
                />
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <span class="self-end">
          <UiButton
            v-if="legalFields.length < 3"
            suffix-icon
            text="Agregar"
            :icon="'plus'"
            size="sm"
            :onClick="handleAddLegal"
          />
        </span>
      </div>

      <div class="form-subsection --alt flex flex-col">
        <h6 class="form-subsection-title --alt">Principales proveedores</h6>

        <div class="w-full">
          <div v-for="(field, i) in jurídicaProviderFields" :key="field.key">
            <FormBaseLayout use-buttons>
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
                <UiButton
                  v-if="jurídicaProviderFields.length > 1"
                  :text="''"
                  :icon="'close'"
                  size="icon"
                  variant="danger"
                  :onClick="() => removeJurídicaProvider(i)"
                />
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <span class="self-end">
          <UiButton
            v-if="jurídicaProviderFields.length < 3"
            suffix-icon
            text="Agregar"
            :icon="'plus'"
            size="sm"
            :onClick="handleAddJurídicaProvider"
          />
        </span>
      </div>

      <div class="form-subsection --alt flex flex-col">
        <h6 class="form-subsection-title --alt">Principales clientes</h6>

        <div class="w-full">
          <div v-for="(field, i) in jurídicaClientFields" :key="field.key">
            <FormBaseLayout use-buttons>
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
                <UiButton
                  v-if="jurídicaClientFields.length > 1"
                  :text="''"
                  :icon="'close'"
                  size="icon"
                  variant="danger"
                  :onClick="() => removeJurídicaClient(i)"
                />
              </template>
            </FormBaseLayout>
          </div>
        </div>
        <span class="self-end">
          <UiButton
            v-if="jurídicaClientFields.length < 3"
            suffix-icon
            text="Agregar"
            :icon="'plus'"
            size="sm"
            :onClick="handleAddJurídicaClient"
          />
        </span>
      </div>

      <div class="form-subsection --alt flex flex-col">
        <h6 class="form-subsection-title --alt">Empresas relacionadas</h6>

        <div class="w-full">
          <div v-for="(field, i) in companyFields" :key="field.key">
            <FormBaseLayout use-buttons>
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
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              <template #button-bar>
                <UiButton
                  v-if="companyFields.length > 1"
                  :text="''"
                  :icon="'close'"
                  size="icon"
                  variant="danger"
                  :onClick="() => removeCompany(i)"
                />
              </template>
            </FormBaseLayout>
          </div>
        </div>

        <span class="self-end">
          <UiButton
            v-if="companyFields.length < 3"
            suffix-icon
            text="Agregar"
            :icon="'plus'"
            size="sm"
            :onClick="handleAddCompany"
          />
        </span>
      </div>
    </div>

    <div class="form-section">
      <FormTitle text="Referencia bancaria" />

      <FormBaseLayout>
        <FormBaseSelect
          name="bankReference.institution"
          label="Institución"
          :options="bankingInstituteOptions"
          v-model="bankInstitution"
          :error-message="errors['bankReference.institution']"
          required
          class="md:col-span-2"
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
          label="Cifras promedio mensuales"
          subLabelType="BS"
          v-model="bankAverageAmount"
          :error-message="errors['bankReference.averageAmount']"
          required
        />
      </FormBaseLayout>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

import {
  economicActivityOptions,
  countriesOptions,
} from "~/assets/data/formSources";

const wizard = usePlanillaWizard();

const rifTypeOptions = [
  { value: "J", label: "J" },
  { value: "G", label: "G" },
];

const schema = yup.object({
  rifType: yup.string().required("Requerido"),
  rifNumber: yup
    .string()
    .required("Requerido")
    .matches(/^[0-9]+$/, "Solo números"),
  socialReason: yup.string().required("Requerido"),
  tradename: yup.string().required("Requerido"),

  economicActivity: yup.string().required("Requerido"),
  specificActivity: yup.string().required("Requerido"),

  officesNumber: yup.string().required("Requerido"),
  countryLargestPresence: yup.string().required("Requerido"),
  employeesNumber: yup.string().required("Requerido"),

  registerRecordName: yup.string().required("Requerido"),
  registerNumber: yup.string().required("Requerido"),
  registerTook: yup.string().required("Requerido"),
  registerDate: yup.string().required("Requerido"),
  registerCapital: yup.string().required("Requerido"),

  lastModRecordName: yup.string().required("Requerido"),
  lastModNumber: yup.string().required("Requerido"),
  lastModTook: yup.string().required("Requerido"),
  lastModDate: yup.string().required("Requerido"),
  lastModCapital: yup.string().required("Requerido"),

  publicEntitiesDate: yup.string().required("Requerido"),
  ontCode: yup.string().required("Requerido"),

  publicPhones: yup
    .string()
    .required("Requerido")
    .matches(/^[0-9]+$/, "Solo números"),
  publicPhones2: yup
    .string()
    .matches(/^[0-9]*$/, "Solo números")
    .optional(),
  publicEntityEmail: yup.string().required("Requerido").email("Inválido"),
  publicEntityEmail2: yup.string().email("Inválido").optional(),
  publicEntityAddress: yup.string().required("Requerido"),
});

const initialRif =
  wizard.state.value.formData.enterpriseIdentification
    ?.taxInformationRegistration || "";
const initialRifType = initialRif ? initialRif.charAt(0) : "J";
const initialRifNum = initialRif ? initialRif.slice(1) : "";

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    rifType: initialRifType,
    rifNumber: initialRifNum,
    socialReason:
      wizard.state.value.formData.enterpriseIdentification?.socialReason || "",
    tradename:
      wizard.state.value.formData.enterpriseIdentification?.tradename || "",

    economicActivity:
      wizard.state.value.formData.enterpriseIdentification?.economicActivity ||
      "",
    specificActivity:
      wizard.state.value.formData.enterpriseIdentification?.specificActivity ||
      "",

    officesNumber:
      wizard.state.value.formData.enterpriseIdentification?.officesNumber || "",
    countryLargestPresence:
      wizard.state.value.formData.enterpriseIdentification
        ?.countryLargestPresence || "VENEZUELA",
    employeesNumber:
      wizard.state.value.formData.enterpriseIdentification?.employeesNumber ||
      "",

    registerRecordName:
      wizard.state.value.formData.enterpriseIdentification?.registerData
        ?.recordName || "",
    registerNumber:
      wizard.state.value.formData.enterpriseIdentification?.registerData
        ?.number || "",
    registerTook:
      wizard.state.value.formData.enterpriseIdentification?.registerData
        ?.took || "",
    registerFol:
      wizard.state.value.formData.enterpriseIdentification?.registerData?.fol ||
      "",
    registerDate:
      wizard.state.value.formData.enterpriseIdentification?.registerData
        ?.date || "",
    registerCapital:
      wizard.state.value.formData.enterpriseIdentification?.registerData
        ?.socialCapital || "",

    lastModRecordName:
      wizard.state.value.formData.enterpriseIdentification?.lastModification
        ?.recordName || "",
    lastModNumber:
      wizard.state.value.formData.enterpriseIdentification?.lastModification
        ?.number || "",
    lastModTook:
      wizard.state.value.formData.enterpriseIdentification?.lastModification
        ?.took || "",
    lastModFol:
      wizard.state.value.formData.enterpriseIdentification?.lastModification
        ?.fol || "",
    lastModDate:
      wizard.state.value.formData.enterpriseIdentification?.lastModification
        ?.date || "",
    lastModCapital:
      wizard.state.value.formData.enterpriseIdentification?.lastModification
        ?.socialCapital || "",

    officialGazetteNumber:
      wizard.state.value.formData.enterpriseIdentification
        ?.officialGazetteNumber || "",
    publicEntitiesDate:
      wizard.state.value.formData.enterpriseIdentification
        ?.publicEntitiesDate || "",
    authority:
      wizard.state.value.formData.enterpriseIdentification?.authority || "",
    ontCode:
      wizard.state.value.formData.enterpriseIdentification?.ontCode || "",

    publicPhones:
      wizard.state.value.formData.enterpriseIdentification?.publicPhones || "",
    website:
      wizard.state.value.formData.enterpriseIdentification?.website || "",
    publicEntityEmail:
      wizard.state.value.formData.enterpriseIdentification?.publicEntityEmail ||
      "",
    publicEntityAddress:
      wizard.state.value.formData.enterpriseIdentification
        ?.publicEntityAddress || "",

    publicPhones2:
      wizard.state.value.formData.enterpriseIdentification?.publicPhones2 || "",
    website2:
      wizard.state.value.formData.enterpriseIdentification?.website2 || "",
    publicEntityEmail2:
      wizard.state.value.formData.enterpriseIdentification
        ?.publicEntityEmail2 || "",
  },
});

const [rifType] = defineField("rifType");
const [rifNumber] = defineField("rifNumber");
const [socialReason] = defineField("socialReason");
const [tradename] = defineField("tradename");
const [economicActivity] = defineField("economicActivity");
const [specificActivity] = defineField("specificActivity");

const [officesNumber] = defineField("officesNumber");
const [countryLargestPresence] = defineField("countryLargestPresence");
const [employeesNumber] = defineField("employeesNumber");

const [registerRecordName] = defineField("registerRecordName");
const [registerNumber] = defineField("registerNumber");
const [registerTook] = defineField("registerTook");
const [registerFol] = defineField("registerFol");
const [registerDate] = defineField("registerDate");
const [registerCapital] = defineField("registerCapital");

const [lastModRecordName] = defineField("lastModRecordName");
const [lastModNumber] = defineField("lastModNumber");
const [lastModTook] = defineField("lastModTook");
const [lastModFol] = defineField("lastModFol");
const [lastModDate] = defineField("lastModDate");
const [lastModCapital] = defineField("lastModCapital");

const [officialGazetteNumber] = defineField("officialGazetteNumber");
const [publicEntitiesDate] = defineField("publicEntitiesDate");
const [authority] = defineField("authority");
const [ontCode] = defineField("ontCode");

const [publicPhones] = defineField("publicPhones");
const [website] = defineField("website");
const [publicEntityEmail] = defineField("publicEntityEmail");
const [publicEntityAddress] = defineField("publicEntityAddress");
const [publicPhones2] = defineField("publicPhones2");
const [website2] = defineField("website2");
const [publicEntityEmail2] = defineField("publicEntityEmail2");

const validate = handleSubmit((values) => {
  const payload = {
    taxType: values.rifType,
    taxInformationRegistration: values.rifNumber,
    socialReason: values.socialReason,
    tradename: values.tradename,
    economicActivity: values.economicActivity,
    specificActivity: values.specificActivity,

    officesNumber: values.officesNumber,
    countryLargestPresence: values.countryLargestPresence,
    employeesNumber: values.employeesNumber,

    registerData: {
      recordName: values.registerRecordName,
      number: values.registerNumber,
      took: values.registerTook,
      fol: values.registerFol,
      date: values.registerDate,
      socialCapital: values.registerCapital,
    },

    lastModification: {
      recordName: values.lastModRecordName,
      number: values.lastModNumber,
      took: values.lastModTook,
      fol: values.lastModFol,
      date: values.lastModDate,
      socialCapital: values.lastModCapital,
    },

    officialGazetteNumber: values.officialGazetteNumber,
    publicEntitiesDate: values.publicEntitiesDate,
    authority: values.authority,
    ontCode: values.ontCode,

    publicPhones: values.publicPhones,
    website: values.website,
    publicEntityEmail: values.publicEntityEmail,
    publicEntityAddress: values.publicEntityAddress,

    publicPhones2: values.publicPhones2,
    website2: values.website2,
    publicEntityEmail2: values.publicEntityEmail2,
  };

  wizard.updateFormData({ enterpriseIdentification: payload });

  wizard.nextStep();
});

defineExpose({ validate });
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent>
    <div>
      <FormTitle text="Datos de identificación de la empresa" />

      <FormBaseLayout>
        <div class="w-full">
          <FormBaseLabel
            htmlFor="rifNumber"
            label="Registro de información fiscal"
            required
          />

          <div class="flex gap-1">
            <div class="w-16 shrink-0">
              <FormBaseSelect
                name="rifType"
                v-model="rifType"
                :options="rifTypeOptions"
                :error-message="errors.rifType ? ' ' : ''"
              />
            </div>

            <div class="w-full">
              <FormBaseInput
                name="rifNumber"
                v-model="rifNumber"
                type="tel"
                :error-message="errors.rifNumber"
              />
            </div>
          </div>
        </div>

        <FormBaseInput
          name="socialReason"
          label="Razón social"
          v-model="socialReason"
          :error-message="errors.socialReason"
          required
        />

        <FormBaseInput
          name="tradename"
          label="Nombre comercial"
          v-model="tradename"
          :error-message="errors.tradename"
          required
        />
      </FormBaseLayout>

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

      <FormBaseLayout>
        <FormBaseInput
          name="officesNumber"
          label="N° de subsidiarias / Oficinas"
          v-model="officesNumber"
          type="number"
          :error-message="errors.officesNumber"
        />

        <FormBaseSelect
          name="countryLargestPresence"
          label="País con mayor presencia"
          v-model="countryLargestPresence"
          :options="countriesOptions"
          :error-message="errors.countryLargestPresence"
          required
        />

        <FormBaseInput
          name="monthlySales"
          label="N° de empleados"
          v-model="employeesNumber"
          type="number"
          :error-message="errors.employeesNumber"
        />
      </FormBaseLayout>
    </div>

    <div>
      <FormTitle text="Datos del registro" />

      <FormBaseLayout :style="'xl:grid-cols-4'">
        <FormBaseInput
          name="registerRecordName"
          label="Nombre del registro"
          v-model="registerRecordName"
          :error-message="errors.registerRecordName"
          required
        />
        <FormBaseInput
          name="registerNumber"
          label="Número"
          v-model="registerNumber"
          :error-message="errors.registerNumber"
          required
        />
        <FormBaseInput
          name="registerTook"
          label="Tomo"
          v-model="registerTook"
          :error-message="errors.registerTook"
          required
        />
        <FormBaseInput
          name="registerFol"
          label="Folio (Si aplica)"
          v-model="registerFol"
        />
        <FormBaseInput
          name="registerDate"
          label="Fecha"
          type="date"
          v-model="registerDate"
          :error-message="errors.registerDate"
          required
        />
        <FormBaseInput
          name="registerCapital"
          label="Capital social"
          v-model="registerCapital"
          :error-message="errors.registerCapital"
          required
          placeholder="Bs. 0,00"
        />
      </FormBaseLayout>
    </div>

    <div>
      <FormTitle text="Última modificación" />

      <FormBaseLayout :style="'xl:grid-cols-4'">
        <FormBaseInput
          name="lastModRecordName"
          label="Nombre del registro"
          v-model="lastModRecordName"
          :error-message="errors.lastModRecordName"
          required
        />
        <FormBaseInput
          name="lastModNumber"
          label="Número"
          v-model="lastModNumber"
          :error-message="errors.lastModNumber"
          required
        />
        <FormBaseInput
          name="lastModTook"
          label="Tomo"
          v-model="lastModTook"
          :error-message="errors.lastModTook"
          required
        />
        <FormBaseInput
          name="lastModFol"
          label="Folio (Si aplica)"
          v-model="lastModFol"
          placeholder="No aplica"
        />
        <FormBaseInput
          name="lastModDate"
          label="Fecha"
          type="date"
          v-model="lastModDate"
          :error-message="errors.lastModDate"
          required
        />
        <FormBaseInput
          name="lastModCapital"
          label="Capital social"
          v-model="lastModCapital"
          :error-message="errors.lastModCapital"
          required
          placeholder="Bs. 0,00"
        />
      </FormBaseLayout>
    </div>

    <div>
      <FormTitle text="Entes públicos" />

      <FormBaseLayout>
        <FormBaseInput
          name="officialGazetteNumber"
          label="Número de gaceta oficial"
          v-model="officialGazetteNumber"
          placeholder="No aplica"
        />

        <FormBaseInput
          name="publicEntitiesDate"
          label="Fecha"
          type="date"
          v-model="publicEntitiesDate"
          :error-message="errors.publicEntitiesDate"
          required
        />

        <FormBaseInput
          name="authority"
          label="Autoridad / Ente de adscripción"
          v-model="authority"
          placeholder="No aplica"
        />

        <FormBaseInput
          name="ontCode"
          label="Código ONT"
          v-model="ontCode"
          :error-message="errors.ontCode"
          required
        />
      </FormBaseLayout>
    </div>

    <div>
      <FormTitle text="Información de contacto principal" />

      <FormBaseLayout>
        <FormBaseInput
          name="publicPhones"
          label="Teléfono"
          type="tel"
          v-model="publicPhones"
          :error-message="errors.publicPhones"
          required
        />

        <FormBaseInput
          name="website"
          label="Sitio web"
          v-model="website"
          placeholder="No aplica"
        />

        <FormBaseInput
          name="publicEntityEmail"
          label="Correo electrónico"
          type="email"
          v-model="publicEntityEmail"
          :error-message="errors.publicEntityEmail"
          required
        />

        <FormBaseInput
          name="publicEntityAddress"
          label="Dirección"
          v-model="publicEntityAddress"
          :error-message="errors.publicEntityAddress"
          class="col-span-full"
          required
        />
      </FormBaseLayout>

      <h6 class="text-sm font-bold text-maximiza-gris4 mb-4">
        Información de contacto alternativa (Opcional)
      </h6>
      <FormBaseLayout>
        <FormBaseInput
          name="publicPhones2"
          label="Teléfono"
          type="tel"
          v-model="publicPhones2"
        />
        <FormBaseInput
          name="website2"
          label="Sitio web"
          v-model="website2"
          placeholder="No aplica"
        />
        <FormBaseInput
          name="publicEntityEmail2"
          label="Correo electrónico"
          type="email"
          v-model="publicEntityEmail2"
          :error-message="errors.publicEntityEmail2"
        />
      </FormBaseLayout>
    </div>
  </form>
</template>

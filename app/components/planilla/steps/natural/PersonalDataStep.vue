<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

import {
  maritalStatusOptions,
  genderOptions,
  nationalityOptions,
  countriesOptions,
  docTypeOptions,
  occupationsOptions,
  booleanOptions,
} from "~/assets/data/formSources";
import { minAgeDate } from "~/lib/utils";

const wizard = usePlanillaWizard();

const schema = yup.object({
  identificationType: yup.string().required(),
  identificationNumber: yup
    .string()
    .required("ID requerido")
    .matches(/^[0-9]{5,9}$/, "Debe tener entre 5 y 9 dígitos"),

  firstName: yup.string().required("Los nombres son requeridos"),
  lastName: yup.string().required("Los apellidos son requeridos"),
  birthPlace: yup.string().required("Lugar de nacimiento requerido"),
  birthDate: yup
    .string()
    .required("Fecha de nacimiento requerida")
    .test("is-adult", "Debes ser mayor de 18 años", (value) => {
      if (!value) return false;
      return new Date(value) <= new Date(minAgeDate(18));
    }),

  nationality: yup.string().required("Nacionalidad requerida"),
  otherNationality: yup.string(),
  gender: yup.string().required("Género requerido"),
  maritalStatus: yup.string().required("Estado civil requerido"),
  profession: yup.string().required("Profesión u oficio requerido"),

  incomeSource: yup.string().required("Requerido"),

  spouseName: yup.string(),
  spouseIdentification: yup.string(),

  address: yup.string().required("Dirección requerida"),
  phones: yup
    .string()
    .required("Teléfono requerido")
    .matches(/^[0-9]+$/, "Solo números"),
  email: yup.string().required("Correo requerido").email("Correo inválido"),

  hasLegalRepresentative: yup.string().required("Seleccione una opción"),

  legalRepresentativeFullname: yup.string().when("hasLegalRepresentative", {
    is: "SI",
    then: (schema) => schema.required("Nombre requerido"),
    otherwise: (schema) => schema.notRequired(),
  }),

  legalRepresentativeIdentificationType: yup.string(),

  legalRepresentativeIdentificationNumber: yup
    .string()
    .when("hasLegalRepresentative", {
      is: "SI",
      then: (schema) =>
        schema.required("ID requerido").matches(/^[0-9]*$/, "Solo números"),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),

  legalRepresentativeBirthPlace: yup.string().when("hasLegalRepresentative", {
    is: "SI",
    then: (schema) => schema.required("Lugar requerido"),
    otherwise: (schema) => schema.notRequired(),
  }),

  legalRepresentativeBirthDate: yup.string().when("hasLegalRepresentative", {
    is: "SI",
    then: (schema) => schema.required("Fecha requerida"),
    otherwise: (schema) => schema.notRequired(),
  }),

  legalRepresentativePhones: yup.string().when("hasLegalRepresentative", {
    is: "SI",
    then: (schema) => schema.required("Requerido"),
    otherwise: (schema) => schema.notRequired(),
  }),
  legalRepresentativeDocumentData: yup.string(),
});

const initialId =
  wizard.state.value.formData.personalData?.identification || "";
const initialType = initialId ? initialId.charAt(0) : "V";
const initialNumber = initialId ? initialId.slice(1) : "";

const initialLegRepId =
  wizard.state.value.formData.personalData?.legalRepresentativeIdentification ||
  "";
const initialLegRepType = initialLegRepId ? initialLegRepId.charAt(0) : "V";
const initialLegRepNumber = initialLegRepId ? initialLegRepId.slice(1) : "";

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    identificationType: initialType,
    identificationNumber: initialNumber,

    firstName: wizard.state.value.formData.personalData?.firstName || "",
    lastName: wizard.state.value.formData.personalData?.lastName || "",
    birthPlace:
      wizard.state.value.formData.personalData?.birthPlace || "VENEZUELA",
    birthDate:
      wizard.state.value.formData.personalData?.birthDate || minAgeDate(18),
    nationality:
      wizard.state.value.formData.personalData?.nationality || "VENEZOLANO",
    otherNationality:
      wizard.state.value.formData.personalData?.otherNationality || "",
    gender: wizard.state.value.formData.personalData?.gender || "",
    maritalStatus:
      wizard.state.value.formData.personalData?.maritalStatus || "",
    profession: wizard.state.value.formData.personalData?.profession || "",
    incomeSource: wizard.state.value.formData.personalData?.incomeSource || "",
    spouseName: wizard.state.value.formData.personalData?.spouseName || "N/A",
    spouseIdentification:
      wizard.state.value.formData.personalData?.spouseIdentification || "N/A",
    address: wizard.state.value.formData.personalData?.address || "",
    phones: wizard.state.value.formData.personalData?.phones || "",
    email: wizard.state.value.formData.personalData?.email || "",

    hasLegalRepresentative:
      wizard.state.value.formData.personalData?.hasLegalRepresentative || "NO",

    legalRepresentativeFullname:
      wizard.state.value.formData.personalData?.legalRepresentativeFullname ||
      "",
    legalRepresentativeIdentificationType: initialLegRepType,
    legalRepresentativeIdentificationNumber: initialLegRepNumber,
    legalRepresentativeBirthPlace:
      wizard.state.value.formData.personalData?.legalRepresentativeBirthPlace ||
      "VENEZUELA",
    legalRepresentativeBirthDate:
      wizard.state.value.formData.personalData?.legalRepresentativeBirthDate ||
      "",

    legalRepresentativePhones:
      wizard.state.value.formData.personalData?.legalRepresentativePhones || "",
    legalRepresentativeDocumentData:
      wizard.state.value.formData.personalData
        ?.legalRepresentativeDocumentData || "N/A",
  },
});

const [identificationType] = defineField("identificationType");
const [identificationNumber] = defineField("identificationNumber");

const [firstName] = defineField("firstName");
const [lastName] = defineField("lastName");
const [birthPlace] = defineField("birthPlace");
const [birthDate] = defineField("birthDate");
const [nationality] = defineField("nationality");
const [otherNationality] = defineField("otherNationality");
const [gender] = defineField("gender");
const [maritalStatus] = defineField("maritalStatus");
const [profession] = defineField("profession");
const [incomeSource] = defineField("incomeSource");

const [spouseName] = defineField("spouseName");
const [spouseIdentification] = defineField("spouseIdentification");
const [address] = defineField("address");
const [phones] = defineField("phones");
const [email] = defineField("email");

const [hasLegalRepresentative] = defineField("hasLegalRepresentative");
const [legalRepresentativeFullname] = defineField(
  "legalRepresentativeFullname",
);
const [legalRepresentativeIdentificationType] = defineField(
  "legalRepresentativeIdentificationType",
);
const [legalRepresentativeIdentificationNumber] = defineField(
  "legalRepresentativeIdentificationNumber",
);
const [legalRepresentativeBirthPlace] = defineField(
  "legalRepresentativeBirthPlace",
);
const [legalRepresentativeBirthDate] = defineField(
  "legalRepresentativeBirthDate",
);
const [legalRepresentativePhones] = defineField("legalRepresentativePhones");
const [legalRepresentativeDocumentData] = defineField(
  "legalRepresentativeDocumentData",
);

const validate = handleSubmit((values) => {
  const fullIdentification = `${values.identificationType}${values.identificationNumber}`;

  if (!/^[V|E|J|P][0-9]{5,9}$/.test(fullIdentification)) {
    return;
  }

  let legRepId = "";
  let finalValues = { ...values };

  if (values.hasLegalRepresentative === "SI") {
    legRepId = `${values.legalRepresentativeIdentificationType}${values.legalRepresentativeIdentificationNumber}`;
  } else {
    finalValues.legalRepresentativeFullname = "";
    finalValues.legalRepresentativeBirthPlace = "";
    finalValues.legalRepresentativeBirthDate = "";
    finalValues.legalRepresentativePhones = "";
    finalValues.legalRepresentativeDocumentData = "";
    legRepId = "";
  }

  const payload = {
    ...finalValues,
    identification: fullIdentification,
    legalRepresentativeIdentification: legRepId,
  };

  delete payload.identificationType;
  delete payload.identificationNumber;
  delete payload.legalRepresentativeIdentificationType;
  delete payload.legalRepresentativeIdentificationNumber;

  wizard.updateFormData({ personalData: payload });

  wizard.nextStep();
});

defineExpose({
  validate,
});
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent>
    <div>
      <FormTitle text="Datos personales del inversionista" />

      <FormBaseLayout>
        <FormBaseInput
          name="firstName"
          label="Nombres"
          v-model="firstName"
          :error-message="errors.firstName"
          required
        />
        <FormBaseInput
          name="lastName"
          label="Apellidos"
          v-model="lastName"
          :error-message="errors.lastName"
          required
        />

        <div class="w-full">
          <FormBaseLabel
            htmlFor="identificationNumber"
            label="Documento de identidad"
            required
          />

          <div class="flex gap-1">
            <div class="w-16 shrink-0">
              <FormBaseSelect
                name="identificationType"
                v-model="identificationType"
                :options="docTypeOptions"
                :error-message="errors.identificationType ? ' ' : ''"
              />
            </div>

            <div class="w-full">
              <FormBaseInput
                name="identificationNumber"
                v-model="identificationNumber"
                placeholder="12345678"
                type="tel"
                :error-message="errors.identificationNumber"
              />
            </div>
          </div>
        </div>
      </FormBaseLayout>

      <FormBaseLayout :style="'xl:grid-cols-4'">
        <FormBaseInput
          name="birthDate"
          label="Fecha de Nacimiento"
          type="date"
          v-model="birthDate"
          :max="minAgeDate(18)"
          :error-message="errors.birthDate"
          required
        />

        <FormBaseSelect
          name="nationality"
          label="Nacionalidad"
          v-model="nationality"
          :options="nationalityOptions"
          :error-message="errors.nationality"
          required
        />

        <FormBaseSelect
          name="birthPlace"
          label="Lugar de nacimiento"
          v-model="birthPlace"
          :error-message="errors.birthPlace"
          :options="countriesOptions"
          required
        />

        <FormBaseInput
          name="otherNationality"
          label="Otra nacionalidad (Si aplica)"
          v-model="otherNationality"
        />
      </FormBaseLayout>

      <FormBaseLayout :style="'xl:grid-cols-4'">
        <FormBaseSelect
          name="maritalStatus"
          label="Estado civil"
          v-model="maritalStatus"
          :options="maritalStatusOptions"
          :error-message="errors.maritalStatus"
          required
        />

        <FormBaseSelect
          name="gender"
          label="Género"
          v-model="gender"
          :options="genderOptions"
          :error-message="errors.gender"
          required
        />
      </FormBaseLayout>

      <FormTitle text="Información de contacto" :style="'mt-12'" />

      <FormBaseLayout :style="'xl:grid-cols-4'">
        <FormBaseInput
          name="address"
          label="Dirección de domicilio"
          v-model="address"
          placeholder="Dirección completa"
          :error-message="errors.address"
          required
          class="col-span-2"
        />

        <FormBaseInput
          name="phones"
          label="Teléfono"
          type="tel"
          v-model="phones"
          :error-message="errors.phones"
          required
        />

        <FormBaseInput
          name="email"
          label="Correo electrónico"
          type="email"
          v-model="email"
          :error-message="errors.email"
          required
        />
      </FormBaseLayout>

      <FormTitle text="Datos de ingresos" :style="'mt-12'" />

      <FormBaseLayout>
        <FormBaseSelect
          name="profession"
          label="Profesión u oficio"
          v-model="profession"
          :options="occupationsOptions"
          :error-message="errors.profession"
          required
        />

        <FormBaseInput
          name="incomeSource"
          label="Fuente de ingreso"
          v-model="incomeSource"
          :error-message="errors.incomeSource"
          required
        />
      </FormBaseLayout>

      <FormTitle
        text="Datos personales del cónyuge (Si aplica)"
        :style="'mt-12'"
      />

      <FormBaseLayout>
        <FormBaseInput
          name="spouseName"
          label="Nombre completo del cónyuge"
          v-model="spouseName"
        />
        <FormBaseInput
          name="spouseIdentification"
          label="Documento identidad cónyuge"
          v-model="spouseIdentification"
        />
      </FormBaseLayout>
    </div>

    <div>
      <FormTitle text="Representante legal" :style="'mt-12'" />

      <FormBaseLayout>
        <FormBaseRadio
          name="hasLegalRepresentative"
          label="¿Posee representante legal, apoderado y/o autorizado?"
          v-model="hasLegalRepresentative"
          :options="booleanOptions"
          :error-message="errors.hasLegalRepresentative"
        />
      </FormBaseLayout>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="hasLegalRepresentative === 'SI'">
          <FormBaseLayout>
            <FormBaseInput
              name="legalRepresentativeFullname"
              label="Nombre completo del representante"
              v-model="legalRepresentativeFullname"
              :error-message="errors.legalRepresentativeFullname"
              required
            />

            <div class="w-full">
              <FormBaseLabel
                htmlFor="legalRepresentativeIdentificationNumber"
                label="Documento de identidad / RIF"
                required
              />

              <div class="flex gap-1">
                <div class="w-16 shrink-0">
                  <FormBaseSelect
                    name="legalRepresentativeIdentificationType"
                    v-model="legalRepresentativeIdentificationType"
                    :options="docTypeOptions"
                    :error-message="
                      errors.legalRepresentativeIdentificationType ? ' ' : ''
                    "
                  />
                </div>

                <div class="w-full">
                  <FormBaseInput
                    name="legalRepresentativeIdentificationNumber"
                    v-model="legalRepresentativeIdentificationNumber"
                    placeholder="12345678"
                    type="tel"
                    :error-message="
                      errors.legalRepresentativeIdentificationNumber
                    "
                    :comment="'RIF_REQUIRED'"
                  />
                </div>
              </div>
            </div>

            <FormBaseSelect
              name="legalRepresentativeBirthPlace"
              label="Lugar de nacimiento"
              v-model="legalRepresentativeBirthPlace"
              :options="countriesOptions"
              :error-message="errors.legalRepresentativeBirthPlace"
              required
            />

            <FormBaseInput
              name="legalRepresentativeBirthDate"
              label="Fecha de nacimiento"
              type="date"
              v-model="legalRepresentativeBirthDate"
              :max="minAgeDate(18)"
              :error-message="errors.legalRepresentativeBirthDate"
              required
            />

            <FormBaseInput
              name="legalRepresentativePhones"
              label="Teléfono"
              type="tel"
              v-model="legalRepresentativePhones"
              :error-message="errors.legalRepresentativePhones"
              required
            />

            <FormBaseInput
              name="legalRepresentativeDocumentData"
              label="Datos del documento"
              v-model="legalRepresentativeDocumentData"
              :error-message="errors.legalRepresentativeDocumentData"
              required
            />
          </FormBaseLayout>
        </div>
      </transition>
    </div>
  </form>
</template>

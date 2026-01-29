<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

const wizard = usePlanillaWizard();

const schema = yup.object({
  place: yup.string().required("El campo es requerido"),
  productionDate: yup.string().required("El campo es requerido"),
  inverstorNumber: yup.string(),
  taxInformationRegistration: yup
    .string()
    .required("El campo es requerido")
    .matches(/^[0-9]+$/, "Solo se aceptan números"),
  address: yup.string().required("El campo es requerido"),
});

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    place: wizard.state.value.formData.institutionData?.place || "",
    productionDate:
      wizard.state.value.formData.institutionData?.productionDate || "",
    inverstorNumber:
      wizard.state.value.formData.institutionData?.inverstorNumber || "",

    brokerageHouseName: "Maximiza Casa de Bolsa, C.A.",
    taxInformationRegistration:
      wizard.state.value.formData.institutionData?.taxInformationRegistration ||
      "",
    address: wizard.state.value.formData.institutionData?.address || "",
  },
});

const [place] = defineField("place");
const [productionDate] = defineField("productionDate");
const [inverstorNumber] = defineField("inverstorNumber");
const [brokerageHouseName] = defineField("brokerageHouseName");
const [taxInformationRegistration] = defineField("taxInformationRegistration");
const [address] = defineField("address");

const validate = handleSubmit((values) => {
  wizard.updateFormData({
    institutionData: {
      ...values,
    },
  });

  wizard.nextStep();
});

defineExpose({
  validate,
});
</script>

<template>
  <form class="flex flex-col" @submit.prevent>
    <div>
      <FormBaseLayout>
        <FormBaseInput
          name="place"
          label="Lugar"
          v-model="place"
          placeholder="Lugar"
          :error-message="errors.place"
          required
        />

        <FormBaseInput
          name="productionDate"
          label="Fechas de elaboración"
          type="date"
          v-model="productionDate"
          :error-message="errors.productionDate"
          required
        />

        <FormBaseInput
          name="inverstorNumber"
          label="N° o código del inversionista"
          v-model="inverstorNumber"
          placeholder="N° o código del inversionista"
          :error-message="errors.inverstorNumber"
        />
      </FormBaseLayout>
    </div>

    <div>
      <FormTitle
        text="Datos de la institución del sector valores"
        class="mb-6"
      />

      <FormBaseLayout>
        <FormBaseInput
          name="brokerageHouseName"
          label="Nombre de casa de bolsa o sociedades de corretaje de valores"
          v-model="brokerageHouseName"
          disabled
          class="bg-maximiza-gris5"
        />

        <FormBaseInput
          name="taxInformationRegistration"
          label="Registro información fiscal"
          v-model="taxInformationRegistration"
          placeholder="Solo números"
          :error-message="errors.taxInformationRegistration"
          required
        />
      </FormBaseLayout>

      <FormBaseLayout>
        <FormBaseInput
          name="address"
          label="Dirección"
          v-model="address"
          placeholder="Dirección completa"
          :error-message="errors.address"
          required
        />
      </FormBaseLayout>
    </div>
  </form>
</template>

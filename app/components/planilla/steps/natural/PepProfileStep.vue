<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

import { countriesOptions } from "~/assets/data/formSources";

const wizard = usePlanillaWizard();

const pepStatusOptions = [
  { value: "isPep", label: "Soy una Persona Expuesta Políticamente (PEP)" },
  { value: "hasRelationship", label: "Tengo parentesco con una PEP" },
  { value: "isAssociate", label: "Soy asociado cercano de una PEP" },
  { value: "none", label: "Ninguno de los anteriores" },
];

const schema = yup.object({
  pepStatus: yup.string().required("Seleccione una opción"),

  entityName: yup.string().when("pepStatus", {
    is: (val: string) => val !== "none",
    then: (s) => s.required("Nombre del ente requerido"),
    otherwise: (s) => s.optional(),
  }),
  position: yup.string().when("pepStatus", {
    is: (val: string) => val !== "none",
    then: (s) => s.required("Cargo requerido"),
    otherwise: (s) => s.optional(),
  }),
  country: yup.string().when("pepStatus", {
    is: (val: string) => val !== "none",
    then: (s) => s.required("País requerido"),
    otherwise: (s) => s.optional(),
  }),
  relatedIdentification: yup.string().optional(),
});

const { handleSubmit, errors, defineField, values } = useForm({
  validationSchema: schema,
  initialValues: {
    pepStatus: wizard.state.value.formData.pepProfile?.pepStatus || "none",

    entityName: wizard.state.value.formData.pepProfile?.entityName || "",
    position: wizard.state.value.formData.pepProfile?.position || "",
    country: wizard.state.value.formData.pepProfile?.country || "",
    relatedIdentification:
      wizard.state.value.formData.pepProfile?.relatedIdentification || "",
  },
});

const [pepStatus] = defineField("pepStatus");
const [entityName] = defineField("entityName");
const [position] = defineField("position");
const [country] = defineField("country");
const [relatedIdentification] = defineField("relatedIdentification");

const showDetails = computed(() => values.pepStatus !== "none");

const validate = handleSubmit((values) => {
  if (!showDetails.value) {
    values.entityName = "";
    values.position = "";
    values.country = "";
    values.relatedIdentification = "";
  }

  const payload = {
    ...values,

    isPep: values.pepStatus === "isPep" ? "SI" : "NO",
    hasPepRelationship: values.pepStatus === "hasRelationship" ? "SI" : "NO",
    isPepAssociate: values.pepStatus === "isAssociate" ? "SI" : "NO",
  };

  wizard.updateFormData({ pepProfile: payload });
  wizard.nextStep();
});

defineExpose({
  validate,
});
</script>

<template>
  <form class="flex flex-col" @submit.prevent>
    <div>
      <FormTitle text="Persona expuesta políticamente (PEP)" />

      <p
        class="text-maximiza-gris3 text-sm mb-6 bg-gray-50 p-2 border-l-4 border-maximiza-verde1"
      >
        <strong>Definición PEP:</strong> Persona natural que desempeña o ha
        desempeñado funciones públicas destacadas en el país o en el extranjero.
      </p>

      <div>
        <FormBaseRadio
          name="pepStatus"
          v-model="pepStatus"
          :options="pepStatusOptions"
          :error-message="errors.pepStatus"
          class="flex flex-col gap-4"
        />
      </div>
    </div>

    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 max-h-0 overflow-hidden"
      enter-to-class="opacity-100 max-h-[1000px] overflow-hidden"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-[1000px] overflow-hidden"
      leave-to-class="opacity-0 max-h-0 overflow-hidden"
    >
      <div v-if="showDetails">
        <FormTitle text="Detalles de la vinculación" :style="'mt-12'" />

        <FormBaseLayout :style="'xl:grid-cols-2'">
          <FormBaseInput
            name="entityName"
            label="Nombre del ente de adscripción"
            v-model="entityName"
            :error-message="errors.entityName"
            required
          />
          <FormBaseInput
            name="position"
            label="Cargo que desempeña"
            v-model="position"
            :error-message="errors.position"
            required
          />
        </FormBaseLayout>

        <FormBaseLayout :style="'xl:grid-cols-2'">
          <FormBaseSelect
            name="country"
            label="País"
            v-model="country"
            :options="countriesOptions"
            :error-message="errors.country"
            required
          />
          <FormBaseInput
            name="relatedIdentification"
            label="Identificación del relacionado (Si aplica)"
            v-model="relatedIdentification"
            placeholder="Documento ID"
          />
        </FormBaseLayout>
      </div>
    </transition>
  </form>
</template>

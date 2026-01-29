<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import {
  annualInvestmentOptions,
  knowledgeOptions,
  experienceOptions,
  investmentLevelOptions,
} from "~/assets/data/formSources";
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

const wizard = usePlanillaWizard();

const investmentOptions = [...annualInvestmentOptions];

const schema = yup.object({
  knowledge: yup.string().required("Seleccione una opción"),
  experience: yup.string().required("Seleccione una opción"),
  inversionLevel: yup.string().required("Seleccione una opción"),
  annualInversion: yup.string().required("Requerido"),
  totalLiquidAssets: yup.string().required("Seleccione una opción"),
  totalAssets: yup.string().required("Seleccione una opción"),
});

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: schema,
  initialValues: {
    knowledge: wizard.state.value.formData.investorProfile?.knowledge || "",
    experience: wizard.state.value.formData.investorProfile?.experience || "",
    inversionLevel:
      wizard.state.value.formData.investorProfile?.inversionLevel || "",
    annualInversion:
      wizard.state.value.formData.investorProfile?.annualInversion || "",
    totalLiquidAssets:
      wizard.state.value.formData.investorProfile?.totalLiquidAssets || "",
    totalAssets: wizard.state.value.formData.investorProfile?.totalAssets || "",
  },
});

const [knowledge] = defineField("knowledge");
const [experience] = defineField("experience");
const [inversionLevel] = defineField("inversionLevel");
const [annualInversion] = defineField("annualInversion");
const [totalLiquidAssets] = defineField("totalLiquidAssets");
const [totalAssets] = defineField("totalAssets");

const validate = handleSubmit((values) => {
  wizard.updateFormData({ investorProfile: values });
  wizard.nextStep();
});

defineExpose({
  validate,
});
</script>

<template>
  <form class="flex flex-col" @submit.prevent>
    <div>
      <FormTitle text="Perfil del inversionista" class="mb-4" />
      <p class="text-maximiza-gris2 text-sm leading-relaxed mb-6">
        El propósito del siguiente cuestionario es informar a
        <b>MAXIMIZA CASA DE BOLSA</b> los objetivos de inversión del cliente, y
        debe ser completado en el espacio indicado. En ningún caso la Casa de
        bolsa se hace responsable de las ganancias o pérdidas producto de las
        operaciones realizadas bajo dicho perfil.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
      >
        <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
          Conocimiento como inversionista
        </h5>

        <FormBaseRadio
          name="knowledge"
          v-model="knowledge"
          :options="knowledgeOptions"
          :error-message="errors.knowledge"
          :style="'xl:grid-cols-4'"
        />
      </div>

      <div
        class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
      >
        <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
          Experiencia como inversionista
        </h5>

        <FormBaseRadio
          name="experience"
          v-model="experience"
          :options="experienceOptions"
          :error-message="errors.experience"
        />
      </div>

      <div
        class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
      >
        <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
          Nivel de inversiones en operaciones bursátiles
        </h5>
        <FormBaseRadio
          name="inversionLevel"
          v-model="inversionLevel"
          :options="investmentLevelOptions"
          :error-message="errors.inversionLevel"
          :style="'xl:grid-cols-4'"
        />
      </div>

      <div
        class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
      >
        <h5 class="text-maximiza-verde1 font-black mb-4 text-lg">
          Inversiones anuales
        </h5>

        <FormBaseRadio
          name="annualInversion"
          v-model="annualInversion"
          :options="investmentOptions"
          :error-message="errors.annualInversion"
          :style="'lg:grid-cols-2 xl:grid-cols-2'"
        />
      </div>

      <div
        class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
      >
        <h5 class="text-maximiza-verde1 font-black mb-1 text-lg">
          Total de activos líquidos (en Bs)
        </h5>

        <FormBaseInput
          name="totalLiquidAssets"
          type="number"
          placeholder="Total de activos líquidos (Dinero e inversiones)"
          v-model="totalLiquidAssets"
          :error-message="errors.totalLiquidAssets"
          required
        />
      </div>

      <div
        class="p-4 border-l border-b border-maximiza-gris5/90 bg-maximiza-gris5/10"
      >
        <h5 class="text-maximiza-verde1 font-black mb-1 text-lg">
          Patrimonio total (en Bs)
        </h5>

        <FormBaseInput
          name="totalAssets"
          type="number"
          placeholder="Patrimonio total"
          v-model="totalAssets"
          :error-message="errors.totalAssets"
          required
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import FormStepper from "~/components/planilla/FormStepper.vue";

import { usePlanillaWizard } from "~/composables/usePlanillaWizard";

//? common steps
import AcceptContractStep from "~/components/planilla/steps/AcceptContractStep.vue";
import DatosInstitucionStep from "~/components/planilla/steps/DatosInstitucionStep.vue";
import FinancialInformationStep from "~/components/planilla/steps/FinancialInformationStep.vue";
import InvestorProfileStep from "~/components/planilla/steps/InvestorProfileStep.vue";
import ProductInformationStep from "~/components/planilla/steps/ProductInformationStep.vue";
import FinalStep from "~/components/planilla/steps/FinalStep.vue";

//? natural steps
import PersonalDataStep from "~/components/planilla/steps/natural/PersonalDataStep.vue";
import PepProfileStep from "~/components/planilla/steps/natural/PepProfileStep.vue";

//? juridica steps
import EnterpriseIdentificationStep from "~/components/planilla/steps/juridica/EnterpriseIdentificationStep.vue";

useSeoMeta({
  title: "Registro de persona natural o jurídica",
});

const route = useRoute();
const type: MXMZ.PlanillaType = route.params.type as MXMZ.PlanillaType;
const wizard = usePlanillaWizard();

if (!["natural", "juridica"].includes(type)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Tipo de planilla no válido",
  });
}

const stepsConfigNames = {
  juridica: [
    "Aceptación Contrato",
    "Identificación Empresa",
    "Info. Financiera",
    "Perfil Inversionista",
    "Info. Producto",
    "Descarga",
  ],
  natural: [
    "Aceptación Contrato",
    "Datos Personales",
    "Perfil PEP",
    "Info. Financiera",
    "Perfil Inversionista",
    "Info. Producto",
    "Descarga",
  ],
};

const stepsComponents = {
  juridica: [
    AcceptContractStep, //? common step
    EnterpriseIdentificationStep,
    FinancialInformationStep, //? common step
    InvestorProfileStep, //? common step
    ProductInformationStep, //? common step
    FinalStep, //? common step
  ],
  natural: [
    AcceptContractStep, //? common step
    PersonalDataStep,
    PepProfileStep,
    FinancialInformationStep, //? common step
    InvestorProfileStep, //? common step
    ProductInformationStep, //? common step
    FinalStep, //? common step
  ],
};

const currentStepsList = computed(() => stepsConfigNames[type]);

const activeComponent = computed(
  () => stepsComponents[type][wizard.state.value.currentStep],
);

const currentStepRef = ref<any>(null);

const handleNext = async () => {
  if (wizard.state.value.currentStep === wizard.state.value.totalSteps - 1) {
    return;
  }

  if (currentStepRef.value && currentStepRef.value.validate) {
    await currentStepRef.value.validate();
  } else {
    wizard.nextStep();
  }
};

onMounted(() => {
  wizard.initWizard(type, currentStepsList.value.length);
});

const heroImage = {
  url: "https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp",
  alternativeText: "Planilla",
};

const pageTitle = computed(() =>
  type === "juridica" ? "Persona jurídica" : "Persona natural",
);
</script>

<template>
  <div class="w-full bg-white pb-24">
    <CommonHero
      :text="`Complete el formulario para el registro de ${pageTitle}.`"
      :image="heroImage"
      :inverted="true"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1
          class="text-maximiza-verde1 font-black text-2xl md:text-3xl mb-4 text-left"
        >
          Registro: {{ pageTitle }}
        </h1>
      </template>
    </CommonHero>

    <section class="mt-12">
      <FormStepper
        :steps="currentStepsList"
        :current-step="wizard.state.value.currentStep"
        :max-step-reached="wizard.state.value.maxStepReached"
        @go-to-step="wizard.goToStep"
      />
    </section>

    <section class="mx-auto mt-16">
      <div
        class="bg-maximiza-blanco2 border border-maximiza-gris5 p-4 md:p-8 rounded-sm shadow-sm"
      >
        <div>
          <KeepAlive>
            <component :is="activeComponent" ref="currentStepRef" />
          </KeepAlive>
        </div>

        <div
          class="flex justify-between mt-12 pt-4 border-t border-maximiza-gris5"
        >
          <button
            @click="wizard.prevStep"
            class="button-secondary --medium"
            :disabled="wizard.state.value.currentStep === 0"
            :class="{
              'opacity-50 cursor-not-allowed':
                wizard.state.value.currentStep === 0,
            }"
          >
            Atrás
          </button>

          <button
            v-if="
              wizard.state.value.currentStep < wizard.state.value.totalSteps - 1
            "
            @click="handleNext"
            class="button-primary --medium"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

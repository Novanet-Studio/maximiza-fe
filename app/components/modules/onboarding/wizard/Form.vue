<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { motion, AnimatePresence } from 'motion-v';
import FormStepper from "./FormStepper.vue";

import { useOnboardingWizard } from "~/composables/useOnboardingWizard";

//? common steps
import AcceptContractStep from "./steps/AcceptContractStep.vue";
import FinancialInformationStep from "./steps/FinancialInformationStep.vue";
import ProductInformationStep from "./steps/ProductInformationStep.vue";
import FinalStep from "./steps/FinalStep.vue";

//? natural steps
import PersonalDataStep from "./steps/natural/PersonalDataStep.vue";
import PepProfileStep from "./steps/natural/PepProfileStep.vue";

//? juridica steps
import EnterpriseIdentificationStep from "./steps/juridica/EnterpriseIdentificationStep.vue";

const props = defineProps<{ type: MXMZ.OnboardingType }>();

const wizard = useOnboardingWizard();

const stepsConfigNames = {
  "persona-natural": [
    "Aceptación Contrato",
    "Datos Personales",
    "Perfil PEP",
    "Info. Financiera",
    "Info. Producto",
    "Descarga",
  ],
  "persona-juridica": [
    "Aceptación Contrato",
    "Identificación Empresa",
    "Info. Financiera",
    "Info. Producto",
    "Descarga",
  ],
};

const stepsComponents = {
  "persona-natural": [
    AcceptContractStep, //? common step
    PersonalDataStep,
    PepProfileStep,
    FinancialInformationStep, //? common step
    ProductInformationStep, //? common step
    FinalStep, //? common step
  ],
  "persona-juridica": [
    AcceptContractStep, //? common step
    EnterpriseIdentificationStep,
    FinancialInformationStep, //? common step
    ProductInformationStep, //? common step
    FinalStep, //? common step
  ],

};

const currentStepsList = computed(() => {
  // wait until props init
  if (!props.type || !stepsConfigNames[props.type]) return [];
  return stepsConfigNames[props.type];
});

const activeComponent = computed(() => {
  if (!props.type || !stepsComponents[props.type]) return null;
  return stepsComponents[props.type][wizard.state.value.currentStep];
});

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
  if (props.type) {
    wizard.initWizard(props.type, currentStepsList.value.length);
  }
});
</script>

<template>
  <div class="w-full bg-white p-4 md:p-8" v-if="props.type">
    <section>
      <FormStepper :steps="currentStepsList" :current-step="wizard.state.value.currentStep"
        :max-step-reached="wizard.state.value.maxStepReached" @go-to-step="wizard.goToStep" />
    </section>

    <section class="w-full">
      <div class="bg-white px-4">
        <div class="overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div :key="wizard.state.value.currentStep" :initial="{ opacity: 0, x: 20 }"
              :animate="{ opacity: 1, x: 0 }" :exit="{ opacity: 0, x: -20 }" :transition="{ duration: 0.3 }">
              <KeepAlive>
                <component :is="activeComponent" ref="currentStepRef" v-if="activeComponent" />
              </KeepAlive>
            </motion.div>
          </AnimatePresence>
        </div>

        <div class="flex justify-between mt-16 pt-8 border-t-[2px] border-white-alt2">
          <UiButton text="Atrás" suffix-icon :icon="'arrow-left'" size="md" variant="outline"
            :disabled="wizard.state.value.currentStep === 0" :onClick="wizard.prevStep" />

          <UiButton v-if="
            wizard.state.value.currentStep < wizard.state.value.totalSteps - 1
          " :text="'Siguiente'" :icon="'arrow-right'" size="md" :onClick="handleNext" />
        </div>
      </div>
    </section>
  </div>
</template>

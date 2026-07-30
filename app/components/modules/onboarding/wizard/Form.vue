<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import FormStepper from './FormStepper.vue'

import { useOnboardingWizard } from '~/composables/useOnboardingWizard'

//? common steps
import AcceptContractStep from './steps/AcceptContractStep.vue'
import FinancialInformationStep from './steps/FinancialInformationStep.vue'
import ProductInformationStep from './steps/ProductInformationStep.vue'
import FinalStep from './steps/FinalStep.vue'

//? natural steps
import PersonalDataStep from './steps/natural/PersonalDataStep.vue'
import PepProfileStep from './steps/natural/PepProfileStep.vue'

//? jurídica steps
import EnterpriseIdentificationStep from './steps/juridica/EnterpriseIdentificationStep.vue'

const props = defineProps<{ type: MXMZ.OnboardingType }>()

const wizard = useOnboardingWizard()
const trackingApiUrl = useRuntimeConfig().public.trackingApiUrl

const stepsConfigNames = {
  'persona-natural': [
    'Aceptación Contrato',
    'Datos Personales',
    'Perfil PEP',
    'Info. Financiera',
    'Info. Producto',
    'Descarga',
  ],
  'persona-juridica': [
    'Aceptación Contrato',
    'Identificación Empresa',
    'Info. Financiera',
    'Info. Producto',
    'Descarga',
  ],
}

const stepsComponents = {
  'persona-natural': [
    AcceptContractStep, //? common step
    PersonalDataStep,
    PepProfileStep,
    FinancialInformationStep, //? common step
    ProductInformationStep, //? common step
    FinalStep, //? common step
  ],
  'persona-juridica': [
    AcceptContractStep, //? common step
    EnterpriseIdentificationStep,
    FinancialInformationStep, //? common step
    ProductInformationStep, //? common step
    FinalStep, //? common step
  ],
}

const currentStepsList = computed(() => {
  // wait until props init
  if (!props.type || !stepsConfigNames[props.type]) return []
  return stepsConfigNames[props.type]
})

const activeComponent = computed(() => {
  if (!props.type || !stepsComponents[props.type]) return null
  return stepsComponents[props.type][wizard.state.value.currentStep]
})

const currentStepRef = ref<any>(null)

const handleNext = async () => {
  if (wizard.state.value.currentStep === wizard.state.value.totalSteps - 1) {
    return
  }

  const completingStep = wizard.state.value.currentStep

  if (currentStepRef.value && currentStepRef.value.validate) {
    await currentStepRef.value.validate()
  } else {
    wizard.nextStep()
  }

  // Guard: solo crear la sesión si el paso avanzó (validación pasó)
  if (wizard.state.value.currentStep === completingStep) return

  // La sesión se crea al completar el paso 0; el avance de paso lo maneja el
  // watcher debounced de abajo (cubre botones y stepper por igual).
  if (completingStep === 0 && wizard.state.value.trackingData) {
    try {
      const { name, email, phone } = wizard.state.value.trackingData
      const res = await $fetch<{ data: { id: number } }>(
        `${trackingApiUrl}/api/tracking/session`,
        {
          method: 'POST',
          body: { name, email, phone, personType: props.type },
        }
      )
      wizard.setSessionId(res.data.id)
    } catch {
      // silencioso — un fallo de BD nunca bloquea al usuario
    }
  }
}

// Registra el paso actual en el backend, debounced 5s para no saturar. Un fallo
// nunca bloquea al usuario. Cubre botón Siguiente/Atrás y stepper porque todos
// mutan currentStep; observar sessionId dispara el primer envío (transición 0→1).
let progressTimer: ReturnType<typeof setTimeout> | null = null

const sendProgress = (keepalive = false) => {
  const { sessionId, currentStep } = wizard.state.value
  if (!sessionId) return
  $fetch(`${trackingApiUrl}/api/tracking/progress`, {
    method: 'POST',
    body: { sessionId, currentStep },
    keepalive,
  }).catch(() => {})
}

watch(
  [() => wizard.state.value.currentStep, () => wizard.state.value.sessionId],
  () => {
    if (!wizard.state.value.sessionId) return
    if (progressTimer) clearTimeout(progressTimer)
    progressTimer = setTimeout(() => sendProgress(), 5000)
  }
)

onBeforeUnmount(() => {
  if (progressTimer) {
    clearTimeout(progressTimer)
    sendProgress(true) // flush inmediato al salir
  }
})

onMounted(() => {
  if (props.type) {
    wizard.initWizard(props.type, currentStepsList.value.length)
  }
})
</script>

<template>
  <div class="w-full bg-white p-4 pb-6 md:p-8 md:pb-12" v-if="props.type">
    <section>
      <FormStepper
        :steps="currentStepsList"
        :current-step="wizard.state.value.currentStep"
        :max-step-reached="wizard.state.value.maxStepReached"
        @go-to-step="wizard.goToStep"
      />
    </section>

    <section class="w-full">
      <div class="bg-white px-2 md:px-4">
        <div class="overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              :key="wizard.state.value.currentStep"
              :initial="{ opacity: 0, x: 20 }"
              :animate="{ opacity: 1, x: 0 }"
              :exit="{ opacity: 0, x: -20 }"
              :transition="{ duration: 0.3 }"
            >
              <KeepAlive>
                <component
                  :is="activeComponent"
                  ref="currentStepRef"
                  v-if="activeComponent"
                />
              </KeepAlive>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          class="border-white-alt2 mt-16 flex justify-between border-t-[2px] pt-8"
        >
          <UiButton
            text="Atrás"
            suffix-icon
            :icon="'arrow-left'"
            size="md"
            variant="outline"
            :disabled="wizard.state.value.currentStep === 0"
            :onClick="wizard.prevStep"
          />

          <UiButton
            v-if="
              wizard.state.value.currentStep < wizard.state.value.totalSteps - 1
            "
            :text="'Siguiente'"
            :icon="'arrow-right'"
            size="md"
            :onClick="handleNext"
          />
        </div>
      </div>
    </section>
  </div>
</template>

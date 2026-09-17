<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { motion, AnimatePresence } from 'motion-v'
  import FormStepper from './FormStepper.vue'

  import { useOnboardingWizard } from '~/composables/useOnboardingWizard'

  import AcceptContractStep from './steps/AcceptContractStep.vue'
  import FinancialInformationStep from './steps/FinancialInformationStep.vue'
  import ProductInformationStep from './steps/ProductInformationStep.vue'
  import FinalStep from './steps/FinalStep.vue'

  import PersonalDataStep from './steps/natural/PersonalDataStep.vue'
  import PepProfileStep from './steps/natural/PepProfileStep.vue'

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
      AcceptContractStep,
      PersonalDataStep,
      PepProfileStep,
      FinancialInformationStep,
      ProductInformationStep,
      FinalStep,
    ],
    'persona-juridica': [
      AcceptContractStep,
      EnterpriseIdentificationStep,
      FinancialInformationStep,
      ProductInformationStep,
      FinalStep,
    ],
  }

  const currentStepsList = computed(() => {
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

    // Only proceed when the step actually advanced, i.e. validation passed.
    if (wizard.state.value.currentStep === completingStep) return

    // The tracking session is created once, on completing step 0; every later step advance
    // is reported by the debounced watcher below.
    if (completingStep === 0 && wizard.state.value.trackingData) {
      try {
        const { name, email, phone, advisorId } = wizard.state.value.trackingData
        const res = await $fetch<{ data: { id: number; token: string } }>(
          `${trackingApiUrl}/api/tracking/session`,
          {
            method: 'POST',
            body: { name, email, phone, personType: props.type, advisorId: advisorId ?? undefined },
          }
        )
        wizard.setSessionId(res.data.id, res.data.token)
      } catch {
        // Tracking is fire-and-forget: a failure must never block the applicant.
      }
    }
  }

  // Reports the current step to the tracking API, debounced 5s. Watching currentStep covers
  // the Next/Back buttons and the stepper alike; watching sessionId fires the first report.
  // Failures are swallowed on purpose: tracking must never block the applicant.
  let progressTimer: ReturnType<typeof setTimeout> | null = null

  const sendProgress = (keepalive = false) => {
    const { sessionId, sessionToken, currentStep, totalSteps } = wizard.state.value
    if (!sessionId || !sessionToken) return
    $fetch(`${trackingApiUrl}/api/tracking/progress`, {
      method: 'POST',
      body: { sessionId, sessionToken, currentStep, completed: currentStep >= totalSteps - 1 },
      keepalive,
    }).catch(() => {})
  }

  watch([() => wizard.state.value.currentStep, () => wizard.state.value.sessionId], () => {
    if (!wizard.state.value.sessionId) return
    if (progressTimer) clearTimeout(progressTimer)
    progressTimer = setTimeout(() => sendProgress(), 5000)
  })

  onBeforeUnmount(() => {
    if (progressTimer) {
      clearTimeout(progressTimer)
      sendProgress(true) // flush the pending step before the component goes away
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
                <component :is="activeComponent" ref="currentStepRef" v-if="activeComponent" />
              </KeepAlive>
            </motion.div>
          </AnimatePresence>
        </div>

        <div class="border-white-alt2 mt-16 flex justify-between border-t-[2px] pt-8">
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
            v-if="wizard.state.value.currentStep < wizard.state.value.totalSteps - 1"
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

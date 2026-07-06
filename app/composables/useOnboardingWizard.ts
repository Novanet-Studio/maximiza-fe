export const useOnboardingWizard = () => {
  const state = useState<MXMZ.WizardState>('onboarding-wizard-state', () => ({
    currentStep: 0,
    totalSteps: 0,
    maxStepReached: 0,
    isComplete: false,
    type: null,
    formData: {},
    sessionId: null,
    trackingData: null,
  }))

  const initWizard = (type: MXMZ.OnboardingType, stepsCount: number) => {
    if (state.value.type !== type) {
      state.value.type = type
      state.value.currentStep = 0
      state.value.maxStepReached = 0

      state.value.formData = {
        institutionData: {
          place: 'Caracas',
          productionDate: new Date().toISOString().split('T')[0] || '',
          inverstorNumber: '',

          brokerageHouseName: 'Maximiza Casa de Bolsa, C.A.',
          taxInformationRegistration: 'J-30025449-2',
          address:
            'Av. Francisco de Miranda. Edificio Torre Europa. Piso 3. Ofic 3-B. Urb. Campo Alegre. Caracas',
        },
      }

      state.value.isComplete = false
      state.value.sessionId = null
      state.value.trackingData = null
    }

    state.value.totalSteps = stepsCount
  }

  const nextStep = () => {
    if (state.value.currentStep < state.value.totalSteps - 1) {
      state.value.currentStep++
      // Update maxStepReached when moving forward
      if (state.value.currentStep > state.value.maxStepReached) {
        state.value.maxStepReached = state.value.currentStep
      }

      const stepper = document.getElementById('formStepper')

      if (stepper) {
        const y = stepper.getBoundingClientRect().top + window.scrollY - 120

        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    } else {
      state.value.isComplete = true
    }
  }

  const prevStep = () => {
    if (state.value.currentStep > 0) {
      state.value.currentStep--

      const stepper = document.getElementById('formStepper')
      if (stepper) {
        const y = stepper.getBoundingClientRect().top + window.scrollY - 120
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  const goToStep = (index: number) => {
    // Only allow navigation to visited steps or current step
    if (
      index >= 0 &&
      index <= state.value.maxStepReached &&
      index < state.value.totalSteps
    ) {
      state.value.currentStep = index
    }
  }

  const updateFormData = (newData: Record<string, any>) => {
    state.value.formData = { ...state.value.formData, ...newData }
  }

  const setSessionId = (id: number) => {
    state.value.sessionId = id
  }

  const setTrackingData = (data: { name: string; email: string; phone: string }) => {
    state.value.trackingData = data
  }

  return {
    state: readonly(state),
    initWizard,
    nextStep,
    prevStep,
    goToStep,
    updateFormData,
    setSessionId,
    setTrackingData,
  }
}

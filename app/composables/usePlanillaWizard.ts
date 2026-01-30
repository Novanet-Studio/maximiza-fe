export const usePlanillaWizard = () => {
  const state = useState<MXMZ.WizardState>("planilla-wizard-state", () => ({
    currentStep: 0,
    totalSteps: 0,
    maxStepReached: 0,
    isComplete: false,
    type: null,
    formData: {},
  }));

  const initWizard = (type: MXMZ.PlanillaType, stepsCount: number) => {
    if (state.value.type !== type) {
      state.value.type = type;
      state.value.currentStep = 0;
      state.value.maxStepReached = 0;

      state.value.formData = {
        institutionData: {
          place: "Caracas",
          productionDate: new Date().toISOString().split("T")[0] || "",
          inverstorNumber: "",

          brokerageHouseName: "Maximiza Casa de Bolsa, C.A.",
          taxInformationRegistration: "J-30025449-2",
          address:
            "Av. Francisco de Miranda. Edificio Torre Europa. Piso 3. Ofic 3-B. Urb. Campo Alegre. Caracas",
        },
      };

      state.value.isComplete = false;
    }

    state.value.totalSteps = stepsCount;
  };

  const nextStep = () => {
    if (state.value.currentStep < state.value.totalSteps - 1) {
      state.value.currentStep++;
      // Update maxStepReached when moving forward
      if (state.value.currentStep > state.value.maxStepReached) {
        state.value.maxStepReached = state.value.currentStep;
      }

      document.getElementById("formStepper")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      state.value.isComplete = true;
    }
  };

  const prevStep = () => {
    if (state.value.currentStep > 0) {
      state.value.currentStep--;

      document.getElementById("formStepper")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToStep = (index: number) => {
    // Only allow navigation to visited steps or current step
    if (
      index >= 0 &&
      index <= state.value.maxStepReached &&
      index < state.value.totalSteps
    ) {
      state.value.currentStep = index;

      const stepper = document.getElementById("formStepper")?.offsetHeight;

      window.scrollTo({ top: stepper, behavior: "smooth" });
    }
  };

  const updateFormData = (newData: Record<string, any>) => {
    state.value.formData = { ...state.value.formData, ...newData };
  };

  return {
    state: readonly(state),
    initWizard,
    nextStep,
    prevStep,
    goToStep,
    updateFormData,
  };
};

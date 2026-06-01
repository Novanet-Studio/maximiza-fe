<script setup lang="ts">
  import { useForm } from 'vee-validate'
  import * as yup from 'yup'
  import {
    annualInvestmentOptions,
    knowledgeOptions,
    experienceOptions,
    investmentLevelOptions,
  } from '~/assets/data/formSources'
  import { usePlanillaWizard } from '~/composables/usePlanillaWizard'

  const wizard = usePlanillaWizard()

  const investmentOptions = [...annualInvestmentOptions]

  const schema = yup.object({
    knowledge: yup.string().required('Seleccione una opción'),
    experience: yup.string().required('Seleccione una opción'),
    inversionLevel: yup.string().required('Seleccione una opción'),
    annualInversion: yup.string().required('Requerido'),
    totalLiquidAssets: yup.string().required('Seleccione una opción'),
    totalAssets: yup.string().required('Seleccione una opción'),
  })

  const { handleSubmit, errors, defineField } = useForm({
    validationSchema: schema,
    initialValues: {
      knowledge: wizard.state.value.formData.investorProfile?.knowledge || '',
      experience: wizard.state.value.formData.investorProfile?.experience || '',
      inversionLevel: wizard.state.value.formData.investorProfile?.inversionLevel || '',
      annualInversion: wizard.state.value.formData.investorProfile?.annualInversion || '',
      totalLiquidAssets: wizard.state.value.formData.investorProfile?.totalLiquidAssets || '',
      totalAssets: wizard.state.value.formData.investorProfile?.totalAssets || '',
    },
  })

  const [knowledge] = defineField('knowledge')
  const [experience] = defineField('experience')
  const [inversionLevel] = defineField('inversionLevel')
  const [annualInversion] = defineField('annualInversion')
  const [totalLiquidAssets] = defineField('totalLiquidAssets')
  const [totalAssets] = defineField('totalAssets')

  const validate = handleSubmit((values) => {
    wizard.updateFormData({ investorProfile: values })
    wizard.nextStep()
  })

  defineExpose({
    validate,
  })
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent>
    <div>
      <FormTitle text="Perfil del inversionista" class="mb-4" />
      <p class="mb-6 text-sm leading-relaxed text-maximiza-gris2">
        El propósito del siguiente cuestionario es informar a
        <b>MAXIMIZA CASA DE BOLSA</b> los objetivos de inversión del cliente, y debe ser completado
        en el espacio indicado. En ningún caso la Casa de bolsa se hace responsable de las ganancias
        o pérdidas producto de las operaciones realizadas bajo dicho perfil.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="border-b border-l border-maximiza-gris5/90 bg-maximiza-gris5/10 p-4">
        <h5 class="mb-4 text-lg font-black text-maximiza-verde1">
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

      <div class="border-b border-l border-maximiza-gris5/90 bg-maximiza-gris5/10 p-4">
        <h5 class="mb-4 text-lg font-black text-maximiza-verde1">Experiencia como inversionista</h5>

        <FormBaseRadio
          name="experience"
          v-model="experience"
          :options="experienceOptions"
          :error-message="errors.experience"
        />
      </div>

      <div class="border-b border-l border-maximiza-gris5/90 bg-maximiza-gris5/10 p-4">
        <h5 class="mb-4 text-lg font-black text-maximiza-verde1">
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

      <div class="border-b border-l border-maximiza-gris5/90 bg-maximiza-gris5/10 p-4">
        <h5 class="mb-4 text-lg font-black text-maximiza-verde1">Inversiones anuales</h5>

        <FormBaseRadio
          name="annualInversion"
          v-model="annualInversion"
          :options="investmentOptions"
          :error-message="errors.annualInversion"
          :style="'lg:grid-cols-2 xl:grid-cols-2'"
        />
      </div>

      <div class="border-b border-l border-maximiza-gris5/90 bg-maximiza-gris5/10 p-4">
        <h5 class="mb-1 text-lg font-black text-maximiza-verde1">
          Total de activos líquidos (en Bolívares)
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

      <div class="border-b border-l border-maximiza-gris5/90 bg-maximiza-gris5/10 p-4">
        <h5 class="mb-1 text-lg font-black text-maximiza-verde1">
          Patrimonio total (en Bolívares)
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

<script setup lang="ts">
  const props = defineProps<{
    steps: string[]
    currentStep: number
    maxStepReached: number
  }>()

  const emit = defineEmits<{
    goToStep: [index: number]
  }>()

  const handleStepClick = (index: number) => {
    // Only allow navigation to visited steps
    if (index <= props.maxStepReached) {
      emit('goToStep', index)
    }
  }

  const isStepClickable = (index: number) => {
    return index <= props.maxStepReached
  }
</script>

<template>
  <div id="formStepper" class="mx-auto mb-12 w-full px-4">
    <div class="mb-6 md:hidden">
      <p class="mb-2 text-sm font-bold uppercase text-maximiza-verde1">
        Paso {{ currentStep + 1 }} de {{ steps.length }}
      </p>
      <h3 class="text-xl font-black leading-tight text-maximiza-negro1">
        {{ steps[currentStep] }}
      </h3>
      <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-maximiza-gris5">
        <div
          class="h-full bg-maximiza-verde1 transition-all duration-500 ease-in-out"
          :style="{ width: `${((currentStep + 1) / steps.length) * 100}%` }"
        ></div>
      </div>
    </div>

    <div class="relative hidden items-center justify-between md:flex">
      <div
        class="absolute left-0 top-1/2 -z-10 h-1 w-full -translate-y-1/2 transform rounded-full bg-maximiza-gris5"
      ></div>

      <div
        class="absolute left-0 top-1/2 -z-0 h-1 -translate-y-1/2 transform bg-maximiza-verde1 transition-all duration-500 ease-in-out"
        :style="{ width: `${(currentStep / (steps.length - 1)) * 100}%` }"
      ></div>

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="group relative flex flex-col items-center"
      >
        <div
          @click="handleStepClick(index)"
          class="z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 transition-all duration-300"
          :class="[
            index <= currentStep
              ? 'border-maximiza-verde1 bg-maximiza-verde1 text-maximiza-blanco1'
              : 'border-maximiza-gris5 bg-maximiza-gris5 text-maximiza-blanco1',
            isStepClickable(index) ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed',
          ]"
        >
          <span v-if="index < currentStep" class="font-bold">✓</span>
          <span v-else class="text-sm font-bold">{{ index + 1 }}</span>
        </div>

        <span
          @click="handleStepClick(index)"
          class="absolute top-12 w-32 text-center text-xs font-bold uppercase transition-colors duration-300"
          :class="[
            index <= currentStep ? 'text-maximiza-verde1' : 'text-maximiza-gris1',
            isStepClickable(index) ? 'cursor-pointer' : 'cursor-not-allowed',
          ]"
        >
          {{ step }}
        </span>
      </div>
    </div>
  </div>
</template>

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
  <div id="formStepper" class="mx-auto w-full px-2 md:px-4">
    <!-- MOBILE VIEW -->
    <div class="mb-6 md:hidden">
      <p class="text-primary mb-2 text-sm font-bold uppercase">
        Paso {{ currentStep + 1 }} de {{ steps.length }}
      </p>
      <h3 class="text-3xl leading-tight font-black text-black">
        {{ steps[currentStep] }}
      </h3>
      <div class="bg-white-alt2 mt-4 h-2 w-full overflow-hidden rounded-full">
        <div
          class="bg-primary h-full transition-all duration-500 ease-in-out"
          :style="{ width: `${((currentStep + 1) / steps.length) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- DESKTOP VIEW -->
    <div
      class="relative mb-8 hidden w-full items-center justify-between py-4 md:flex"
    >
      <div
        class="bg-gray absolute top-1/2 left-0 z-10 h-[1px] w-full -translate-y-1/2 transform"
      />

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="group relative z-20 flex flex-col items-center"
        @click="handleStepClick(index)"
      >
        <div
          class="flex h-[54px] items-stretch overflow-hidden border transition-all duration-500 ease-in-out"
          :class="[
            index === currentStep
              ? 'bg-white-alt border-gray'
              : 'border-[#2b2b2b] bg-[#2b2b2b]',
            isStepClickable(index)
              ? 'cursor-pointer hover:opacity-90'
              : 'cursor-not-allowed',
          ]"
        >
          <!-- Number Box -->
          <div
            class="flex items-center justify-center px-4 font-black transition-colors duration-500"
            :class="
              index === currentStep
                ? 'bg-primary text-xl text-white'
                : 'bg-transparent text-lg text-white'
            "
          >
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Label Box -->
          <div
            class="flex items-center overflow-hidden transition-all duration-500 ease-in-out"
            :class="[
              index === currentStep
                ? 'max-w-[200px] px-3 opacity-100'
                : 'max-w-0 px-0 opacity-0',
            ]"
          >
            <span
              class="text-primary w-24 pl-1 text-left text-sm leading-tight font-bold whitespace-normal"
            >
              {{ step }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

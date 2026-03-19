<script setup lang="ts">
const props = defineProps<{
  steps: string[];
  currentStep: number;
  maxStepReached: number;
}>();

const emit = defineEmits<{
  goToStep: [index: number];
}>();

const handleStepClick = (index: number) => {
  // Only allow navigation to visited steps
  if (index <= props.maxStepReached) {
    emit("goToStep", index);
  }
};

const isStepClickable = (index: number) => {
  return index <= props.maxStepReached;
};
</script>

<template>
  <div id="formStepper" class="w-full mx-auto px-4">
    <!-- MOBILE VIEW -->
    <div class="md:hidden mb-6">
      <p class="text-primary font-bold text-sm uppercase mb-2">
        Paso {{ currentStep + 1 }} de {{ steps.length }}
      </p>
      <h3 class="text-black font-black text-3xl leading-tight">
        {{ steps[currentStep] }}
      </h3>
      <div
        class="w-full bg-white-alt2 h-2 mt-4 rounded-full overflow-hidden"
      >
        <div
          class="bg-primary h-full transition-all duration-500 ease-in-out"
          :style="{ width: `${((currentStep + 1) / steps.length) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- DESKTOP VIEW -->
    <div class="hidden md:flex justify-between items-center relative w-full py-4 mb-8">
      <div
        class="absolute top-1/2 left-0 w-full h-[1px] bg-gray z-10 transform -translate-y-1/2"
      />

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="z-20 flex flex-col items-center relative group"
        @click="handleStepClick(index)"
      >
        <div
          class="flex items-stretch border transition-all duration-500 ease-in-out overflow-hidden h-[54px]"
          :class="[
            index === currentStep
              ? 'bg-white-alt border-gray'
              : 'bg-[#2b2b2b] border-[#2b2b2b]',
            isStepClickable(index)
              ? 'cursor-pointer hover:opacity-90'
              : 'cursor-not-allowed',
          ]"
        >
          <!-- Number Box -->
          <div
            class="flex items-center justify-center px-4 font-black transition-colors duration-500"
            :class="index === currentStep ? 'bg-primary text-white text-xl' : 'bg-transparent text-white text-lg'"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Label Box -->
          <div
            class="transition-all duration-500 ease-in-out flex items-center overflow-hidden"
            :class="[
              index === currentStep
                ? 'max-w-[200px] opacity-100 px-3'
                : 'max-w-0 opacity-0 px-0'
            ]"
          >
            <span class="text-primary font-bold text-sm leading-tight text-left w-24 pl-1 whitespace-normal">
              {{ step }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  rol: string
  description: string
  variant: {
    background: string
    titleText: string
    subtitleText: string
  }
}

const { name, rol, description, variant } = defineProps<Props>()

const isPopoverOpen = ref(false)
</script>

<template>
  <div
    class="group relative flex w-full flex-col items-center transition-all duration-300"
    :class="isPopoverOpen ? 'z-50' : 'z-0'"
  >
    <div
      class="z-10 flex w-[85%] flex-col items-center justify-center px-4 py-2 text-center shadow-md shadow-black/10 transition-transform duration-300 sm:w-4/5"
      :class="variant.background"
    >
      <h4 class="text-sm font-semibold" :class="variant.titleText">
        {{ name }}
      </h4>
      <h5 class="mt-1 text-xs font-normal" :class="variant.subtitleText">
        {{ rol }}
      </h5>
    </div>

    <div
      class="border-gray/30 z-0 -mt-8 flex w-full flex-col items-center border bg-white px-6 pt-12 pb-4 shadow-sm transition-all duration-300 md:px-8"
    >
      <AppPopover position="bottom" @toggled="isPopoverOpen = $event">
        <template #trigger>
          <button
            class="text-gray/50 hover:text-primary flex cursor-pointer items-center justify-center text-sm font-medium transition-colors duration-300 focus:outline-none"
          >
            Ver mas
          </button>
        </template>
        <div class="w-full text-center sm:text-left">
          <p class="text-gray p-2 text-sm leading-relaxed md:text-base">
            {{ description }}
          </p>
        </div>
      </AppPopover>
    </div>
  </div>
</template>

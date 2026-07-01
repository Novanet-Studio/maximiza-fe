<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    icon?: string
    bgColor?: string
    position?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  {
    bgColor: 'bg-white',
  }
)

const emit = defineEmits<{
  (e: 'toggled', value: boolean): void
}>()

const isOpen = ref(false)
const popoverRef = ref<HTMLElement | null>(null)

const toggle = () => {
  isOpen.value = !isOpen.value
  emit('toggled', isOpen.value)
}

const close = (e: MouseEvent) => {
  if (popoverRef.value && !popoverRef.value.contains(e.target as Node)) {
    if (isOpen.value) {
      isOpen.value = false
      emit('toggled', false)
    }
  }
}

onMounted(() => {
  document.addEventListener('click', close)
})

onUnmounted(() => {
  document.removeEventListener('click', close)
})
</script>

<template>
  <div class="relative inline-block w-fit" ref="popoverRef">
    <div
      @click="toggle"
      class="relative z-50 inline-block w-full cursor-pointer"
    >
      <slot name="trigger" />
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="bg-black-alt/75 fixed inset-0 z-40 cursor-default"
          @click.stop="
            () => {
              isOpen = false
              emit('toggled', false)
            }
          "
        ></div>
      </Transition>
    </Teleport>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="border-gray/20 absolute z-50 min-w-[30dvw] border p-5"
        :class="[
          bgColor,
          {
            'top-full left-1/2 mt-1 -translate-x-1/2': position === 'bottom',
            'bottom-full left-1/2 mb-1 -translate-x-1/2': position === 'top',
            'top-1/2 right-full mr-1 -translate-y-1/2': position === 'left',
            'top-1/2 left-full ml-1 -translate-y-1/2': position === 'right',
          },
        ]"
        @click.stop
      >
        <div v-if="title || icon" class="mb-3 flex items-center gap-3">
          <img
            v-if="icon"
            :src="icon"
            alt="icon"
            title="icon"
            class="h-6 w-6 object-contain"
          />
          <h5 v-if="title" class="text-black-alt m-0 text-lg font-semibold">
            {{ title }}
          </h5>
        </div>

        <div class="text-gray text-sm">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

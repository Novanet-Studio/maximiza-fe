<script setup lang="ts">
import BaseLabel from './BaseLabel.vue'
import FormError from './Error.vue'

interface Option {
  value: string | number
  label: string
}

interface Props {
  modelValue?: string | number
  name: string
  label?: string
  options: (string | Option)[]
  placeholder?: string
  errorMessage?: string
  disabled?: boolean
  comment?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Seleccione...',
  options: () => [],
})

const emit = defineEmits(['update:modelValue', 'blur'])

const normalizedOptions = computed(() => {
  return props.options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return opt as Option
    }

    return { value: opt, label: opt } as Option
  })
})

const COMMENT_TYPES: Record<string, string> = {
  INCOMES: 'El monto indicado debe coincidir con su constancia de ingreso',
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement

  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <BaseLabel
      :html-for="name"
      :label="label"
      :required="required"
      :error="errorMessage"
    />

    <div class="relative">
      <select
        :id="name"
        :name="name"
        :value="modelValue"
        :disabled="disabled"
        @change="handleChange"
        @blur="$emit('blur', $event)"
        class="text-black-alt focus:bg-white-alt/50 disabled:bg-white-alt2 disabled:text-gray w-full cursor-pointer appearance-none rounded-sm border bg-white px-3 py-2.5 text-sm transition-all duration-200 focus:outline-none"
        :class="[
          errorMessage
            ? 'border-error focus:border-error focus:ring-error bg-error/5'
            : 'border-white-alt2 focus:border-primary focus:ring-primary',
          modelValue ? '' : 'text-gray-400',
        ]"
      >
        <option value="" disabled selected class="">{{ placeholder }}</option>
        <option
          v-for="option in normalizedOptions"
          :key="option.value"
          :value="option.value"
          class="text-black-alt"
        >
          {{ option.label }}
        </option>
      </select>

      <div
        class="text-gray pointer-events-none absolute inset-y-0 right-0 flex items-center px-3"
      >
        <font-awesome-icon :icon="['fas', 'caret-down']" />
      </div>
    </div>

    <p
      v-if="comment"
      class="text-white-alt2 bg-white-alt border-primary mt-2 border-l-2 px-2 text-sm"
    >
      {{ COMMENT_TYPES[comment] || comment }}
    </p>

    <FormError :error="errorMessage" />
  </div>
</template>

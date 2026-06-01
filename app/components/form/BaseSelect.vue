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
    <BaseLabel :html-for="name" :label="label" :required="required" :error="errorMessage" />

    <div class="relative">
      <select
        :id="name"
        :name="name"
        :value="modelValue"
        :disabled="disabled"
        @change="handleChange"
        @blur="$emit('blur', $event)"
        class="w-full cursor-pointer appearance-none rounded-sm border px-3 py-2.5 text-sm text-maximiza-negro1 transition-all duration-200 focus:outline-none disabled:bg-maximiza-gris5 disabled:text-maximiza-gris1"
        :class="[
          errorMessage
            ? 'border-maximiza-error bg-maximiza-error/5 focus:border-maximiza-error focus:ring-maximiza-error'
            : 'border-maximiza-gris5 focus:border-maximiza-verde1 focus:ring-maximiza-verde1',
          modelValue ? '' : 'text-gray-400',
        ]"
      >
        <option value="" disabled selected class="">{{ placeholder }}</option>
        <option
          v-for="option in normalizedOptions"
          :key="option.value"
          :value="option.value"
          class="text-maximiza-negro1"
        >
          {{ option.label }}
        </option>
      </select>

      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-maximiza-gris3"
      >
        <font-awesome-icon :icon="['fas', 'caret-down']" />
      </div>
    </div>

    <p
      v-if="comment"
      class="bg-gray-50 mt-2 border-l-2 border-maximiza-verde1 px-2 text-sm text-maximiza-gris3"
    >
      {{ COMMENT_TYPES[comment] || comment }}
    </p>

    <FormError :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
  import BaseLabel from './BaseLabel.vue'
  import FormError from './Error.vue'

  interface Props {
    modelValue?: string | number
    name: string
    label?: string
    type?: 'text' | 'email' | 'number' | 'date' | 'password' | 'tel'
    placeholder?: string
    errorMessage?: string
    min?: any
    max?: any
    comment?: string
    disabled?: boolean
    required?: boolean
  }

  const COMMENT_TYPES: Record<string, string> = {
    INCOMES: 'El monto indicado debe coincidir con su constancia de ingreso',
    RIF_REQUIRED:
      'Ingresar la información exacta como aparece en su Registro de Información fiscal',
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    modelValue: '',
  })

  const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
  }
</script>

<template>
  <div class="w-full">
    <BaseLabel :html-for="name" :label="label" :required="required" :error="errorMessage" />

    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :min="min"
      :max="max"
      @input="handleInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      class="bg-white disabled:text-gray-500 w-full rounded-sm border px-3 py-2.5 text-sm text-maximiza-negro1 transition-all duration-200 focus:outline-none focus:ring-1 disabled:bg-maximiza-gris5"
      :class="[
        errorMessage
          ? 'border-maximiza-error bg-maximiza-error/5 focus:border-maximiza-error focus:ring-maximiza-error'
          : 'border-maximiza-gris5 placeholder:text-maximiza-negro1/30 focus:border-maximiza-verde1 focus:ring-maximiza-verde1',
      ]"
    />

    <p
      v-if="comment"
      class="bg-gray-50 mt-2 border-l-2 border-maximiza-verde1 px-2 text-sm text-maximiza-gris3"
    >
      {{ COMMENT_TYPES[comment] || comment }}
    </p>

    <FormError :error="errorMessage" />
  </div>
</template>

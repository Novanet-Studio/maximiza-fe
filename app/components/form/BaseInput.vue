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
  subLabel?: string
  subLabelType?: string
  comment?: string
  disabled?: boolean
  required?: boolean
}

const COMMENT_TYPES: Record<string, string> = {
  INCOMES: 'El monto indicado debe coincidir con su constancia de ingreso',
  RIF_REQUIRED:
    'Ingresar la información exacta como aparece en su <b>Registro de Información fiscal</b>',
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
    <BaseLabel
      :html-for="name"
      :label="label"
      :subLabel="subLabel"
      :subLabelType="subLabelType"
      :required="required"
      :error="errorMessage"
    />

    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="
        !placeholder ? (subLabelType === 'BS' ? 'Bs. 0,00' : '') : placeholder
      "
      :disabled="disabled"
      :min="min"
      :max="max"
      @input="handleInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      class="text-black-alt focus:bg-white-alt/50 disabled:bg-white-alt2 disabled:text-gray w-full border bg-white px-3 py-2.5 text-sm font-normal transition-all duration-200 focus:outline-none"
      :class="[
        errorMessage
          ? 'border-error focus:border-error focus:ring-error bg-error/5'
          : 'border-white-alt2 focus:border-primary focus:ring-primary placeholder:text-white-gray',
      ]"
    />

    <FormError :error="errorMessage" />

    <div
      v-if="comment"
      class="text-primary mt-1 grid grid-cols-[20px_1fr] items-center gap-1 text-sm"
    >
      <font-awesome-icon class="text-base" :icon="['fas', 'info-circle']" />

      <p v-html="COMMENT_TYPES[comment] || comment" />
    </div>
  </div>
</template>

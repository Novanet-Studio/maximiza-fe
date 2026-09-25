<script setup lang="ts">
  import { ref, watch } from 'vue'
  import BaseLabel from './BaseLabel.vue'
  import BaseSelect from './BaseSelect.vue'
  import BaseInput from './BaseInput.vue'
  import FormError from './Error.vue'
  import { phoneOperatorOptions } from '~/assets/data/formSources'

  interface Props {
    modelValue?: string
    name: string
    label?: string
    errorMessage?: string
    required?: boolean
    disabled?: boolean
    // Free-text prefix instead of the mobile carrier dropdown (landlines, other area codes).
    freePrefix?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
  })

  const emit = defineEmits(['update:modelValue'])

  const OPERATOR_LEN = 8 // "(+58)" plus the 3-digit carrier code
  const BODY_LEN = 7

  const parse = (value: string) => {
    // A free prefix has no fixed length, but the subscriber number is always 7 digits.
    if (props.freePrefix) {
      return value.length > BODY_LEN
        ? { op: value.slice(0, -BODY_LEN), body: value.slice(-BODY_LEN) }
        : { op: '', body: value }
    }
    const prefix = value.slice(0, OPERATOR_LEN)
    const valid = phoneOperatorOptions.some((o) => o.value === prefix)
    return { op: valid ? prefix : '', body: valid ? value.slice(OPERATOR_LEN) : '' }
  }

  const initial = parse(props.modelValue)
  const operator = ref(initial.op)
  const body = ref(initial.body)

  const emitCombined = () => {
    // The carrier prefix is local state, never part of the combined modelValue: with an
    // empty subscriber number we emit '' so optional fields stay empty instead of prefix-only.
    emit('update:modelValue', body.value ? `${operator.value}${body.value}` : '')
  }

  // Re-hydrate when modelValue changes from outside (form reset, navigating back to a step).
  watch(
    () => props.modelValue,
    (value) => {
      if (value === (body.value ? `${operator.value}${body.value}` : '')) return
      const parsed = parse(value)
      operator.value = parsed.op
      body.value = parsed.body
    }
  )

  const onOperator = (value: string | number) => {
    operator.value = String(value)
    emitCombined()
  }

  const onPrefix = (value: string | number) => {
    operator.value = String(value)
      .replace(/[^0-9()+]/g, '')
      .slice(0, OPERATOR_LEN)
    emitCombined()
  }

  const onBody = (value: string | number) => {
    body.value = String(value).replace(/\D/g, '').slice(0, BODY_LEN)
    emitCombined()
  }
</script>

<template>
  <div class="w-full">
    <BaseLabel :html-for="name" :label="label" :required="required" :error="errorMessage" />

    <div class="flex gap-1">
      <div class="w-24 shrink-0">
        <BaseInput
          v-if="freePrefix"
          :name="`${name}Operator`"
          :model-value="operator"
          type="tel"
          inputmode="tel"
          :maxlength="OPERATOR_LEN"
          placeholder="0212"
          :disabled="disabled"
          @update:model-value="onPrefix"
        />
        <BaseSelect
          v-else
          :name="`${name}Operator`"
          :model-value="operator"
          :options="phoneOperatorOptions"
          placeholder="Linea"
          :disabled="disabled"
          @update:model-value="onOperator"
        />
      </div>

      <div class="w-full">
        <BaseInput
          :name="name"
          :model-value="body"
          type="tel"
          inputmode="numeric"
          :maxlength="7"
          placeholder="1234567"
          :disabled="disabled"
          @update:model-value="onBody"
        />
      </div>
    </div>

    <FormError :error="errorMessage" />
  </div>
</template>

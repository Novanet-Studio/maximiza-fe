<script setup lang="ts">
interface Option {
  value: string | number | boolean
  label: string
}

interface Props {
  modelValue?: string | number | boolean
  name: string
  style?: string
  label?: string
  options: Option[]
  errorMessage?: string
  disabled?: boolean
  row?: boolean
  required?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const handleChange = (value: string | number | boolean) => {
  if (!props.disabled) {
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <div class="w-full">
    <FormBaseLabel :html-for="name" :label="label" :required="required" />

    <div
      :class="`grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 ${style} gap-4`"
    >
      <label
        v-for="option in options"
        :key="String(option.value)"
        class="group flex cursor-pointer items-center gap-2"
        :class="{ 'cursor-not-allowed opacity-50': disabled }"
      >
        <div class="relative flex items-center justify-center">
          <input
            type="radio"
            :name="name"
            :value="option.value"
            :checked="modelValue === option.value"
            :disabled="disabled"
            @change="handleChange(option.value)"
            class="peer checked:border-primary h-4 w-4 appearance-none rounded-full border border-gray-300 transition-all checked:border-[5px]"
          />
        </div>
        <span
          class="text-black-alt/85 group-hover:text-black-alt text-sm font-semibold transition-colors md:text-base"
          :class="{
            'font-bold': modelValue === option.value,
          }"
        >
          {{ option.label }}
        </span>
      </label>
    </div>

    <FormError :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: boolean | string[]
  value?: string
  name: string
  label: string
  errorMessage?: string
  disabled?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value || '')
  }
  return props.modelValue
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (Array.isArray(props.modelValue) && props.value) {
    const newValue = [...props.modelValue]
    if (target.checked) {
      newValue.push(props.value)
    } else {
      const index = newValue.indexOf(props.value)
      if (index > -1) newValue.splice(index, 1)
    }
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', target.checked)
  }
}
</script>

<template>
  <div class="w-fit">
    <label
      :for="name"
      class="group flex cursor-pointer items-center gap-2 select-none"
      :class="{ 'cursor-not-allowed opacity-60': disabled }"
    >
      <div class="relative flex items-center">
        <input
          :id="name"
          :name="name"
          type="checkbox"
          :checked="isChecked"
          :disabled="disabled"
          @change="handleChange"
          class="peer checked:border-primary checked:bg-primary hover:border-primary focus:ring-none focus:ring-primary/20 h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all"
        />

        <font-awesome-icon
          :icon="['fas', 'check']"
          class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white opacity-0 transition-opacity peer-checked:opacity-100"
        />
      </div>

      <span
        class="text-black-alt/85 group-hover:text-black-alt mt-0.25 text-sm font-semibold transition-colors md:text-base"
        :class="{ 'text-error': errorMessage }"
      >
        {{ label }}
      </span>
    </label>

    <FormError :error="errorMessage" />
  </div>
</template>

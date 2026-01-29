<script setup lang="ts">
interface Props {
  modelValue?: boolean | string[];
  value?: string;
  name: string;
  label: string;
  errorMessage?: string;
  disabled?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value || "");
  }
  return props.modelValue;
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (Array.isArray(props.modelValue) && props.value) {
    const newValue = [...props.modelValue];
    if (target.checked) {
      newValue.push(props.value);
    } else {
      const index = newValue.indexOf(props.value);
      if (index > -1) newValue.splice(index, 1);
    }
    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", target.checked);
  }
};
</script>

<template>
  <div class="w-fit">
    <label
      :for="name"
      class="flex items-start gap-2 cursor-pointer group select-none"
      :class="{ 'opacity-60 cursor-not-allowed': disabled }"
    >
      <div class="relative flex items-center">
        <input
          :id="name"
          :name="name"
          type="checkbox"
          :checked="isChecked"
          :disabled="disabled"
          @change="handleChange"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-maximiza-verde1 checked:bg-maximiza-verde1 hover:border-maximiza-verde1 focus:ring-2 focus:ring-maximiza-verde1/20"
        />
        <font-awesome-icon
          :icon="['fas', 'check']"
          class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-maximiza-blanco1 opacity-0 transition-opacity peer-checked:opacity-100 text-xs"
        />
      </div>

      <span
        class="text-sm font-medium text-maximiza-negro1 group-hover:text-maximiza-verde1 transition-colors"
        :class="{ 'text-red-500': errorMessage }"
      >
        {{ label }}
      </span>
    </label>

    <FormError :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  style?: string
  text?: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <h4 :class="`text-black-alt text-2xl ${style}`">
      {{ text }}
    </h4>

    <div
      v-if="description"
      class="border-primary text-black-alt border-l-2 pl-2 text-sm"
    >
      <p v-html="description" />
    </div>
  </div>
</template>

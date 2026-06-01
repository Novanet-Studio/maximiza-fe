<script setup lang="ts">
  interface Props {
    style?: string
    text?: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="mb-4 w-full border-b border-maximiza-gris5 pb-2">
    <h4 :class="`text-xl font-black text-maximiza-verde1 md:text-2xl ${style}`">
      {{ text }}
    </h4>
  </div>
</template>

<script setup lang="ts">
interface Props {
  style?: string;
  text?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full border-b border-maximiza-gris5 pb-2 mb-4">
    <h4 :class="`text-maximiza-verde1 font-black text-xl md:text-2xl ${style}`">
      {{ text }}
    </h4>
  </div>
</template>

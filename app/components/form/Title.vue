<script setup lang="ts">
interface Props {
  style?: string;
  text?: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full">
    <h4 :class="`text-2xl text-black-alt ${style}`">
      {{ text }}
    </h4>

    <div v-if="description" class="pl-2 border-l-2 border-primary text-sm text-black-alt ">
      <p v-html="description" />
    </div>
  </div>
</template>

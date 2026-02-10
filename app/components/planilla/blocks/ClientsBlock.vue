<script setup lang="ts">
const { source } = defineProps<{
  source: MXMZ.Clients[];
}>();
</script>

<template>
  <div class="w-full">
    <div
      class="spreadsheet__item text-center font-bold"
    >
      Principales clientes
    </div>

    <div class="grid grid-cols-[2fr_1fr]">
      <div class="spreadsheet__item font-bold text-[10px]">
        Nombre o razón social
      </div>
      <div class="spreadsheet__item font-bold text-[10px]">
        Ubicación
      </div>
    </div>

    <div class="grid grid-cols-[2fr_1fr]">
      <div class="spreadsheet__item">
        <div v-if="source[0]" class="content">{{ source[0].name }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[0]" class="content">{{ source[0].location }}</div>
        <div v-else class="content">N/A</div>
      </div>
    </div>

    <div class="grid grid-cols-[2fr_1fr]">
      <div class="spreadsheet__item">
        <div v-if="source[1]" class="content">{{ source[1].name }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[1]" class="content">{{ source[1].location }}</div>
        <div v-else class="content">N/A</div>
      </div>
    </div>

    <div class="grid grid-cols-[2fr_1fr]">
      <div class="spreadsheet__item">
        <div v-if="source[2]" class="content">{{ source[2].name }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[2]" class="content">{{ source[2].location }}</div>
        <div v-else class="content">N/A</div>
      </div>
    </div>
  </div>
</template>

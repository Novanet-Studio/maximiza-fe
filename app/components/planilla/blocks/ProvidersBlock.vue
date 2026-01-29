<script setup lang="ts">
const { source } = defineProps<{
  source: MXMZ.Providers[];
}>();
</script>

<template>
  <div class="w-full">
    <div
      class="spreadsheet__item text-center font-bold bg-maximiza-verde1 text-maximiza-blanco1"
    >
      Principales proveedores
    </div>

    <div class="grid grid-cols-[2fr_1fr]">
      <div class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]">
        Nombre o razón social
      </div>
      <div class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]">
        Ubicación
      </div>
    </div>

    <template v-for="(item, i) in source" :key="i">
      <div class="grid grid-cols-[2fr_1fr]">
        <div class="spreadsheet__item">
          <div class="content">{{ item.name }}</div>
        </div>
        <div class="spreadsheet__item">
          <div class="content">{{ item.location }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

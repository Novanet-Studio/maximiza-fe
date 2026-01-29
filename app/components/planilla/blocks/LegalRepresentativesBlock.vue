<script setup lang="ts">
const { source } = defineProps<{
  source: MXMZ.LegalRepresentatives[];
}>();
</script>

<template>
  <div class="w-full">
    <div class="spreadsheet__item text-center font-bold bg-gray-100">
      Representante(s) legal(es) / Autorizados para realizar operaciones
      bursatiles
    </div>

    <div class="grid grid-cols-[2fr_2fr_2fr_2fr_1fr_1fr]">
      <div class="spreadsheet__item font-bold bg-maximiza-gris1/15 text-[10px]">
        Nombre
      </div>
      <div class="spreadsheet__item font-bold bg-maximiza-gris1/15 text-[10px]">
        Documento de Identidad
      </div>
      <div class="spreadsheet__item font-bold bg-maximiza-gris1/15 text-[10px]">
        Cargo
      </div>
      <div class="spreadsheet__item font-bold bg-maximiza-gris1/15 text-[10px]">
        Condición
      </div>
      <div
        class="spreadsheet__item font-bold bg-maximiza-gris1/15 text-[10px] text-center"
      >
        ES PEP
      </div>
      <div
        class="spreadsheet__item font-bold bg-maximiza-gris1/15 text-[10px] text-center"
      >
        Rel. PEP
      </div>
    </div>

    <template v-for="(item, i) in source" :key="i">
      <div class="grid grid-cols-[2fr_2fr_2fr_2fr_1fr_1fr]">
        <div class="spreadsheet__item">
          <div class="content">{{ item.name }}</div>
        </div>
        <div class="spreadsheet__item">
          <div class="content">{{ item.dni }}</div>
        </div>
        <div class="spreadsheet__item">
          <div class="content">{{ item.cargo }}</div>
        </div>
        <div class="spreadsheet__item">
          <div class="content">{{ item.condition }}</div>
        </div>

        <div class="spreadsheet__item flex items-center justify-center">
          <div
            v-if="item.name"
            :class="[
              'border px-1 font-black text-[9px]',
              item.esPep === 'SI'
                ? 'bg-maximiza-error text-maximiza-blanco1'
                : 'bg-maximiza-verde1 text-maximiza-blanco1',
            ]"
          >
            {{ item.esPep || "NO" }}
          </div>
        </div>

        <div class="spreadsheet__item flex items-center justify-center">
          <div
            v-if="item.name"
            :class="[
              'border px-1 font-black text-[9px]',
              item.relatedWithPep === 'SI'
                ? 'bg-maximiza-error text-maximiza-blanco1'
                : 'bg-maximiza-verde1 text-maximiza-blanco1',
            ]"
          >
            {{ item.relatedWithPep || "NO" }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

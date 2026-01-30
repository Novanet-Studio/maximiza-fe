<script setup lang="ts">
const { source } = defineProps<{
  source: MXMZ.Stockholders[];
}>();
</script>

<template>
  <div class="w-full">
    <div class="spreadsheet__item text-center font-bold bg-gray-100">
      Accionistas / Junta directiva
    </div>

    <div class="grid grid-cols-[2fr_2fr_2fr_2fr_1fr_1fr]">
      <div class="spreadsheet__item font-bold text-[10px]">Nombre</div>
      <div class="spreadsheet__item font-bold text-[10px]">
        Documento de Identidad
      </div>
      <div class="spreadsheet__item font-bold text-[10px]">% Accionario</div>
      <div class="spreadsheet__item font-bold text-[10px]">Cargo</div>
      <div class="spreadsheet__item font-bold text-[10px] text-center">
        ES PEP
      </div>
      <div class="spreadsheet__item font-bold text-[10px] text-center">
        Rel. PEP
      </div>
    </div>

    <div class="grid grid-cols-[2fr_2fr_2fr_2fr_1fr_1fr]">
      <div class="spreadsheet__item">
        <div v-if="source[0]" class="content">{{ source[0].name }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[0]" class="content">{{ source[0].dni }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[0]" class="content">{{ source[0].percentage }}%</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[0]" class="content">{{ source[0].cargo }}</div>
        <div v-else class="content">N/A</div>
      </div>

      <div class="spreadsheet__item flex items-center justify-center">
        <div
          v-if="source[0]"
          :class="[
            'border px-1 font-black text-[9px]',
            source[0]?.esPep === 'SI'
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source[0]?.esPep || "NO" }}
        </div>
        <div v-else class="content">N/A</div>
      </div>

      <div class="spreadsheet__item flex items-center justify-center">
        <div
          v-if="source[0]"
          :class="[
            'border px-1 font-black text-[9px]',
            source[0]?.relatedWithPep === 'SI'
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source[0]?.relatedWithPep || "NO" }}
        </div>
        <div v-else class="content">N/A</div>
      </div>
    </div>

    <div class="grid grid-cols-[2fr_2fr_2fr_2fr_1fr_1fr]">
      <div class="spreadsheet__item">
        <div v-if="source[1]" class="content">{{ source[1].name }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[1]" class="content">{{ source[1].dni }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[1]" class="content">{{ source[1].percentage }}%</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[1]" class="content">{{ source[1].cargo }}</div>
        <div v-else class="content">N/A</div>
      </div>

      <div class="spreadsheet__item flex items-center justify-center">
        <div
          v-if="source[1]"
          :class="[
            'border px-1 font-black text-[9px]',
            source[1]?.esPep === 'SI'
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source[1]?.esPep || "NO" }}
        </div>
        <div v-else class="content">N/A</div>
      </div>

      <div class="spreadsheet__item flex items-center justify-center">
        <div
          v-if="source[1]"
          :class="[
            'border px-1 font-black text-[9px]',
            source[1]?.relatedWithPep === 'SI'
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source[1]?.relatedWithPep || "NO" }}
        </div>
        <div v-else class="content">N/A</div>
      </div>
    </div>

    <div class="grid grid-cols-[2fr_2fr_2fr_2fr_1fr_1fr]">
      <div class="spreadsheet__item">
        <div v-if="source[2]" class="content">{{ source[2].name }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[2]" class="content">{{ source[2].dni }}</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[2]" class="content">{{ source[2].percentage }}%</div>
        <div v-else class="content">N/A</div>
      </div>
      <div class="spreadsheet__item">
        <div v-if="source[2]" class="content">{{ source[2].cargo }}</div>
        <div v-else class="content">N/A</div>
      </div>

      <div class="spreadsheet__item flex items-center justify-center">
        <div
          v-if="source[2]"
          :class="[
            'border px-1 font-black text-[9px]',
            source[2]?.esPep === 'SI'
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source[2]?.esPep || "NO" }}
        </div>
        <div v-else class="content">N/A</div>
      </div>

      <div class="spreadsheet__item flex items-center justify-center">
        <div
          v-if="source[2]"
          :class="[
            'border px-1 font-black text-[9px]',
            source[2]?.relatedWithPep === 'SI'
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source[2]?.relatedWithPep || "NO" }}
        </div>
        <div v-else class="content">N/A</div>
      </div>
    </div>
  </div>
</template>

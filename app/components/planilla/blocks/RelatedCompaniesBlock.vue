<script setup lang="ts">
const { source } = defineProps<{
  source: MXMZ.RelatedCompanies[];
}>();
</script>

<template>
  <div class="grid grid-cols-[115px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center border-b border-maximiza-blanco1"
    >
      <h5 class="text-maximiza-blanco1 font-bold">Empresas relacionadas</h5>
    </aside>

    <div class="w-full">
      <div class="grid grid-cols-[1.5fr_1fr_1fr]">
        <div class="spreadsheet__item font-bold text-[10px]">
          Nombre o razón social
        </div>
        <div class="spreadsheet__item font-bold text-[10px]">
          Actividad económica
        </div>
        <div class="spreadsheet__item font-bold text-[10px]">
          Registro de información fiscal
        </div>
      </div>

      <div class="grid grid-cols-[1.5fr_1fr_1fr]">
        <div class="spreadsheet__item">
          <div v-if="source[0]" class="content">{{ source[0].name }}</div>
          <div v-else class="content">N/A</div>
        </div>
        <div class="spreadsheet__item">
          <div v-if="source[0]" class="content">{{ source[0].activity }}</div>
          <div v-else class="content">N/A</div>
        </div>
        <div class="spreadsheet__item">
          <div v-if="source[0]" class="content">{{ source[0].rif }}</div>
          <div v-else class="content">N/A</div>
        </div>
      </div>

      <div class="grid grid-cols-[1.5fr_1fr_1fr]">
        <div class="spreadsheet__item">
          <div v-if="source[1]" class="content">{{ source[1].name }}</div>
          <div v-else class="content">N/A</div>
        </div>
        <div class="spreadsheet__item">
          <div v-if="source[1]" class="content">{{ source[1].activity }}</div>
          <div v-else class="content">N/A</div>
        </div>
        <div class="spreadsheet__item">
          <div v-if="source[1]" class="content">{{ source[1].rif }}</div>
          <div v-else class="content">N/A</div>
        </div>
      </div>

      <div class="grid grid-cols-[1.5fr_1fr_1fr]">
        <div class="spreadsheet__item">
          <div v-if="source[2]" class="content">{{ source[2].name }}</div>
          <div v-else class="content">N/A</div>
        </div>
        <div class="spreadsheet__item">
          <div v-if="source[2]" class="content">{{ source[2].activity }}</div>
          <div v-else class="content">N/A</div>
        </div>
        <div class="spreadsheet__item">
          <div v-if="source[2]" class="content">{{ source[2].rif }}</div>
          <div v-else class="content">N/A</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { source } = defineProps<{
  source: MXMZ.RelatedCompanies[];
}>();
</script>

<template>
  <div class="grid grid-cols-[85px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[80px] flex justify-center items-center"
    >
      <h5 class="text-maximiza-blanco1 font-bold">Empresas relacionadas</h5>
    </aside>

    <div class="w-full">
      <div class="grid grid-cols-[1.5fr_1fr_1fr]">
        <div class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]">
          Nombre o razón social
        </div>
        <div class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]">
          Actividad económica
        </div>
        <div class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]">
          Registro de información fiscal
        </div>
      </div>

      <template v-for="(item, i) in source" :key="i">
        <div class="grid grid-cols-[1.5fr_1fr_1fr]">
          <div class="spreadsheet__item">
            <div class="content">{{ item.name }}</div>
          </div>
          <div class="spreadsheet__item">
            <div class="content">{{ item.activity }}</div>
          </div>
          <div class="spreadsheet__item">
            <div class="content">{{ item.rif }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

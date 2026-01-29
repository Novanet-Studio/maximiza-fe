<script setup lang="ts">
import { bankingInstituteOptions, getLabel } from "~/assets/data/formSources";
import { formatAmount } from "~/lib/utils";

const getBankLabel = (val: string) => getLabel(val, bankingInstituteOptions);

const { source } = defineProps<{
  source: MXMZ.BankReferences[];
}>();
</script>

<template>
  <div class="w-full grid grid-cols-[85px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[80px] flex justify-center items-center"
    >
      <h5 class="text-maximiza-blanco1 font-bold">
        Referencias bancarias
      </h5>
    </aside>
    <div>
      <div class="grid grid-cols-[2fr_1fr_1fr_1fr]">
        <div class="spreadsheet__item font-bold bg-maximiza-gris5">
          Institución del sector bancario
        </div>
        <div class="spreadsheet__item font-bold bg-maximiza-gris5">
          Tipo de cuenta
        </div>
        <div class="spreadsheet__item font-bold bg-maximiza-gris5">Nro de cuenta</div>
        <div
          class="spreadsheet__item row-span-3 flex items-center justify-center font-bold bg-maximiza-gris5"
        >
          Cifras promedio
        </div>
      </div>
      <template v-for="(bank, i) in source" :key="i">
        <div class="grid grid-cols-[2fr_1fr_1fr_1fr]">
          <div class="spreadsheet__item">
            <div class="content">{{ getBankLabel(bank.institution) }}</div>
          </div>
          <div class="spreadsheet__item">
            <div class="content">{{ bank.productType }}</div>
          </div>
          <div class="spreadsheet__item">
            <div class="content">{{ bank.accountNumber }}</div>
          </div>
          <div class="spreadsheet__item">
            <div class="content">{{ formatAmount(bank.averageAmount) }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { bankingInstituteOptions, getLabel } from "~/assets/data/formSources";
import { formatAmount } from "~/lib/utils";

const getBankLabel = (val: string) => getLabel(val, bankingInstituteOptions);

const { source } = defineProps<{
  source: MXMZ.FinancialInformation;
}>();
</script>

<template>
  <div class="w-full grid grid-cols-[115px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center"
    >
      <h5 class="text-maximiza-blanco1 font-bold">Referencias bancarias</h5>
    </aside>
    <div>
      <div class="grid grid-cols-[1fr_1fr]">
        <div class="spreadsheet__item">Institución del sector bancario:</div>
        <div class="spreadsheet__item">Nombre del producto:</div>

        <div class="spreadsheet__item">
          <div class="content">
            {{ getBankLabel(source.bankReference.institution) }}
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="content">{{ source.bankReference.productType }}</div>
        </div>

        <div class="spreadsheet__item">Número del producto:</div>
        <div class="spreadsheet__item">Cifras promedio:</div>

        <div class="spreadsheet__item">
          <div class="content">{{ source.bankReference.accountNumber }}</div>
        </div>
        <div class="spreadsheet__item">
          <div class="content">
            {{ formatAmount(source.bankReference.averageAmount) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

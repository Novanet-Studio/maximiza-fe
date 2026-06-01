<script setup lang="ts">
  import {
    monthlyIncomeOptions,
    economicActivityOptions,
    getLabel,
  } from '~/assets/data/formSources'

  import { formatAmount, formatDate } from '~/lib/utils'

  const { source } = defineProps<{
    source: MXMZ.FinancialInformation
  }>()
</script>

<template>
  <div class="spreadsheet__item flex items-center justify-center text-center font-bold">
    Fuente de ingresos del inversionista
  </div>

  <div class="grid w-full grid-cols-[1fr_1fr_1fr]">
    <div class="spreadsheet__item">
      <div class="grid h-full grid-cols-[1fr_auto] items-center">
        <span>Relación de dependencia</span>
        <div
          :class="[
            'ml-1 flex items-center justify-center border px-1 font-black',
            source.incomeSource?.includes('dependencia')
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source.incomeSource?.includes('dependencia') ? 'SI' : 'NO' }}
        </div>
      </div>
    </div>

    <div class="spreadsheet__item">
      <div class="grid h-full grid-cols-[1fr_auto] items-center">
        <span>Negocio propio</span>
        <div
          :class="[
            'ml-1 flex items-center justify-center border px-1 font-black',
            source.incomeSource?.includes('propio')
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source.incomeSource?.includes('propio') ? 'SI' : 'NO' }}
        </div>
      </div>
    </div>

    <div class="spreadsheet__item">
      <div class="grid h-full grid-cols-[1fr_auto] items-center">
        <span>Otras formas de ingreso</span>
        <div
          :class="[
            'ml-1 flex items-center justify-center border px-1 font-black',
            source.otherIncomeSource
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source.otherIncomeSource ? 'SI' : 'NO' }}
        </div>
      </div>
    </div>
  </div>

  <div class="grid w-full grid-cols-[100px_1fr]">
    <aside
      class="flex min-h-[60px] items-center justify-center border-b border-maximiza-blanco1 bg-maximiza-verde1"
    >
      <h5 class="font-bold text-maximiza-blanco1">Relación de dependencia:</h5>
    </aside>

    <div>
      <div class="grid w-full grid-cols-[2.2fr_1fr_1fr_1fr]">
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Nombre de la empresa:
            <div class="content">{{ source.company.name || 'N/A' }}</div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            RIF:
            <div class="content">
              {{ source.company.rif || 'N/A' }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Remuneración
            <div class="content">
              {{ formatAmount(source.company.remuneration) || 'N/A' }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Cargo que ocupa:
            <div class="content">{{ source.company.rol || 'N/A' }}</div>
          </div>
        </div>

        <div class="spreadsheet__item col-span-2">
          <div class="spreadsheet__form-item">
            Dirección de la empresa:
            <div class="content">{{ source.company.address || 'N/A' }}</div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Teléfono:
            <div class="content">{{ source.company.phone || 'N/A' }}</div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Ramo del negocio:
            <span class="content font-bold">
              {{ getLabel(source.company.branch, economicActivityOptions) || 'N/A' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid w-full grid-cols-[100px_1fr]">
    <aside
      class="flex min-h-[60px] items-center justify-center border-b border-maximiza-blanco1 bg-maximiza-verde1"
    >
      <h5 class="font-bold text-maximiza-blanco1">Negocio propio:</h5>
    </aside>

    <div>
      <div class="grid w-full grid-cols-[1.1fr_1.1fr_1fr_1fr_1fr]">
        <div class="spreadsheet__item col-span-2">
          <div class="spreadsheet__form-item">
            Nombre de la empresa:
            <div class="content">{{ source.business.name || 'N/A' }}</div>
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            RIF:
            <div class="content">{{ source.business.rif || 'N/A' }}</div>
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Ingresos mensuales:
            <div class="content">
              {{ formatAmount(source.business.income) || 'N/A' }}
            </div>
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Fecha de constitución:
            <div class="content">
              {{ formatDate(source.business.constitutionDate) || 'N/A' }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Datos del registro:
            <div class="content">
              {{ source.business.registerData || 'N/A' }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item col-span-4">
          <div class="spreadsheet__form-item">
            Dirección fiscal:
            <div class="content">
              {{ source.business.fiscalAddress || 'N/A' }}
            </div>
          </div>
        </div>

        <div class="col-span-full grid w-full grid-cols-2">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              Teléfono:
              <div class="content">
                {{ source.business.phone || 'N/A' }}
              </div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              Ramo del negocio:
              <div class="content">
                {{ getLabel(source.business.branch, economicActivityOptions) || 'N/A' }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-full grid w-full grid-cols-2">
          <div class="spreadsheet__item bg-gray-50 font-bold">Principales proveedores:</div>
          <div class="spreadsheet__item bg-gray-50 font-bold">Principales clientes:</div>
        </div>

        <div class="col-span-full grid w-full grid-cols-4">
          <div class="spreadsheet__item">Nombre o razón social:</div>
          <div class="spreadsheet__item">Ubicación:</div>
          <div class="spreadsheet__item">Nombre o razón social:</div>
          <div class="spreadsheet__item">Ubicación:</div>
        </div>

        <template v-for="i in [0, 1, 2]" :key="i">
          <div class="col-span-full grid w-full grid-cols-4">
            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.providers?.[i]?.name || 'N/A' }}
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.providers?.[i]?.location || 'N/A' }}
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.clients?.[i]?.name || 'N/A' }}
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.clients?.[i]?.location || 'N/A' }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div class="grid w-full grid-cols-[100px_1fr]">
    <aside class="flex min-h-[60px] items-center justify-center bg-maximiza-verde1">
      <h5 class="font-bold text-maximiza-blanco1">Otros ingresos:</h5>
    </aside>

    <div>
      <div class="grid h-full w-full grid-rows-2">
        <div class="col-span-full grid grid-cols-2">
          <div class="spreadsheet__item bg-gray-50 font-bold">
            Actividad generadora de los ingresos:
          </div>
          <div class="spreadsheet__item bg-gray-50 font-bold">Ingresos mensuales:</div>
        </div>

        <div class="col-span-full grid grid-cols-2">
          <div class="spreadsheet__item">
            <div class="content">
              {{ getLabel(source.otherIncomeSource, economicActivityOptions) || 'N/A' }}
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="content">
              {{ formatAmount(source.otherIncomeAmount) || 'N/A' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

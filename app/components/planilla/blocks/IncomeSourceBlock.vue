<script setup lang="ts">
import {
  monthlyIncomeOptions,
  economicActivityOptions,
  getLabel,
} from "~/assets/data/formSources";

import { formatDate } from "~/lib/utils";

const { source } = defineProps<{
  source: MXMZ.FinancialInformation;
}>();
</script>

<template>
  <div
    class="spreadsheet__item text-center font-bold flex justify-center items-center"
  >
    Fuente de ingresos del inversionista
  </div>

  <div class="grid grid-cols-[1fr_1fr_1fr] w-full">
    <div class="spreadsheet__item">
      <div class="grid grid-cols-[1fr_auto] h-full items-center">
        <span>Relación de dependencia</span>
        <div
          :class="[
            'border px-1 ml-1 font-black flex items-center justify-center',
            source.incomeSource?.includes('dependencia')
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source.incomeSource?.includes("dependencia") ? "SI" : "NO" }}
        </div>
      </div>
    </div>

    <div class="spreadsheet__item">
      <div class="grid grid-cols-[1fr_auto] h-full items-center">
        <span>Negocio propio</span>
        <div
          :class="[
            'border px-1 ml-1 font-black flex items-center justify-center',
            source.incomeSource?.includes('propio')
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source.incomeSource?.includes("propio") ? "SI" : "NO" }}
        </div>
      </div>
    </div>

    <div class="spreadsheet__item">
      <div class="grid grid-cols-[1fr_auto] h-full items-center">
        <span>Otras formas de ingreso</span>
        <div
          :class="[
            'border px-1 ml-1 font-black flex items-center justify-center',
            source.otherIncomeSource
              ? 'bg-maximiza-error text-maximiza-blanco1'
              : 'bg-maximiza-verde1 text-maximiza-blanco1',
          ]"
        >
          {{ source.otherIncomeSource ? "SI" : "NO" }}
        </div>
      </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-[100px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center border-b border-maximiza-blanco1"
    >
      <h5 class="text-maximiza-blanco1 font-bold">Relación de dependencia:</h5>
    </aside>

    <div>
      <div class="grid grid-cols-[2.2fr_1fr_1fr_1fr] w-full">
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Nombre de la empresa:
            <div class="content">{{ source.company.name || "N/A" }}</div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            RIF:
            <div class="content">
              {{ source.company.rif || "N/A" }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Remuneración
            <div class="content">
              {{
                getLabel(source.company.remuneration, monthlyIncomeOptions) ||
                "N/A"
              }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Cargo que ocupa:
            <div class="content">{{ source.company.rol || "N/A" }}</div>
          </div>
        </div>

        <div class="spreadsheet__item col-span-2">
          <div class="spreadsheet__form-item">
            Dirección de la empresa:
            <div class="content">{{ source.company.address || "N/A" }}</div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Teléfono:
            <div class="content">{{ source.company.phone || "N/A" }}</div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Ramo del negocio:
            <div class="content">
              {{
                getLabel(source.company.branch, economicActivityOptions) ||
                "N/A"
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-[100px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center border-b border-maximiza-blanco1"
    >
      <h5 class="text-maximiza-blanco1 font-bold">Negocio propio:</h5>
    </aside>

    <div>
      <div class="grid grid-cols-[1.1fr_1.1fr_1fr_1fr_1fr] w-full">
        <div class="spreadsheet__item col-span-2">
          <div class="spreadsheet__form-item">
            Nombre de la empresa:
            <div class="content">{{ source.business.name || "N/A" }}</div>
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            RIF:
            <div class="content">{{ source.business.rif || "N/A" }}</div>
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Ingresos mensuales:
            <div class="content">
              {{
                getLabel(source.business.income, monthlyIncomeOptions) || "N/A"
              }}
            </div>
          </div>
        </div>
        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Fecha de constitución:
            <div class="content">
              {{ formatDate(source.business.constitutionDate) || "N/A" }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item">
          <div class="spreadsheet__form-item">
            Datos del registro:
            <div class="content">
              {{ source.business.registerData || "N/A" }}
            </div>
          </div>
        </div>

        <div class="spreadsheet__item col-span-4">
          <div class="spreadsheet__form-item">
            Dirección fiscal:
            <div class="content">
              {{ source.business.fiscalAddress || "N/A" }}
            </div>
          </div>
        </div>

        <div class="col-span-full grid grid-cols-2 w-full">
          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              Teléfono:
              <div class="content">
                {{ source.business.phone || "N/A" }}
              </div>
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="spreadsheet__form-item">
              Ramo del negocio:
              <div class="content">
                {{
                  getLabel(source.business.branch, economicActivityOptions) ||
                  "N/A"
                }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-full grid grid-cols-2 w-full">
          <div class="spreadsheet__item font-bold bg-gray-50">
            Principales proveedores:
          </div>
          <div class="spreadsheet__item font-bold bg-gray-50">
            Principales clientes:
          </div>
        </div>

        <div class="w-full col-span-full grid grid-cols-4">
          <div class="spreadsheet__item">Nombre o razón social:</div>
          <div class="spreadsheet__item">Ubicación:</div>
          <div class="spreadsheet__item">Nombre o razón social:</div>
          <div class="spreadsheet__item">Ubicación:</div>
        </div>

        <template v-for="i in [0, 1, 2]" :key="i">
          <div class="w-full col-span-full grid grid-cols-4">
            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.providers?.[i]?.name || "N/A" }}
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.providers?.[i]?.location || "N/A" }}
              </div>
            </div>

            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.clients?.[i]?.name || "N/A" }}
              </div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">
                {{ source.business.clients?.[i]?.location || "N/A" }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-[100px_1fr]">
    <aside
      class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center"
    >
      <h5 class="text-maximiza-blanco1 font-bold">Otros ingresos:</h5>
    </aside>

    <div>
      <div class="h-full grid grid-rows-2 w-full">
        <div class="col-span-full grid grid-cols-2">
          <div class="spreadsheet__item font-bold bg-gray-50">
            Actividad generadora de los ingresos:
          </div>
          <div class="spreadsheet__item font-bold bg-gray-50">
            Ingresos mensuales:
          </div>
        </div>

        <div class="col-span-full grid grid-cols-2">
          <div class="spreadsheet__item">
            <div class="content">
              {{ source.otherIncomeSource || "N/A" }}
            </div>
          </div>

          <div class="spreadsheet__item">
            <div class="content">
              {{
                getLabel(source.otherIncomeAmount, monthlyIncomeOptions) ||
                "N/A"
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

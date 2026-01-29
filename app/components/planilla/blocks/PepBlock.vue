<script setup lang="ts">
const { source, stockholders } = defineProps<{
  source: MXMZ.PepProfile;
  stockholders?: MXMZ.Stockholders[];
}>();

import { getLabel, countriesOptions } from "~/assets/data/formSources";

const stock = computed(
  () =>
    stockholders?.filter(
      (s) => s.esPep === "SI" || s.relatedWithPep === "SI",
    ) || [],
);
</script>

<template>
  <div v-if="stock?.length > 0">
    <div class="spreadsheet__item font-bold text-[10px]">
      Accionistar / Junta directiva
    </div>

    <div class="w-full grid grid-cols-[85px_1fr]">
      <aside
        class="bg-maximiza-verde1 min-h-[80px] flex justify-center items-center"
      >
        <h5 class="text-maximiza-blanco1 font-bold">
          Persona expuesta politicamente
        </h5>
      </aside>
      <div>
        <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
          <div
            class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]"
          >
            Nombre
          </div>

          <div
            class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]"
          >
            Nombre del ente adscripción:
          </div>

          <div
            class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]"
          >
            Cargo que desempeña:
          </div>

          <div
            class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]"
          >
            País:
          </div>

          <div
            class="spreadsheet__item font-bold bg-maximiza-gris5 text-[10px]"
          >
            Identificación del relacionado:
          </div>
        </div>

        <template v-for="(item, i) in stockholders" :key="i">
          <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr]">
            <div class="spreadsheet__item">
              <div class="content">{{ item.name }}</div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">{{ item.entityName }}</div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">{{ item.position }}</div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">{{ item.country }}</div>
            </div>
            <div class="spreadsheet__item">
              <div class="content">{{ item.relatedIdentification }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <div v-if="!stockholders">
    <div
      class="spreadsheet__item text-center font-bold bg-maximiza-gris5 text-[10px]"
    >
      Perfil PEP (Persona expuesta políticamente) del inversionista
    </div>

    <div class="spreadsheet__item flex items-center justify-start">
      <span class="text-[10px]">¿El inversionista es PEP?</span>
      <div
        :class="[
          'border px-1 ml-1 font-black',
          source.isPep === 'SI'
            ? 'bg-maximiza-error text-maximiza-blanco1'
            : 'bg-maximiza-verde1 text-maximiza-blanco1',
        ]"
      >
        {{ source.isPep }}
      </div>
    </div>

    <table v-if="source.isPep === 'SI'" class="w-full">
      <tbody class="grid grid-cols-[1fr_1fr_1fr_1fr]">
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Nombre del ente adscripción:
            <div class="content">{{ source.entityName }}</div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Cargo que desempeña:
            <div class="content">{{ source.position }}</div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            País:
            <div class="content">
              <div class="content">
                {{ getLabel(source.country, countriesOptions) }}
              </div>
            </div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Identificación del relacionado:
            <div class="content">{{ source.relatedIdentification }}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="spreadsheet__item flex items-center justify-start">
      <span class="text-[10px]"
        >¿El inversionista tiene parentesco con un PEP?</span
      >
      <div
        :class="[
          'border px-1 ml-1 font-black',
          source.hasPepRelationship === 'SI'
            ? 'bg-maximiza-error text-maximiza-blanco1'
            : 'bg-maximiza-verde1 text-maximiza-blanco1',
        ]"
      >
        {{ source.hasPepRelationship }}
      </div>
    </div>

    <table v-if="source.hasPepRelationship === 'SI'" class="w-full">
      <tbody class="grid grid-cols-[1fr_1fr_1fr_1fr]">
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Nombre del ente adscripción:
            <div class="content">{{ source.entityName }}</div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Cargo que desempeña:
            <div class="content">{{ source.position }}</div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            País:
            <div class="content">
              {{ getLabel(source.country, countriesOptions) }}
            </div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Identificación del relacionado:
            <div class="content">{{ source.relatedIdentification }}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="spreadsheet__item flex items-center justify-start">
      <span class="text-[10px]"
        >¿El inversionista es asociado cercano de un PEP?</span
      >
      <div
        :class="[
          'border px-1 ml-1 font-black',
          source.isPepAssociate === 'SI'
            ? 'bg-maximiza-error text-maximiza-blanco1'
            : 'bg-maximiza-verde1 text-maximiza-blanco1',
        ]"
      >
        {{ source.isPepAssociate }}
      </div>
    </div>

    <table v-if="source.isPepAssociate === 'SI'" class="w-full">
      <tbody class="grid grid-cols-[1fr_1fr_1fr_1fr]">
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Nombre del ente adscripción:
            <div class="content">{{ source.entityName }}</div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Cargo que desempeña:
            <div class="content">{{ source.position }}</div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            País:
            <div class="content">
              {{ getLabel(source.country, countriesOptions) }}
            </div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="spreadsheet__form-item">
            Identificación del relacionado:
            <div class="content">{{ source.relatedIdentification }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

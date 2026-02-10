<script setup lang="ts">
const { source, stockholders } = defineProps<{
  source: MXMZ.PepProfile;
  stockholders?: MXMZ.Stockholders[];
}>();

import { getLabel, countriesOptions } from "~/assets/data/formSources";
</script>

<template>
  <div v-if="stockholders && stockholders?.length > 0">
    <div class="spreadsheet__item font-bold text-[10px]">
      Accionistar / Junta directiva
    </div>

    <div class="w-full grid grid-cols-[115px_1fr]">
      <aside
        class="bg-maximiza-verde1 min-h-[60px] flex justify-center items-center"
      >
        <h5 class="text-maximiza-blanco1 font-bold">
          Persona expuesta politicamente
        </h5>
      </aside>
      <div>
        <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div class="spreadsheet__item font-bold text-[10px]">
            Nombre de la institución o ente de adscripción:
          </div>

          <div class="spreadsheet__item font-bold text-[10px]">
            Cargo que desempeña:
          </div>

          <div class="spreadsheet__item font-bold text-[10px]">País:</div>

          <div class="spreadsheet__item font-bold text-[10px]">
            Identificación del pep en caso de relacionado::
          </div>
        </div>

        <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[0] &&
                (stockholders[0].esPep == 'SI' ||
                  stockholders[0].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[0].entityName }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[0] &&
                (stockholders[0].esPep == 'SI' ||
                  stockholders[0].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[0].position }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[0] &&
                (stockholders[0].esPep == 'SI' ||
                  stockholders[0].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[0].country }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[0] &&
                (stockholders[0].esPep == 'SI' ||
                  stockholders[0].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[0].relatedIdentification }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
        </div>

        <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[1] &&
                (stockholders[1].esPep == 'SI' ||
                  stockholders[1].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[1].entityName }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[1] &&
                (stockholders[1].esPep == 'SI' ||
                  stockholders[1].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[1].position }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[1] &&
                (stockholders[1].esPep == 'SI' ||
                  stockholders[1].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[1].country }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[1] &&
                (stockholders[1].esPep == 'SI' ||
                  stockholders[1].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[1].relatedIdentification }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
        </div>

        <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[2] &&
                (stockholders[2].esPep == 'SI' ||
                  stockholders[2].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[2].entityName }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[2] &&
                (stockholders[2].esPep == 'SI' ||
                  stockholders[2].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[2].position }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[2] &&
                (stockholders[2].esPep == 'SI' ||
                  stockholders[2].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[2].country }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
          <div class="spreadsheet__item">
            <div
              v-if="
                stockholders[2] &&
                (stockholders[2].esPep == 'SI' ||
                  stockholders[2].relatedWithPep == 'SI')
              "
              class="content"
            >
              {{ stockholders[2].relatedIdentification }}
            </div>
            <div v-else class="content">N/A</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="!stockholders">
    <table class="w-full">
      <thead class="grid grid-cols-[4fr_7fr_4fr_3fr_4fr]">
        <tr class="spreadsheet__item">
          <td>Persona expuesta politicamente (PEP):</td>
        </tr>
        <tr class="spreadsheet__item">
          <td>Nombre del ente adscripción:</td>
        </tr>
        <tr class="spreadsheet__item">
          <td>Cargo que desempeña:</td>
        </tr>
        <tr class="spreadsheet__item">
          <td>País:</td>
        </tr>
        <tr class="spreadsheet__item">
          <td>Identificación del relacionado:</td>
        </tr>
      </thead>
      <tbody class="grid grid-cols-[4fr_7fr_4fr_3fr_4fr]">
        <!-- fila -->
        <tr class="spreadsheet__item">
          <td class="grid grid-cols-[1fr_auto]">
            <span> El inversionista es (PEP)</span>
            <div
              :class="[
                'border px-1 ml-1 font-black flex items-center justify-center',
                source.isPep === 'SI'
                  ? 'bg-maximiza-error text-maximiza-blanco1'
                  : 'bg-maximiza-verde1 text-maximiza-blanco1',
              ]"
            >
              {{ source.isPep }}
            </div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.isPep === "SI" ? source.entityName : "" }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.isPep === "SI" ? source.position : "" }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{
              source.isPep === "SI"
                ? getLabel(source.country, countriesOptions)
                : ""
            }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.isPep === "SI" ? source.relatedIdentification : "" }}
          </td>
        </tr>
        <!-- fila -->
        <tr class="spreadsheet__item">
          <td class="grid grid-cols-[1fr_auto]">
            <span> Tiene parentesco con (PEP)</span>
            <div
              :class="[
                'border px-1 ml-1 font-black flex items-center justify-center',
                source.hasPepRelationship === 'SI'
                  ? 'bg-maximiza-error text-maximiza-blanco1'
                  : 'bg-maximiza-verde1 text-maximiza-blanco1',
              ]"
            >
              {{ source.hasPepRelationship }}
            </div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.hasPepRelationship === "SI" ? source.entityName : "" }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.hasPepRelationship === "SI" ? source.position : "" }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{
              source.hasPepRelationship === "SI"
                ? getLabel(source.country, countriesOptions)
                : ""
            }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{
              source.hasPepRelationship === "SI"
                ? source.relatedIdentification
                : ""
            }}
          </td>
        </tr>
        <!-- fila -->
        <tr class="spreadsheet__item">
          <td class="grid grid-cols-[1fr_auto]">
            <span> Es asociado cercano de (PE)</span>
            <div
              :class="[
                'border px-1 ml-1 font-black flex items-center justify-center',
                source.isPepAssociate === 'SI'
                  ? 'bg-maximiza-error text-maximiza-blanco1'
                  : 'bg-maximiza-verde1 text-maximiza-blanco1',
              ]"
            >
              {{ source.isPep }}
            </div>
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.isPepAssociate === "SI" ? source.entityName : "" }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{ source.isPepAssociate === "SI" ? source.position : "" }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{
              source.isPepAssociate === "SI"
                ? getLabel(source.country, countriesOptions)
                : ""
            }}
          </td>
        </tr>
        <tr class="spreadsheet__item">
          <td class="font-bold">
            {{
              source.isPepAssociate === "SI" ? source.relatedIdentification : ""
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

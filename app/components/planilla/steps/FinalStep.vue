<script setup lang="ts">
import { usePlanillaWizard } from "~/composables/usePlanillaWizard";
import { getPageStyles } from "~/lib/pdfHelper";

import { PLANILLA_NATURAL_MOCK_DATA } from "~/assets/data/planilla_result.mock";

const wizard = usePlanillaWizard();

const mainDocumentContent = ref<HTMLElement | null>(null);
const openingDocumentContent = ref<HTMLElement | null>(null);
const originFundsDocumentContent = ref<HTMLElement | null>(null);
const signatureRegistrationDocumentContent = ref<HTMLElement | null>(null);

const isGenerating = ref(false);
const currentStatus = ref("");

const generateAndDownload = async (
  element: HTMLElement,
  filename: string,
  styles: string,
) => {
  const html = element.innerHTML;

  const response = await $fetch("/api/generate-pdf", {
    method: "POST",
    body: {
      htmlContent: html,
      cssContent: styles,
    },
    responseType: "blob",
  });

  const blob = new Blob([response as BlobPart], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};

const handleDownload = async () => {
  if (
    !process.client ||
    !mainDocumentContent.value ||
    !openingDocumentContent.value ||
    !originFundsDocumentContent.value ||
    !signatureRegistrationDocumentContent.value
  )
    return;

  isGenerating.value = true;
  const type = wizard.state.value.type;

  try {
    currentStatus.value = "Preparando estilos...";
    const styles = getPageStyles();

    const documents = [
      {
        ref: mainDocumentContent.value,
        name: `1_Ficha_Identificacion_${type}.pdf`,
        label: "Ficha de Identificación",
      },
      {
        ref: openingDocumentContent.value,
        name: `2_Poder_Apertura_${type}.pdf`,
        label: "Poder de Apertura",
      },
      {
        ref: originFundsDocumentContent.value,
        name: `3_Origen_Fondos_${type}.pdf`,
        label: "Origen de Fondos",
      },
      {
        ref: signatureRegistrationDocumentContent.value,
        name: `4_Registro_Firmas_${type}.pdf`,
        label: "Registro de Firmas",
      },
    ];

    for (const doc of documents) {
      currentStatus.value = `Generando: ${doc.label}...`;
      await generateAndDownload(doc.ref, doc.name, styles);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    currentStatus.value = "¡Descargas completadas!";
  } catch (error) {
    console.error("Error generando PDFs:", error);
    alert(
      "Hubo un error al generar uno de los documentos. Por favor revise su conexión.",
    );
  } finally {
    isGenerating.value = false;
    currentStatus.value = "";
  }
};

const EMAIL = "contacto@maximiza.com.ve";

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
};

defineExpose({
  validate: () => {},
});
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center py-12">
    <div class="text-maximiza-verde1 text-6xl mb-6">
      <font-awesome-icon :icon="['fas', 'circle-check']" />
    </div>

    <h4 class="text-maximiza-negro1 font-black text-2xl md:text-3xl mb-2">
      ¡El expediente está listo!
    </h4>

    <p class="text-maximiza-gris1 text-md mb-8 max-w-2xl mx-auto">
      Para poder validar el registro es necesario enviar a

      <b
        class="text-maximiza-verde1 hover:underline cursor-pointer"
        @click="copyEmail"
        title="Haz click para copiar"
      >
        {{ EMAIL }}
      </b>

      las planillas descargadas más los recaudos indicados
    </p>

    <div class="flex flex-col items-center gap-2 mb-2">
      <button
        @click="handleDownload"
        :disabled="isGenerating"
        class="button-primary disabled:opacity-70 disabled:cursor-wait"
      >
        <font-awesome-icon
          :icon="['fas', isGenerating ? 'spinner' : 'download']"
          :spin="isGenerating"
        />
        {{ isGenerating ? "Procesando..." : "Descargar todos los documentos" }}
      </button>

      <span
        v-if="isGenerating"
        class="text-xs font-bold text-maximiza-verde1 animate-pulse"
      >
        {{ currentStatus }}
      </span>
    </div>

    <span class="mb-12 text-xs text-maximiza-gris1">
      Nota: Si su navegador bloquea las descargas múltiples, por favor permita
      las ventanas emergentes para este sitio.
    </span>

    <div class="w-full p-4 md:p-8 rounded overflow-auto">
      <div class="flex flex-col gap-8 justify-center items-center">
        <!-- Documento 1: Ficha Identificación -->
        <div class="w-a4 relative">
          <p
            class="text-left text-xs font-bold text-maximiza-gris2 mb-1 uppercase"
          >
            1. Ficha de Identificación
          </p>
          <div
            ref="mainDocumentContent"
            class="bg-maximiza-blanco1 shadow-lg origin-top"
          >
            <PlanillaPdfMainDocument :data="wizard.state.value.formData" />
          </div>
        </div>

        <!-- Documento 2: Poder Apertura -->
        <div class="w-a4 relative">
          <p
            class="text-left text-xs font-bold text-maximiza-gris2 mb-1 uppercase"
          >
            2. Poder de Apertura
          </p>
          <div
            ref="openingDocumentContent"
            class="bg-maximiza-blanco1 shadow-lg origin-top"
          >
            <PlanillaPdfOpeningDocument :data="wizard.state.value.formData" />
          </div>
        </div>

        <!-- Documento 3: Origen de Fondos -->
        <div class="w-a4 relative">
          <p
            class="text-left text-xs font-bold text-maximiza-gris2 mb-1 uppercase"
          >
            3. Origen de Fondos
          </p>
          <div
            ref="originFundsDocumentContent"
            class="bg-maximiza-blanco1 shadow-lg origin-top"
          >
            <PlanillaPdfOriginFundsDocuments
              :data="wizard.state.value.formData"
            />
          </div>
        </div>

        <!-- Documento 4: Registro de Firmas -->
        <div class="w-a4 relative">
          <p
            class="text-left text-xs font-bold text-maximiza-gris2 mb-1 uppercase"
          >
            4. Registro de Firmas
          </p>
          <div
            ref="signatureRegistrationDocumentContent"
            class="bg-maximiza-blanco1 shadow-lg origin-top"
          >
            <PlanillaPdfSignatureRegistrationDocument
              :data="wizard.state.value.formData"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

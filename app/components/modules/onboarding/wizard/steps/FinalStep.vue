<script setup lang="ts">
import { useOnboardingWizard } from "~/composables/useOnboardingWizard";
import { getPageStyles } from "~/lib/pdfHelper";

import { PLANILLA_NATURAL_MOCK_DATA } from "~/assets/data/planilla_result.mock";

const wizard = useOnboardingWizard();

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
        name: `1_Ficha_Identificacion_${type == 'persona-natural' ? 'Persona_Natural' : 'Persona_Juridica'}.pdf`,
        label: "Ficha de Identificación",
      },
      {
        ref: openingDocumentContent.value,
        name: `2_Poder_Apertura_${type == 'persona-natural' ? 'Persona_Natural' : 'Persona_Juridica'}.pdf`,
        label: "Poder de Apertura",
      },
      {
        ref: originFundsDocumentContent.value,
        name: `3_Origen_Fondos_${type == 'persona-natural' ? 'Persona_Natural' : 'Persona_Juridica'}.pdf`,
        label: "Origen de Fondos",
      },
      {
        ref: signatureRegistrationDocumentContent.value,
        name: `4_Registro_Firmas_${type == 'persona-natural' ? 'Persona_Natural' : 'Persona_Juridica'}.pdf`,
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
  validate: () => { },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center py-6 md:py-12">
    <picture class="mb-12">
      <img class="w-[240px] md:w-[300px] h-auto" src="/images/brand/imagotipo.svg" alt="Maximiza Logo" title="Maximiza Logo" />
    </picture>

    <h2 class="text-black-alt font-black text-2xl md:text-3xl mb-2">
      ¡El expediente está listo!
    </h2>

    <p class="text-gray text-md mb-8 max-w-2xl mx-auto">
      Para poder validar el registro es necesario enviar a

      <b class="text-primary hover:underline cursor-pointer" @click="copyEmail" title="Haz click para copiar">
        {{ EMAIL }}
      </b>

      las planillas descargadas más los recaudos indicados
    </p>

    <div class="flex flex-col items-center gap-2 mb-2">
      <UiButton :onClick="handleDownload" :disabled="isGenerating"
        :text="isGenerating ? 'Procesando...' : 'Descargar todos los documentos'"
        :icon="isGenerating ? 'spinner' : 'download'" :spin="isGenerating" />

      <span v-if="isGenerating" class="text-xs font-bold text-primary animate-pulse">
        {{ currentStatus }}
      </span>
    </div>

    <span class="mb-12 text-xs text-gray">
      <strong>Nota:</strong> Si su navegador bloquea las descargas múltiples, por favor permita
      las ventanas emergentes para este sitio.
    </span>

    <div class="w-full p-4 md:p-8 rounded overflow-auto">
      <div class="flex flex-col gap-8 justify-center items-center">
        <div class="max-w-a4 relative">
          <p class="text-left text-lg font-bold text-black-alt mb-1 uppercase">
            1. Ficha de Identificación
          </p>
          <div ref="mainDocumentContent" class="bg-white origin-top">
            <ModulesOnboardingPdfMainDocument :data="wizard.state.value.formData" />
          </div>
        </div>

        <div class="max-w-a4 relative">
          <p class="text-left text-lg font-bold text-black-alt mb-1 uppercase">
            2. Poder de Apertura
          </p>
          <div ref="openingDocumentContent" class="bg-white origin-top">
            <ModulesOnboardingPdfOpeningDocument :data="wizard.state.value.formData" />
          </div>
        </div>

        <div class="max-w-a4 relative">
          <p class="text-left text-lg font-bold text-black-alt mb-1 uppercase">
            3. Origen de Fondos
          </p>
          <div ref="originFundsDocumentContent" class="bg-white origin-top">
            <ModulesOnboardingPdfOriginFundsDocuments :data="wizard.state.value.formData" />
          </div>
        </div>

        <div class="max-w-a4 relative">
          <p class="text-left text-lg font-bold text-black-alt mb-1 uppercase">
            4. Registro de Firmas
          </p>
          <div ref="signatureRegistrationDocumentContent" class="bg-white origin-top">
            <ModulesOnboardingPdfSignatureRegistrationDocument :data="wizard.state.value.formData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

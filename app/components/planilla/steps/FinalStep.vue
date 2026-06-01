<script setup lang="ts">
  import { usePlanillaWizard } from '~/composables/usePlanillaWizard'
  import { getPageStyles } from '~/lib/pdfHelper'

  import { PLANILLA_NATURAL_MOCK_DATA } from '~/assets/data/planilla_result.mock'

  const wizard = usePlanillaWizard()

  const mainDocumentContent = ref<HTMLElement | null>(null)
  const openingDocumentContent = ref<HTMLElement | null>(null)
  const originFundsDocumentContent = ref<HTMLElement | null>(null)
  const signatureRegistrationDocumentContent = ref<HTMLElement | null>(null)

  const isGenerating = ref(false)
  const currentStatus = ref('')

  const generateAndDownload = async (element: HTMLElement, filename: string, styles: string) => {
    const html = element.innerHTML

    const response = await $fetch('/api/generate-pdf', {
      method: 'POST',
      body: {
        htmlContent: html,
        cssContent: styles,
      },
      responseType: 'blob',
    })

    const blob = new Blob([response as BlobPart], { type: 'application/pdf' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
  }

  const handleDownload = async () => {
    if (
      !process.client ||
      !mainDocumentContent.value ||
      !openingDocumentContent.value ||
      !originFundsDocumentContent.value ||
      !signatureRegistrationDocumentContent.value
    )
      return

    isGenerating.value = true
    const type = wizard.state.value.type

    try {
      currentStatus.value = 'Preparando estilos...'
      const styles = getPageStyles()

      const documents = [
        {
          ref: mainDocumentContent.value,
          name: `1_Ficha_Identificacion_${type}.pdf`,
          label: 'Ficha de Identificación',
        },
        {
          ref: openingDocumentContent.value,
          name: `2_Poder_Apertura_${type}.pdf`,
          label: 'Poder de Apertura',
        },
        {
          ref: originFundsDocumentContent.value,
          name: `3_Origen_Fondos_${type}.pdf`,
          label: 'Origen de Fondos',
        },
        {
          ref: signatureRegistrationDocumentContent.value,
          name: `4_Registro_Firmas_${type}.pdf`,
          label: 'Registro de Firmas',
        },
      ]

      for (const doc of documents) {
        currentStatus.value = `Generando: ${doc.label}...`
        await generateAndDownload(doc.ref, doc.name, styles)

        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      currentStatus.value = '¡Descargas completadas!'
    } catch (error) {
      console.error('Error generando PDFs:', error)
      alert('Hubo un error al generar uno de los documentos. Por favor revise su conexión.')
    } finally {
      isGenerating.value = false
      currentStatus.value = ''
    }
  }

  const EMAIL = 'contacto@maximiza.com.ve'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch (err) {
      console.error('Error al copiar: ', err)
    }
  }

  defineExpose({
    validate: () => {},
  })
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="mb-6 text-6xl text-maximiza-verde1">
      <font-awesome-icon :icon="['fas', 'circle-check']" />
    </div>

    <h4 class="mb-2 text-2xl font-black text-maximiza-negro1 md:text-3xl">
      ¡El expediente está listo!
    </h4>

    <p class="text-md mx-auto mb-8 max-w-2xl text-maximiza-gris1">
      Para poder validar el registro es necesario enviar a

      <b
        class="cursor-pointer text-maximiza-verde1 hover:underline"
        @click="copyEmail"
        title="Haz click para copiar"
      >
        {{ EMAIL }}
      </b>

      las planillas descargadas más los recaudos indicados
    </p>

    <div class="mb-2 flex flex-col items-center gap-2">
      <button
        @click="handleDownload"
        :disabled="isGenerating"
        class="button-primary disabled:cursor-wait disabled:opacity-70"
      >
        <font-awesome-icon
          :icon="['fas', isGenerating ? 'spinner' : 'download']"
          :spin="isGenerating"
        />
        {{ isGenerating ? 'Procesando...' : 'Descargar todos los documentos' }}
      </button>

      <span v-if="isGenerating" class="animate-pulse text-xs font-bold text-maximiza-verde1">
        {{ currentStatus }}
      </span>
    </div>

    <span class="mb-12 text-xs text-maximiza-gris1">
      Nota: Si su navegador bloquea las descargas múltiples, por favor permita las ventanas
      emergentes para este sitio.
    </span>

    <div class="w-full overflow-auto rounded p-4 md:p-8">
      <div class="flex flex-col items-center justify-center gap-8">
        <!-- Documento 1: Ficha Identificación -->
        <div class="relative w-a4">
          <p class="mb-1 text-left text-xs font-bold uppercase text-maximiza-gris2">
            1. Ficha de Identificación
          </p>
          <div ref="mainDocumentContent" class="origin-top bg-maximiza-blanco1 shadow-lg">
            <PlanillaPdfMainDocument :data="wizard.state.value.formData" />
          </div>
        </div>

        <!-- Documento 2: Poder Apertura -->
        <div class="relative w-a4">
          <p class="mb-1 text-left text-xs font-bold uppercase text-maximiza-gris2">
            2. Poder de Apertura
          </p>
          <div ref="openingDocumentContent" class="origin-top bg-maximiza-blanco1 shadow-lg">
            <PlanillaPdfOpeningDocument :data="wizard.state.value.formData" />
          </div>
        </div>

        <!-- Documento 3: Origen de Fondos -->
        <div class="relative w-a4">
          <p class="mb-1 text-left text-xs font-bold uppercase text-maximiza-gris2">
            3. Origen de Fondos
          </p>
          <div ref="originFundsDocumentContent" class="origin-top bg-maximiza-blanco1 shadow-lg">
            <PlanillaPdfOriginFundsDocuments :data="wizard.state.value.formData" />
          </div>
        </div>

        <!-- Documento 4: Registro de Firmas -->
        <div class="relative w-a4">
          <p class="mb-1 text-left text-xs font-bold uppercase text-maximiza-gris2">
            4. Registro de Firmas
          </p>
          <div
            ref="signatureRegistrationDocumentContent"
            class="origin-top bg-maximiza-blanco1 shadow-lg"
          >
            <PlanillaPdfSignatureRegistrationDocument :data="wizard.state.value.formData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

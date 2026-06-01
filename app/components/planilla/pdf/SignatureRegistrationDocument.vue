<script setup lang="ts">
  import { MAXIMIZA_LOGO } from '~/assets/data/maximiza-logo'

  const MaximizaLogo = MAXIMIZA_LOGO

  const props = defineProps<{
    data: MXMZ.WizardPlanillaResult
  }>()

  interface Signatory {
    role: string
    name: string
    id: string
    phone?: string
    email?: string
    isMainClient?: boolean
  }

  const isNatural = computed(() => {
    return !props.data.enterpriseIdentification?.taxInformationRegistration
  })

  const personal = computed(() => props.data.personalData || {})
  const enterprise = computed(() => props.data.enterpriseIdentification || ({} as any))
  const financial = computed(() => props.data.financialInformation || ({} as any))

  const clientInfo = computed(() => {
    if (isNatural.value) {
      return {
        name: `${personal.value.firstName} ${personal.value.lastName}`,
        id: `C.I: ${personal.value.identification}`,
      }
    } else {
      return {
        name: enterprise.value.socialReason,
        id: `R.I.F: ${enterprise.value.taxType}-${enterprise.value.taxInformationRegistration}`,
      }
    }
  })

  const signatories = computed<Signatory[]>(() => {
    const list: Signatory[] = []

    if (isNatural.value) {
      list.push({
        role: 'Cliente',
        name: `${personal.value.firstName} ${personal.value.lastName}`,
        id: personal.value.identification,
        phone: personal.value.phones,
        email: personal.value.email,
        isMainClient: true,
      })

      if (personal.value.hasLegalRepresentative === 'SI') {
        list.push({
          role: 'Persona Autorizada',
          name: personal.value.legalRepresentativeFullname,
          id: personal.value.legalRepresentativeIdentification,
          phone: '',
          email: '',
        })
      }
    } else {
      const reps = financial.value.legalRepresentatives || []
      reps.forEach((rep: any) => {
        list.push({
          role: 'Persona Autorizada',
          name: rep.name,
          id: rep.dni || `${rep.dniType}${rep.dniNumber}`,
          phone: '',
          email: '',
        })
      })
    }

    return list
  })

  const formCode = computed(() => (isNatural.value ? 'PCL-FRF-PN' : 'PCL-FRF-PJ'))
</script>

<template>
  <div class="spreadsheet" style="padding: 1rem">
    <div class="page-break-container">
      <header class="spreadsheet__header relative">
        <img class="spreadsheet__image" :src="MaximizaLogo" alt="logo" />

        <div class="absolute right-0 top-0 text-right text-xs font-bold">
          {{ formCode }}
        </div>

        <div class="mt-4 w-full text-right">
          <h2 class="text-sm font-bold uppercase">Contrato de Cuenta de Corretaje Bursátil</h2>
          <h3 class="text-gray-600 text-sm font-bold uppercase">ANEXO I-B</h3>
          <h1 class="text-lg font-bold uppercase text-maximiza-verde1">
            Ficha de Registro de Firma
          </h1>
          <h4 class="text-sm font-bold uppercase">
            {{ isNatural ? 'Persona Natural' : 'Persona Jurídica' }}
          </h4>
        </div>
      </header>

      <div class="text-maximiza-azul1 my-4 text-center text-sm font-bold uppercase">
        Personas autorizadas para colocar órdenes e impartir instrucciones en nombre del cliente
      </div>

      <div class="border-black mb-6 border">
        <div class="grid grid-cols-[1fr_1fr]">
          <div class="border-black border-r p-1">
            <div class="text-[10px] font-bold">Nombre del Cliente</div>
            <div class="text-sm font-bold uppercase">{{ clientInfo.name }}</div>
          </div>
          <div class="p-1">
            <div class="text-[10px] font-bold">Cédula de identidad / R.I.F.</div>
            <div class="text-sm font-bold uppercase">{{ clientInfo.id }}</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <template v-for="(sig, index) in signatories" :key="index">
          <div class="signature-card break-inside-avoid border-2 border-maximiza-verde1">
            <div class="grid grid-cols-[50px_1fr]">
              <div
                class="bg-gray-50 flex items-center justify-center border-r-2 border-maximiza-verde1 text-xl font-bold text-maximiza-verde1"
              >
                {{ sig.isMainClient ? 'C' : index + (isNatural ? 0 : 1) }}
              </div>
              <div class="border-b border-maximiza-verde1 py-1 text-center">
                <div class="text-sm font-bold">Ficha de Registro de Firma</div>
                <div class="text-gray-600 text-sm font-bold">({{ sig.role }})</div>
              </div>
            </div>

            <div class="p-2">
              <div class="border-black mb-1 grid grid-cols-[2fr_1fr] border-b pb-1">
                <div class="border-black border-r pr-2">
                  <div class="text-[10px] font-bold">Nombre:</div>
                  <div class="text-xs uppercase">{{ sig.name }}</div>
                </div>
                <div class="pl-2">
                  <div class="text-[10px] font-bold">C.I. / Pasaporte:</div>
                  <div class="text-xs uppercase">{{ sig.id }}</div>
                </div>
              </div>

              <div class="border-black mb-1 grid grid-cols-2 border-b pb-1">
                <div class="border-black border-r pr-2">
                  <div class="text-[10px] font-bold">Teléfono:</div>
                  <div class="text-xs">
                    {{ sig.phone || '________________' }}
                  </div>
                </div>
                <div class="pl-2">
                  <div class="text-[10px] font-bold">Correo electrónico:</div>
                  <div class="text-xs">
                    {{ sig.email || '________________' }}
                  </div>
                </div>
              </div>

              <div class="border-black mb-2 grid grid-cols-1 border-b pb-1">
                <div class="mb-1 text-[10px] font-bold">Régimen de Firmas:</div>
                <div class="flex items-center gap-4 text-xs">
                  <div class="flex items-center gap-1">
                    <span>Conjuntas</span>
                    <div class="border-black h-4 w-4 border"></div>
                  </div>
                  <div class="flex items-center gap-1">
                    <span>Indistintas</span>
                    <div class="border-black h-4 w-4 border"></div>
                  </div>
                  <div class="flex w-full items-center gap-1">
                    <span>Otro</span>
                    <div class="border-black h-4 w-full border-b"></div>
                  </div>
                </div>
              </div>

              <div class="grid min-h-[100px] grid-cols-2">
                <div class="border-black flex flex-col items-center justify-end border-r pr-2">
                  <div class="border-black w-full border-t"></div>
                  <div class="mt-1 text-[10px] font-bold">Firma</div>
                </div>
                <div class="flex flex-col items-center justify-end pl-2">
                  <div class="border-black relative h-full w-full border">
                    <div class="absolute bottom-1 w-full text-center text-[10px] font-bold">
                      Huella
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="border-black mt-6 break-inside-avoid border-2 p-2 text-center text-xs font-bold">
        El Cliente expresamente declara que las personas cuyos datos y firma aparecen en las
        presentes Fichas de Registro de Firma, son las únicas autorizadas para colocar órdenes e
        impartir instrucciones en su nombre.
      </div>

      <div class="border-black mt-12 break-inside-avoid border-2 p-4">
        <div class="mt-8 grid grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <div class="border-black w-full border-b"></div>
            <div class="text-[10px]">Fecha</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="border-black w-full border-b"></div>
            <div class="text-[10px]">Nombre del Cliente</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="border-black w-full border-b"></div>
            <div class="text-[10px]">Firma del Cliente</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .page-break-container {
    page-break-after: always;
  }

  .spreadsheet {
    width: 100%;
    max-width: 100%;
    padding: 1rem 2rem;
  }

  .spreadsheet__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .spreadsheet__image {
    width: 150px;
  }

  /* Utilidad para evitar que las fichas se corten al imprimir */
  .break-inside-avoid {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media print {
    .spreadsheet {
      padding: 0;
    }
  }
</style>

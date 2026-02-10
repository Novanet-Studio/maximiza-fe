<script setup lang="ts">
const props = defineProps<{
  type: "natural" | "juridica";
}>();

const selectedModalId = ref<string | null>(null);

const modalData = [
  {
    id: "fideicomiso",
    titulo: "Registro para fideicomiso",
    contenido: `<ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">1.</b> Cédula de
          Identidad y Registro de Información Fiscal (RIF) vigente del
          fideicomitente, fiduciario y terceros intervinientes.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">2.</b> Contrato de
          fideicomiso.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">3.</b> Carta explicativa
          de inversión o memoria descriptiva, indicando los motivos de la
          inversión de ser el caso:
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-6">
          <b class="text-maximiza-verde2 font-semibold">a.</b> Partes
          necesarias:
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="">i.</b> Quien trasmite los bienes (Fideicomitente), y
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="">ii.</b> Quien recibe y adquiere los bienes en propiedad
          fiduciaria (Fiduciario).
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-6">
          <b class="text-maximiza-verde2 font-semibold">b.</b> Terceros
          interesados:
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="">i.</b> Quien recibe los bienes del fideicomiso
          (Beneficiario), y
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="">ii.</b> El destinatario final de los bienes del
          fideicomiso (Fideicomisario).
        </li>
      </ul>`,
  },
  {
    id: "cooperativas",
    titulo: "Requisitos de las Asociaciones Cooperativas",
    contenido: `<ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">1.</b> Registro de
          Información Fiscal (RIF), vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">2.</b> Cédula de
          Identidad y Registro de Información Fiscal (RIF) vigente del
          representante legal de la asociación cooperativa.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">3.</b> Constancia de
          inscripción en la Superintendencia Nacional de Cooperativas
          (SUNACOOP).
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">4.</b> Certificado de
          cumplimiento emanado de la SUNACOOP.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">5.</b> Acta constitutiva
          y estatutos sociales debidamente protocolizados ante el Registro
          Público y, cuando aplique, sus reformas. En el caso de las
          Asociaciones Cooperativas no domiciliadas en el país, los mismos
          documentos debidamente protocolizados y traducidos al idioma
          castellano.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">6.</b> Acta de asamblea
          donde conste la elección de la junta directiva actual, sin que se
          encuentre vencido su período electivo.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">7.</b> Listado de
          asociados activos, emitido por la junta directiva de la asociación
          cooperativa.
        </li>
      </ul>`,
  },

  {
    id: "osfl",
    titulo: "Requisitos para las OSLFL",
    contenido: `<ul>
       <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">1.</b> Registro de Información Fiscal (RIF), vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">2.</b> Cédula de Identidad y Registro de Información Fiscal (RIF) vigente del
representante legal de la OSFL.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">3.</b> Acta constitutiva y estatutos sociales debidamente protocolizados ante el
Registro Público y, cuando aplique, sus reformas.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">4.</b> Constancia de inscripción ante el órgano o ente de control al cual
pertenezca por su naturaleza.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">5.</b> Acta de asamblea donde conste la elección de la junta directiva actual, sin
que se encuentre vencido su periodo lectivo.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">6.</b> Listado de las organizaciones o entes, nacionales o extranjeros de los
 cuales percibe aportaciones, donaciones o dádivas, emitido por la junta
directiva de la OSFL.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">7.</b> Identificación de los beneficiarios de la OSFL, éstos son las personas
naturales o grupos de personas naturales que reciben asistencia benéfica,
humanitaria u otro tipo de asistencia a través de los servicios de la OSFL,
emitida por la junta directiva de la misma.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start ml-12">
          <b class="text-maximiza-verde2 font-semibold">8.</b> Listado de sucursales extranjeras de OSFL internacionales, y de las OSFL
con las que se hayan acordado asociaciones, emitido por la junta directiva
de la misma
        </li>
      </ul>`,
  },
];
</script>

<template>
  <section v-if="type === 'natural'" class="flex flex-col gap-12">
    <article class="flex gap-4">
      <img
        src="/images/planilla/onboarding_PN.webp"
        alt="onboarding_PN portraid"
      />
      <h5
        class="text-maximiza-verde1 text-3xl font-extrabold flex items-center"
      >
        Pasos para registro <br />
        de Persona Natural
      </h5>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2"
      >
        <div
          class="bg-maximiza-verde1 rounded-full w-12 h-12 flex items-center justify-center text-maximiza-blanco1 text-3xl"
        >
          1
        </div>

        Planillas de la Caja Venezolana de Valores
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        <b class="font-extrabold"
          >Realiza tu registro o actualizacioón de datos</b
        >
        en la Caja Venezolana de Valores (CVV) y descarga la lanilla firmada:
      </p>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'hand-point-right']"
          />

          <a
            href="https://www.cajavenezolana.com/sitradweb/login.php"
            target="_blank"
            class="text-maximiza-verde6 underline"
          >
            Planilla SITRAD
          </a>
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2"
      >
        <div
          class="bg-maximiza-verde1 rounded-full w-12 h-12 flex items-center justify-center text-maximiza-blanco1 text-3xl"
        >
          2
        </div>

        Registro en línea
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        Completa el formulario de registro digital. Nuestro sistema
        <b class="font-extrabold">genera y completa automáticamente</b> las
        siguientes planillas:
      </p>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Ficha Única de Identificación del Inversionista
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Ficha de Registro de Firmas
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Declaración Jurada y destino de los fondos
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Poder de Apertura y Manejo de Cuenta Custodia
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2"
      >
        <div
          class="bg-maximiza-verde1 rounded-full w-12 h-12 flex items-center justify-center text-maximiza-blanco1 text-3xl"
        >
          3
        </div>

        Envío de recaudos
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        Una vez cuentes con todas las planillas y los recaudos completos,
        <b>envíalos por correo electrónico a:</b>
      </p>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'envelope']"
          />

          contacto@maximiza.com.ve
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2 mb-4"
      >
        Recaudos para personas naturales
      </h5>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold"> 1.</b> Cédula de
          Identidad vigente, para personas venezolanas y extranjeras residentes
          en el país, o copia del pasaporte para personas extrajeras no
          residente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">2.</b> Registro de
          Información Fiscal (RIF), vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">3.</b> Una (1)
          Referencia Bancaria, con una vigencia mínima de tres meses.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">4.</b> Constancia de
          trabajo actual del inversor, o informe de atestiguamiento de ingresos
          emitida por un contador público colegiado, en el caso de personas que
          trabajen de manera independiente.
        </li>

        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">5.</b> Planilla de
          Declaración Jurada de Origen y Destino de los Fondos, cada vez que
          realice una operación.
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-verde1 text-4xl font-bold flex items-center gap-2"
      >
        <font-awesome-icon
          class="text-maximiza-verde1 text-4xl"
          :icon="['fas', 'hand-point-down']"
        />

        Comienza completando el formulario de registro
      </h5>
    </article>
  </section>

  <section v-if="type === 'juridica'" class="flex flex-col gap-12">
    <article class="flex gap-4">
      <img
        src="/images/planilla/onboarding_PN.webp"
        alt="onboarding_PN portraid"
      />
      <h5
        class="text-maximiza-verde1 text-3xl font-extrabold flex items-center"
      >
        Pasos para registro <br />
        de Persona Jurídica
      </h5>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2"
      >
        <div
          class="bg-maximiza-verde1 rounded-full w-12 h-12 flex items-center justify-center text-maximiza-blanco1 text-3xl"
        >
          1
        </div>

        Planillas de la Caja Venezolana de Valores
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        <b class="font-extrabold"
          >Realiza tu registro o actualizacioón de datos</b
        >
        en la Caja Venezolana de Valores (CVV) y descarga la lanilla firmada:
      </p>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'hand-point-right']"
          />

          <a
            href="https://www.cajavenezolana.com/sitradweb/login.php"
            target="_blank"
            class="text-maximiza-verde6 underline"
          >
            Planilla SITRAD
          </a>
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2"
      >
        <div
          class="bg-maximiza-verde1 rounded-full w-12 h-12 flex items-center justify-center text-maximiza-blanco1 text-3xl"
        >
          2
        </div>

        Registro en línea
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        Completa el formulario de registro digital. Nuestro sistema
        <b class="font-extrabold">genera y completa automáticamente</b> las
        siguientes planillas:
      </p>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Ficha Única de Identificación del Inversionista
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Ficha de Registro de Firmas
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Declaración Jurada y destino de los fondos
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Poder de Apertura y Manejo de Cuenta Custodia
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2"
      >
        <div
          class="bg-maximiza-verde1 rounded-full w-12 h-12 flex items-center justify-center text-maximiza-blanco1 text-3xl"
        >
          3
        </div>

        Envío de recaudos
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        Una vez cuentes con todas las planillas y los recaudos completos,
        <b>envíalos por correo electrónico a:</b>
      </p>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-center">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'envelope']"
          />

          contacto@maximiza.com.ve
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2 mb-4"
      >
        Recaudos para personas jurídica
      </h5>

      <ul>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">1.</b> Registro de
          Información Fiscal (RIF), vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">2.</b> Cédula de
          Identidad y Registro de Información Fiscal (RIF) vigente del
          representante legal de la persona jurídica.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">3.</b> Documento
          constitutivo y las modificaciones estatutarias de la persona jurídica
          que muestre los socios beneficiarios finales de la sociedad. En caso
          de persona jurídica no domiciliada en el país, los mismos documentos
          debidamente protocolizados y traducidos al idioma castellano.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">4.</b> Acta de asamblea
          donde conste la elección de la junta directiva actual, sin que se
          encuentre vencido su período electivo.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">5.</b> Una (1)
          Referencia Bancaria, con una vigencia mínima de tres meses.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <b class="text-maximiza-verde2 font-semibold">6.</b> Planilla de
          Declaración Jurada de Origen y Destino de los Fondos, cada vez que
          realice una operación.
        </li>
      </ul>
    </article>

    <article class="space-y-4 mb-8">
      <li
        class="text-lg text-maximiza-gris1 flex gap-2 items-center cursor-pointer"
      >
        <font-awesome-icon
          class="text-maximiza-verde1 text-xl"
          :icon="['fas', 'hand-point-right']"
        />

        <a
          @click="selectedModalId = 'fideicomiso'"
          class="text-maximiza-verde6 underline"
        >
          Requisitos de los Fideicomiso
        </a>
      </li>

      <li
        class="text-lg text-maximiza-gris1 flex gap-2 items-center cursor-pointer"
      >
        <font-awesome-icon
          class="text-maximiza-verde1 text-xl"
          :icon="['fas', 'hand-point-right']"
        />

        <a
          @click="selectedModalId = 'cooperativas'"
          class="text-maximiza-verde6 underline"
        >
          Requisitos de las Asociaciones Cooperativas
        </a>
      </li>

      <li
        class="text-lg text-maximiza-gris1 flex gap-2 items-center cursor-pointer"
      >
        <font-awesome-icon
          class="text-maximiza-verde1 text-xl"
          :icon="['fas', 'hand-point-right']"
        />

        <a
          @click="selectedModalId = 'osfl'"
          class="text-maximiza-verde6 underline"
        >
          Requisitos de las OSLFL
        </a>
      </li>
    </article>

    <article>
      <h5
        class="text-maximiza-verde1 text-4xl font-bold flex items-center gap-2"
      >
        <font-awesome-icon
          class="text-maximiza-verde1 text-4xl"
          :icon="['fas', 'hand-point-down']"
        />

        Comienza completando el formulario de registro
      </h5>
    </article>
  </section>

  <CommonModal
    v-if="selectedModalId"
    :id="selectedModalId"
    :data="modalData"
    @close="selectedModalId = null"
  />
</template>

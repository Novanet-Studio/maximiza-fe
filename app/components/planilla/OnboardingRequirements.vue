<script setup lang="ts">
const props = defineProps<{
  type: "natural" | "juridica";
}>();
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
          2
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

          <a href="#" class="text-maximiza-verde6 underline">
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
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Cédula de Identidad vigente para personas venezolanas y extranjeras
          residentes en el país, o copia del pasaporte para personas extranjeras
          no residentes.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Registro de Información Fiscal (RIF) vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Una (1) referencia bancaria, con una vigencia mínima de tres (3)
          meses.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Constancia de trabajo actual del inversionista, o informe de
          atestiguamiento de ingresos emitido por un contador público colegiado,
          en caso de trabajadores independientes.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Planilla de Declaración Jurada de Origen y Destino de los Fondos, cada
          vez que realice una operación.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Planilla de Registro para la apertura de Subcuenta ante la Caja
          Venezolana de Valores.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Planilllas generadas por el formulario de registro del paso 1.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Otros documentos: declaración de ISLR, recibo de servicio vigente y/o
          referencias personales.
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
          2
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

          <a href="#" class="text-maximiza-verde6 underline">
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
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Registro de Información Fiscal (RIF) vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Cédula de Identidad y Registro de Información Fiscal (RIF) vigente del
          representante legal.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Documento constitutivo y modificaciones estatutarias. En caso de
          personas jurídicas no domiciliadas en el país, documentos y poderes
          debidamente legalizados y traducidos al castellano por intérprete
          público.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Acta de asamblea donde conste la elección de la junta directiva
          actual, con período vigente.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Una (1) referencia bancaria, con una vigencia mínima de tres (3)
          meses.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Planilla de Declaración Jurada de Origen y Destino de los Fondos, cada
          vez que realice una operación.
        </li>
        <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
          <font-awesome-icon
            class="text-maximiza-verde1 text-xl"
            :icon="['fas', 'check']"
          />
          Planilla de Registro para la apertura de Subcuenta ante la Caja
          Venezolana de Valores.
        </li>
      </ul>
    </article>

    <article>
      <h5
        class="text-maximiza-negro1 text-3xl font-bold flex items-center gap-2 mb-4"
      >
        Registro para fideicomiso
      </h5>

      <p class="mt-2 mb-6 text-lg text-maximiza-gris1">
        Para Persona Jurídica, también
        <b class="font-extrabold">
          se contemplan los siguientes tipos de registro, con sus recaudos
          específicos:
        </b>
      </p>

      <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
        <font-awesome-icon
          class="text-maximiza-verde1 text-xl"
          :icon="['fas', 'download']"
        />
        Requisitos para los fideicomisos
      </li>

      <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
        <font-awesome-icon
          class="text-maximiza-verde1 text-xl"
          :icon="['fas', 'download']"
        />
        Requisitos para las asociaciones cooperativas
      </li>

      <li class="text-lg text-maximiza-gris1 flex gap-2 items-start">
        <font-awesome-icon
          class="text-maximiza-verde1 text-xl"
          :icon="['fas', 'download']"
        />
        Requisitos para las OSLFL
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
</template>

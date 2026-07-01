<script setup lang="ts">
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
} from '~/assets/animations/motion'

interface Props {
  personType: 'persona-natural' | 'persona-juridica'
  requierements: Array<string>
}

const props = defineProps<Props>()
</script>

<template>
  <motion.section
    class="container flex w-full flex-col items-center justify-center py-16"
    :variants="generalContainerVariants"
    initial="hidden"
    animate="visible"
  >
    <motion.div
      class="flex w-full flex-col items-center md:flex-row"
      :variants="generalItemVariants"
    >
      <div
        class="bg-white-alt relative z-10 flex h-[275px] w-[275px] shrink-0 items-center justify-center p-4 max-sm:mb-4 md:h-[190px] md:w-[190px] xl:h-[275px] xl:w-[275px]"
      >
        <img
          :src="`/images/pages/home/${personType === 'persona-natural' ? 'maximiza-planta-cristal-inversionista-natural.webp' : 'maximiza-edificios-cristal-inversionista-juridico.webp'}`"
          alt="Especialistas_en_asesoría"
          title="Especialistas_en_asesoría"
          class="h-full w-full object-contain"
        />
      </div>
      <div
        class="to-white-alt2 z-0 -mt-30 w-full bg-linear-to-b from-white p-8 pt-40 md:m-0 md:-ml-31.25 md:bg-linear-to-r md:p-8 md:pr-10 md:pl-40 lg:pr-24"
      >
        <h4 class="text-black-alt mb-2 font-extrabold">
          Recaudos para personas
          {{ personType === 'persona-natural' ? 'naturales' : 'jurídicas' }}
        </h4>
        <ol class="flex flex-col gap-2 pl-5">
          <li
            v-for="(requierement, index) in requierements"
            :key="index"
            class="text-gray list-decimal text-sm lg:text-base xl:text-xl"
          >
            {{ requierement }}
          </li>
        </ol>
      </div>
    </motion.div>
  </motion.section>
  <motion.section
    v-if="personType === 'persona-juridica'"
    class="container flex w-full flex-col items-center justify-center py-8"
    :variants="generalContainerVariants"
    initial="hidden"
    animate="visible"
  >
    <h2 class="mb-6 font-bold">Requisitos</h2>

    <div
      class="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-8 px-4 md:grid-cols-2 md:px-0"
    >
      <motion.div
        class="border-white-alt2 border bg-white p-4 shadow-xs lg:p-8 xl:p-12"
        :variants="generalItemVariants"
      >
        <h4 class="text-primary mb-6 font-bold">
          De las Asociaciones Cooperativas
        </h4>
        <ol class="text-gray flex flex-col gap-3 pl-5">
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Registro de Información Fiscal (RIF), vigente.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Cédula de Identidad y Registro de Información Fiscal (RIF) vigente
            del representante legal de la asociación cooperativa.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Constancia de inscripción en la Superintendencia Nacional de
            Cooperativas (SUNACOOP).
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Certificado de cumplimiento emanado de la SUNACOOP.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Acta constitutiva y estatutos sociales debidamente protocolizados
            ante el Registro Público y, cuando aplique, sus reformas. En el caso
            de las Asociaciones Cooperativas no domiciliadas en el país, los
            mismos documentos debidamente protocolizados y traducidos al idioma
            castellano.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Acta de asamblea donde conste la elección de la junta directiva
            actual, sin que se encuentre vencido su período electivo.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Listado de asociados activos, emitido por la junta directiva de la
            asociación cooperativa.
          </li>
        </ol>
      </motion.div>

      <motion.div
        class="border-white-alt2 border bg-white p-4 shadow-xs lg:p-8 xl:p-12"
        :variants="generalItemVariants"
      >
        <h4 class="text-primary mb-6 font-bold">De los Fideicomisos:</h4>
        <ol class="text-gray flex flex-col gap-3 pl-5">
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Cédula de Identidad y Registro de Información Fiscal (RIF) vigente
            del fideicomitente, fiduciario y terceros intervinientes.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Contrato de fideicomiso.
          </li>
          <li class="list-decimal text-sm lg:text-base xl:text-xl">
            Carta explicativa de inversión o memoria descriptiva, indicando los
            motivos de la inversión de ser el caso:
            <ol class="mt-2 flex flex-col gap-2 pl-5">
              <li class="list-[lower-alpha] text-sm lg:text-base xl:text-xl">
                Partes necesarias:
                <ol class="mt-1 flex flex-col gap-1 pl-5">
                  <li
                    class="list-[lower-roman] text-sm lg:text-base xl:text-xl"
                  >
                    Quien trasmite los bienes (Fideicomitente)
                  </li>
                  <li
                    class="list-[lower-roman] text-sm lg:text-base xl:text-xl"
                  >
                    Quien recibe y adquiere los bienes en propiedad fiduciaria
                    (Fiduciario).
                  </li>
                </ol>
              </li>
              <li class="list-[lower-alpha] text-sm lg:text-base xl:text-xl">
                Terceros interesados:
                <ol class="mt-1 flex flex-col gap-1 pl-5">
                  <li
                    class="list-[lower-roman] text-sm lg:text-base xl:text-xl"
                  >
                    Quien recibe los bienes del fideicomiso (Beneficiario)
                  </li>
                  <li
                    class="list-[lower-roman] text-sm lg:text-base xl:text-xl"
                  >
                    El destinatario final de los bienes del fideicomiso
                    (Fideicomisario).
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </motion.div>
    </div>
  </motion.section>
</template>

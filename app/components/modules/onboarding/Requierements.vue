<script setup lang="ts">
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion';


interface Props {
    personType: 'persona-natural' | 'persona-juridica';
    requierements: Array<string>;
}

const props = defineProps<Props>()

</script>

<template>
    <motion.section class="container w-full flex flex-col justify-center items-center py-16"
        :variants="generalContainerVariants" initial="hidden" animate="visible">
        <motion.div class="flex flex-col md:flex-row items-center w-full" :variants="generalItemVariants">
            <div
                class="bg-white-alt w-[275px] h-[275px] md:w-[190px] md:h-[190px] xl:w-[275px] xl:h-[275px] max-sm:mb-4 p-4 flex shrink-0 justify-center items-center z-10 relative">
                <img :src="`/images/pages/home/${personType === 'persona-natural' ? 'maximiza-planta-cristal-inversionista-natural.webp' : 'maximiza-edificios-cristal-inversionista-juridico.webp'}`"
                    alt="Especialistas_en_asesoría" title="Especialistas_en_asesoría" class="w-full h-full object-contain" />
            </div>
            <div
                class="bg-linear-to-b md:bg-linear-to-r from-white to-white-alt2 p-8 pt-40 md:p-8 md:pl-40 md:pr-10 lg:pr-24 w-full -mt-30 md:m-0 md:-ml-31.25 z-0">
                <h4 class="font-extrabold text-black-alt mb-2">Recaudos para personas {{ personType ===
                    'persona-natural' ? 'naturales'
                    : 'jurídicas' }}</h4>
                <ol class="pl-5 flex flex-col gap-2">
                    <li v-for="(requierement, index) in requierements" :key="index"
                        class="text-sm lg:text-base xl:text-xl text-gray list-decimal">
                        {{ requierement }}
                    </li>
                </ol>
            </div>
        </motion.div>
    </motion.section>
    <motion.section v-if="personType === 'persona-juridica'"
        class="container w-full flex flex-col justify-center items-center py-8" :variants="generalContainerVariants"
        initial="hidden" animate="visible">

        <h2 class="font-bold mb-6">Requisitos</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4 md:px-0 items-stretch">
            <motion.div class="bg-white border border-white-alt2 p-4 lg:p-8 xl:p-12 shadow-xs"
                :variants="generalItemVariants">
                <h4 class="text-primary font-bold mb-6">De las Asociaciones Cooperativas</h4>
                <ol class="pl-5 flex flex-col gap-3 text-gray">
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Registro de Información Fiscal (RIF),
                        vigente.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Cédula de Identidad y Registro de
                        Información Fiscal (RIF) vigente del
                        representante legal de la
                        asociación cooperativa.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Constancia de inscripción en la
                        Superintendencia Nacional de Cooperativas
                        (SUNACOOP).</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Certificado de cumplimiento emanado de la
                        SUNACOOP.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Acta constitutiva y estatutos sociales
                        debidamente protocolizados ante el
                        Registro Público y,
                        cuando aplique, sus reformas. En el caso de las Asociaciones Cooperativas no domiciliadas en el
                        país, los mismos documentos debidamente protocolizados y traducidos al idioma castellano.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Acta de asamblea donde conste la elección
                        de la junta directiva actual, sin
                        que se encuentre
                        vencido su período electivo.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Listado de asociados activos, emitido por
                        la junta directiva de la
                        asociación cooperativa.</li>
                </ol>
            </motion.div>

            <motion.div class="bg-white border border-white-alt2 p-4 lg:p-8 xl:p-12 shadow-xs"
                :variants="generalItemVariants">
                <h4 class="text-primary font-bold mb-6">De los Fideicomisos:</h4>
                <ol class="pl-5 flex flex-col gap-3 text-gray">
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Cédula de Identidad y Registro de
                        Información Fiscal (RIF) vigente del
                        fideicomitente,
                        fiduciario y terceros intervinientes.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Contrato de fideicomiso.</li>
                    <li class="text-sm lg:text-base xl:text-xl list-decimal">Carta explicativa de inversión o memoria
                        descriptiva, indicando los motivos
                        de la inversión de
                        ser el caso:
                        <ol class="pl-5 mt-2 flex flex-col gap-2">
                            <li class="text-sm lg:text-base xl:text-xl list-[lower-alpha]">Partes necesarias:
                                <ol class="pl-5 mt-1 flex flex-col gap-1">
                                    <li class="text-sm lg:text-base xl:text-xl list-[lower-roman]">Quien trasmite los
                                        bienes (Fideicomitente)</li>
                                    <li class="text-sm lg:text-base xl:text-xl list-[lower-roman]">Quien recibe y
                                        adquiere los bienes en propiedad
                                        fiduciaria (Fiduciario).</li>
                                </ol>
                            </li>
                            <li class="text-sm lg:text-base xl:text-xl list-[lower-alpha]">Terceros interesados:
                                <ol class="pl-5 mt-1 flex flex-col gap-1">
                                    <li class="text-sm lg:text-base xl:text-xl list-[lower-roman]">Quien recibe los
                                        bienes del fideicomiso
                                        (Beneficiario)</li>
                                    <li class="text-sm lg:text-base xl:text-xl list-[lower-roman]">El destinatario final
                                        de los bienes del fideicomiso
                                        (Fideicomisario).</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
            </motion.div>
        </div>
    </motion.section>
</template>
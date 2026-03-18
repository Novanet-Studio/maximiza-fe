<script setup lang="ts">
import { metadata } from '@/assets/data/metadata';
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion';

useSeoMeta(metadata.servicios);
</script>

<template>
    <div class="w-full h-auto flex flex-col">
        <CommonHero :title="'Aceleramos y protegemos <br /> el valor de su capital'"
            :description="'Gestionamos activos líquidos e instrumentos de financiamiento nacionales e internacionales para impulsar el crecimiento patrimonial y corporativo.'"
            :button="{
                text: 'Explore nuestras soluciones financieras',
                link: '#'
            }" :image="{
                src: '/images/hero/main-servicios.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-servicios.webp',
            }" />

        <SharedOurServices is-reverse />

        <motion.section
            class="container w-full min-h-dvh mx-auto overflow-hidden flex flex-col justify-center items-center py-16"
            :variants="generalContainerVariants" initial="hidden" animate="visible">

            <motion.header class=" flex flex-col" :variants="generalItemVariants" initial="hidden" animate="visible">
                <h2 class="text-left">
                    Apertura Privada de Cuenta de Corretaje
                </h2>

                <h3 class="text-left mb-8">
                    (Inversionistas Corporativos e Individuales)
                </h3>

                <p class="text-left text-gray text-base lg:text-lg">
                    Comience su recorrido de inversión y diversificación con el respaldo, la discreción y la solidez
                    institucional de Maximiza. En estricto y riguroso apego al marco regulatorio tutelado por la
                    Superintendencia Nacional de Valores (SUNAVAL), hemos diseñado un proceso de apertura de cuentas
                    fluido,
                    transparente y de confidencialidad extrema.
                    <br />
                    <br />
                    Para proceder con la integración formal de su expediente fiduciario, le invitamos a descargar y
                    evaluar
                    nuestro Contrato de Cuenta de Corretaje Bursátil, junto con la documentación estándar de
                    Identificación
                    del Inversor. Nuestro equipo élite de asesores patrimoniales le acompañará y guiará de manera
                    personalizada en cada paso del proceso: desde la validación de la Ficha de Registro de Firmas hasta
                    la
                    delegación del Poder de manejo de cuenta custodia. Nuestro objetivo primordial es garantizar que su
                    incursión estratégica en el mercado de capitales sea expedita, tecnológicamente segura y
                    absolutamente
                    blindada desde la perspectiva legal y jurídica.

                </p>
            </motion.header>

            <div
                class="w-full flex flex-col md:flex-row items-center md:items-stretch justify-center gap-y-40 md:gap-y-0 gap-x-8 lg:gap-x-16 mt-32 md:mt-48 max-w-5xl mx-auto px-4 md:px-0">
                <motion.div
                    class="max-w-[340px] w-full relative pt-32 lg:pt-40 pb-12 bg-white border border-white-alt2 flex flex-col items-center group transition-colors duration-300"
                    :variants="generalItemVariants" initial="hidden" animate="visible">

                    <div
                        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] lg:w-64 aspect-square bg-white-alt flex items-center justify-center p-6 lg:p-10 transition-transform duration-300">
                        <img src="/images/pages/home/person-type-natural.webp" alt="Persona natural"
                            class="w-full h-full object-contain relative z-10" />
                    </div>

                    <h3 class="pb-8 text-2xl font-extrabold text-black-alt">Persona natural</h3>

                    <NuxtLink :to="'/registro/persona-natural'">
                        <UiButton :text="'Quiero registrarme'" :icon="'arrow-right-to-bracket'" variant="primary" />
                    </NuxtLink>
                </motion.div>

                <motion.div
                    class="max-w-[340px] w-full relative pt-32 lg:pt-40 pb-12 bg-white border border-white-alt2 flex flex-col items-center group transition-colors duration-300"
                    :variants="generalItemVariants" initial="hidden" animate="visible">

                    <div
                        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] lg:w-64 aspect-square bg-white-alt flex items-center justify-center p-6 lg:p-10 transition-transform duration-300">
                        <img src="/images/pages/home/person-type-juridica.webp" alt="Persona jurídica"
                            class="w-full h-full object-contain relative z-10" />
                    </div>

                    <h3 class="pb-8 text-2xl font-extrabold text-black-alt">Persona jurídica</h3>

                    <NuxtLink :to="'/registro/persona-juridica'">
                        <UiButton :text="'Quiero registrarme'" :icon="'arrow-right-to-bracket'" variant="secondary" />
                    </NuxtLink>
                </motion.div>
            </div>
        </motion.section>
    </div>
</template>
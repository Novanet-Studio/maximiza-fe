<script setup lang="ts">
import { motion } from 'motion-v';

import { metadata } from '~/assets/data/metadata';
import { jsonld } from '~/assets/data/jsonld';

import { generalContainerVariants, generalItemVariants, overlayVariants } from '~/assets/animations/motion';

useSeoMeta(metadata.registro);

useJsonLd(jsonld.register);
</script>

<template>
    <div class="w-full h-auto  flex flex-col">
        <CommonHero :title="'¡Bienvenido a Maximiza <br /> Casa de Bolsa!'"
            :description="'Abre tu Cuenta de Corretaje Bursátil de forma rápida, cumpliendo con la normativa de la Superintendencia Nacional de Valores (SNV).'"
            :image="{
                src: '/images/hero/main-registro.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-registro.webp',
            }" />

        <motion.section class="container w-full pt-17.5 pb-40 overflow-hidden flex flex-col justify-center items-center"
            :variants="generalContainerVariants" initial="hidden" whileInView="visible"
            :viewport="{ once: true, margin: '-50px' }">
            <CommonSectionHeader title="¿Qué tipo de registro deseas realizar?"
                description="Selecciona una opción para comenzar:" />

            <div class="max-w-2xl w-full flex flex-col md:flex-row max-sm:gap-16 justify-around items-center">

                <NuxtLink title="Persona natural" to="/registro/persona-natural">
                    <motion.button type="button" class="flex flex-col items-center gap-4 group"
                        :variants="generalItemVariants" initial="hidden" whileHover="hover" animate="visible">

                        <div class="w-[275px] h-[275px] relative p-4 bg-white-alt overflow-hidden">
                            <motion.div class="absolute left-0 top-0 h-full bg-primary z-0"
                                :variants="overlayVariants" />

                            <img src="/images/pages/home/person-type-natural.webp" alt="Person Type Natural" title="Person Type Natural"
                                class="w-full h-full object-contain relative z-10" />
                        </div>

                        <label for="person-type-natural"
                            class="text-2xl font-bold text-gray group-hover:text-black transition-colors duration-300">Persona
                            natural</label>

                    </motion.button>

                </NuxtLink>

                <NuxtLink title="Persona juridica" to="/registro/persona-juridica">
                    <motion.button type="button" class="flex flex-col items-center gap-4 group"
                        :variants="generalItemVariants" initial="hidden" whileHover="hover" animate="visible">
                        <div class="w-[275px] h-[275px] relative p-4 bg-white-alt overflow-hidden">
                            <motion.div class="absolute left-0 top-0 h-full bg-primary z-0"
                                :variants="overlayVariants" />

                            <img src="/images/pages/home/person-type-juridica.webp" alt="Person Type Juridica" title="Person Type Juridica"
                                class="w-full h-full object-contain relative z-10" />
                        </div>

                        <label for="person-type-juridica"
                            class="text-2xl font-bold text-gray group-hover:text-black transition-colors duration-300">Persona
                            juridica</label>

                    </motion.button>
                </NuxtLink>

            </div>
        </motion.section>
    </div>
</template>
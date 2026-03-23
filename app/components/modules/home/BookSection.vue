<script setup lang="ts">
import { motion } from "motion-v"
import companyData from "@/assets/data/common.json"
import { generalItemVariants } from "@/assets/animations/motion"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <section class="w-full py-20 xl:py-28 bg-white-alt flex items-center justify-center">
        <div class="container mx-auto px-4 sm:px-12 flex justify-center mt-20 md:mt-0">

            <motion.div :variants="generalItemVariants" initial="hidden" whileInView="visible"
                :viewport="{ once: true, margin: '-100px' }"
                class="relative w-full max-w-5xl bg-white border border-gray/30 flex flex-col md:flex-row items-stretch">

                <!-- Text Content -->
                <div class="w-full md:w-3/5  flex flex-col items-start md:items-end text-left md:text-right max-sm:pt-52 md:py-8 lg:py-12 px-6 sm:px-10 md:pl-12 lg:pl-16 z-0">
                    <h2 class="text-left md:text-right">
                        Memoria y <br class="hidden lg:block"/> liderazgo intelectual
                    </h2>

                    <p class="p2 xl:p1 text-gray mb-1 w-full text-left md:text-right max-w-md">
                        El mercado de valores tiene historia.
                    </p>
                    <p class="p2 xl:p1 text-gray mb-8 w-full text-left md:text-right max-w-md">
                        Obra clave de 2022, auspiciada por nuestra firma, que documenta la resiliencia, evolución y perspectivas del ecosistema bursátil venezolano. Testimonio de nuestro arraigo histórico y compromiso con el desarrollo económico nacional.
                    </p>

                    <h5 class="font-bold text-black-alt text-lg lg:text-xl w-full text-left md:text-right mb-4">
                        Más información
                    </h5>

                    <div class="flex flex-col md:flex-row items-start md:items-center justify-end flex-wrap gap-x-3 lg:gap-x-5 text-gray font-medium w-full text-left md:text-right pb-8 md:pb-0">
                        <a :title="companyData.email" :href="`mailto:${companyData.email}`"
                            class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <FontAwesomeIcon :icon="faEnvelope" class="text-primary text-xl" />
                            {{ companyData.email }}
                        </a>
                        <a :title="companyData.phone" :href="`tel:${companyData.phone.replace(/[\s-()]/g, '')}`"
                            class="flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap">
                            <FontAwesomeIcon :icon="faPhone" class="text-primary text-xl" />
                            {{ companyData.phone }}
                        </a>
                    </div>
                </div>

                <!-- Book Image (Absolute Positioning) -->
                <div class="absolute left-1/2 md:left-3/5  md:right-8 lg:right-16 top-0 md:top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-[45%] md:-translate-y-1/2 w-50 sm:w-60 md:w-70 lg:w-80 xl:w-90 z-10 pointer-events-none flex justify-center">
                    <img src="/images/pages/home/book.webp"
                        alt="Pasado, presente y futuro del mercado de valores en Venezuela" 
                        title="Pasado, presente y futuro del mercado de valores en Venezuela"
                        class="object-contain w-full shadow-[15px_15px_24px_-3px_rgba(0,_0,_0,_0.5)]" />
                </div>

            </motion.div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { motion } from "motion-v"
import companyData from "@/assets/data/common.json"
import { generalItemVariants } from "@/assets/animations/motion"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <section class="w-full py-40 bg-white-alt flex items-center justify-center">
        <div class="container mx-auto px-4 sm:px-12 flex justify-center mt-20 md:mt-0">

            <motion.div :variants="generalItemVariants" initial="hidden" whileInView="visible"
                :viewport="{ once: true, margin: '-100px' }"
                class="relative w-full max-w-5xl bg-white border border-gray/30 flex flex-col md:flex-row items-stretch">

                <!-- Text Content -->
                <div class="w-full md:w-3/5 flex flex-col items-start md:items-end text-left md:text-right max-sm:pt-52 p-4 px-6 md:p-6 lg:p-10 z-0">
                    <h2 class="text-2xl leading-[26px] md:text-base md:leading-[18.09px] lg:text-2xl lg:leading-[26px] text-left mb-4 md:text-right">
                        Memoria y <br class="hidden lg:block"/> liderazgo intelectual
                    </h2>

                    <p class="w-full mb-1 text-gray text-left md:text-right max-w-md text-base leading-[24px] md:text-[9.74px] md:leading-[18.09px] lg:text-base lg:leading-[24px] text">
                        El mercado de valores tiene historia. <br /> Obra clave de 2022, auspiciada por nuestra firma, que documenta la resiliencia, evolución y perspectivas del ecosistema bursátil venezolano. Testimonio de nuestro arraigo histórico y compromiso con el desarrollo económico nacional.
                    </p>

                    <h5 class="font-bold text-black-alt text-lg lg:text-xl w-full text-left md:text-right mt-4 mb-2">
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
                <div class="absolute left-1/2 md:left-3/5 top-0 md:top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-[45%] md:-translate-y-1/2 w-50 sm:w-60 md:w-70 lg:w-80 xl:w-90 z-10 pointer-events-none flex justify-center">
                    <img src="/images/pages/home/book.webp"
                        alt="Pasado, presente y futuro del mercado de valores en Venezuela" 
                        title="Pasado, presente y futuro del mercado de valores en Venezuela"
                        class="object-contain w-full shadow-[15px_15px_24px_-3px_rgba(0,_0,_0,_0.5)]" />
                </div>
            </motion.div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { motion } from "motion-v"
import companyData from "@/assets/data/common.json"
import { generalItemVariants } from "@/assets/animations/motion"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <section class="w-full py-12 xl:py-24 bg-white-alt md:bg-white  xl:bg-white-alt flex items-center justify-center">
        <div class="container mx-auto px-4 sm:px-12 flex justify-center">

            <motion.div :variants="generalItemVariants" initial="hidden" whileInView="visible"
                :viewport="{ once: true, margin: '-100px' }"
                class="relative w-full mt-24 md:mt-0 bg-white border border-gray/30 flex flex-col-reverse md:flex-row justify-start">

                <div
                    class="flex-1 w-full flex flex-col items-start  text-left md:text-right pb-10 pt-4 md:py-10 xl:py-16 px-4 sm:px-10 md:pr-6 md:pl-6 xl:pr-16 xl:pl-32">
                    <h2 class="mb-4 max-sm:text-2xl text-black-alt">Memoria y liderazgo intelectual</h2>

                    <p class="p1 text-gray mb-6 md:mb-8 max-w-[320px] md:max-w-[500px]">
                        El mercado de valores tiene historia.<br class="hidden md:block" />
                        Obra clave de 2022, auspiciada por nuestra firma, que documenta la resiliencia, evolución y
                        perspectivas del ecosistema bursátil venezolano. Testimonio de nuestro arraigo histórico y
                        compromiso con el desarrollo económico nacional.
                    </p>

                    <div class="font-bold text-black-alt mt-2 md:mt-8 mb-3 text-xl w-full text-left md:text-right">Más
                        información</div>

                    <div
                        class="flex flex-col md:flex-row items-start md:items-center md:gap-3 md:gap-6 text-gray text-base md:text-lg w-full md:w-auto">
                        <a :title="companyData.email" :href="`mailto:${companyData.email}`"
                            class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <FontAwesomeIcon :icon="faEnvelope" class="text-primary text-xl" />
                            {{ companyData.email }}
                        </a>
                        <a :title="companyData.phone" :href="`tel:${companyData.phone.replace(/\s+/g, '')}`"
                            class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <FontAwesomeIcon :icon="faPhone" class="text-primary text-xl" />
                            {{ companyData.phone }}
                        </a>
                    </div>
                </div>

                <div
                    class="absolute right-0 top-0 w-[240px] sm:w-[280px] md:w-[243px] xl:w-[360px] shrink-0 flex justify-z-10 drop-shadow-2xl">
                    <img src="/images/pages/home/book.webp"
                        alt="Pasado, presente y futuro del mercado de valores en Venezuela" title="Pasado, presente y futuro del mercado de valores en Venezuela"
                        class="object-contain w-full" />
                </div>
            </motion.div>
        </div>
    </section>
</template>

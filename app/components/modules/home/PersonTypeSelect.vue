<script setup lang="ts">
import { motion } from "motion-v"
import { generalContainerVariants, generalItemVariants, overlayVariants } from "@/assets/animations/motion"

</script>

<template>
    <motion.section class="container w-full py-17.5 overflow-hidden flex flex-col justify-center items-center"
        :variants="generalContainerVariants" initial="hidden" whileInView="visible"
        :viewport="{ once: true, margin: '-50px' }">
        <CommonSectionHeader title="Alcance internacional, ejecución local impecable"
            description="Brindamos atención táctica y estratégica para todos nuestros clientes en el extenso <br /> universo del mercado de capitales" />

        <div class="max-w-2xl w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center">
            <motion.button type="button" class="flex flex-col items-center gap-4 group" :variants="generalItemVariants"
                initial="hidden" whileHover="hover" animate="visible">

                <div
                    class="w-[275px] h-[275px] md:w-[190px] md:h-[190px] xl:w-[275px] xl:h-[275px] relative p-4 bg-white-alt overflow-hidden">
                    <motion.div class="absolute left-0 top-0 h-full bg-primary z-0" :variants="overlayVariants" />

                    <img src="/images/pages/home/person-type-natural.webp" alt="Person Type Natural"
                        class="w-full h-full object-contain relative z-10" />
                </div>

                <label for="person-type-natural"
                    class="text-2xl md:text-xl xl:text-2xl font-extrabold text-black-alt group-hover:text-black transition-colors duration-300">Persona
                    natural</label>
            </motion.button>

            <motion.button type="button" class="flex flex-col items-center gap-4 group" :variants="generalItemVariants"
                initial="hidden" whileHover="hover" animate="visible">
                <div
                    class="w-[275px] h-[275px] md:w-[190px] md:h-[190px] xl:w-[275px] xl:h-[275px] relative p-4 bg-white-alt overflow-hidden">
                    <motion.div class="absolute left-0 top-0 h-full bg-primary z-0" :variants="overlayVariants" />

                    <img src="/images/pages/home/person-type-juridica.webp" alt="Person Type Juridica"
                        class="w-full h-full object-contain relative z-10" />
                </div>

                <label for="person-type-juridica"
                    class="text-2xl md:text-xl xl:text-2xl font-extrabold text-black-alt group-hover:text-black transition-colors duration-300">Persona
                    juridica</label>

            </motion.button>

        </div>
    </motion.section>
</template>
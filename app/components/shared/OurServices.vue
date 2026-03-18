<script setup lang="ts">
import { motion } from "motion-v"
import { generalContainerVariants, generalItemVariants } from "@/assets/animations/motion"

const services = [
    {
        title: "Intermediación bursátil",
        description: "Ejecución algorítmica y transparente en el mercado de valores para la optimización de carteras de renta fija y variable.",
        image: "/images/pages/home/services/1.webp"
    },
    {
        title: "Finanzas corporativas",
        description: "Asesoría analítica integral en valoración de empresas, fusiones, adquisiciones (M&A) y reestructuración de capital.",
        image: "/images/pages/home/services/2.webp"
    },
    {
        title: "Estructuración y colocación de deuda",
        description: "Colocación de papeles comerciales e instrumentos indexados para blindar y potenciar la liquidez empresarial.",
        image: "/images/pages/home/services/3.webp"
    }
]

const props = withDefaults(defineProps<{
    isReverse?: boolean;
}>(), {
    isReverse: false
})
</script>

<template>
    <motion.div :variants="generalContainerVariants" initial="hidden" whileInView="visible"
        :viewport="{ once: true, margin: '-120px' }" class="mb-20 md:mb-0">
        <CommonContentWithColumns backgroundImage="/images/pages/home/our-services-banner.webp"
            title="Soluciones <br /> financieras integrales">
            <motion.div :variants="generalItemVariants">
                <h4 class="text-white mb-4">
                    Legitimación de capitales
                </h4>

                <p class="p2 md:text-sm lg:p3 text-white">
                    Diseñamos vehículos de inversión y financiamiento estrictamente adaptados a la coyuntura económica
                    imperante, alineando su perfil de riesgo con los objetivos de crecimiento patrimonial a largo plazo.
                </p>
            </motion.div>
        </CommonContentWithColumns>

        <div
            class="container w-full translate-y-0 md:-translate-y-12 lg:-translate-y-20 grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-around gap-12 md:gap-8 lg:gap-12 xl:gap-16">
            <CommonContentCard v-for="(service, index) in services" :key="index" :title="service.title"
                :content="service.description" :styles="{
                    title: 'text-black-alt',
                    content: 'p2 text-sm md:text-base lg:p3 text-gray',
                    wrapper: `flex-1 p-8 md:p-4 xl:p-8 ${props.isReverse ? '' : 'pt-8 xl:pt-16'} flex flex-col justify-start gap-[10px] md:gap-[30px]`
                }" :image="{ url: service.image, alt: service.title }" class="h-full" is-vertical
                :is-reverse="props.isReverse" />
        </div>
    </motion.div>
</template>

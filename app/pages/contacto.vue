<script setup lang="ts">
import { metadata } from '@/assets/data/metadata';
import commonData from '@/assets/data/common.json';
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '@/assets/animations/motion';

import { useJsonLd } from '~/composables/useJsonLd';
import { jsonld } from '~/assets/data/jsonld';

const contactMethods = [
    {
        title: 'Atención al cliente',
        value: commonData.email,
        icon: '/images/pages/contact/items/1.webp'
    },
    {
        title: 'Master',
        value: commonData.phone,
        icon: '/images/pages/contact/items/2.webp'
    },
    {
        title: 'Fax',
        value: commonData.fax,
        icon: '/images/pages/contact/items/3.webp'
    }
];

useSeoMeta(metadata.contacto);

useJsonLd(jsonld.contact);
</script>

<template>
    <div class="w-full h-auto flex flex-col">
        <CommonHero :title="'Inicie la estructuración de su nueva estrategia financiera'"
            :description="'Evaluación confidencial para proteger su tesorería de la volatilidad o diseñar un financiamiento a la medida para su ciclo productivo.'"
            :image="{
                src: '/images/hero/main-contacto.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-contacto.webp',
            }" />

        <ModulesContactForm />

        <motion.section class="container mx-auto py-16 px-4 md:px-0" :variants="generalContainerVariants"
            initial="hidden" whileInView="visible" :viewport="{ once: true, margin: '-50px' }">
            <div class="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-stretch">
                <motion.div class="w-full max-w-[471px] lg:w-1/2 flex flex-col shadow-lg"
                    :variants="generalItemVariants">
                    <div class="w-full h-100 lg:h-112.5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1148587256353!2d-66.8666605885711!3d10.491610989597191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a591b8dcdeec3%3A0x1118acd802417a6e!2sMaximiza%20Casa%20de%20Bolsa%20C.A!5e0!3m2!1ses!2sve!4v1773170192534!5m2!1ses!2sve"
                            class="w-full h-full border-0" allowfullscreen="false" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="bg-black-alt p-10 flex flex-col justify-center grow">
                        <h3 class="text-white mb-2">Dirección</h3>
                        <p class="p2 text-white-alt">{{ commonData.address }}</p>
                    </div>
                </motion.div>

                <motion.div class="w-full md:w-auto lg:w-1/2 pl-12 flex flex-col justify-center gap-8"
                    :variants="generalContainerVariants">
                    <motion.div v-for="(method, index) in contactMethods" :key="index" :variants="generalItemVariants"
                        class="w-full h-28 bg-white border border-gray flex">
                        <div
                            class="mt-2 w-24 h-24 bg-primary -translate-x-1/2 flex shrink-0 items-center justify-center">
                            <img :src="method.icon" :alt="method.title" title="method.title" class="w-18 h-18 object-contain" />
                        </div>
                        <div class="-translate-x-5 flex flex-col justify-center py-8 grow">
                            <h5 class="text-black-alt">{{ method.title }}</h5>
                            <p class="p2">{{ method.value }}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    </div>
</template>
<script setup lang="ts">
import { metadata } from '@/assets/data/metadata';
import { motion } from 'motion-v';
import { generalItemVariants, generalContainerVariants } from '~/assets/animations/motion';

const openPopoverIndex = ref<number | null>(null);

const supports: { image: string, alt: string }[] = [
    {
        image: '/images/pages/responsabilidad/supports/1.webp',
        alt: 'sup_1'
    },
    {
        image: '/images/pages/responsabilidad/supports/2.webp',
        alt: 'sup_2'
    },
    {
        image: '/images/pages/responsabilidad/supports/3.webp',
        alt: 'sup_3'
    },
    {
        image: '/images/pages/responsabilidad/supports/4.webp',
        alt: 'sup_4'
    }
]

const warnings: { image: string, alt: string, title: string, content: string }[] = [
    {
        image: '/images/pages/responsabilidad/warnings/1.webp',
        alt: 'warning_1',
        title: 'Prevención y control de legitimación de capitales',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        image: '/images/pages/responsabilidad/warnings/2.webp',
        alt: 'warning_2',
        title: 'Estándar "Conozca a su cliente" (KYC)',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        image: '/images/pages/responsabilidad/warnings/3.webp',
        alt: 'warning_3',
        title: 'Código de ética y conducta profesional',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
]

const links: { description: string, button: { link: string }, image: { url: string, alt: string } }[] = [
    {
        description: 'Decreto con rango valor y fuerza de ley del mercado de valores',
        button: {
            link: '',
        },
        image: {
            url: '/images/pages/responsabilidad/links/1.webp',
            alt: 'link_1'
        }
    },
    {
        description: 'Ley orgánica contra la delincuencia organizada y financiamiento al terrorismo (LOCDOFT)',
        button: {
            link: '',
        },
        image: {
            url: '/images/pages/responsabilidad/links/2.webp',
            alt: 'link_2'
        }
    },
    {
        description: 'Ley orgánica de drogas (LOD)',
        button: {
            link: '',
        },
        image: {
            url: '/images/pages/responsabilidad/links/3.webp',
            alt: 'link_3'
        }
    },
    {
        description: 'Providencia 209 - Gaceta oficial 42115',
        button: {
            link: '',
        },
        image: {
            url: '/images/pages/responsabilidad/links/4.webp',
            alt: 'link_4'
        }
    },
    {
        description: 'Demás circulares enmarcadas por la SUNAVAL',
        button: {
            link: '',
        },
        image: {
            url: '/images/pages/responsabilidad/links/5.webp',
            alt: 'link_5'
        }
    },
    {
        description: 'Gaceta oficial normas relativas <br /> al buen gobierno corporativo',
        button: {
            link: '',
        },
        image: {
            url: '/images/pages/responsabilidad/links/6.webp',
            alt: 'link_6'
        }
    }
]

useSeoMeta(metadata.responsabilidad);
</script>

<template>
    <div class="w-full h-auto flex flex-col">
        <CommonHero :title="'Responsabilidad social <br /> y buen gobierno corporativo'"
            :description="'Combinamos el servicio social con estrictos controles de riesgo, <br /> asegurando un entorno de inversión seguro, ético y legal.'"
             :image="{
                src: '/images/hero/main-responsabilidad.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-responsabilidad.webp',
            }" />


        <CommonContentWithColumns backgroundImage="/images/backgrounds/responsabilidad-1.webp"
            title="Responsabilidad <br /> social corporativa" cover-wrapper>
            <Motion :variants="generalItemVariants">
                <h4 class="text-white font-extrabold! mb-4">
                    Compromiso Integral ESG y Fortalecimiento Social
                </h4>

                <p class="p2 md:text-sm lg:p3 text-white">
                    En la alta gerencia de Maximiza entendemos que la verdadera generación de valor trasciende con
                    creces el pago trimestral de dividendos financieros. Adoptamos de forma endógena los criterios de
                    sostenibilidad ESG (Ambiental, Social y de Gobernanza) como pilares fundamentales para participar
                    activamente en el renacimiento productivo de la sociedad venezolana.
                </p>
            </Motion>
        </CommonContentWithColumns>

        <motion.section class="container w-full mx-auto py-16 flex flex-col space-y-8"
            :variants="generalContainerVariants" initial="hidden" animate="visible">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-24 w-full ">
                <Motion :variants="generalItemVariants" class="flex flex-col items-center">
                    <img src="/images/pages/responsabilidad/cards/1.webp" alt="Bienestar social"
                        class="w-full h-auto aspect-video object-cover" />
                    <div class="bg-primary -mt-6 py-4 px-3 lg:px-6 relative z-10 w-[75%]">
                        <h6 class="text-white text-center">
                            Bienestar social
                        </h6>
                    </div>
                </Motion>
                <Motion :variants="generalItemVariants" class="flex flex-col items-center">
                    <img src="/images/pages/responsabilidad/cards/2.webp" alt="Donaciones dirigidas"
                        class="w-full h-auto aspect-video object-cover" />
                    <div class="bg-primary -mt-6 py-4 px-3 lg:px-6 relative z-10 w-[75%]">
                        <h6 class="text-white text-center">

                            Donaciones dirigidas
                        </h6>
                    </div>
                </Motion>
                <Motion :variants="generalItemVariants" class="flex flex-col items-center">
                    <img src="/images/pages/responsabilidad/cards/3.webp" alt="Comité social"
                        class="w-full h-auto aspect-video object-cover" />
                    <div class="bg-primary -mt-6 py-4 px-3 lg:px-6 relative z-10 w-[75%]">
                        <h6 class="text-white text-center">

                            Comité social
                        </h6>
                    </div>
                </Motion>
            </div>

            <Motion :variants="generalItemVariants" class="w-full">
                <p class="p1md:p2 text-gray">
                    A través de nuestro estructurado Comité Social, canalizamos recursos, tiempo y conocimientos para
                    respaldar el accionar de fundaciones, instituciones educativas de base y programas formativos
                    especializados, dejando una huella tangible, solidaria y medible en pro del crecimiento de las
                    futuras generaciones de nuestra nación.
                </p>
            </Motion>

            <motion.section class="w-full flex flex-col max-sm:items-center md:flex-row md:justify-between gap-4 lg:gap-8 " :variants="generalContainerVariants"
                initial="hidden" animate="visible">

                <motion.img v-for="(support, index) in supports" :key="index" :variants="generalItemVariants"
                    class="w-full max-w-[183px] md:max-w-[136px] lg:max-w-[183px]" :src="support.image" :alt="support.alt" />
            </motion.section>
        </motion.section>



        <CommonContentWithColumns backgroundImage="/images/backgrounds/responsabilidad-2.webp"
            title="Buen gobierno <br /> corporativo" cover-wrapper>
            <motion.div :variants="generalItemVariants">
                <h5 class="text-white font-extrabold! mb-4">
                    El pilar inquebrantable de nuestra integridad
                </h5>

                <p class="p2 text-white">
                    Nuestra adopción temprana y respeto estricto a las mejores prácticas de gobierno corporativo brindan
                    la seguridad jurídica, operativa y económica esencial para un crecimiento sostenible y la atracción
                    constante de inversiones institucionales.
                </p>
                <br />
                <p class="p2 text-white">
                    En Maximiza Casa de Bolsa, nuestras operaciones están protegidas por un riguroso ecosistema ético y
                    regulatorio global.
                </p>
            </motion.div>
        </CommonContentWithColumns>


        <motion.section class="container mx-auto w-full px-0 md:px-8 py-16 max-w-5xl" :variants="generalContainerVariants"
            initial="hidden" animate="visible">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <motion.li v-for="(warning, index) in warnings" :key="`warning-${index}`"
                    :variants="generalItemVariants" class="w-full relative transition-[z-index] duration-300"
                    :class="openPopoverIndex === index ? 'z-50' : 'z-0'">
                    <AppPopover position="bottom" class="w-full! block!"
                        @toggled="(val) => openPopoverIndex = val ? index : null">
                        <template #trigger>
                            <div
                                class="flex items-center stretch bg-white border border-white-alt2 cursor-pointer hover:shadow-md transition-shadow h-full w-full">
                                <div class="w-26 h-30 bg-white-alt" />
                                <div
                                    class="absolute bg-black-alt translate-x-1/5 flex items-center justify-center w-24 h-24 aspect-square">
                                    <img :src="warning.image" :alt="warning.alt" class="w-full h-full object-contain" />
                                </div>
                                <div class="flex-1 px-6 py-4 flex items-center justify-between">
                                    <h5 class="text-black-alt" v-html="warning.title" />
                                    <FontAwesomeIcon :icon="['fas', 'chevron-down']" class="text-black-alt shrink-0" />
                                </div>
                            </div>
                        </template>
                        <div class="w-full text-left min-w-64 max-w-sm">
                            <p class="text-gray text-sm md:text-base leading-relaxed">{{ warning.content }}</p>
                        </div>
                    </AppPopover>
                </motion.li>
            </div>

        </motion.section>


        <CommonContentWithColumns title="Marco Regulatorio y Cumplimiento Legal"
            background-image="/images/backgrounds/soluciones-financieras.webp" is-split-background auto-columns
            :columns="{
                left: 'md:w-[35%]',
                right: 'md:w-[65%]',
            }">
            <CommonContentCard v-for="(item, index) in links" :key="`link-${index}`" :content="item.description"
                :button="{ label: 'Descargar', link: item.button.link, icon: 'download', size: 'md' }"
                :image="{ url: item.image.url, alt: item.image.alt }" is-image-full/>

        </CommonContentWithColumns>
    </div>
</template>
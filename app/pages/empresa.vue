<script setup lang="ts">
import { motion } from 'motion-v';
import { metadata } from '@/assets/data/metadata';
import { headerItemVariants, generalContainerVariants, generalItemVariants } from "@/assets/animations/motion"

const institutionalValues = ref([
    {
        label: 'Confianza',
        description: "fiduciaria integral",
        image: '/images/pages/empresa/items/1.webp'
    },
    {
        label: 'Responsabilidad',
        description: "patrimonial rigurosa",
        image: '/images/pages/empresa/items/2.webp'
    },
    {
        label: 'Compromiso',
        description: "analitico de excelencia",
        image: '/images/pages/empresa/items/3.webp'
    },
    {
        label: 'Pensamiento',
        description: "estrategico anticipado",
        image: '/images/pages/empresa/items/4.webp'
    },
    {
        label: 'Transparencia',
        description: "operativa absoluta",
        image: '/images/pages/empresa/items/5.webp'
    },
]);

const alliesLogos = ref([
    {
        src: '/images/pages/empresa/allies/1.webp',
        alt: 'Alianzas 1'
    },
    {
        src: '/images/pages/empresa/allies/2.webp',
        alt: 'Alianzas 2'
    },
    {
        src: '/images/pages/empresa/allies/3.webp',
        alt: 'Alianzas 3'
    },
    {
        src: '/images/pages/empresa/allies/4.webp',
        alt: 'Alianzas 4'
    },
    {
        src: '/images/pages/empresa/allies/5.webp',
        alt: 'Alianzas 5'
    },
    {
        src: '/images/pages/empresa/allies/6.webp',
        alt: 'Alianzas 6'
    },
])

useSeoMeta(metadata.empresa);
</script>

<template>
    <div class="w-full h-auto flex flex-col">
        <CommonHero :title="'Arquitectos de su futuro financiero'"
            :description="'Aliados estratégicos en ingeniería financiera avanzada: gestión patrimonial, activos alternativos y financiamiento corporativo a gran escala con máxima integridad.'"
            :button="{
                text: 'Configure su estrategia patrimonial',
                link: '#'
            }" :image="{
                src: '/images/hero/main-empresa.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-empresa.webp',
            }" />

        <CommonTextBanner
            :description="'Constituidos en 1992, atesoramos más de tres décadas de trayectoria y experiencia en el mercado de capitales venezolano. Estamos comprometidos con ofrecer a nuestros clientes soluciones integrales a través de servicios especializados de corretaje de títulos valores y asesoría en finanzas corporativas.'"
            :background="'/images/textBanner/empresa.webp'" />


        <motion.section class="container w-full min-h-dvh flex flex-col justify-center items-center py-16"
            :variants="generalContainerVariants" initial="hidden" animate="visible">
            <CommonSectionHeader title="Banca de inversión y asesoría corporativa de clase mundial" />

            <div class="w-full max-w-6xl flex flex-col gap-16 mt-6 px-4 md:px-0">
                <motion.div class="flex flex-col md:flex-row items-center w-full" :variants="generalItemVariants">
                    <div
                        class="bg-primary w-full md:w-62.5 h-75 md:h-62.5 p-4 flex shrink-0 justify-center items-center z-10 relative">
                        <img src="/images/pages/empresa/info-section-1.webp" alt="Especialistas en asesoría"
                            class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="bg-linear-to-r from-white to-white-alt2 p-8 md:p-16 md:pl-40 md:pr-24 w-full grow md:-ml-31.25 z-0">
                        <h4 class="text-black-alt mb-4">Foco corporativo especializado</h4>
                        <p class="p1 text-gray">
                            Brindamos asesoría analítica exhaustiva a corporaciones nacionales y entidades extranjeras
                            en la intrincada valoración de empresas de gran capitalización, estructuración de fusiones y
                            adquisiciones (M&A), y diseño de financiamientos a la medida.
                        </p>
                    </div>
                </motion.div>

                <motion.div class="flex flex-col md:flex-row-reverse items-center w-full"
                    :variants="generalItemVariants">
                    <div
                        class="bg-black-alt w-full md:w-62.5 h-75 md:h-62.5 p-4 flex shrink-0 justify-center items-center z-10 relative">
                        <img src="/images/pages/empresa/info-section-2.webp" alt="Alianzas formales"
                            class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="bg-linear-to-r from-white to-white-alt2 p-8 md:p-16 md:pr-40 md:pl-24 w-full grow md:-mr-31.25 z-0">
                        <h4 class="text-black-alt mb-4 text-right">Ecosistema de promoción financiera</h4>
                        <p class="p1 text-gray text-right">
                            Nuestro ADN innovador nos ha llevado a participar activamente en la cimentación de vehículos
                            financieros líderes, tales como Silk & CO (banca de inversión regional) y Vitral Advisors
                            LLC (RIA registrado en la SEC, Nueva York), lo que nos capacita para ofrecer soluciones
                            transfronterizas sin fricciones.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>

        <CommonContentWithColumns title="Filosofía y ADN corporativo"
            background-image="/images/backgrounds/mision-y-vision.webp" is-split-background auto-columns :columns="{
                left: 'md:w-[25%]',
                right: 'md:w-[75%]',
            }">
            <CommonContentCard title="Misión"
                content="Diseñar y estructurar soluciones de inversión y financiamiento innovadoras que aporten una capa inexpugnable de seguridad, maximicen la rentabilidad y cultiven la confianza absoluta, garantizando un servicio de excelencia y sofisticación a nuestra clientela institucional y privada."
                :image="{ url: '/images/pages/empresa/mision-item.webp', alt: 'Misión' }" :styles="{
                    title: 'text-black-alt mb-2 md:mb-4',
                    content: 'p2 text-sm md:text-base lg:p3 text-gray',
                    wrapper: 'flex-1 p-4 flex flex-col justify-center'
                }" />

            <CommonContentCard title="Visión"
                content="Consolidarnos indiscutiblemente como el referente principal y más respetado de la banca de inversión en el mercado venezolano, impulsando el tejido productivo del país a través de la máxima eficiencia operativa, la transparencia innegociable y la alineación total de intereses con nuestros stakeholders."
                :image="{ url: '/images/pages/empresa/vision-item.webp', alt: 'Visión' }" :styles="{
                    title: 'text-black-alt mb-2 md:mb-4',
                    content: 'p2 text-sm md:text-base lg:p3 text-gray',
                    wrapper: 'flex-1 p-4 flex flex-col justify-center'
                }" />
        </CommonContentWithColumns>

        <motion.section class="hidden md:flex py-16 bg-black-alt w-full flex-col items-center" :style="{
            backgroundImage: `url(${'/images/backgrounds/valores.webp'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }" :variants="generalContainerVariants" initial='hidden' whileInView="visible" :viewport="{ once: true }">

            <ul class="container w-full mx-auto flex flex-col md:flex-row justify-center gap-4 lg:gap-12">
                <motion.li v-for="(value, index) in institutionalValues" :key="`empresa_item_${index}`"
                    class="flex-1 flex flex-col items-center justify-center" :variants="headerItemVariants">

                    <img :src="value.image" :alt="value.label"
                        class="w-40 h-40 md:w-20 md:h-20 2xl:w-40 2xl:h-40 mb-4 object-contain" />

                    <h5 class="text-white font-semibold text-center">{{ value.label }}</h5>
                    <p class="text-white text-center p3">{{ value.description }}</p>

                </motion.li>
            </ul>
        </motion.section>

        <ModulesEmpresaManagementTeam class="hidden md:flex" />

        <motion.section class="hidden md:flex container w-full mb-20" :variants="generalContainerVariants"
            initial="hidden" animate="visible">

            <div class="w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                <div class="w-2/5 flex flex-col gap-4">
                    <h3 class="text-right text-black-alt">
                        Red global de <br /> alianzas estratégicas
                    </h3>
                    <p class="p3 text-right text-gray">
                        Nuestra solidez operativa se encuentra cimentada y respaldada en décadas de relaciones
                        formales
                        e
                        institucionales ininterrumpidas con las firmas financieras más prestigiosas del
                        hemisferio.
                    </p>
                </div>

                <div class="p-4 `md:p-8 lg:p-12 xl:p-16 bg-white-alt grid grid-cols-3 gap-6">
                    <motion.img v-for="(logo, index) in alliesLogos" :key="`empresa_allies_${index}`" :src="logo.src"
                        :alt="logo.alt" class="aspect-square" :variants="generalItemVariants" />
                </div>
            </div>
        </motion.section>

        <ModulesEmpresaBalanceSection />
    </div>
</template>
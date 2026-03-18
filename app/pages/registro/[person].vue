<script setup lang="ts">
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion';
import { metadata } from '~/assets/data/metadata';

const route = useRoute();
const personType = ref<string>('');

const labels: Record<string, { title: string, description: string, banner: string, requiredDocuments: string[] }> = {
    "persona-natural": {
        title: 'Persona Natural',
        description: 'Pasos a seguir para el registro de Persona Natural',
        banner: '/images/pages/registro/header-persona-natural.webp',
        requiredDocuments: [
            "Cédula de Identidad vigente, para personas venezolanas y extranjeras residentes en el país, o copia del pasaporte para personas extrajeras no residente.",
            "Registro de Información Fiscal (RIF), vigente.",
            "Una (1) Referencia Bancaria, con una vigencia mínima de tres meses.",
            "Constancia de trabajo actual del inversor, o informe de atestiguamiento de ingresos emitida por un contador público colegiado, en el caso de personas que trabajen de manera independiente.",
            "Planilla de Declaración Jurada de Origen y Destino de los Fondos, cada vez que realice una operación."
        ]
    },
    "persona-juridica": {
        title: 'Persona Jurídica',
        description: 'Pasos a seguir para el registro de Persona Jurídica',
        banner: '/images/pages/registro/header-persona-juridica.webp',
        requiredDocuments: [
            "Registro de Información Fiscal (RIF), vigente.",
            "Cédula de Identidad y Registro de Información Fiscal (RIF) vigente del representante legal de la persona jurídica.",
            "Documento constitutivo y las modificaciones estatutarias de la persona jurídica que muestre los socios beneficiarios finales de la sociedad. En caso de persona jurídica no domiciliada en el país, los mismos documentos debidamente protocolizados y traducidos al idioma castellano.",
            "Acta de asamblea donde conste la elección de la junta directiva actual, sin que se encuentre vencido su período electivo.",
            "Una (1) Referencia Bancaria, con una vigencia mínima de tres meses.",
            "Planilla de Declaración Jurada de Origen y Destino de los Fondos, cada vez que realice una operación.",
        ],
    }
}

onMounted(() => {
    personType.value = String(route.params.person);
    
    if (labels[personType.value]) {
        useSeoMeta({
            ...metadata.registro,
            title: `Registro ${labels[personType.value]!.title} — Maximiza Casa de Bolsa`,
            description: labels[personType.value]!.description,
            ogTitle: `Registro ${labels[personType.value]!.title} — Maximiza Casa de Bolsa`,
            ogDescription: labels[personType.value]!.description,
        });
    } else {
        useSeoMeta(metadata.registro);
    }
})

</script>

<template>
    <div v-if="personType == 'persona-natural' || personType == 'persona-juridica'"
        class="w-full h-auto  flex flex-col">
        <ModulesOnboardingHeader :title="labels[personType]!.title" :description="labels[personType]!.description"
            :banner="{
                src: labels[personType]!.banner,
            }" />

        <ModulesOnboardingRequierements :personType="personType"
            :requierements="labels[personType]!.requiredDocuments" />


        <motion.div :variants="generalContainerVariants" initial="hidden" whileInView="visible"
            :viewport="{ once: true, margin: '-120px' }" class="mt-[10vh] bg-white lg:bg-white-alt">
            <CommonContentWithColumns
                :backgroundImage="personType === 'persona-natural' ? '/images/pages/registro/banner-persona-natural.webp' : '/images/pages/registro/banner-persona-juridica.webp'"
                title="Comienza completando el formulario de registro" />

            <div class="container lg:-translate-y-10">
                <ModulesOnboardingWizardWrapper>
                    Wizard form
                </ModulesOnboardingWizardWrapper>
            </div>
        </motion.div>
    </div>

    <div v-else class="w-full h-auto  flex flex-col">
        <CommonHero :title="'Inicie la estructuración de su nueva estrategia financiera'"
            :description="'Evaluación confidencial para proteger su tesorería de la volatilidad o diseñar un financiamiento a la medida para su ciclo productivo.'"
            :image="{
                src: '/images/hero/main-registro.webp',
                alt: 'Hero Background'
            }" :pattern="{
                src: '/images/hero/pattern-registro.webp',
            }" :button="{
                text: 'Registrarse',
                link: '/registro'
            }" />
    </div>
</template>
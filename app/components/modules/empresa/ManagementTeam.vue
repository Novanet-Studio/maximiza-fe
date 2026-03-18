<script setup lang="ts">
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion';

const managementTeam = ref(
    {
        "Shareholders": {
            "label": "Accionistas",
            "persons": [
                {
                    "name": "José Carrillo",
                    "rol": "Presidente",
                    "description": "Abogado de la Universidad Católica Andrés Bello. Año (1972-1977) Corredor Público de Valores autorizado por la Superintendencia Nacional de Valores."
                },
                {
                    "name": "Vicente Carrillo",
                    "rol": "Vicepresidente",
                    "description": "Abogado de la Universidad Católica Andrés Bello Año (1977-1992). Maestría en Leyes. Asesorías legales y de inversión."
                },
                {
                    "name": "Maryoli Rivera",
                    "rol": "Director principal",
                    "description": "T.S.U. en Administración de Empresas - Mención Organización y Sistemas Año (1994-1997) Instituto Universitario de Mercadotecnia. Planificación de liquidez e inversiones. Evaluación de riesgos sobre la situación económico-financiera."
                }
            ]
        },
        "BoardOfDirectors": {
            "label": "Junta directiva",
            "persons": [
                {
                    "name": "Juan Carrillo",
                    "rol": "Director suplente",
                    "description": "Economista Empresarial. Año (2010-2015) Universidad Metropolitana. Especialista en Planificación estratégica, análisis de coyunturas y estimación de riesgos."
                },
                {
                    "name": "Quintina Avilez",
                    "rol": "Director suplente",
                    "description": "Licenciada en contaduría Pública. Año (1992-1999) de la Universidad Santa María. Especialista en Análisis Financiero."
                },
                {
                    "name": "Daniela Escalona",
                    "rol": "Director Suplente",
                    "description": "Licenciatura en Ciencias Administrativas opción Banca y Finanzas de la Universidad Metropolitana, Maestría en Finanzas y Master en Administración del IESA. Con experiencia en el área de Finanzas Corporativas por más de veinte años, participando en más de 100 valoraciones de toda índole y complejidad de empresa en distintas industrias, distintos países de la Región y distintos entornos económicos, elaborando estudios de factibilidad económico-financieros, diagnósticos y análisis financieros, modelación y preparación de prospectos de inversión y proyecciones financieras, análisis estratégicos, entre otros."
                },
                {
                    "name": "Carlos Rizzolo",
                    "rol": "Director Suplente",
                    "description": "Licenciatura en Ingeniería Eléctrica de la Universidad Simón Bolívar. Maestría en Finanzas Corporativas de la Universidad Católica Andrés Bello. Estudio Ejecutivo en Valoración de la Universidad de Nueva York (NYU), con más de 13 años de experiencia en el Sector Financiero. Especializado en Asesoramiento e Inversiones Discrecionales. Desarrollo y ejecución de estrategias de inversión cuantitativas."
                }
            ]
        },
        "Curators": {
            "label": "Comisarios",
            "persons": [
                {
                    "name": "Alexander Zapata",
                    "rol": "Principal",
                    "description": "Licenciado En Contaduría Pública – Universidad Santa María"
                },
                {
                    "name": "Karina Abreu",
                    "rol": "Suplente",
                    "description": "Licenciado En Contaduría Pública - Universidad Santa María"
                }
            ]
        }
    }
);

const managementTeamVariants = {
    Shareholders: {
        background: "bg-black-alt",
        titleText: "text-white",
        subtitleText: "text-secondary"
    },
    BoardOfDirectors: {
        background: "bg-primary",
        titleText: "text-white",
        subtitleText: "text-secondary"
    },
    Curators: {
        background: "bg-white-alt",
        titleText: "text-black-alt",
        subtitleText: "text-primary"
    }
}

</script>

<template>

    <section class="container mx-auto w-full min-h-dvh flex flex-col justify-start items-start py-16">
        <CommonSectionHeader title="Equipo directivo" />

        <motion.div class="w-full mb-16" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
            :viewport="{ once: true, margin: '-50px' }">

            <div class="mb-4">
                <h3 class="text-left text-black-alt">Accionistas</h3>
            </div>

            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.div v-for="(person, index) in managementTeam.Shareholders.persons" :key="index"
                    :variants="generalItemVariants">
                    <ModulesEmpresaManagementTeamItem :name="person.name" :rol="person.rol"
                        :description="person.description" :variant="managementTeamVariants.Shareholders" />
                </motion.div>
            </div>
        </motion.div>

        <motion.div class="w-full mb-16" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
            :viewport="{ once: true, margin: '-50px' }">
            <div class="mb-4">
                <h3 class="text-left text-black-alt">Junta directiva</h3>
            </div>

            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <motion.div v-for="(person, index) in managementTeam.BoardOfDirectors.persons" :key="index"
                    :variants="generalItemVariants">
                    <ModulesEmpresaManagementTeamItem :name="person.name" :rol="person.rol"
                        :description="person.description" :variant="managementTeamVariants.BoardOfDirectors" />
                </motion.div>
            </div>
        </motion.div>

        <motion.div class="w-full mb-16" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
            :viewport="{ once: true, margin: '-50px' }">

            <div class="mb-4">
                <h3 class="text-left text-black-alt">Comisarios</h3>
            </div>

            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <motion.div v-for="(person, index) in managementTeam.Curators.persons" :key="index"
                    :variants="generalItemVariants">
                    <ModulesEmpresaManagementTeamItem :name="person.name" :rol="person.rol"
                        :description="person.description" :variant="managementTeamVariants.Curators" />
                </motion.div>
            </div>
        </motion.div>
    </section>

</template>
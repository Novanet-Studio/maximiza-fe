<script setup lang="ts">
import { motion } from 'motion-v'
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion'

const managementTeam = ref({
  Shareholders: {
    label: 'Accionistas',
    persons: [
      {
        name: 'José Tomás Carrillo-Batalla',
        rol: 'Presidente',
        description:
          'Abogado de la Universidad Católica Andrés Bello (1977). Corredor Público de Valores autorizado por la Superintendencia Nacional de Valores. Programa Mason (Harvard Kennedy School), MBA de Babson, LLM de Harvard Law y abogado de la UCAB. Co-fundador de Mibanco y de CNI Asesores Financieros.',
      },
      {
        name: 'Vicente Carrillo-Batalla',
        rol: 'Vicepresidente',
        description:
          'Abogado de la Universidad Católica Andrés Bello (1992). Magíster en Leyes por la Universidad de Harvard. Cónsul General de Venezuela en Nueva York (1995-1999). Miembro fundador y Presidente de CONVECAR. Asesorías legales y de inversión.',
      },
      {
        name: 'Maryoli Rivera',
        rol: 'Director principal',
        description:
          'T.S.U. en Administración de Empresas, mención Organización y Sistemas. Ejecutiva financiera con más de 30 años de trayectoria en el mercado de valores nacional e internacional. Análisis profundo del entorno macroeconómico y la estructuración de soluciones financieras que impulsan el crecimiento corporativo.',
      },
    ],
  },
  BoardOfDirectors: {
    label: 'Junta directiva',
    persons: [
      {
        name: 'Juan Vicente Carrillo-Batalla',
        rol: 'Director suplente',
        description:
          'Economista Empresarial (2015) de la Universidad Metropolitana. Especialista en Planificación estratégica, análisis de coyunturas y estimación de riesgos. Experiencia liderando iniciativas de planificación financiera, optimización de capital y asesoría a la alta gerencia para la mitigación de riesgos operativos y de mercado.',
      },
      {
        name: 'Quintina Avilez',
        rol: 'Director suplente',
        description:
          'Lic. Contaduría Pública. Especialista en Finanzas, Auditoría y Gobierno Corporativo con más de 30 años de trayectoria en el sector bancario y mercado de valores (Bank of America, ING Bank). Experta en el diseño e implementación de estrategias de control interno, cumplimiento normativo. Especialista en análisis Financiero y de Riesgo.',
      },
      {
        name: 'Daniela Escalona',
        rol: 'Director suplente',
        description:
          'Lic. en Ciencias Administrativas opción Banca y Finanzas de la Universidad Metropolitana, Maestría en Finanzas y Master en Administración del IESA. Con experiencia en el área de Finanzas Corporativas por más de 20 años. Experta en diagnósticos, análisis financieros, modelación y preparación de prospectos de inversión y proyecciones financieras, análisis estratégicos, entre otros.',
      },
      {
        name: 'Carlos Rizzolo',
        rol: 'Director suplente',
        description:
          'Ingeniería Eléctrica de la Universidad Simón Bolívar. Maestría en Finanzas Corporativas de la Universidad Católica Andrés Bello. Estudio Ejecutivo en Valoración de la Universidad de Nueva York (NYU), con más de 13 años de experiencia en el Sector Financiero. Especializado en Asesoramiento e Inversiones Discrecionales.',
      },
      {
        name: 'Gastón Sardi',
        rol: 'Director independiente',
        description:
          'Ingeniero de Sistemas de la Universidad Metropolitana (1983). Más de 40 años de experiencia en la dirección de empresas, implementando estrategias y planes de negocio en Venezuela y en otros países de Latinoamérica. Adicionalmente he estado vinculado en diferentes actividades gremiales y de responsabilidad social.',
      },
    ],
  },
  Curators: {
    label: 'Comisarios',
    persons: [
      {
        name: 'Alexander Zapata',
        rol: 'Principal',
        description: 'Licenciado En Contaduría Pública – Universidad Santa María',
      },
      {
        name: 'Karina Abreu',
        rol: 'Suplente',
        description: 'Licenciado En Contaduría Pública - Universidad Santa María',
      },
    ],
  },
})

const managementTeamVariants = {
  Shareholders: {
    background: 'bg-black-alt',
    titleText: 'text-white',
    subtitleText: 'text-secondary',
  },
  BoardOfDirectors: {
    background: 'bg-primary',
    titleText: 'text-white',
    subtitleText: 'text-secondary',
  },
  Curators: {
    background: 'bg-white-alt',
    titleText: 'text-black-alt',
    subtitleText: 'text-primary',
  },
}
</script>

<template>
  <section class="container mx-auto flex min-h-dvh w-full flex-col items-start justify-start py-16">
    <CommonSectionHeader title="Equipo Directivo" />

    <motion.div class="mb-16 w-full" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
      :viewport="{ once: true, margin: '-50px' }">
      <div class="mb-4">
        <h3 class="text-black-alt text-left">Accionistas</h3>
      </div>

      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <motion.div v-for="(person, index) in managementTeam.Shareholders.persons" :key="index"
          :variants="generalItemVariants">
          <ModulesEmpresaManagementTeamItem :name="person.name" :rol="person.rol" :description="person.description"
            :variant="managementTeamVariants.Shareholders" />
        </motion.div>
      </div>
    </motion.div>

    <motion.div class="mb-16 w-full" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
      :viewport="{ once: true, margin: '-50px' }">
      <div class="mb-4">
        <h3 class="text-black-alt text-left">Junta Directiva</h3>
      </div>

      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <motion.div v-for="(person, index) in managementTeam.BoardOfDirectors.persons" :key="index"
          :variants="generalItemVariants">
          <ModulesEmpresaManagementTeamItem :name="person.name" :rol="person.rol" :description="person.description"
            :variant="managementTeamVariants.BoardOfDirectors" />
        </motion.div>
      </div>
    </motion.div>

    <motion.div class="mb-16 w-full" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
      :viewport="{ once: true, margin: '-50px' }">
      <div class="mb-4">
        <h3 class="text-black-alt text-left">Comisarios</h3>
      </div>

      <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <motion.div v-for="(person, index) in managementTeam.Curators.persons" :key="index"
          :variants="generalItemVariants">
          <ModulesEmpresaManagementTeamItem :name="person.name" :rol="person.rol" :description="person.description"
            :variant="managementTeamVariants.Curators" />
        </motion.div>
      </div>
    </motion.div>
  </section>
</template>

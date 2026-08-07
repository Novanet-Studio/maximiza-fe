<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { metadata } from '@/assets/data/metadata'
  import { useJsonLd } from '~/composables/useJsonLd'
  import { jsonld } from '~/assets/data/jsonld'
  import { motion } from 'motion-v'
  import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion'
  import commonData from '@/assets/data/common.json'

  const sections = [
    { id: 'compromiso', title: '1. Compromiso de Privacidad' },
    { id: 'datos', title: '2. Datos que Recopilamos' },
    { id: 'finalidad', title: '3. Finalidad del Tratamiento' },
    { id: 'chatbot', title: '4. Canal de WhatsApp' },
    { id: 'seguridad', title: '5. Protección de Datos' },
    { id: 'derechos', title: '6. Derechos del Usuario' },
    { id: 'contacto', title: '7. Soporte y Consultas' },
  ]

  const activeSection = ref(sections[0].id)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -120 // accounting for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      activeSection.value = id
    }
  }

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const options = {
      root: null,
      rootMargin: '-120px 0px -65% 0px',
      threshold: 0,
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }, options)

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  useSeoMeta(metadata.politicaPrivacidad)
  useJsonLd(jsonld.politicaPrivacidad)
</script>

<template>
  <div class="flex h-auto w-full flex-col bg-white">
    <!-- Hero Banner -->
    <CommonHero
      title="Política de Privacidad"
      description="En Maximiza Casa de Bolsa garantizamos el tratamiento lícito, confidencial y extremadamente seguro de la información personal de nuestros clientes y prospectos."
      :image="{
        src: '/images/hero/maximiza-manos-usando-computadora-flechas-digitales.webp',
        alt: 'Política de privacidad',
      }"
      :pattern="{
        src: '/images/hero/maximiza-pattern-blog.webp',
      }"
    />

    <!-- Main Content Section -->
    <section class="container mx-auto px-4 py-16 md:px-0">
      <div class="flex flex-col gap-12 md:flex-row">
        <!-- Sticky Sidebar Navigation for Desktop -->
        <aside class="hidden md:block md:w-1/4">
          <div class="border-white-alt2 sticky top-[15vh] flex flex-col gap-3 border-l pl-4">
            <p class="text-primary mb-2 text-xs font-bold tracking-wider uppercase">
              Secciones de Privacidad
            </p>
            <a
              v-for="section in sections"
              :key="section.id"
              :href="`#${section.id}`"
              class="hover:text-primary text-sm font-semibold transition-all duration-300 hover:translate-x-1"
              :class="
                activeSection === section.id
                  ? 'text-primary border-primary -ml-[18px] border-l-2 pl-[16px] font-bold'
                  : 'text-gray'
              "
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.title }}
            </a>
          </div>
        </aside>

        <!-- Rich Text Legal Content -->
        <motion.div
          class="flex w-full flex-col gap-12 md:w-3/4"
          :variants="generalContainerVariants"
          initial="hidden"
          whileInView="visible"
          :viewport="{ once: true, margin: '-50px' }"
        >
          <!-- Section 1: Compromiso de Privacidad -->
          <motion.div :variants="generalItemVariants" id="compromiso" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">1.</span>
              Compromiso de Privacidad y Consentimiento
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                <strong>Maximiza Casa de Bolsa, C.A.</strong> (en adelante, "Maximiza"), asume el
                compromiso inquebrantable de salvaguardar el derecho fundamental a la privacidad,
                secreto bancario y protección de datos personales de todos los usuarios de sus
                plataformas digitales, formularios web de registro y el servicio automatizado de
                asistencia y Onboarding por WhatsApp (en adelante, la "Plataforma").
              </p>
              <p>
                Esta Política de Privacidad describe de manera detallada e inequívoca las prácticas
                de recopilación, almacenamiento, uso, custodia y divulgación de datos de carácter
                personal. Al interactuar con nuestros portales web o iniciar una conversación guiada
                con nuestro Chatbot, usted presta su consentimiento explícito para el tratamiento de
                su información según se estipula en este instrumento.
              </p>
            </div>
          </motion.div>

          <!-- Section 2: Datos que Recopilamos -->
          <motion.div :variants="generalItemVariants" id="datos" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">2.</span>
              Categorías de Datos Personales Recopilados
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Para dar cumplimiento a los procesos legales y normativas obligatorias dictadas por
                la Superintendencia Nacional de Valores (SUNAVAL), requerimos recopilar las
                siguientes categorías de información:
              </p>
              <ul class="text-gray flex list-disc flex-col gap-2 pl-6 text-sm md:text-base">
                <li>
                  <strong>Datos de Identificación Básica:</strong> Nombre completo, número de cédula
                  de identidad, registro de información fiscal (RIF) y firma digital.
                </li>
                <li>
                  <strong>Datos de Contacto:</strong> Correo electrónico, dirección física y número
                  de teléfono móvil nacional.
                </li>
                <li>
                  <strong>Datos Conversacionales (WhatsApp):</strong> Registro de mensajes
                  transaccionales, selección de opciones en menús, fecha y hora de la interacción y
                  metadatos conversacionales.
                </li>
                <li>
                  <strong>Datos de Verificación Legal (KYC):</strong> Fotografías de documentos de
                  identidad, comprobantes de origen lícito de fondos y planillas de perfilamiento
                  financiero de riesgo.
                </li>
              </ul>
            </div>
          </motion.div>

          <!-- Section 3: Finalidad del Tratamiento -->
          <motion.div :variants="generalItemVariants" id="finalidad" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">3.</span>
              Finalidad del Tratamiento de los Datos
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                La recopilación y el tratamiento de sus datos personales tienen las siguientes
                finalidades legítimas y exclusivas:
              </p>
              <ol class="text-gray flex list-decimal flex-col gap-2 pl-6 text-sm md:text-base">
                <li>
                  Tramitar la apertura reglamentaria de su Cuenta de Corretaje Bursátil en Maximiza.
                </li>
                <li>
                  Validar y contrastar su identidad para dar estricto cumplimiento al estándar
                  institucional de debida diligencia "Conozca a su Cliente" (KYC).
                </li>
                <li>
                  Garantizar que las inversiones no tengan vínculos con actividades de legitimación
                  de capitales (LOCDOFT).
                </li>
                <li>
                  Proporcionar soporte, atención personalizada, guías y asistencia técnica durante
                  el flujo de registro a través del Chatbot automatizado de WhatsApp.
                </li>
                <li>
                  Remitirle notificaciones obligatorias de carácter transaccional o de confirmación
                  de operaciones bursátiles realizadas por usted.
                </li>
              </ol>
            </div>
          </motion.div>

          <!-- Section 4: Canal de WhatsApp -->
          <motion.div :variants="generalItemVariants" id="chatbot" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">4.</span>
              Tratamiento Especial de Datos en el Canal de WhatsApp
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                El Chatbot de Maximiza opera bajo la infraestructura oficial de la API de WhatsApp
                Business provista por <strong>Meta Platforms, Inc.</strong> Para garantizar el uso
                ético del canal, Maximiza se rige por las siguientes pautas estrictas:
              </p>
              <div
                class="border-white-alt2 bg-white-alt/20 my-2 flex flex-col gap-3 rounded-lg border p-6"
              >
                <h5 class="text-black-alt font-bold">
                  Principios de Privacidad en nuestro Chatbot
                </h5>
                <ul class="text-gray flex list-disc flex-col gap-2 pl-5 text-xs md:text-sm">
                  <li>
                    <strong>No Spam:</strong> No utilizaremos su número de teléfono para enviar
                    mensajes masivos promocionales de carácter no deseado. Solo recibirá mensajes
                    relacionados con su proceso de registro (Onboarding) y soporte directo
                    solicitado por usted.
                  </li>
                  <li>
                    <strong>Canal Voluntario:</strong> La conversación por WhatsApp es enteramente
                    opcional. El usuario puede realizar su registro directamente en el portal web si
                    prefiere no usar el canal de WhatsApp.
                  </li>
                  <li>
                    <strong>Opt-Out Sencillo:</strong> Si desea detener de forma definitiva la
                    comunicación con el Chatbot y eliminar sus datos transaccionales, basta con
                    enviar un mensaje de texto que contenga la palabra <strong>"SALIR"</strong> o
                    <strong>"STOP"</strong>.
                  </li>
                </ul>
              </div>
              <p>
                Los mensajes que se intercambien a través de este canal viajan de forma encriptada
                bajo los protocolos oficiales de WhatsApp de Meta, garantizando la seguridad en
                tránsito.
              </p>
            </div>
          </motion.div>

          <!-- Section 5: Protección de Datos -->
          <motion.div :variants="generalItemVariants" id="seguridad" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">5.</span>
              Medidas de Seguridad y Custodia de Datos
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                En Maximiza aplicamos medidas de seguridad físicas, lógicas, administrativas y
                técnicas del más alto nivel para evitar la pérdida, robo, alteración, fuga o acceso
                no autorizado a su información de carácter personal.
              </p>
              <p>
                Nuestras bases de datos están blindadas tras firewalls corporativos de última
                generación. El tráfico de la Plataforma web está encriptado bajo conexiones seguras
                certificadas HTTPS (SSL/TLS). Solo el personal técnico, legal y oficiales de
                cumplimiento debidamente autorizados de Maximiza tienen credenciales de acceso
                restringidas a los datos con fines operativos.
              </p>
              <p>
                <strong>No Venta de Datos:</strong> Maximiza bajo ninguna circunstancia vende,
                renta, comercializa, transfiere ni cede su información personal a terceras empresas
                o agencias publicitarias con fines de marketing. Sus datos únicamente se comparten
                con la Superintendencia Nacional de Valores (SUNAVAL) o entes regulatorios
                competentes previa solicitud oficial de rango legal.
              </p>
            </div>
          </motion.div>

          <!-- Section 6: Derechos del Usuario -->
          <motion.div :variants="generalItemVariants" id="derechos" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">6.</span>
              Derechos del Usuario (ARCO)
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                El usuario posee plenos derechos legales para ejercer el control sobre sus datos de
                carácter personal:
              </p>
              <ul class="text-gray flex list-disc flex-col gap-2 pl-6 text-sm md:text-base">
                <li>
                  <strong>Acceso:</strong> Consultar qué datos personales tenemos almacenados en
                  nuestros sistemas.
                </li>
                <li>
                  <strong>Rectificación:</strong> Solicitar la corrección, actualización o enmienda
                  de datos que sean incorrectos o estén desactualizados.
                </li>
                <li>
                  <strong>Cancelación / Oposición:</strong> Solicitar la suspensión de canales de
                  comunicación o baja transaccional. (Nota: por regulaciones explícitas de la
                  SUNAVAL sobre transacciones bursátiles e histórico legal de cuentas, los datos
                  correspondientes a operaciones ya procesadas no podrán eliminarse del histórico
                  legal).
                </li>
              </ul>
            </div>
          </motion.div>

          <!-- Section 7: Soporte y Consultas -->
          <motion.div :variants="generalItemVariants" id="contacto" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">7.</span>
              Contacto del Oficial de Cumplimiento y Soporte
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Si tiene dudas, preguntas, comentarios o desea ejercer sus derechos sobre el
                tratamiento de sus datos de carácter personal, puede ponerse en contacto con nuestro
                Oficial de Cumplimiento de forma directa:
              </p>
              <div
                class="border-white-alt2 bg-white-alt/20 flex flex-col gap-3 rounded-lg border p-6"
              >
                <p class="text-black-alt m-0 font-semibold">
                  Oficina de Cumplimiento de Maximiza Casa de Bolsa
                </p>
                <div class="flex flex-col gap-1 text-xs md:text-sm">
                  <p class="m-0">
                    <strong>Correo electrónico:</strong>
                    <a
                      :href="`mailto:${commonData.email}`"
                      class="text-primary font-bold hover:underline"
                      >{{ commonData.email }}</a
                    >
                  </p>
                  <p class="m-0"><strong>Máster Telefónico:</strong> {{ commonData.phone }}</p>
                  <p class="m-0"><strong>Dirección Física:</strong> {{ commonData.address }}</p>
                </div>
              </div>
              <p class="text-gray-alt mt-4 text-xs">Última actualización: 7 de Agosto de 2026.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
</template>

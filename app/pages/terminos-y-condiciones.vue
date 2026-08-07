<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { metadata } from '@/assets/data/metadata'
  import { useJsonLd } from '~/composables/useJsonLd'
  import { jsonld } from '~/assets/data/jsonld'
  import { motion } from 'motion-v'
  import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion'

  const sections = [
    { id: 'general', title: '1. Disposiciones Generales' },
    { id: 'corretaje', title: '2. Contrato de Corretaje' },
    { id: 'chatbot', title: '3. WhatsApp y Chatbot' },
    { id: 'usuarios', title: '4. Uso de la Plataforma' },
    { id: 'propiedad', title: '5. Propiedad Intelectual' },
    { id: 'limitacion', title: '6. Responsabilidades' },
    { id: 'ley', title: '7. Jurisdicción y Leyes' },
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

  useSeoMeta(metadata.terminosYCondiciones)
  useJsonLd(jsonld.terminosYCondiciones)
</script>

<template>
  <div class="flex h-auto w-full flex-col bg-white">
    <!-- Hero Banner -->
    <CommonHero
      title="Términos y Condiciones"
      description="Marco normativo legal que rige el uso de nuestros portales digitales, canales de comunicación, chatbot automatizado y la cuenta de corretaje bursátil."
      :image="{
        src: '/images/hero/maximiza-equipo-personas-piezas-rompecabezas-oficina-luminosa.webp',
        alt: 'Términos y condiciones',
      }"
      :pattern="{
        src: '/images/hero/maximiza-pattern-registro.webp',
      }"
    />

    <!-- Main Content Section -->
    <section class="container mx-auto px-4 py-16 md:px-0">
      <div class="flex flex-col gap-12 md:flex-row">
        <!-- Sticky Sidebar Navigation for Desktop -->
        <aside class="hidden md:block md:w-1/4">
          <div class="border-white-alt2 sticky top-[15vh] flex flex-col gap-3 border-l pl-4">
            <p class="text-primary mb-2 text-xs font-bold tracking-wider uppercase">
              Índice del Contrato
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
          <!-- Section 1: Disposiciones Generales -->
          <motion.div :variants="generalItemVariants" id="general" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">1.</span>
              Disposiciones Generales
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Los presentes Términos y Condiciones de Uso regulan el acceso, navegación y uso de
                los portales web, formularios de registro, aplicaciones móviles y el servicio de
                Chatbot interactivo de WhatsApp (en adelante, denominados conjuntamente la
                "Plataforma") de <strong>Maximiza Casa de Bolsa, C.A.</strong> (en adelante,
                "Maximiza"), sociedad de corretaje constituida bajo las leyes de la República
                Bolivariana de Venezuela y debidamente regulada por la Superintendencia Nacional de
                Valores (SUNAVAL).
              </p>
              <p>
                Al acceder, interactuar con el Chatbot o completar cualquier formulario de registro
                en la Plataforma, usted reconoce que ha leído, comprendido y aceptado sin reservas
                los presentes Términos y Condiciones en su totalidad, así como nuestra Política de
                Privacidad. Si no está de acuerdo con estos términos, le solicitamos que se abstenga
                de utilizar la Plataforma y sus servicios.
              </p>
            </div>
          </motion.div>

          <!-- Section 2: Contrato de Corretaje -->
          <motion.div :variants="generalItemVariants" id="corretaje" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">2.</span>
              Contrato de Cuenta de Corretaje Bursátil
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Como parte del proceso de registro y apertura de cuenta para inversores, el usuario
                deberá manifestar su expresa aceptación del Contrato de cuenta de corretaje
                bursátil. El texto íntegro y los términos regulatorios de este documento establecen
                lo siguiente:
              </p>

              <!-- Highlighted Contract Box -->
              <div class="border-white-alt2 my-2 flex flex-col gap-2 rounded-lg border p-5">
                <h5 class="text-black-alt mb-3 flex items-center gap-2 font-bold">
                  <font-awesome-icon :icon="['fas', 'file-contract']" class="text-primary" />
                  Contrato de cuenta de corretaje bursátil
                </h5>
                <p class="text-gray text-xs leading-relaxed italic md:text-sm">
                  Aceptación del contrato de cuenta de corretaje bursátil por parte del inversor con
                  la firma del presente documento, el cliente expresamente conviene y acepta que las
                  operaciones financieras y bursátiles celebradas entre maximiza y el cliente se
                  regirán por el contrato de cuenta corretaje bursátil, del cual el presente anexo
                  forma parte integrante, y cual fue autenticado por ante la Notaría Pública sexta
                  del Municipio Chacao del estado Miranda, el 26 de Enero del 2007, bajo el N°56,
                  tomo 10, de los libros de autenticación llevados por esa notaría, así mismo, el
                  cliente declara haber leído y comprendido las operaciones objeto de los contratos
                  que integran la cuenta de corretaje bursátil. De conformidad con lo establecido en
                  las normas relativas a la administración y fiscalización de los riesgos
                  relacionados con los delitos de legitimación de los capitales, financiamiento al
                  terrorismo, financiamiento de la proliferación de armas de destrucción masiva y
                  otros ilícitos, aplicables a los sujetos regulados por la Superintendencia
                  Nacional de Valores, por lo que el (los) inversor(es) declara(n) bajo fe de
                  juramento que los dineros, capitales y haberes, valores o títulos utilizados en
                  las operaciones, no guardan relación con actividades provenientes del delito de
                  legitimación de capitales u otros delitos previstos y sancionados en la ley
                  orgánica contra la delincuencia organizada y financiamiento al terrorismo. Así
                  mismo, el inversor expresamente declara que la información suministrada es cierta
                  y completa y que refleja con exactitud la realidad legal y financiera del cliente
                  y, autoriza suficientemente a Maximiza Casa de Bolsa, C.A., para que verifique los
                  datos aportados y que han sido vertidos en esta planilla, señalados en la
                  providencia N°025 y las demás disposiciones que tutelan esta materia.
                </p>
              </div>
            </div>
          </motion.div>

          <!-- Section 3: WhatsApp y Chatbot -->
          <motion.div :variants="generalItemVariants" id="chatbot" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">3.</span>
              WhatsApp Onboarding y Chatbot Informativo
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Maximiza pone a disposición de sus prospectos y clientes un Chatbot interactivo y
                automatizado a través de la API oficial de WhatsApp de Meta (en adelante, el
                "Servicio de Chatbot"). Este chatbot fue desarrollado con el exclusivo propósito de
                facilitar y agilizar el proceso de Onboarding de clientes, proveer asistencia
                interactiva, guiar al usuario en la consignación de requisitos legales y brindar
                información de carácter general sobre el mercado de capitales.
              </p>
              <div class="my-2 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="border-white-alt2 flex flex-col gap-2 rounded-lg border p-5">
                  <h6 class="text-primary flex items-center gap-2">
                    <font-awesome-icon :icon="['fas', 'robot']" />
                    Propósito del Onboarding
                  </h6>
                  <p class="text-gray text-xs md:text-sm">
                    El Chatbot recopila de manera segura datos básicos del prospecto, valida su
                    identidad y proporciona los enlaces personalizados directos al formulario web de
                    registro para agilizar los flujos regulados por SUNAVAL.
                  </p>
                </div>
                <div class="border-white-alt2 flex flex-col gap-2 rounded-lg border p-5">
                  <h6 class="text-primary flex items-center gap-2">
                    <font-awesome-icon :icon="['fas', 'comments']" />
                    Consentimiento y Opt-In
                  </h6>
                  <p class="text-gray text-xs md:text-sm">
                    Al iniciar una conversación escribiendo a nuestra línea oficial, el usuario
                    otorga su consentimiento expreso para recibir mensajes transaccionales y de guía
                    del Chatbot. Puede retirar su consentimiento y cancelar el servicio en cualquier
                    momento escribiendo la palabra <strong>"SALIR"</strong> o
                    <strong>"STOP"</strong>.
                  </p>
                </div>
              </div>
              <p>
                El Servicio de Chatbot no constituye asesoría financiera directa ni recomendaciones
                de compra o venta de títulos específicos. Las cotizaciones o datos de mercado de
                referencia brindados a través del Chatbot son meramente ilustrativos e informativos.
              </p>
            </div>
          </motion.div>

          <!-- Section 4: Uso de la Plataforma -->
          <motion.div :variants="generalItemVariants" id="usuarios" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">4.</span>
              Obligaciones y Responsabilidades del Usuario
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Al hacer uso de nuestra Plataforma y del Servicio de Chatbot, el usuario se
                compromete de manera irrevocable a:
              </p>
              <ul class="text-gray flex list-disc flex-col gap-2 pl-6 text-sm md:text-base">
                <li>
                  Suministrar información estrictamente verídica, exacta, actual y completa en todos
                  los formularios e interacciones.
                </li>
                <li>
                  No suplantar la identidad de terceros ni falsificar firmas o documentos digitales.
                </li>
                <li>
                  Utilizar los canales oficiales exclusivamente para fines lícitos enmarcados dentro
                  de la actividad bursátil regulada.
                </li>
                <li>
                  Garantizar que el origen de todos los capitales o activos utilizados en el marco
                  de sus inversiones proviene enteramente de actividades lícitas y llanas, en total
                  conformidad con la normativa venezolana de prevención contra la legitimación de
                  capitales (LOCDOFT).
                </li>
              </ul>
            </div>
          </motion.div>

          <!-- Section 5: Propiedad Intelectual -->
          <motion.div :variants="generalItemVariants" id="propiedad" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">5.</span>
              Propiedad Intelectual e Industrial
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Todos los contenidos, marcas comerciales, logotipos, código de programación,
                diseños, algoritmos del Chatbot, textos informativos, bases de datos e imágenes
                presentes en esta Plataforma son propiedad exclusiva de
                <strong>Maximiza Casa de Bolsa, C.A.</strong> o de sus licenciantes de tecnología
                autorizados.
              </p>
              <p>
                Queda expresamente prohibida la reproducción, copia, distribución, ingeniería
                inversa o cualquier forma de explotación no autorizada del software, flujos
                conversacionales, marcas y contenidos de Maximiza, bajo pena de incurrir en las
                sanciones civiles y penales previstas en las leyes nacionales e internacionales de
                Propiedad Intelectual.
              </p>
            </div>
          </motion.div>

          <!-- Section 6: Responsabilidades -->
          <motion.div :variants="generalItemVariants" id="limitacion" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">6.</span>
              Exclusión y Limitación de Responsabilidad
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Maximiza realiza sus mejores esfuerzos tecnológicos y de ciberseguridad para
                garantizar la disponibilidad continua de sus servidores, formularios web y el
                Chatbot. No obstante, no garantiza la ausencia de caídas del servicio motivadas por
                indisponibilidades técnicas de terceros, mantenimiento preventivo de la
                infraestructura de telecomunicaciones o incidencias técnicas del software propiedad
                de la API oficial de WhatsApp de Meta.
              </p>
              <p>
                En consecuencia, Maximiza no se hace responsable por daños o perjuicios directos o
                indirectos derivados de fallas de transmisión en las redes móviles, caídas globales
                de los servicios de Meta o falsos positivos informáticos ocasionados por malware en
                el terminal o dispositivo móvil del cliente.
              </p>
            </div>
          </motion.div>

          <!-- Section 7: Jurisdicción y Leyes -->
          <motion.div :variants="generalItemVariants" id="ley" class="scroll-mt-32">
            <h2 class="text-black-alt border-white-alt2 mb-4 flex items-center gap-3 border-b pb-3">
              <span class="text-primary font-serif">7.</span>
              Jurisdicción, Modificaciones y Ley Aplicable
            </h2>
            <div
              class="text-gray flex flex-col gap-4 text-justify text-sm leading-relaxed md:text-base"
            >
              <p>
                Los presentes Términos y Condiciones se rigen en todas sus partes por las leyes y
                normativas mercantiles y bursátiles de la República Bolivariana de Venezuela, bajo
                la tutela especial y exclusiva de la Superintendencia Nacional de Valores (SUNAVAL).
                Cualquier controversia que se suscite en relación con estos términos, la validez del
                contrato de corretaje bursátil o las operaciones ejecutadas se someterá de forma
                privativa a la jurisdicción de los tribunales competentes de la Circunscripción
                Judicial del Área Metropolitana de Caracas.
              </p>
              <p>
                Maximiza se reserva el derecho de efectuar modificaciones a este instrumento
                normativo para adecuarlo a las nuevas circulares del ente rector o actualizaciones
                tecnológicas de Meta. Dichas modificaciones serán notificadas de forma oportuna a
                través de la Plataforma o con el envío de un boletín transaccional en el Chatbot.
              </p>
              <p class="text-gray-alt mt-4 text-xs">Última actualización: 7 de Agosto de 2026.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
</template>

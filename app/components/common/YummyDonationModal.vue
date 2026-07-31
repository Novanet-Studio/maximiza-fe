<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const show = ref(false)

  const closeModal = () => {
    show.value = false
    localStorage.setItem('yummy_modal_dismissed', 'true')
  }

  onMounted(() => {
    const dismissed = localStorage.getItem('yummy_modal_dismissed')
    if (!dismissed) {
      // Gentle delay for a premium transition effect
      setTimeout(() => {
        show.value = true
      }, 1000)
    }
  })
</script>

<template>
  <Transition name="fade-scale">
    <div
      v-if="show"
      class="fixed inset-0 z-[10000] flex items-center justify-center bg-[#535353]/60 p-4 backdrop-blur-[2px] md:p-6"
      @click.self="closeModal"
    >
      <!-- Modal Container -->
      <div
        class="relative w-full max-w-[400px] overflow-hidden rounded-none bg-[#F1F1F1] shadow-2xl transition-all duration-300 sm:max-w-[692px] lg:max-w-[1167px]"
      >
        <!-- Background Decoration (Watermark) -->
        <img
          src="/images/watermark-m.svg"
          alt=""
          class="pointer-events-none absolute top-[28%] left-0 z-0 h-auto w-full select-none"
        />

        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 z-10 text-[#00735F] transition-colors duration-200 hover:text-[#005c4d] focus:outline-none sm:top-6 sm:right-6 lg:top-8 lg:right-8"
          @click="closeModal"
          aria-label="Cerrar"
        >
          <font-awesome-icon
            :icon="['fas', 'times-circle']"
            class="text-2xl sm:text-3xl lg:text-4xl"
          />
        </button>

        <!-- Content Container -->
        <div
          class="flex flex-col gap-6 px-6 py-10 sm:gap-8 sm:px-12 sm:py-14 lg:gap-10 lg:px-32 lg:py-20"
        >
          <!-- Logos Row -->
          <div class="flex items-center justify-between gap-4">
            <img
              src="/images/logo-maximiza.svg"
              alt="Logo Maximiza"
              class="h-8 w-auto object-contain sm:h-12 lg:h-16"
            />
            <img
              src="/images/logo-yummy.svg"
              alt="Logo Yummy"
              class="h-10 w-auto object-contain sm:h-16 lg:h-20"
            />
          </div>

          <!-- Title & Subtitle -->
          <div class="flex flex-col gap-2 text-left sm:gap-3">
            <h2
              class="text-2xl leading-tight font-extrabold text-[#00735F] sm:text-3xl lg:text-4xl"
            >
              ¡Venezuela nos necesita a todos!
            </h2>
            <p class="text-sm font-medium text-[#2D2D2D]/90 sm:text-base lg:text-lg">
              Ante la emergencia, enfocamos nuestra ayuda en tres acciones concretas:
            </p>
          </div>

          <!-- Description & Body Text (3 Action Bullets with details) -->
          <div class="flex flex-col gap-5 leading-relaxed text-[#2D2D2D] sm:gap-6 lg:gap-8">
            <!-- Action Bullet 1 -->
            <div class="flex flex-col gap-4">
              <div class="flex items-start gap-3 sm:gap-4">
                <font-awesome-icon
                  :icon="['fas', 'check-circle']"
                  class="mt-1 flex-shrink-0 text-base text-[#00735F] sm:text-lg lg:text-xl"
                />
                <p class="text-left text-xs font-normal sm:text-sm lg:text-base xl:text-lg">
                  Nos unimos a la iniciativa de
                  <span class="font-bold text-[#00735F]">@yummy.vzla</span>. Por cada donación,
                  Yummy suma un <span class="font-bold text-[#00735F]">25% adicional</span>. ¡Dona
                  tú también! <span class="ml-1 inline-block whitespace-nowrap">🇻🇪 ❤️‍🩹</span>
                </p>
              </div>

              <!-- Bullet 1 Details: Only visible on sm (tablet/desktop) and up to match Figma layout and respect mobile space constraints -->
              <div class="hidden flex-col gap-4 pl-9 sm:flex sm:pl-10">
                <p class="text-left text-xs font-normal text-[#2D2D2D]/80 sm:text-sm lg:text-base">
                  Yummy ha habilitado telemedicina, traslados para rescatistas y acopio de
                  alimentos, pero hoy queremos pedir tu apoyo.
                </p>

                <!-- Suma tu aporte Highlight Card inside Bullet 1 -->
                <div
                  class="flex flex-col gap-1 rounded-none border-l-4 border-[#00735F] bg-[#00735F]/5 p-4 text-left sm:p-5 lg:p-6"
                >
                  <h4 class="text-sm font-bold tracking-wide text-[#00735F] uppercase lg:text-base">
                    Suma tu aporte: Yummy sumará un
                  </h4>
                  <div
                    class="my-1 text-3xl font-black tracking-tight text-[#00735F] italic select-none lg:text-4xl"
                  >
                    25% extra
                  </div>
                  <p class="text-xs font-normal text-[#2D2D2D] sm:text-sm lg:text-base">
                    a cada donación recibida. ¡Cada ayuda cuenta y se multiplica!
                  </p>
                </div>

                <p class="text-left text-xs font-medium text-[#2D2D2D] sm:text-sm lg:text-base">
                  Ingresa, elige tu método de pago (Pago Móvil, Zelle/ACH, Tarjeta) y dona
                </p>
              </div>
            </div>

            <!-- Action Bullet 2 -->
            <div class="flex items-start gap-3 sm:gap-4">
              <font-awesome-icon
                :icon="['fas', 'check-circle']"
                class="mt-1 flex-shrink-0 text-base text-[#00735F] sm:text-lg lg:text-xl"
              />
              <p class="text-left text-xs font-normal sm:text-sm lg:text-base xl:text-lg">
                Activamos un operativo de entrega de medicamentos en hospitales de Caracas y La
                Guaira que hoy más lo requieren.
              </p>
            </div>

            <!-- Action Bullet 3 -->
            <div class="flex items-start gap-3 sm:gap-4">
              <font-awesome-icon
                :icon="['fas', 'check-circle']"
                class="mt-1 flex-shrink-0 text-base text-[#00735F] sm:text-lg lg:text-xl"
              />
              <p class="text-left text-xs font-normal sm:text-sm lg:text-base xl:text-lg">
                Desde este martes, con la reapertura de la Bolsa de Valores de Caracas, durante 90
                días donaremos el
                <span class="font-bold text-[#00735F]"
                  >1% de nuestras ganancias por comisiones</span
                >
                a las fundaciones que acompañan a quienes lo perdieron todo.
              </p>
            </div>
          </div>

          <!-- Highlight Card/Footer Quote -->
          <div class="rounded-none border-l-4 border-[#00735F] bg-[#00735F]/5 p-4 sm:p-5 lg:p-6">
            <p
              class="text-left text-xs font-medium text-[#2D2D2D] italic sm:text-sm lg:text-base xl:text-lg"
            >
              "Porque reconstruir no es cosa de un día: es un compromiso sostenido."
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex justify-start">
            <a
              href="https://dona.yummyrides.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-maximiza-blanco1 inline-flex transform items-center gap-3 rounded-none bg-[#00735F] px-6 py-3.5 text-base font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005c4d] hover:shadow-lg focus:ring-2 focus:ring-[#00735F] focus:ring-offset-2 focus:outline-none sm:px-8 sm:text-lg lg:text-xl"
            >
              Haz tu donación aquí
              <font-awesome-icon :icon="['fas', 'check']" class="text-sm sm:text-base lg:text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  /* Premium Transition Animations */
  .fade-scale-enter-active,
  .fade-scale-leave-active {
    transition:
      opacity 0.4s ease,
      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .fade-scale-enter-from,
  .fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.96);
  }

  .fade-scale-enter-to,
  .fade-scale-leave-from {
    opacity: 1;
    transform: scale(1);
  }
</style>

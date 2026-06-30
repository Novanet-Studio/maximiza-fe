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
      class="fixed inset-0 z-[10000] flex items-center justify-center bg-[#535353]/60 p-4 md:p-6 backdrop-blur-[2px]"
      @click.self="closeModal"
    >
      <!-- Modal Container -->
      <div
        class="relative w-full max-w-[400px] sm:max-w-[692px] lg:max-w-[1167px] bg-[#F1F1F1] rounded-none shadow-2xl overflow-hidden transition-all duration-300"
      >
        <!-- Background Decoration (Watermark) -->
        <img
          src="/images/watermark-m.svg"
          alt=""
          class="absolute left-0 top-[28%] w-full h-auto pointer-events-none select-none z-0"
        />

        <!-- Close Button -->
        <button
          class="absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-8 lg:top-8 text-[#00735F] hover:text-[#005c4d] transition-colors duration-200 focus:outline-none z-10"
          @click="closeModal"
          aria-label="Cerrar"
        >
          <font-awesome-icon :icon="['fas', 'times-circle']" class="text-2xl sm:text-3xl lg:text-4xl" />
        </button>

        <!-- Content Container -->
        <div class="px-6 py-10 sm:px-12 sm:py-14 lg:px-32 lg:py-20 flex flex-col gap-6 sm:gap-8 lg:gap-10">
          
          <!-- Logos Row -->
          <div class="flex items-center justify-between gap-4">
            <img
              src="/images/logo-maximiza.svg"
              alt="Logo Maximiza"
              class="h-8 sm:h-12 lg:h-16 w-auto object-contain"
            />
            <img
              src="/images/logo-yummy.svg"
              alt="Logo Yummy"
              class="h-10 sm:h-16 lg:h-20 w-auto object-contain"
            />
          </div>

          <!-- Description & Body Text -->
          <div class="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-[#2D2D2D] leading-relaxed">
            <p class="text-sm sm:text-base lg:text-lg xl:text-xl font-normal">
              En Maximiza nos unimos a la gran iniciativa de respuesta de
              <span class="text-[#00735F] font-bold">@yummy.vzla</span> para apoyar a nuestro país en esta emergencia. 🇻🇪 ❤️‍🩹
            </p>

            <p class="text-sm sm:text-base lg:text-lg xl:text-xl font-normal">
              Yummy ha habilitado telemedicina, traslados para rescatistas y acopio de alimentos, pero hoy queremos pedir tu apoyo.
            </p>

            <!-- Suma tu aporte Highlight Card -->
            <div class="border-l-4 border-[#00735F] bg-[#00735F]/5 p-5 sm:p-6 lg:p-8 flex flex-col gap-1.5 rounded-none">
              <h4 class="text-lg sm:text-xl lg:text-2xl font-black text-[#00735F] tracking-wide uppercase mb-1">
                Suma tu aporte:
              </h4>
              <p class="text-sm sm:text-base lg:text-lg xl:text-xl font-normal text-[#2D2D2D]">
                Yummy sumará un
              </p>
              <div class="text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#00735F] select-none tracking-tight">
                25% extra
              </div>
              <p class="text-sm sm:text-base lg:text-lg xl:text-xl font-normal text-[#2D2D2D]">
                a cada donación recibida.
              </p>
              <p class="text-sm sm:text-base lg:text-lg xl:text-xl font-normal text-[#2D2D2D]">
                ¡Cada ayuda cuenta y se multiplica!
              </p>
            </div>

            <p class="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-[#2D2D2D] mt-2">
              Ingresa, elige tu método de pago (Pago Móvil, Zelle/ACH, Tarjeta) y dona
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex justify-start">
            <a
              href="https://dona.yummyrides.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-[#00735F] hover:bg-[#005c4d] text-maximiza-blanco1 font-bold py-3.5 px-6 sm:px-8 text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg rounded-none focus:outline-none focus:ring-2 focus:ring-[#00735F] focus:ring-offset-2"
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
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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

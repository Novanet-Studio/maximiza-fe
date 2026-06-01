<script setup lang="ts">
  import { ref } from 'vue'
  import LinkNav from './LinkNav.vue'

  defineProps<{
    estilo?: string
  }>()

  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
</script>

<template>
  <nav id="myNav" :class="['relative z-50 flex items-center justify-between shadow-sm', estilo]">
    <div class="flex w-full items-center justify-end px-4">
      <button
        @click="toggleMenu"
        class="p-2 text-maximiza-verde1 focus:outline-none md:hidden"
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div class="hidden items-center justify-end gap-14 md:flex">
        <div class="group relative flex h-full cursor-pointer items-center">
          <span class="-mt-2 mr-1 text-5xl text-maximiza-verde1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 transition-colors group-hover:text-maximiza-verde1"
          >
            Nosotros
          </p>

          <div
            class="invisible absolute left-0 top-full z-50 flex w-48 translate-y-2 transform flex-col whitespace-nowrap bg-maximiza-gris5 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
          >
            <LinkNav text="Empresa" to="/empresa" />
            <LinkNav text="Servicios" to="/servicios" />
            <LinkNav text="Directiva" to="/directiva" />
            <LinkNav text="Contacto" to="/contacto" />
          </div>
        </div>

        <div class="group relative flex h-full cursor-pointer items-center">
          <span class="-mt-2 mr-1 text-5xl text-maximiza-verde1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 transition-colors group-hover:text-maximiza-verde1"
          >
            Impacto ESG
          </p>

          <div
            class="invisible absolute left-0 top-full z-50 flex w-48 translate-y-2 transform flex-col whitespace-nowrap bg-maximiza-gris5 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
          >
            <LinkNav text="Responsabilidad" to="/responsabilidad" />
          </div>
        </div>

        <div class="group relative flex h-full cursor-pointer items-center">
          <span class="-mt-2 mr-1 text-5xl text-maximiza-verde1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 transition-colors group-hover:text-maximiza-verde1"
          >
            Comunidad
          </p>

          <div
            class="invisible absolute left-0 top-full z-50 flex w-48 translate-y-2 transform flex-col whitespace-nowrap bg-maximiza-gris5 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
          >
            <LinkNav text="Blog" to="/blog" />
            <LinkNav text="Cumplimiento" to="/cumplimiento" />
            <LinkNav text="Sugerencias" to="/sugerencias" />
          </div>
        </div>

        <div class="group relative flex h-full cursor-pointer items-center">
          <span class="-mt-2 mr-1 text-5xl text-maximiza-verde1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 transition-colors group-hover:text-maximiza-verde1"
          >
            Registro
          </p>

          <div
            class="invisible absolute left-0 top-full z-50 flex w-48 translate-y-2 transform flex-col whitespace-nowrap bg-maximiza-gris5 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
          >
            <LinkNav text="Planilla" to="/planilla" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="bg-black/30 fixed inset-0 z-40 md:hidden"
      @click="toggleMenu"
    ></div>

    <div
      class="fixed right-0 top-0 z-50 h-full w-[280px] transform overflow-y-auto bg-[#f4f4f4] shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex h-full flex-col p-6">
        <div class="mb-4 flex justify-end">
          <button @click="toggleMenu" class="p-2 text-maximiza-gris3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="flex flex-col gap-8 text-left">
          <div>
            <div class="mb-2 flex items-center">
              <span class="mr-2 text-2xl text-maximiza-verde1">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">Nosotros</h3>
            </div>
            <div class="text-gray-500 mb-3 flex flex-col gap-3 pl-6 text-sm">
              <NuxtLink to="/empresa" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Empresa</NuxtLink
              >
              <NuxtLink to="/servicios" class="font-bold text-maximiza-verde1" @click="toggleMenu"
                >Servicios</NuxtLink
              >

              <NuxtLink to="/directiva" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Directiva</NuxtLink
              >
              <NuxtLink to="/contacto" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Contacto</NuxtLink
              >
            </div>

            <div class="h-[2px] w-full bg-maximiza-gris5"></div>
          </div>

          <div>
            <div class="mb-2 flex items-center">
              <span class="mr-2 text-2xl text-maximiza-verde1">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">Impacto ESG</h3>
            </div>
            <div class="text-gray-500 mb-3 flex flex-col gap-3 pl-6 text-sm">
              <NuxtLink to="/capital" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Private equity</NuxtLink
              >
              <NuxtLink to="/educacion" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Educación</NuxtLink
              >
              <NuxtLink to="/responsabilidad" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Responsabilidad
              </NuxtLink>
            </div>
            <div class="h-[2px] w-full bg-maximiza-gris5"></div>
          </div>

          <div>
            <div class="mb-2 flex items-center">
              <span class="mr-2 text-2xl text-maximiza-verde1">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">Comunidad</h3>
            </div>
            <div class="text-gray-500 mb-3 flex flex-col gap-3 pl-6 text-sm">
              <NuxtLink to="/medios" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Medios</NuxtLink
              >
              <NuxtLink to="/blog" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Blog</NuxtLink
              >
              <NuxtLink to="/cumplimiento" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Cumplimiento
              </NuxtLink>
              <NuxtLink to="/sugerencias" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Sugerencias</NuxtLink
              >
            </div>
            <div class="h-[2px] w-full bg-maximiza-gris5"></div>
          </div>

          <div>
            <div class="mb-2 flex items-center">
              <span class="mr-2 text-2xl text-maximiza-verde1">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">Ingresar</h3>
            </div>
            <div class="text-gray-500 mb-3 flex flex-col gap-3 pl-6 text-sm">
              <NuxtLink to="/planilla" class="hover:text-maximiza-verde1" @click="toggleMenu"
                >Planilla</NuxtLink
              >
            </div>
            <div class="h-[2px] w-full bg-maximiza-gris5"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

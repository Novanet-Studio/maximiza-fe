<script setup lang="ts">
import { ref } from "vue";
import LinkNav from "./LinkNav.vue";

defineProps<{
  estilo?: string;
}>();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav
    id="myNav"
    :class="[
      'relative z-50 shadow-sm flex items-center justify-between',
      estilo,
    ]"
  >
    <div class="w-full flex justify-end items-center px-4">
      <button
        @click="toggleMenu"
        class="md:hidden text-maximiza-verde1 focus:outline-none p-2"
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

      <div class="hidden md:flex items-center justify-end gap-14">
        <div class="group relative flex items-center h-full cursor-pointer">
          <span class="text-maximiza-verde1 text-5xl mr-1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 group-hover:text-maximiza-verde1 transition-colors"
          >
            Nosotros
          </p>

          <div
            class="absolute top-full left-0 w-48 bg-maximiza-gris5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 py-2 shadow-lg flex flex-col whitespace-nowrap"
          >
            <LinkNav text="Empresa" to="/empresa" />
            <LinkNav text="Servicios" to="/servicios" />
            <LinkNav text="Directiva" to="/directiva" />
            <LinkNav text="Contacto" to="/contacto" />
          </div>
        </div>

        <div class="group relative flex items-center h-full cursor-pointer">
          <span class="text-maximiza-verde1 text-5xl mr-1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 group-hover:text-maximiza-verde1 transition-colors"
          >
            Impacto ESG
          </p>

          <div
            class="absolute top-full left-0 w-48 bg-maximiza-gris5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 py-2 shadow-lg flex flex-col whitespace-nowrap"
          >
            <LinkNav text="Private equity" to="/capital" />
            <LinkNav text="Educación" to="/educacion" />
            <LinkNav text="Responsabilidad" to="/responsabilidad" />
          </div>
        </div>

        <div class="group relative flex items-center h-full cursor-pointer">
          <span class="text-maximiza-verde1 text-5xl mr-1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 group-hover:text-maximiza-verde1 transition-colors"
          >
            Comunidad
          </p>

          <div
            class="absolute top-full left-0 w-48 bg-maximiza-gris5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 py-2 shadow-lg flex flex-col whitespace-nowrap"
          >
            <LinkNav text="Medios" to="/medios" />
            <LinkNav text="Blog" to="/blog" />
            <LinkNav text="Cumplimiento" to="/cumplimiento" />
            <LinkNav text="Sugerencias" to="/sugerencias" />
          </div>
        </div>

        <div class="group relative flex items-center h-full cursor-pointer">
          <span class="text-maximiza-verde1 text-5xl mr-1">•</span>
          <p
            class="text-xl font-extrabold text-maximiza-gris3 group-hover:text-maximiza-verde1 transition-colors"
          >
            Ingresar
          </p>

          <div
            class="absolute top-full left-0 w-48 bg-maximiza-gris5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 py-2 shadow-lg flex flex-col whitespace-nowrap"
          >
            <LinkNav text="Planilla" to="/planilla" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/30 z-40 md:hidden"
      @click="toggleMenu"
    ></div>

    <div
      class="fixed top-0 right-0 h-full w-[280px] bg-[#f4f4f4] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-6 flex flex-col h-full">
        <div class="flex justify-end mb-4">
          <button @click="toggleMenu" class="text-maximiza-gris3 p-2">
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
            <div class="flex items-center mb-2">
              <span class="text-maximiza-verde1 text-2xl mr-2">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">
                Nosotros
              </h3>
            </div>
            <div class="flex flex-col gap-3 pl-6 text-sm text-gray-500 mb-3">
              <NuxtLink
                to="/empresa"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Empresa</NuxtLink
              >
              <NuxtLink
                to="/servicios"
                class="font-bold text-maximiza-verde1"
                @click="toggleMenu"
                >Servicios</NuxtLink
              >

              <NuxtLink
                to="/directiva"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Directiva</NuxtLink
              >
              <NuxtLink
                to="/contacto"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Contacto</NuxtLink
              >
            </div>

            <div class="w-full h-[2px] bg-maximiza-gris5"></div>
          </div>

          <div>
            <div class="flex items-center mb-2">
              <span class="text-maximiza-verde1 text-2xl mr-2">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">
                Impacto ESG
              </h3>
            </div>
            <div class="flex flex-col gap-3 pl-6 text-sm text-gray-500 mb-3">
              <NuxtLink
                to="/capital"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Private equity</NuxtLink
              >
              <NuxtLink
                to="/educacion"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Educación</NuxtLink
              >
              <NuxtLink
                to="/responsabilidad"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Responsabilidad</NuxtLink
              >
            </div>
            <div class="w-full h-[2px] bg-maximiza-gris5"></div>
          </div>

          <div>
            <div class="flex items-center mb-2">
              <span class="text-maximiza-verde1 text-2xl mr-2">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">
                Comunidad
              </h3>
            </div>
            <div class="flex flex-col gap-3 pl-6 text-sm text-gray-500 mb-3">
              <NuxtLink
                to="/medios"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Medios</NuxtLink
              >
              <NuxtLink
                to="/blog"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Blog</NuxtLink
              >
              <NuxtLink
                to="/cumplimiento"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Cumplimiento</NuxtLink
              >
              <NuxtLink
                to="/sugerencias"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Sugerencias</NuxtLink
              >
            </div>
            <div class="w-full h-[2px] bg-maximiza-gris5"></div>
          </div>

          <div>
            <div class="flex items-center mb-2">
              <span class="text-maximiza-verde1 text-2xl mr-2">•</span>
              <h3 class="text-lg font-extrabold text-maximiza-gris3">
                Ingresar
              </h3>
            </div>
            <div class="flex flex-col gap-3 pl-6 text-sm text-gray-500 mb-3">
              <NuxtLink
                to="/planilla"
                class="hover:text-maximiza-verde1"
                @click="toggleMenu"
                >Planilla</NuxtLink
              >
            </div>
            <div class="w-full h-[2px] bg-maximiza-gris5"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

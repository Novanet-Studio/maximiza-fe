<script setup lang="ts">
import companyData from '@/assets/data/common.json'

//? FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faPhone,
  faFax,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

//? Motion
import { motion } from 'motion-v'
import {
  footerContainerVariants,
  footerItemVariants,
} from '@/assets/animations/motion'

const directLinks = [
  { label: 'La empresa', to: '/empresa' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Blog', to: '/blog' },
  { label: 'Responsabilidad social', to: '/responsabilidad' },
]

const userLinks = [
  { label: 'Registro', to: '/registro' },
  { label: 'Iniciar sesión', to: '/registro' },
  { label: 'Contacto', to: '/contacto' },
]

const interestLinks = [
  { label: 'SUNAVAL', to: 'https://www.sunaval.gob.ve/', external: true },
  {
    label: 'Bolsa de valores de Caracas',
    to: 'https://www.bolsadecaracas.com/',
    external: true,
  },
  {
    label: 'SITRAD',
    to: 'https://www.cajavenezolana.com/sitradweb/login.php',
    external: true,
  },
  {
    label: 'Caja venezolana de valores',
    to: 'https://www.cajavenezolana.com/cvvweb/',
    external: true,
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black-alt text-white-alt py-8 md:py-12">
    <motion.div
      :variants="footerContainerVariants"
      initial="hidden"
      whileInView="visible"
      :viewport="{ once: true, margin: '-50px' }"
      class="container"
    >
      <motion.div
        class="xs:grid-cols-2 mb-12 grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5"
        :variants="footerContainerVariants"
      >
        <motion.div
          class="col-span-full mb-8 md:mb-6"
          :variants="footerItemVariants"
        >
          <NuxtLink title="Ir a Enlace" to="/">
            <picture>
              <img
                src="/images/brand/imagotipo.svg"
                alt="Maximiza Casa de Bolsa"
                title="Maximiza Casa de Bolsa"
                class="w-full max-w-[180px] brightness-0 invert xl:max-w-[240px]"
              />
            </picture>
          </NuxtLink>
        </motion.div>

        <motion.nav class="col-span-1" :variants="footerItemVariants">
          <h6 class="mb-3 text-white xl:mb-4">Enlaces directos</h6>
          <ul class="space-y-2 xl:space-y-4">
            <li v-for="link in directLinks" :key="link.label">
              <NuxtLink
                :title="link.label"
                :to="link.to"
                class="text-white-alt hover:text-secondary text-sm transition-colors duration-300 xl:text-base"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </motion.nav>

        <motion.nav
          class="xs:mt-0 col-span-1 mt-8"
          :variants="footerItemVariants"
        >
          <h6 class="mb-3 text-white xl:mb-4">Enlaces usuarios</h6>
          <ul class="space-y-2 xl:space-y-4">
            <li v-for="link in userLinks" :key="link.label">
              <NuxtLink
                :title="link.label"
                :to="link.to"
                class="text-white-alt hover:text-secondary text-sm transition-colors duration-300 xl:text-base"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </motion.nav>

        <motion.nav
          class="col-span-1 mt-8 md:mt-0"
          :variants="footerItemVariants"
        >
          <h6 class="mb-3 text-white xl:mb-4">Enlaces de interés</h6>
          <ul class="space-y-2 xl:space-y-4">
            <li v-for="link in interestLinks" :key="link.label">
              <a
                :title="link.label"
                v-if="link.external"
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white-alt hover:text-secondary text-sm transition-colors duration-300 xl:text-base"
              >
                {{ link.label }}
              </a>
              <NuxtLink
                :title="link.label"
                v-else
                :to="link.to"
                class="text-white-alt hover:text-secondary text-sm transition-colors duration-300 xl:text-base"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </motion.nav>
      </motion.div>

      <motion.div
        class="flex flex-col pb-8 text-xs"
        :variants="footerItemVariants"
      >
        <p class="mb-2 w-full md:w-auto md:text-base md:leading-[24px]">
          Si desea mayor información de nuestros servicios, escríbanos y nos
          comunicaremos con usted a la brevedad posible
        </p>

        <div class="flex w-full flex-wrap gap-2 md:gap-4">
          <div class="flex items-center gap-1">
            <FontAwesomeIcon :icon="faEnvelope" class="text-white" />
            <a
              :title="companyData.email"
              :href="`mailto:${companyData.email}`"
              class="hover:text-secondary transition-colors"
              >{{ companyData.email }}</a
            >
          </div>

          <div class="flex items-center gap-1">
            <FontAwesomeIcon :icon="faPhone" class="text-white" />
            <a
              :title="companyData.phone"
              :href="`tel:${companyData.phone}`"
              class="hover:text-secondary transition-colors"
              >{{ companyData.phone }}</a
            >
          </div>

          <div class="flex items-center gap-1">
            <FontAwesomeIcon :icon="faFax" class="text-white" />
            <span>{{ companyData.fax }}</span>
          </div>

          <div class="mt-2 flex w-full items-start gap-1 md:mt-0 md:w-auto">
            <FontAwesomeIcon
              :icon="faLocationDot"
              class="mt-1 text-white md:mt-0.5"
            />
            <span>{{ companyData.address }}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        class="border-gray text-white-alt flex flex-col items-start justify-start border-t pt-8 text-sm font-light md:flex-row md:items-center"
        :variants="footerItemVariants"
      >
        <div class="flex items-center gap-1">
          <span class="text-xs sm:text-base"
            >&copy; {{ currentYear }} Maximiza Casa de Bolsa - Derechos
            reservados</span
          >
        </div>
        <div class="ml-1 flex items-center gap-2">
          <span class="flex text-xs sm:text-base"
            ><span class="hidden px-1 sm:block">|</span> Diseñado por:</span
          >
          <span class="flex font-bold text-white">
            <NuxtLink
              title="Ir a Enlace"
              to="https://novanet.studio/"
              target="_blank"
            >
              <picture>
                <img
                  src="/resources/logo-novanet.svg"
                  alt="Logo Novanet"
                  title="Logo Novanet"
                  class="mb-0.5 h-6 w-auto transition-all duration-300 hover:scale-95"
                />
              </picture>
            </NuxtLink>
          </span>
        </div>
      </motion.div>
    </motion.div>
  </footer>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'
import {
  generalContainerVariants,
  generalItemVariants,
} from '~/assets/animations/motion'

const form = ref({
  'bot-field': '',
  name: '',
  email: '',
  message: '',
  area_of_interest: '',
})

const isOpen = ref(false)

const options = [
  {
    value: 'Apertura de cuenta corretaje',
    label: 'Apertura de Cuenta Corretaje',
  },
  { value: 'Gestión patrimonial', label: 'Gestión Patrimonial' },
  { value: 'Financiamiento corporativo', label: 'Financiamiento Corporativo' },
  { value: 'Otros', label: 'Otro' },
]

const selectedLabel = computed(() => {
  const found = options.find((o) => o.value === form.value.area_of_interest)
  return found ? found.label : null
})

const selectOption = (option: any) => {
  form.value.area_of_interest = option.value as string
  isOpen.value = false
}

const encode = (data: Record<string, any>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = async () => {
  try {
    const formData = encode({
      'form-name': 'FORMULARIO_DE_CONTACTO',
      ...form.value,
    })

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor')
    }

    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
    form.value.area_of_interest = ''
    alert('Mensaje enviado con éxito')
  } catch (error) {
    console.error('Error al enviar:', error)
    alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.')
  }
}
</script>

<template>
  <CommonContentWithColumns
    backgroundImage="/images/pages/contact/banner.webp"
    title="Formulario <br /> de contacto"
    cover-wrapper
  >
    <div class="w-full">
      <h4 class="content-with-columns mb-4 text-white md:mb-8">
        Envíanos un mensaje a través de este formulario
      </h4>

      <motion.form
        @submit.prevent="handleSubmit"
        class="flex w-full flex-col gap-8"
        data-netlify="true"
        name="FORMULARIO_DE_CONTACTO"
        netlify-honeypot="bot-field"
        :variants="generalContainerVariants"
      >
        <div class="hidden">
          <label
            >Don't fill this out if you're human:
            <input name="bot-field" v-model="form['bot-field']"
          /></label>
        </div>

        <motion.input
          type="text"
          placeholder="Nombre y Apellido"
          v-model="form.name"
          required
          class="placeholder-gray focus:border-secondary border-b border-white bg-transparent py-1 text-white transition-colors outline-none"
          :variants="generalItemVariants"
        />

        <motion.input
          type="email"
          placeholder="Email"
          v-model="form.email"
          required
          class="placeholder-gray focus:border-secondary border-b border-white bg-transparent py-1 text-white transition-colors outline-none"
          :variants="generalItemVariants"
        />

        <motion.input
          type="text"
          placeholder="Mensaje"
          v-model="form.message"
          required
          class="placeholder-gray focus:border-secondary border-b border-white bg-transparent py-1 text-white transition-colors outline-none"
          :variants="generalItemVariants"
        />

        <motion.div
          class="group relative w-full"
          :variants="generalItemVariants"
        >
          <div
            @click="isOpen = !isOpen"
            class="focus:border-secondary flex w-full cursor-pointer items-center justify-between border-b border-white py-1.5 pr-2 text-white transition-colors"
            :class="{ 'border-secondary': isOpen }"
          >
            <span
              :class="form.area_of_interest ? 'text-white' : 'text-gray-400'"
            >
              {{ selectedLabel || 'Área específica de interés' }}
            </span>

            <FontAwesomeIcon
              icon="fa-solid fa-chevron-down"
              class="transition-all duration-300"
              :class="{ '-rotate-180': isOpen }"
            />
          </div>

          <transition name="fade">
            <ul
              v-if="isOpen"
              class="bg-black-alt absolute z-50 mt-1 w-full overflow-hidden border border-gray-700 shadow-xl"
            >
              <li
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
                class="hover:bg-primary cursor-pointer px-4 py-2 text-base text-white transition-colors duration-200"
                :class="{
                  'bg-primary': option.value === form.area_of_interest,
                }"
              >
                {{ option.label }}
              </li>
            </ul>
          </transition>

          <input type="hidden" v-model="form.area_of_interest" required />
        </motion.div>

        <motion.div class="flex justify-end" :variants="generalItemVariants">
          <UiButton
            type="submit"
            text="Enviar"
            icon="paper-plane"
            variant="primary"
            size="md"
            class="mt-2"
          />
        </motion.div>
      </motion.form>
    </div>
  </CommonContentWithColumns>
</template>

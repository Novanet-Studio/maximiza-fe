<script setup lang="ts">
  import { ref } from 'vue'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  const form = ref({
    'bot-field': '',
    name: '',
    email: '',
    message: '',
  })

  const encode = (data: Record<string, any>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = async () => {
    try {
      const formData = encode({
        'form-name': 'inicio',
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
    } catch (error) {
      console.error('Error al enviar:', error)
    }
  }

  const { contactoData, fetchContacto } = useMaximizaQueries()

  onMounted(() => {
    fetchContacto()
  })

  useSeoMeta({
    title: 'Contacto',
    description:
      'Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_contacto_miniatura_7e7d7d94e8.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="contactoData" class="w-full">
      <CommonHero
        :text="contactoData.principal.contenido"
        :image="contactoData.principal.imagen"
        :inverted="true"
        :show-logo="false"
        :button-text="''"
      >
        <template #custom-title>
          <h1 class="hero-title text-left">
            {{ contactoData.principal.titulo }}
          </h1>
        </template>
      </CommonHero>

      <section class="mx-auto mb-16 mt-12 px-4 md:mb-24 md:mt-16 xl:mt-24 xl:px-0">
        <div class="flex flex-col justify-between gap-12 xl:flex-row xl:gap-0">
          <div class="w-full text-left xl:w-[30%]">
            <ul class="flex flex-col gap-8 md:gap-10">
              <li class="flex items-center gap-4">
                <span
                  class="flex h-6 w-6 shrink-0 items-center justify-center bg-maximiza-verde1 text-maximiza-blanco1 md:h-8 md:w-8"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" class="text-lg md:text-xl" />
                </span>
                <p class="text-sm font-medium text-maximiza-gris2 md:text-base">
                  contacto@maximiza.com.ve
                </p>
              </li>

              <li class="flex items-center gap-4">
                <span
                  class="flex h-6 w-6 shrink-0 items-center justify-center bg-maximiza-verde1 text-maximiza-blanco1 md:h-8 md:w-8"
                >
                  <font-awesome-icon :icon="['fas', 'phone']" class="text-lg md:text-xl" />
                </span>
                <p class="text-sm font-medium leading-relaxed text-maximiza-gris2 md:text-base">
                  Master +58 (212) 9539447 <br />
                  Fax +58 (212) 9573365 / 3366
                </p>
              </li>

              <li class="flex items-start gap-4">
                <span
                  class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center bg-maximiza-verde1 text-maximiza-blanco1 md:h-8 md:w-8"
                >
                  <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-lg md:text-xl" />
                </span>
                <p class="text-sm font-medium leading-relaxed text-maximiza-gris2 md:text-base">
                  Avenida Francisco de Miranda, Torre Europa, Piso 3, Oficinas 3-B3. El Rosal,
                  Caracas, Venezuela.
                </p>
              </li>
            </ul>
          </div>

          <div class="w-full xl:w-[65%]">
            <form
              class="flex flex-col flex-wrap justify-between"
              method="POST"
              data-netlify="true"
              name="inicio"
              @submit.prevent="handleSubmit"
            >
              <input type="hidden" name="form-name" value="inicio" />

              <p class="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" v-model="form['bot-field']" />
                </label>
              </p>

              <div class="flex w-full flex-wrap justify-between">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Nombre y apellido"
                  class="bg-transparent placeholder-gray-400 focus:border-green-700 mb-6 w-full border-b-2 border-maximiza-verde1 py-2 text-maximiza-gris4 transition-colors focus:outline-none md:mb-4 md:w-[48%]"
                  required
                />
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Correo"
                  class="bg-transparent placeholder-gray-400 focus:border-green-700 mb-6 w-full border-b-2 border-maximiza-verde1 py-2 text-maximiza-gris4 transition-colors focus:outline-none md:mb-4 md:w-[48%]"
                  required
                />
                <textarea
                  v-model="form.message"
                  name="message"
                  placeholder="Escriba su mensaje aquí..."
                  class="bg-transparent placeholder-gray-400 focus:border-green-700 mb-8 h-12 w-full resize-none border-b-2 border-maximiza-verde1 py-2 text-maximiza-gris4 transition-colors focus:outline-none md:mb-0 md:h-auto"
                  required
                />
              </div>

              <div class="mt-4 flex w-full justify-end">
                <input
                  type="submit"
                  class="button-primary cursor-pointer"
                  value="Enviar mensaje ➤"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

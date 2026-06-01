<script setup lang="ts">
  import { ref } from 'vue'
  import MarkdownIt from 'markdown-it'

  import { useMaximizaQueries } from '~/composables/useMaximizaQueries'

  import { getImageUrl, getImageAlt } from '~/lib/utils'

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
      alert('Mensaje enviado con éxito')
    } catch (error) {
      console.error('Error al enviar:', error)
      alert('Hubo un error al enviar el mensaje.')
    }
  }

  const md = new MarkdownIt({ html: true, breaks: true })
  const renderMarkdown = (content: string) => md.render(content || '')

  const { homeData, fetchHome } = useMaximizaQueries()

  onMounted(() => {
    fetchHome()
  })

  useSeoMeta({
    title: 'Casa de bolsa',
    description:
      'Casa de bolsa dedicada a la asesoría financiera y a la gestión de activos transados en el mercado bursátil.',
    ogImage:
      'https://res.cloudinary.com/novanet-studio/image/upload/v1646847323/maximiza/v4/maximiza_inicio_miniatura_7b38641a3d.webp',
  })
</script>

<template>
  <div class="min-h-dvh">
    <div v-if="homeData" class="w-full">
      <CommonHero
        :text="homeData.principal.logo_texto"
        :image="homeData.principal.imagen"
        button-text="Quiero saber más"
        button-link="/empresa"
        :inverted="false"
      />

      <section class="mt-12 px-4 md:mt-16 xl:mt-24 xl:px-0">
        <h2
          class="text-gray-900 mb-8 text-center text-xl font-black md:mb-12 md:text-2xl xl:text-3xl"
        >
          {{ homeData.beneficios_titulo }}
        </h2>

        <ul class="flex flex-col justify-between gap-8 md:flex-row md:gap-4">
          <li
            v-for="item in homeData.beneficios"
            :key="item.id"
            class="group relative w-full md:w-[30%]"
          >
            <div class="h-full md:border-b-2 md:border-maximiza-gris5 md:pb-4">
              <h3 class="text-center text-lg font-black text-maximiza-verde1 md:text-xl">
                {{ item.titulo }}
              </h3>
              <div
                class="prose prose-p:my-0 mx-auto text-center text-sm font-normal leading-relaxed text-maximiza-gris1 md:text-base"
                v-html="renderMarkdown(item.contenido)"
              ></div>
            </div>
          </li>
        </ul>
      </section>

      <section class="mb-16 mt-16 px-4 md:mt-20 xl:mt-24 xl:px-0">
        <ul class="flex w-full flex-col gap-4 md:h-[300px] md:flex-row">
          <li
            v-for="item in homeData.servicios"
            :key="item.id"
            class="/* Móvil: Altura fija */ /* Desktop: Flex-grow logic */ /* Transición suave del ancho */ group relative h-[200px] w-full cursor-pointer overflow-hidden transition-all duration-500 ease-in-out md:h-full md:w-auto md:flex-1 md:hover:flex-[2]"
          >
            <NuxtLink :to="item.link" class="relative block h-full w-full">
              <NuxtImg
                :src="getImageUrl(item.imagen)"
                :alt="getImageAlt(item.imagen)"
                provider="cloudinary"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-maximiza-verde1-dark/30 transition-colors duration-500 group-hover:bg-maximiza-verde1-dark/50"
              ></div>

              <div
                class="to-transparent absolute bottom-0 left-0 w-full bg-gradient-to-t from-maximiza-verde1-dark/90 via-maximiza-verde1-dark/70 p-6 md:p-8"
              >
                <h3
                  class="mb-0 text-xl font-black text-maximiza-blanco1 drop-shadow-md transition-all duration-300 group-hover:mb-2 md:text-2xl"
                >
                  {{ item.titulo }}
                </h3>

                <div
                  class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100"
                >
                  <p
                    class="pt-2 text-sm font-medium leading-relaxed text-maximiza-blanco1 md:text-base"
                  >
                    {{ item.contenido }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="mb-20 mt-16 px-4 md:my-20 xl:my-24 xl:px-0">
        <h2 class="text-maximiza mb-4 text-center text-xl font-black md:text-2xl xl:text-3xl">
          {{ homeData.contacto_titulo }}
        </h2>

        <p class="text-gray-600 mx-auto mb-8 text-center font-normal">
          {{ homeData.contacto_descripcion }}
        </p>

        <form
          class="mt-8 flex flex-col flex-wrap justify-between md:mt-12 md:flex-row"
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

          <div class="flex w-full flex-wrap justify-between md:w-[75%] lg:w-[80%]">
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

          <div class="flex w-full items-end md:w-[20%] lg:w-[15%]">
            <input type="submit" class="button-primary cursor-pointer" value="Enviar mensaje ➤" />
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

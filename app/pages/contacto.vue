<script setup lang="ts">
import { ref } from "vue";
import { getContactoQuery } from "~/schemas/contacto.schemas";

const form = ref({
  "bot-field": "",
  name: "",
  email: "",
  message: "",
});

const encode = (data: Record<string, any>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const handleSubmit = async () => {
  try {
    const formData = encode({
      "form-name": "inicio",
      ...form.value,
    });

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  } catch (error) {
    console.error("Error al enviar:", error);
  }
};

const graphql = useStrapiGraphQL();
const { data: contactoData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getContactoQuery);
    return response?.data?.contacto || null;
  } catch (error) {
    console.error("Error fetching contacto:", error);
    return null;
  }
});

useSeoMeta({
  title: "Contacto",
  description:
    "Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_contacto_miniatura_7e7d7d94e8.webp",
});
</script>

<template>
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

    <section
      class="mx-auto px-4 xl:px-0 mt-12 md:mt-16 xl:mt-24 mb-16 md:mb-24"
    >
      <div class="flex flex-col xl:flex-row justify-between gap-12 xl:gap-0">
        <div class="w-full xl:w-[30%] text-left">
          <ul class="flex flex-col gap-8 md:gap-10">
            <li class="flex items-center gap-4">
              <span
                class="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-maximiza-verde1 shrink-0 text-maximiza-blanco1"
              >
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="text-lg md:text-xl"
                />
              </span>
              <p class="text-maximiza-gris2 font-medium text-sm md:text-base">
                contacto@maximiza.com.ve
              </p>
            </li>

            <li class="flex items-center gap-4">
              <span
                class="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-maximiza-verde1 shrink-0 text-maximiza-blanco1"
              >
                <font-awesome-icon
                  :icon="['fas', 'phone']"
                  class="text-lg md:text-xl"
                />
              </span>
              <p
                class="text-maximiza-gris2 font-medium text-sm md:text-base leading-relaxed"
              >
                Master +58 (212) 9539447 <br />
                Fax +58 (212) 9573365 / 3366
              </p>
            </li>

            <li class="flex items-start gap-4">
              <span
                class="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-maximiza-verde1 shrink-0 text-maximiza-blanco1 mt-1"
              >
                <font-awesome-icon
                  :icon="['fas', 'map-marker-alt']"
                  class="text-lg md:text-xl"
                />
              </span>
              <p
                class="text-maximiza-gris2 font-medium text-sm md:text-base leading-relaxed"
              >
                Avenida Francisco de Miranda, Torre Europa, Piso 3, Oficinas
                3-B3. El Rosal, Caracas, Venezuela.
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

            <div class="w-full flex flex-wrap justify-between">
              <input
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Nombre y apellido"
                class="w-full md:w-[48%] mb-6 md:mb-4 bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris4 placeholder-gray-400 py-2 focus:outline-none focus:border-green-700 transition-colors"
                required
              />
              <input
                v-model="form.email"
                type="email"
                name="email"
                placeholder="Correo"
                class="w-full md:w-[48%] mb-6 md:mb-4 bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris4 placeholder-gray-400 py-2 focus:outline-none focus:border-green-700 transition-colors"
                required
              />
              <textarea
                v-model="form.message"
                name="message"
                placeholder="Escriba su mensaje aquí..."
                class="w-full mb-8 md:mb-0 bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris4 placeholder-gray-400 py-2 focus:outline-none focus:border-green-700 transition-colors resize-none h-12 md:h-auto"
                required
              />
            </div>

            <div class="w-full flex justify-end mt-4">
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
</template>

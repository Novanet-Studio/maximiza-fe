<script setup lang="ts">
import { ref } from "vue";
import MarkdownIt from "markdown-it";
import { getHomeQuery } from "~/schemas/homme.schemas";
import { getImageUrl, getImageAlt } from "~/lib/utils";

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
    alert("Mensaje enviado con éxito");
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar el mensaje.");
  }
};

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const graphql = useStrapiGraphQL();

const { data: homeData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getHomeQuery);
    return response?.data?.home || null;
  } catch (error) {
    console.error("Error fetching home:", error);
    return null;
  }
});

useSeoMeta({
  title: "Casa de bolsa",
  description:
    "Casa de bolsa dedicada a la asesoría financiera y a la gestión de activos transados en el mercado bursátil.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847323/maximiza/v4/maximiza_inicio_miniatura_7b38641a3d.webp",
});
</script>

<template>
  <div v-if="homeData" class="w-full">
    <CommonHero
      :text="homeData.principal.logo_texto"
      :image="homeData.principal.imagen"
      button-text="Quiero saber más"
      button-link="/empresa"
      :inverted="false"
    />

    <section class="mt-12 md:mt-16 xl:mt-24 px-4 xl:px-0">
      <h2
        class="text-center font-black text-gray-900 text-xl md:text-2xl xl:text-3xl mb-8 md:mb-12"
      >
        {{ homeData.beneficios_titulo }}
      </h2>

      <ul class="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
        <li
          v-for="item in homeData.beneficios"
          :key="item.id"
          class="w-full md:w-[30%] relative group"
        >
          <div class="md:border-b-2 md:border-maximiza-gris5 md:pb-4 h-full">
            <h3
              class="text-maximiza-verde1 font-black text-center text-lg md:text-xl"
            >
              {{ item.titulo }}
            </h3>
            <div
              class="text-maximiza-gris1 text-center font-normal text-sm md:text-base leading-relaxed prose prose-p:my-0 mx-auto"
              v-html="renderMarkdown(item.contenido)"
            ></div>
          </div>
        </li>
      </ul>
    </section>

    <section class="mt-16 md:mt-20 xl:mt-24 mb-16 px-4 xl:px-0">
      <ul class="flex flex-col md:flex-row gap-4 w-full md:h-[300px]">
        <li
          v-for="item in homeData.servicios"
          :key="item.id"
          class="relative group overflow-hidden cursor-pointer /* Móvil: Altura fija */ w-full h-[200px] /* Desktop: Flex-grow logic */ md:w-auto md:h-full md:flex-1 md:hover:flex-[2] /* Transición suave del ancho */ transition-all duration-500 ease-in-out"
        >
          <NuxtLink :to="item.link" class="block w-full h-full relative">
            <NuxtImg
              :src="getImageUrl(item.imagen)"
              :alt="getImageAlt(item.imagen)"
              provider="cloudinary"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-maximiza-verde1-dark/30 group-hover:bg-maximiza-verde1-dark/50 transition-colors duration-500"
            ></div>

            <div
              class="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-maximiza-verde1-dark/90 via-maximiza-verde1-dark/70 to-transparent"
            >
              <h3
                class="text-maximiza-blanco1 font-black text-xl md:text-2xl drop-shadow-md mb-0 group-hover:mb-2 transition-all duration-300"
              >
                {{ item.titulo }}
              </h3>

              <div
                class="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out"
              >
                <p
                  class="text-maximiza-blanco1 text-sm md:text-base font-medium leading-relaxed pt-2"
                >
                  {{ item.contenido }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="mt-16 mb-20 md:my-20 xl:my-24 px-4 xl:px-0">
      <h2
        class="text-center font-black text-maximiza text-xl md:text-2xl xl:text-3xl mb-4"
      >
        {{ homeData.contacto_titulo }}
      </h2>

      <p class="text-center text-gray-600 font-normal mb-8 mx-auto">
        {{ homeData.contacto_descripcion }}
      </p>

      <form
        class="flex flex-col md:flex-row flex-wrap justify-between mt-8 md:mt-12"
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

        <div
          class="w-full md:w-[75%] lg:w-[80%] flex flex-wrap justify-between"
        >
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

        <div class="w-full md:w-[20%] lg:w-[15%] flex items-end">
          <input
            type="submit"
            class="button-primary cursor-pointer"
            value="Enviar mensaje ➤"
          />
        </div>
      </form>
    </section>
  </div>
</template>

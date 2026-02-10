<script setup lang="ts">
import { ref } from "vue";
import MarkdownIt from "markdown-it";
import { getSugerenciasQuery } from "~/schemas/sugerencias.schemas";

const form = ref({
  "bot-field": "",
  nombre: "",
  cedula: "",
  rif: "",
  email: "",
  telefono: "",
  mensaje: "",
});

const files = ref<{ [key: string]: File | null }>({
  archivo_1: null,
  archivo_2: null,
  archivo_3: null,
});

const handleFileChange = (event: Event, fieldName: string) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    files.value[fieldName] = target.files[0];
  } else {
    files.value[fieldName] = null;
  }
};

const handleSubmit = async () => {
  try {
    const formData = new FormData();

    formData.append("form-name", "sugerencias");

    Object.keys(form.value).forEach((key) => {
      formData.append(key, form.value[key as keyof typeof form.value]);
    });

    Object.keys(files.value).forEach((key) => {
      if (files.value[key]) {
        formData.append(key, files.value[key] as Blob);
      }
    });

    const response = await fetch("/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    alert("Sugerencia enviada con éxito");

    form.value.nombre = "";
    form.value.cedula = "";
    form.value.rif = "";
    form.value.email = "";
    form.value.telefono = "";
    form.value.mensaje = "";

    files.value.archivo_1 = null;
    files.value.archivo_2 = null;
    files.value.archivo_3 = null;

    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input: any) => (input.value = ""));
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar su sugerencia.");
  }
};

const md = new MarkdownIt({ html: true, breaks: true });
const renderMarkdown = (content: string) => md.render(content || "");

const graphql = useStrapiGraphQL();
const { data: sugerenciaData } = await useAsyncData(async () => {
  try {
    const response = await graphql<any>(getSugerenciasQuery);

    return response?.data?.sugerencia || null;
  } catch (error) {
    console.error("Error fetching sugerencia:", error);
    return null;
  }
});

useSeoMeta({
  title: "Sugerencias",
  description:
    "Envíenos sus quejas, reclamos y/o sugerencias sobre temas de nuestra competencia.",
  ogImage:
    "https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_sugerencias_miniatura_3f6598f24d.webp",
});
</script>

<template>
  <div v-if="sugerenciaData" class="w-full">
    <CommonHero
      :text="sugerenciaData.principal.contenido"
      :image="sugerenciaData.principal.imagen"
      :inverted="true"
      :show-logo="false"
      :button-text="''"
    >
      <template #custom-title>
        <h1 class="hero-title text-left">
          {{ sugerenciaData.principal.titulo }}
        </h1>
      </template>
    </CommonHero>

    <section class="mx-auto px-4 xl:px-0 mt-12 mb-16 md:mb-24">
      <div class="flex flex-col xl:flex-row justify-between gap-12 xl:gap-0">
        <div class="w-full lg:w-1/3 text-left">
          <ul class="flex flex-col gap-8 md:gap-10">
            <li class="flex items-start gap-4">
              <div
                class="text-maximiza-gris2 font-light italic"
                v-html="renderMarkdown(sugerenciaData.info_sugerencias)"
              ></div>
            </li>

            <li class="flex items-start gap-4">
              <span
                class="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-maximiza-verde1 shrink-0 text-maximiza-blanco1"
              >
                <font-awesome-icon
                  :icon="['fas', 'building']"
                  class="text-lg md:text-xl"
                />
              </span>
              <p class="text-maximiza-gris2 font-medium text-sm md:text-base">
                Av. Francisco de Miranda Torre Europa Piso 3 Oficina 3-B3
                Caracas 1060 – Estado Miranda.
              </p>
            </li>

            <li class="flex items-center gap-4">
              <span
                class="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-maximiza-verde1 shrink-0 text-maximiza-blanco1"
              >
                <font-awesome-icon
                  :icon="['fas', 'earth-americas']"
                  class="text-lg md:text-xl"
                />
              </span>
              <p class="text-maximiza-gris2 font-medium text-sm md:text-base">
                Sitio web: maximiza.com.ve
              </p>
            </li>

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
                maximizaprevencion@maximiza.com.ve
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
                Máster: (58) 212-9539447 <br />
                Fax: (58) 212-9573316
              </p>
            </li>
          </ul>
        </div>

        <div class="w-full lg:w-2/3">
          <form
            class="flex flex-col gap-6 md:gap-8"
            name="sugerencias"
            method="POST"
            enctype="multipart/form-data"
            data-netlify="true"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="sugerencias" />
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" v-model="form['bot-field']" />
              </label>
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <input
                v-model="form.nombre"
                type="text"
                name="nombre"
                placeholder="Nombre y apellido"
                class="w-full bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris2 placeholder-gray-400 py-3 focus:outline-none focus:border-green-700 transition-colors text-sm md:text-base font-medium"
                required
              />
              <input
                v-model="form.cedula"
                type="number"
                name="cedula"
                placeholder="Cédula de identidad"
                class="w-full bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris2 placeholder-gray-400 py-3 focus:outline-none focus:border-green-700 transition-colors text-sm md:text-base font-medium"
                required
              />
              <input
                v-model="form.rif"
                type="text"
                name="rif"
                placeholder="RIF"
                class="w-full bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris2 placeholder-gray-400 py-3 focus:outline-none focus:border-green-700 transition-colors text-sm md:text-base font-medium"
              />
              <input
                v-model="form.email"
                type="email"
                name="email"
                placeholder="Correo"
                class="w-full bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris2 placeholder-gray-400 py-3 focus:outline-none focus:border-green-700 transition-colors text-sm md:text-base font-medium"
                required
              />
              <input
                v-model="form.telefono"
                type="number"
                name="telefono"
                placeholder="Teléfono"
                class="w-full bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris2 placeholder-gray-400 py-3 focus:outline-none focus:border-green-700 transition-colors text-sm md:text-base font-medium"
              />
            </div>

            <textarea
              v-model="form.mensaje"
              name="mensaje"
              placeholder="Descripción"
              class="w-full bg-transparent border-b-2 border-maximiza-verde1 text-maximiza-gris2 placeholder-gray-400 py-3 focus:outline-none focus:border-green-700 transition-colors text-sm md:text-base font-medium resize-none h-16"
              required
            />

            <div class="mt-4">
              <small class="block text-maximiza-gris2 mb-4">
                Agregue la documentación que avale el contenido del mensaje.
              </small>
              <div class="flex flex-col gap-4" id="Fields">
                <div>
                  <input
                    id="id00"
                    name="archivo_1"
                    class="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-maximiza-verde1 file:text-maximiza-blanco1 hover:file:bg-green-700"
                    type="file"
                    @change="(e) => handleFileChange(e, 'archivo_1')"
                  />
                </div>
                <div>
                  <input
                    id="id01"
                    name="archivo_2"
                    class="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-maximiza-verde1 file:text-maximiza-blanco1 hover:file:bg-green-700"
                    type="file"
                    @change="(e) => handleFileChange(e, 'archivo_2')"
                  />
                </div>
                <div>
                  <input
                    id="id02"
                    name="archivo_3"
                    class="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-maximiza-verde1 file:text-maximiza-blanco1 hover:file:bg-green-700"
                    type="file"
                    @change="(e) => handleFileChange(e, 'archivo_3')"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-start md:justify-end mt-8">
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

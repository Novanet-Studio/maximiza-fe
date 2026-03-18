<script setup lang="ts">
import { motion } from "motion-v";
import { ref } from "vue";
import { generalContainerVariants, generalItemVariants } from "~/assets/animations/motion";

const form = ref({
    "bot-field": "",
    name: "",
    email: "",
    message: "",
    area_of_interest: "",
});

const encode = (data: Record<string, any>) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const handleSubmit = async () => {
    try {
        const formData = encode({
            "form-name": "FORMULARIO_DE_CONTACTO",
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
        form.value.area_of_interest = "";
        alert("Mensaje enviado con éxito");
    } catch (error) {
        console.error("Error al enviar:", error);
        alert("Hubo un error al enviar el mensaje. Por favor, intente nuevamente.");
    }
};
</script>

<template>
    <CommonContentWithColumns backgroundImage="/images/pages/contact/banner.webp" title="Formulario <br /> de contacto"
        cover-wrapper>
        <div class="w-full">
            <h4 class="max-sm:text-lg text-white mb-4 md:mb-8">Envíanos un mensaje a través de este formulario</h4>

            <motion.form @submit.prevent="handleSubmit" class="flex flex-col gap-8 w-full" data-netlify="true"
                name="FORMULARIO_DE_CONTACTO" netlify-honeypot="bot-field" :variants="generalContainerVariants">
                <div class="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field"
                            v-model="form['bot-field']" /></label>
                </div>

                <motion.input type="text" placeholder="Nombre y Apellido" v-model="form.name" required
                    class="bg-transparent border-b border-white text-white placeholder-gray outline-none py-1 focus:border-secondary transition-colors"
                    :variants="generalItemVariants" />


                <motion.input type="email" placeholder="Email" v-model="form.email" required
                    class="bg-transparent border-b border-white text-white placeholder-gray outline-none py-1 focus:border-secondary transition-colors"
                    :variants="generalItemVariants" />

                <motion.input type="text" placeholder="Mensaje" v-model="form.message" required
                    class="bg-transparent border-b border-white text-white placeholder-gray outline-none py-1 focus:border-secondary transition-colors"
                    :variants="generalItemVariants" />

                <motion.div class="relative w-full" :variants="generalItemVariants">
                    <select v-model="form.area_of_interest" required
                        class="w-full bg-transparent border-b border-white text-white placeholder-gray outline-none py-1 pr-8 appearance-none focus:border-secondary transition-colors">
                        <option value="" disabled selected hidden class="text-gray-500">Área específica de interés
                        </option>
                        <option value="Apertura de cuenta corretaje" class="text-black">Apertura de Cuenta Corretaje
                        </option>
                        <option value="Gestión patrimonial" class="text-black">Gestión Patrimonial</option>
                        <option value="Financiamiento corporativo" class="text-black">Financiamiento Corporativo
                        </option>
                        <option value="Otros" class="text-black">Otro</option>
                    </select>

                    <div class="absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none text-white">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </motion.div>

                <motion.div class="flex justify-end" :variants="generalItemVariants">
                    <UiButton type="submit" text="Enviar" icon="paper-plane" variant="primary" size="md" class="mt-2" />
                </motion.div>
            </motion.form>
        </div>

    </CommonContentWithColumns>


</template>
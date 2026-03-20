<script setup lang="ts">
import { motion } from "motion-v"
import { generalContainerVariants, generalItemVariants, generalImageVariants } from "@/assets/animations/motion"

interface HeroProps {
    title: string,
    description: string,
    button?: {
        text: string,
        link: string
    },
    image: {
        src: string,
        alt: string
    },
    pattern?: {
        src: string,
    }
}

const props = defineProps<HeroProps>()
</script>

<template>
    <motion.section class="w-full mt-[10vh] overflow-hidden" :style="{
        backgroundImage: `url(${props.pattern?.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
        :viewport="{ once: true, margin: '-10px' }">
        <div class="w-full h-full bg-white/75">

            <div
                class="container max-sm:min-h-[90dvh] sm:min-h-[460px] flex flex-col sm:flex-row justify-center xl:justify-between items-center">
                <div class="w-auto flex items-center justify-center sm:h-full">
                    <div class="">
                        <motion.div :variants="generalItemVariants">
                            <h1 class="mb-4" v-html="props.title" />
                        </motion.div>
                        <motion.div :variants="generalItemVariants">
                            <p class="max-w-[642px] p1 font-normal leading-7 text-gray" v-html="props.description" />
                        </motion.div>
                        <motion.div :variants="generalItemVariants">
                            <NuxtLink :title="props.button.text" v-if="props.button" :to="props.button?.link">
                                <UiButton class="mt-4" :text="props.button.text" :icon="'check'" size="md" />
                            </NuxtLink>
                        </motion.div>
                    </div>
                </div>

                <motion.div class="shrink-0 w-[90%] md:w-[284px] md:h-[250px] xl:w-[410px] xl:h-[360px]"
                    :variants="generalImageVariants">
                    <img :src="props.image.src" :alt="props.image.alt" :title="props.image.alt"
                        class="w-full h-full object-cover">
                </motion.div>
            </div>
        </div>

    </motion.section>
</template>
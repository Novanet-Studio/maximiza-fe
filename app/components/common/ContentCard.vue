<script setup lang="ts">
import { motion } from "motion-v"
import { generalItemVariants } from "@/assets/animations/motion"

interface Props {
    subtitle?: string;
    title?: string;
    content: string;
    styles?: {
        title?: string;
        content?: string;
        wrapper?: string;
    };
    image: {
        url: string;
        alt: string;
    };
    button?: {
        label: string;
        link: string;
        icon?: string;
        variant?: 'primary' | 'secondary' | 'outline';
        size?: 'sm' | 'md' | 'lg';
    };
    isVertical?: boolean;
    isReverse?: boolean;
    isImageFull?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    styles: () => ({
        title: 'text-black-alt mb-2 md:mb-4',
        content: 'p2 text-gray',
        wrapper: 'flex-1 p-4 flex flex-col justify-center'
    }),
    isImageFull: false,
});
</script>

<template>
    <motion.div class="max-sm:w-[280px] w-full bg-white flex border border-white-alt2" :class="[
        props.isVertical
            ? (props.isReverse ? 'flex-col' : 'flex-col-reverse md:flex-col')
            : (props.isReverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row')
    ]" :variants="generalItemVariants" initial="hidden" whileInView="visible"
        :viewport="{ once: true, margin: '-50px' }">
        <div :class="[
            props.styles.wrapper,

        ]">
            <span v-if="props.subtitle" class="text-primary mb-1">{{ props.subtitle }}</span>
            <h4 v-if="props.title" :class="props.styles.title">{{ props.title }}</h4>
            <p :class="props.styles.content" v-html="props.content"></p>

            <div class="mt-4" v-if="props.button">
                <NuxtLink :title="props.button.label" :to="props.button.link">
                    <UiButton :text="props.button.label" :icon="props.button.icon" :variant="props.button.variant"
                        :size="props.button.size" />
                </NuxtLink>
            </div>

            <slot />
        </div>
        <div class="shrink-0" :class="{ 'relative': props.isVertical }">
            <img :src="props.image.url" :alt="props.image.alt" title="props.image.alt"
                :class="props.isVertical 
                            ? 'w-full min-w-[280px] min-h-[175px] md:min-w-[152px] md:min-h-[95px] lg:min-w-[280px] lg:min-h-[175px] object-cover' 
                            : `w-full h-auto md:w-[220px] lg:w-[280px] object-cover`" />
        </div>
    </motion.div>
</template>

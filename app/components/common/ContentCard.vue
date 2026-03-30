<script setup lang="ts">
import { motion } from "motion-v"
import { generalItemVariants } from "@/assets/animations/motion"

interface Props {
    subtitle?: string;
    title?: string;
    content: string;
    maxWidth?: string;
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
    maxWidth: '280',
    styles: () => ({
        title: 'text-black-alt mb-2 md:mb-4',
        content: 'text-[12px] leading-[20px] md:text-[8.33px] md:leading-[13.89px] lg:text-[11.18px] lg:leading-[20.77px] text-gray',
        wrapper: 'flex-1 p-4 flex flex-col justify-center'
    }),
    isImageFull: false,
});
</script>

<template>
    <motion.div :class="[
        `max-sm:w-[${props.maxWidth}px] w-full bg-white flex`,
        props.isVertical
            ? (props.isReverse ? 'flex-col' : 'flex-col-reverse md:flex-col')
            : (props.isReverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row')
    ]" :variants="generalItemVariants" initial="hidden" whileInView="visible"
        :viewport="{ once: true, margin: '-50px' }">
        <div :class="[
            props.styles.wrapper,
            'border border-white-alt2',
            props.isReverse ? (props.isVertical ? 'border-b-[0px]' : 'border-l-[0px]') : (props.isVertical ? 'border-t-[0px] md:border-t md:border-b-[0px]' : 'border-b-[0px] md:border-b md:border-r-[0px]'),
            
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
                            : `w-full h-full md:w-[220px] lg:w-[280px] object-cover`" />
        </div>
    </motion.div>
</template>

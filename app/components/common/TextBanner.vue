<script setup lang="ts">
import { motion } from "motion-v"
import { generalContainerVariants, generalItemVariants } from "@/assets/animations/motion"

interface BannerProps {
    description: string
    background: string;
    overlay?: string;
    isDivider?: boolean
}

const props = defineProps<BannerProps>()

const parsedOverlay = computed(() => {
    const overlay = props.overlay;

    if (!overlay) return '';

    if (overlay.includes('/')) {
        const [color, opacity] = overlay.split('/');
        const opacityValue = parseInt(opacity!, 10);

        if (!isNaN(opacityValue)) {
            const alpha = Math.round((opacityValue / 100) * 255);
            const hexAlpha = alpha.toString(16).padStart(2, '0');
            return `${color}${hexAlpha}`;
        }
    }

    return overlay;
});
</script>

<template>
    <motion.section class="w-full  flex justify-center" :class="{
        'h-auto md:h-[263px] xl:h-[390px]': !isDivider,
        'h-auto md:h-[150px]': isDivider,
    }" :style="{
        backgroundImage: `url(${props.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none'
    }" :variants="generalContainerVariants" initial="hidden" whileInView="visible"
        :viewport="{ once: true, margin: '-50px' }">
        <div class="container h-full py-20 flex items-center justify-center">
            <motion.div :variants="generalItemVariants">
                <p
                    class="text-3xl leading-[40px] md:text-xl md:leading-[28px] lg:text-3xl lg:leading-[40px] font-semibold text-white text-center">
                    {{ props.description }}</p>
            </motion.div>
        </div>
    </motion.section>
</template>

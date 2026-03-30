<script setup lang="ts">
import { Motion } from 'motion-v';
import { generalItemVariants } from '~/assets/animations/motion';

const props = withDefaults(defineProps<{
    title?: string;
    backgroundImage?: string;
    isSplitBackground?: boolean;
    coverWrapper?: boolean;
    autoColumns?: boolean;
    columns?: {
        left?: string;
        right?: string;
    }
}>(), {
    coverWrapper: false,
    isSplitBackground: false,
    autoColumns: false
});
</script>

<template>
    <section class="relative w-full flex pb-10">
        <div class="absolute inset-0 flex w-full h-full z-0 pointer-events-none">
            <template v-if="isSplitBackground">
                <div class="w-full md:w-1/2 h-full bg-primary relative overflow-hidden">
                    <img v-if="backgroundImage" :src="backgroundImage" alt="Background" title="Background"
                        class="absolute inset-0 w-full h-full object-cover " />
                </div>
                <div class="hidden md:block w-1/2 h-full bg-white"></div>
            </template>
            <template v-else>
                <div
                    :class="`w-full ${coverWrapper ? 'h-full' : 'h-[490px] md:h-[214px] lg:h-[340px]'} relative overflow-hidden`">
                    <img v-if="backgroundImage" :src="backgroundImage" alt="Background" title="Background"
                        class="absolute inset-0 w-full h-full object-cover" />
                </div>
            </template>
        </div>

        <div
            class="container mx-auto relative z-10 w-full max-sm:pb-10 pt-10 flex flex-col md:flex-row items-start justify-center">
            <div class="w-full flex items-center justify-start mb-8 md:mb-4" :class="[
                autoColumns === false ? 'md:w-[35%]' : columns?.left
            ]">
                <Motion :variants="generalItemVariants">
                    <h2 v-if="title" class="text-white" v-html="title" />
                </Motion>
            </div>

            <div class="w-full flex flex-col items-center gap-8" :class="[
                autoColumns === false ? 'md:w-[65%]' : columns?.right
            ]">
                <slot />
            </div>
        </div>
    </section>
</template>

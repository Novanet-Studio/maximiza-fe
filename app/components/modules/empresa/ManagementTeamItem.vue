<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    name: string;
    rol: string;
    description: string;
    variant: {
        background: string;
        titleText: string;
        subtitleText: string;
    }
}

const {
    name,
    rol,
    description,
    variant
} = defineProps<Props>();

const isPopoverOpen = ref(false);
</script>

<template>
    <div class="relative w-full flex flex-col items-center group transition-all duration-300"
        :class="isPopoverOpen ? 'z-50' : 'z-0'">
        <div class="z-10 w-[85%] sm:w-4/5 flex flex-col items-center justify-center py-2 px-4 text-center shadow-md shadow-black/10 transition-transform duration-300"
            :class="variant.background">
            <h4 class="text-sm font-semibold" :class="variant.titleText">{{ name }}</h4>
            <h5 class="text-xs font-normal mt-1" :class="variant.subtitleText">{{ rol }}</h5>
        </div>

        <div
            class="z-0 w-full bg-white border border-gray/30 -mt-8 pt-12 pb-4 px-6 md:px-8 shadow-sm flex flex-col items-center transition-all duration-300">

            <AppPopover position="bottom" :title="name" @toggled="isPopoverOpen = $event">
                <template #trigger>
                    <button
                        class="text-gray/50 hover:text-primary text-sm font-medium  flex items-center justify-center focus:outline-none transition-colors duration-300 cursor-pointer">
                        Ver mas
                    </button>
                </template>
                <div class="w-full text-center sm:text-left">
                    <p class="text-gray text-sm md:text-base leading-relaxed p-2">{{ description }}</p>
                </div>
            </AppPopover>
        </div>
    </div>
</template>
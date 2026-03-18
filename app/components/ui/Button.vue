<script setup lang="ts">
import { motion } from "motion-v"

interface ButtonProps {
    text: string,
    icon?: string,
    type?: 'button' | 'submit' | 'reset',
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'md',
    type: 'button'
})

const overlayVariants: any = {
    hidden: { width: "0%" },
    hover: {
        width: "100%",
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
}
</script>

<template>
    <motion.button :type="props.type" class="relative overflow-hidden font-semibold group cursor-pointer" :class="{
        'bg-primary text-white': props.variant === 'primary',
        'bg-gray text-white': props.variant === 'secondary',
        'border border-black-alt text-black-alt': props.variant === 'outline',
        'px-3 py-2 xl:py-3 text-sm': props.size === 'sm',
        'px-4 py-3 text-base': props.size === 'md',
        'px-6 py-4 text-lg': props.size === 'lg',
    }" initial="hidden" whileHover="hover">
        <motion.div class="absolute left-0 top-0 h-full z-0" :class="{
            'bg-primary-alt': props.variant === 'primary',
            'bg-black-alt': props.variant === 'secondary',
            'bg-white-alt': props.variant === 'outline'
        }" :variants="overlayVariants" />
        <span class="relative z-10 text-sm xl:text-base  flex items-center gap-1">
            {{ props.text }}
            <FontAwesomeIcon v-if="props.icon" :icon="props.icon" :class="{
                'size-1 xl:size-2': props.size === 'sm',
                'size-2 xl:size-4': props.size === 'md',
                'size-4 xl:size-6': props.size === 'lg',
                'text-white': props.variant === 'primary' || props.variant === 'secondary',
                'text-black-alt': props.variant === 'outline',
            }" />
        </span>
    </motion.button>
</template>
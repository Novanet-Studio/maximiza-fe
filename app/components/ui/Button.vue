<script setup lang="ts">
import { motion } from "motion-v"

interface ButtonProps {
    text: string,
    icon?: string,
    type?: 'button' | 'submit' | 'reset',
    variant?: 'primary' | 'secondary' | 'outline' | 'danger'
    size?: 'icon' | 'sm' | 'md' | 'lg'
    disabled?: boolean
    spin?: boolean
    onClick?: () => void
    suffixIcon?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'sm',
    type: 'button',
    suffixIcon: false
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
    <motion.button :type="props.type" class="relative w-fit overflow-hidden font-serif font-medium group cursor-pointer" :class="{
        'bg-primary text-white': props.variant === 'primary',
        'bg-black-alt text-white': props.variant === 'secondary',
        'border border-black-alt text-black-alt': props.variant === 'outline',
        'text-error': props.variant === 'danger',
        'p-1 text-sm': props.size === 'icon',
        'px-3 py-2 text-xs': props.size === 'sm',
        'px-4 py-3 text-base': props.size === 'md',
        'px-6 py-4 text-lg': props.size === 'lg',

    }" initial="hidden" whileHover="hover" :disabled="props.disabled" @click="props.onClick">
        <motion.div class="absolute left-0 top-0 h-full z-0" :class="{
            'bg-primary-alt': props.variant === 'primary',
            'bg-gray': props.variant === 'secondary',
            'bg-white-alt': props.variant === 'outline',
        }" :variants="overlayVariants" />
        <div class="relative z-10 flex items-center gap-1" :class="{
            'flex-row-reverse': props.suffixIcon,
        }">
            {{ props.text }}
            <FontAwesomeIcon v-if="props.icon" :icon="props.icon" :class="{
                'size-1 xl:size-2': props.size === 'icon',
                'size-2 xl:size-4': props.size === 'sm',
                'size-4 xl:size-6': props.size === 'md',
                'size-6 xl:size-8': props.size === 'lg',
                'text-white': props.variant === 'primary' || props.variant === 'secondary',
                'text-black-alt': props.variant === 'outline',
                'animate-spin': props.spin
            }" />
        </div>
    </motion.button>
</template>
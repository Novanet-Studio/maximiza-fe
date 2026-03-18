<script setup lang="ts">
import { motion } from "motion-v"
import { generalItemVariants } from "@/assets/animations/motion"

interface Props {
    title: string;
    titleClass?: string;
    description?: string;
}

const props = defineProps<Props>();
</script>

<template>

    <header class="text-center max-w-4xl mx-auto mb-8">
        <motion.div :variants="generalItemVariants">
            <h2 :class="`${titleClass}`" v-html="title" />
        </motion.div>

        <motion.div v-if="description" :variants="generalItemVariants">
            <p class="max-w-2xl mx-auto mt-6 mb-4 p1 text-gray text-center" v-html="description" />
        </motion.div>
    </header>
</template>
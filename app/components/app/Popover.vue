<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = withDefaults(defineProps<{
    title?: string;
    icon?: string;
    bgColor?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}>(), {
    bgColor: 'bg-white',
});

const emit = defineEmits<{
    (e: 'toggled', value: boolean): void
}>();

const isOpen = ref(false);
const popoverRef = ref<HTMLElement | null>(null);

const toggle = () => {
    isOpen.value = !isOpen.value;
    emit('toggled', isOpen.value);
};

const close = (e: MouseEvent) => {
    if (popoverRef.value && !popoverRef.value.contains(e.target as Node)) {
        if (isOpen.value) {
            isOpen.value = false;
            emit('toggled', false);
        }
    }
};

onMounted(() => {
    document.addEventListener('click', close);
});

onUnmounted(() => {
    document.removeEventListener('click', close);
});
</script>

<template>
    <div class="relative inline-block w-fit" ref="popoverRef">

        <div @click="toggle" class="cursor-pointer inline-block w-full relative z-50">
            <slot name="trigger" />
        </div>


        <Teleport to="body">
            <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="isOpen" class="fixed inset-0 z-40 bg-black-alt/75 cursor-default"
                    @click.stop="() => { isOpen = false; emit('toggled', false); }"></div>
            </Transition>
        </Teleport>


        <Transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen" class="absolute z-50 p-5 rounded-2xl border border-gray/20 min-w-[30dvw]" :class="[
                bgColor,
                {
                    'top-full left-1/2 -translate-x-1/2 mt-1': position === 'bottom',
                    'bottom-full left-1/2 -translate-x-1/2 mb-1': position === 'top',
                    'right-full top-1/2 -translate-y-1/2 mr-1': position === 'left',
                    'left-full top-1/2 -translate-y-1/2 ml-1': position === 'right',
                }
            ]" @click.stop>
                <div v-if="title || icon" class="flex items-center gap-3 mb-3">
                    <img v-if="icon" :src="icon" alt="icon" class="w-6 h-6 object-contain" />
                    <h5 v-if="title" class="font-semibold text-black-alt m-0 text-lg">{{ title }}</h5>
                </div>

                <div class="text-sm text-gray">
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import { motion, AnimatePresence } from "motion-v"
import { headerContainerVariants, headerItemVariants } from "@/assets/animations/motion"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const active = ref("Inicio");
const route = useRoute();
const isVisible = ref(true);
const isMobileMenuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);

const navigationLinks = [
    {
        label: "La empresa",
        to: "/empresa",
    },
    {
        label: "Servicios",
        to: "/servicios",
    },
    {
        label: "Blog",
        to: "/blog",
    },
    {
        label: "Contacto",
        to: "/contacto",
    },
];

watch(
    () => route.path,
    (newPath) => {
        let bestMatch = null;
        for (const link of navigationLinks) {
            if (newPath.startsWith(link.to)) {
                if (!bestMatch || link.to.length > bestMatch.to.length) {
                    bestMatch = link;
                }
            }
        }
        if (bestMatch) {
            active.value = bestMatch.label;
        }
    },
    { immediate: true }
);

function setActive(linkName: string) {
    active.value = linkName;
    isMobileMenuOpen.value = false;
}

let lastScrollY = 0;
let lastMouseY = 0;

const checkVisibility = () => {
    if (isMobileMenuOpen.value) {
        isVisible.value = true;
        return;
    }
    isVisible.value = lastScrollY < 50 || lastMouseY < 100;
};

const handleScroll = () => {
    lastScrollY = window.scrollY;
    checkVisibility();
};

const handleMouseMove = (e: MouseEvent) => {
    lastMouseY = e.clientY;
    checkVisibility();
};

const handleClickOutside = (e: MouseEvent) => {
    if (isMobileMenuOpen.value && headerRef.value && !headerRef.value.contains(e.target as Node)) {
        isMobileMenuOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClickOutside);

    lastScrollY = window.scrollY;
    checkVisibility();
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("click", handleClickOutside);
});
</script>

<template>
    <header ref="headerRef"
        class="h-[10dvh] fixed top-0 left-0 right-0 z-50 bg-white transition-colors duration-300 flex items-center"
        :class="[isVisible ? 'translate-y-0' : '-translate-y-full']"
        style="transition-property: translate, transform, background-color, color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms;">
        <div class="container mx-auto flex justify-between items-center relative z-20 bg-white h-full">
            <motion.nav class="w-full flex items-center justify-between" :variants="headerContainerVariants"
                initial="hidden" animate="visible">

                <motion.div :variants="headerItemVariants">
                    <NuxtLink to="/" @click="setActive('Inicio')">
                        <picture>
                            <img class="w-full max-w-[140px] xl:max-w-[200px] h-auto" src="/images/brand/imagotipo.svg"
                                alt="Maximiza Logo" />
                        </picture>
                    </NuxtLink>
                </motion.div>

                <!-- Desktop Menu -->
                <ul class="hidden md:flex items-center gap-4 xl:gap-8">
                    <motion.li as="li" v-for="item in navigationLinks" :key="item.label" :variants="headerItemVariants">
                        <NuxtLink :to="item.to" @click="setActive(item.label)" :class="[
                            active === item.label
                                ? `text-primary`
                                : 'text-black hover:text-primary',
                            `text-sm xl:text-lg transition-colors duration-300`,
                        ]">
                            {{ item.label }}
                        </NuxtLink>
                    </motion.li>
                </ul>

                <!-- Desktop Buttons -->
                <motion.div class="hidden md:flex items-center space-x-2" :variants="headerItemVariants">
                    <NuxtLink to="/registro">
                        <UiButton :text="'Registrarse'" :icon="'user-plus'" size="sm" />
                    </NuxtLink>

                    <NuxtLink to="/registro">
                        <UiButton :text="'Iniciar sesión'" :icon="'sign-in'" size="sm" variant="outline" />
                    </NuxtLink>
                </motion.div>

                <!-- Mobile Header Toggle Button -->
                <div class="md:hidden">
                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="text-black-alt text-2xl p-2 focus:outline-none"
                        :class="{ 'text-primary': isMobileMenuOpen }">
                        <FontAwesomeIcon :icon="isMobileMenuOpen ? faChevronUp : faBars" />
                    </button>
                </div>
            </motion.nav>
        </div>

        <!-- Mobile Menu Dropdown -->
        <AnimatePresence>
            <motion.div v-if="isMobileMenuOpen" :initial="{ opacity: 1, y: '-100%' }" :animate="{ opacity: 1, y: 0 }"
                :exit="{ opacity: 1, y: '-100%' }" :transition="{ duration: 0.3, ease: 'easeInOut', type: 'tween' }"
                class="absolute top-[10dvh] left-0 w-full bg-white border-t border-white-alt2 shadow-sm flex flex-col lg:hidden z-10">

                <!-- Mobile Menu Links -->
                <div class="flex-1 flex flex-col px-6 py-6 overflow-y-auto max-h-[calc(100vh-10dvh)]">
                    <ul class="flex flex-col gap-6">
                        <li v-for="item in navigationLinks" :key="item.label">
                            <NuxtLink :to="item.to" @click="setActive(item.label)"
                                class="text-base font-normal transition-colors"
                                :class="active === item.label ? 'text-primary' : 'text-black-alt hover:text-primary'">
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <!-- Mobile Menu Buttons -->
                    <div class="mt-8 w-fit flex items-center gap-3">
                        <NuxtLink to="/registro" class="flex-1">
                            <UiButton :text="'Registrarse'" :icon="'user-plus'" size="sm"
                                class="w-full justify-center" />
                        </NuxtLink>
                        <NuxtLink to="/registro" class="flex-1">
                            <UiButton :text="'Ingresar'" :icon="'sign-in'" size="sm" variant="outline"
                                class="w-full justify-center bg-white" />
                        </NuxtLink>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    </header>
</template>
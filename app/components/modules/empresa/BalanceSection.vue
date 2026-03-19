<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { motion } from 'motion-v';
import { generalContainerVariants, generalItemVariants } from '~/assets/animations/motion';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useBalances } from '~/composables/useBalances';

const { getAllBalances } = useBalances();
const balancesData = ref<MXMZ.Balance[]>([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        balancesData.value = await getAllBalances();
    } catch (e) {
        console.error('Error loading balances:', e);
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <motion.section class="container w-full min-h-screen mb-20 md:mb-32 flex flex-col items-center"
        :variants="generalContainerVariants" initial="hidden" animate="visible">

        <div v-if="isLoading" class="flex justify-center items-center py-20 w-full">
            <AppLoader />
        </div>

        <div v-else class="w-full flex flex-col gap-16 lg:gap-24">
            <motion.div v-for="(balance, index) in balancesData" :key="index" class="w-full flex flex-col"
                :variants="generalContainerVariants">

                <CommonSectionHeader :title="balance.label" />

                <div class="flex flex-col w-full">
                    <motion.div v-for="(item, itemIndex) in balance.items" :key="itemIndex"
                        class="w-full flex flex-col md:flex-row items-start md:items-center py-8"
                        :variants="generalItemVariants">

                        <!-- Left column: Year -->
                        <div class="w-full md:w-24 shrink-0 text-center md:text-left">
                            <h3 class="text-3xl text-primary">{{ item.ano }}</h3>
                        </div>

                        <!-- Right column: Document Buttons Grid -->
                        <div class="w-full bg-white-alt2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
                            <span v-for="(doc, docIndex) in item.source" :key="docIndex">
                                <a v-if="doc.file" :href="doc.file.url" target="_blank" rel="noopener noreferrer"
                                    class="group flex items-center justify-between gap-2 py-3 lg:py-4 lg:px-6 bg-white-alt hover:bg-primary text-black-alt hover:text-white transition-colors duration-300">
                                    <span class="text-base font-semibold">{{ doc.label }}</span>

                                    <FontAwesomeIcon :icon="faFileDownload"
                                        class="text-primary group-hover:text-white transition-colors duration-300 text-lg" />
                                    
                                </a>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>

    </motion.section>
</template>
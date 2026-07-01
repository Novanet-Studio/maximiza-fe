<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'
import {
  generalContainerVariants,
  generalItemVariants,
} from '~/assets/animations/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { useBalances } from '~/composables/useBalances'

const { getAllBalances } = useBalances()
const balancesData = ref<MXMZ.Balance[]>([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    balancesData.value = await getAllBalances()
  } catch (e) {
    console.error('Error loading balances:', e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <motion.section
    class="container mb-20 flex min-h-screen w-full flex-col items-center py-16 md:mb-32"
    :variants="generalContainerVariants"
    initial="hidden"
    animate="visible"
  >
    <div v-if="isLoading" class="flex w-full items-center justify-center py-20">
      <AppLoader />
    </div>

    <div v-else class="flex w-full flex-col gap-16 lg:gap-24">
      <motion.div
        v-for="(balance, index) in balancesData"
        :key="index"
        class="flex w-full flex-col"
        :variants="generalContainerVariants"
      >
        <CommonSectionHeader :title="balance.label" />

        <div class="flex w-full flex-col">
          <motion.div
            v-for="(item, itemIndex) in balance.items"
            :key="itemIndex"
            class="flex w-full flex-col items-start py-8 md:flex-row md:items-center"
            :variants="generalItemVariants"
          >
            <div class="w-full shrink-0 text-center md:w-24 md:text-left">
              <h3 class="text-primary text-3xl max-md:mb-2">{{ item.ano }}</h3>
            </div>

            <div
              class="bg-white-alt2 grid w-full grid-cols-2 gap-0.5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
            >
              <span v-for="(doc, docIndex) in item.source" :key="docIndex">
                <a
                  :title="doc.label"
                  v-if="doc.file"
                  :href="doc.file.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group bg-white-alt hover:bg-primary text-black-alt flex items-center justify-between gap-2 px-2 py-3 transition-colors duration-300 hover:text-white lg:px-6 lg:py-4"
                >
                  <span class="text-base font-semibold">{{ doc.label }}</span>

                  <FontAwesomeIcon
                    :icon="faFileDownload"
                    class="text-primary text-lg transition-colors duration-300 group-hover:text-white"
                  />
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.section>
</template>

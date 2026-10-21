<script setup lang="ts">
  import { computed } from 'vue'
  import { useMarketTicker } from '~/composables/useMarketTicker'
  import { formatNumber, formatPercent } from '~/lib/utils'

  const { quotes, status } = useMarketTicker()

  const TREND = {
    up: { symbol: '▲', label: 'sube', class: 'text-up' },
    down: { symbol: '▼', label: 'baja', class: 'text-down' },
    flat: { symbol: '=', label: 'sin cambio', class: 'text-flat' },
  } as const

  // Keep the scroll speed constant regardless of how many quotes there are.
  const duration = computed(() => `${Math.max(quotes.value.length * 4, 20)}s`)
</script>

<template>
  <div
    class="bg-black-alt text-white-alt flex h-9 w-full items-center border-t border-white/10 text-xs"
    title="Datos referenciales de la Bolsa de Valores de Caracas, no en tiempo real"
  >
    <span class="bg-primary flex h-full shrink-0 items-center px-3 font-semibold text-white">
      BVC
    </span>

    <div
      v-if="status === 'loading'"
      class="flex flex-1 gap-6 overflow-hidden px-4"
      aria-hidden="true"
    >
      <span v-for="n in 6" :key="n" class="h-3 w-32 shrink-0 animate-pulse rounded bg-white/10" />
    </div>

    <p v-else-if="status === 'error'" class="text-white-alt/60 px-4">
      Cotizaciones no disponibles en este momento.
    </p>

    <p v-else-if="!quotes.length" class="text-white-alt/60 px-4">Sin cotizaciones para mostrar.</p>

    <div
      v-else
      class="group flex-1 overflow-hidden motion-reduce:overflow-x-auto"
      role="region"
      aria-label="Cotizaciones bursátiles"
    >
      <div
        class="animate-ticker flex w-max group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        :style="{ animationDuration: duration }"
      >
        <!-- The list is rendered twice so the -50% translation loops seamlessly. -->
        <ul
          v-for="copy in 2"
          :key="copy"
          class="flex shrink-0 items-center"
          :class="{ 'motion-reduce:hidden': copy === 2 }"
          :aria-hidden="copy === 2"
        >
          <li
            v-for="quote in quotes"
            :key="quote.symbol"
            class="flex items-center gap-2 border-r border-white/10 px-4 whitespace-nowrap"
          >
            <span class="font-semibold">{{ quote.symbol }}</span>
            <span class="text-white-alt/60" title="Volumen">{{
              formatNumber(quote.volume, 0)
            }}</span>
            <span>{{ formatNumber(quote.lastPrice, 2) }}</span>
            <span class="flex items-center gap-1" :class="TREND[quote.trend].class">
              <span :aria-label="TREND[quote.trend].label">{{ TREND[quote.trend].symbol }}</span>
              {{ formatPercent(quote.changePct) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

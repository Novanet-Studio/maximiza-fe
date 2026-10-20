import { onMounted, ref, watch } from 'vue'
import { useDocumentVisibility, useIntervalFn } from '@vueuse/core'
import { NGROK_HEADERS } from '~/lib/tracking'

const REFRESH_MS = 60_000

const normalize = (quote: any): MXMZ.TickerQuote => {
  const changePct = Number(quote.changePct) || 0
  return {
    symbol: String(quote.symbol ?? ''),
    volume: Number(quote.volume) || 0,
    lastPrice: Number(quote.lastPrice) || 0,
    changePct,
    trend: changePct > 0 ? 'up' : changePct < 0 ? 'down' : 'flat',
  }
}

// Loads the market quotes on the client and refreshes them periodically while the tab is
// visible. A failed refresh keeps the last good data; only a first-load failure shows the
// error state, so a flaky source never breaks the header.
export const useMarketTicker = () => {
  const quotes = ref<MXMZ.TickerQuote[]>([])
  const status = ref<'loading' | 'ready' | 'error'>('loading')

  const load = async () => {
    try {
      const { data } = await $fetch<{ data: any[] }>('/api/market/ticker', {
        headers: NGROK_HEADERS,
      })
      quotes.value = (data || []).map(normalize).filter((quote) => quote.symbol)
      status.value = 'ready'
    } catch (error) {
      console.error('Error fetching market quotes:', error)
      if (!quotes.value.length) status.value = 'error'
    }
  }

  const { pause, resume } = useIntervalFn(load, REFRESH_MS, { immediate: false })
  const visibility = useDocumentVisibility()

  onMounted(() => {
    load()
    resume()
  })

  watch(visibility, (state) => {
    if (state === 'visible') {
      load()
      resume()
    } else {
      pause()
    }
  })

  return { quotes, status }
}

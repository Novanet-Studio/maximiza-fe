export const useKairos = () => {
  const config = useRuntimeConfig()

  const request = <T>(path: string, params?: Record<string, string>) =>
    $fetch<T>(`${config.public.kairos.url}${path}`, {
      headers: { 'x-api-key': config.public.kairos.apiKey },
      params,
    })

  return { request }
}

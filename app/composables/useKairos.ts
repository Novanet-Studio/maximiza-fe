export const useKairos = () => {
  const request = <T>(path: string, params?: Record<string, string>) =>
    $fetch<T>(`/api/cms${path}`, {
      params,
    })

  return { request }
}

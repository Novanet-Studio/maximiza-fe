export const useJsonLd = (schema: Record<string, any> | Record<string, any>[]) => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }
    ]
  })
}

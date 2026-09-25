// Proxy hacia el CMS Kairos. Existe para que la KAIROS_API_KEY viva solo en el servidor: antes
// viajaba en runtimeConfig.public y quedaba legible en el payload __NUXT__ de todas las páginas.
//
// Al ser un proxy con una credencial adjunta, el riesgo se invierte: si el cliente logra desviar
// el destino, le estaríamos entregando la clave a un host ajeno. Por eso la defensa no se basa en
// inspeccionar el string del path (el parser WHATWG normaliza "\" a "/" y deja escapar el host con
// algo como "\evil.com/x"), sino en comparar el origin y el prefijo ya resueltos.

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const rawPath = getRouterParam(event, 'path')

  if (!rawPath) {
    throw createError({ statusCode: 400, statusMessage: 'Path is required' })
  }

  const base = new URL(config.kairos.url)
  // El base sirve de prefijo, así que necesita barra final para que resolve() no se coma el
  // último segmento (".../public/maximiza" + "articulos" daría ".../public/articulos").
  const basePrefix = base.pathname.endsWith('/') ? base.pathname : `${base.pathname}/`

  let target: URL
  try {
    target = new URL(rawPath.replace(/^\/+/, ''), `${base.origin}${basePrefix}`)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Invalid path' })
  }

  // La comprobación que importa: sobre la URL ya resuelta, no sobre la entrada. Cubre a la vez
  // el escape de host (backslash, "//", URL completa, codificaciones) y el escape de directorio
  // ("..", "%2e%2e"), porque el parser ya resolvió ambos antes de llegar aquí.
  if (target.origin !== base.origin || !target.pathname.startsWith(basePrefix)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid path' })
  }

  try {
    const response = await $fetch.raw(target.toString(), {
      headers: { 'x-api-key': config.kairos.apiKey },
      query: getQuery(event),
      // Seguir una redirección reenviaría la clave al host de destino. Si el CMS empieza a
      // redirigir legítimamente, esto se verá como un 502 y habrá que resolverlo con una
      // allow-list explícita, no volviendo a seguir redirecciones a ciegas.
      redirect: 'manual',
    })

    if (response.status >= 300 && response.status < 400) {
      throw createError({ statusCode: 502, statusMessage: 'CMS redirect not followed' })
    }

    setResponseStatus(event, response.status || 200)
    for (const header of ['content-type', 'cache-control', 'etag']) {
      const value = response.headers.get(header)
      if (value) setHeader(event, header, value)
    }

    return response._data
  } catch (error) {
    // Los composables que consumen esto (useArticles, useBalances, useEnlaces) atrapan el error
    // y degradan a sección vacía; no hay que traducirlo aquí.
    throw error
  }
})

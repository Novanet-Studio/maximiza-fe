# Maximiza — Frontend Web (sitio público)

![Maximiza](public/images/brand/maximiza-logo-blanco.svg)

Sitio público de **Maximiza Casa de Bolsa**: páginas institucionales, blog, páginas legales y el
**wizard de apertura de cuenta** (onboarding) con generación de PDFs. Orientado a SEO e instalable
como PWA. Construido con **Nuxt 4 (SSR)** y **Vue 3**.

> Para el detalle de arquitectura interna (wizard, pipeline de PDF, composables, cabeceras de
> seguridad) ver `CLAUDE.md`.

## Stack

- **Framework:** Nuxt 4 (Vue 3, SSR) — puerto dev **3014**
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite`) + SCSS (`sass-embedded`)
- **Contenido:** CMS headless vía REST, consumido a través de un proxy de servidor interno
- **PWA / SEO:** `@vite-pwa/nuxt`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `nuxt-gtag`
- **Imágenes / fuentes:** `@nuxt/image` (Cloudinary) + `@nuxt/fonts`
- **Formularios:** `vee-validate` + `yup`
- **Animaciones:** `motion-v`
- **PDFs (Nitro):** `/api/generate-pdf` con `puppeteer-core` + `@sparticuz/chromium`
- **Deploy:** Netlify (`@netlify/nuxt`)

## Con qué se conecta

| Destino | Vía | Para |
|---|---|---|
| CMS headless | `/api/cms/**` → proxy de servidor que envía `x-api-key` | Contenido: blog, balances financieros, enlaces regulatorios |
| API de plataforma | `POST /api/tracking/session` · `POST /api/tracking/progress` · `GET /api/tracking/advisors` | Avance del wizard de onboarding y consentimiento |
| Ruta Nitro interna | `POST /api/generate-pdf` | PDFs del onboarding (Puppeteer, in-process) |

La clave del CMS **nunca se expone al navegador**: las peticiones pasan por el proxy interno, que
añade la cabecera del lado del servidor. Las llamadas a la API de plataforma son fire-and-forget: si
no está disponible, el wizard sigue funcionando, solo deja de reportar el avance.

## Requisitos

- Node.js 20+
- El lockfile del árbol es `bun.lock`. Netlify construye con `npm run build`.

## Instalación

```bash
bun install
```

Crear un `.env` en la raíz del proyecto:

```env
TRACKING_API_URL=      # URL base de la API de plataforma, sin el sufijo /api. Local: http://localhost:3001
KAIROS_API_URL=        # URL base del CMS (incluye /public/<tenant>) — solo del lado del servidor
KAIROS_API_KEY=        # API key del CMS, que el proxy envía como x-api-key — solo del lado del servidor
PUBLIC_METRICOOL_HASH= # Hash del tracker de Metricool; el script se inyecta vacío si falta
```

## Scripts

```bash
bun run dev        # dev server → http://localhost:3014
bun run host       # dev server expuesto en la red local
bun run build      # build SSR de producción
bun run generate   # generación estática
bun run preview    # previsualizar el build
bun run format     # Prettier sobre app/ y server/
```

No hay suite de tests: la validación es TypeScript strict + revisión visual.

## Cabeceras de seguridad

`netlify.toml` define HSTS, `nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`,
`Permissions-Policy` y una CSP. La CSP va por ahora como **`Content-Security-Policy-Report-Only`**
mientras se resuelven el script y los estilos inline y los orígenes de terceros — ver `CLAUDE.md`
antes de pasarla a modo enforce, y añadir el origen de cualquier script, fuente o host de imágenes de
terceros en el mismo cambio que lo introduzca.

---

_Desarrollado y mantenido por [Novanet Studio](https://novanet.studio/)._

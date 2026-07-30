# Maximiza — Frontend Web (sitio público)

![Maximiza](public/images/brand/imagotipo-white.svg)

Sitio público de **Maximiza Casa de Bolsa** (Novanet Studio): SEO/PWA, blog, y el
wizard de apertura de cuenta (onboarding) con generación de PDFs. Construido con
**Nuxt 4 (SSR)** y **Vue 3**.

> Para detalle de arquitectura interna (wizard, PDF, composables) ver `CLAUDE.md`.

## Stack

- **Framework:** Nuxt 4 (Vue 3, SSR) — puerto dev **3014**
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite`) + SCSS (`sass-embedded`)
- **CMS:** Kairos vía REST (composable `useKairos`, header `x-api-key`) — blog y balances
- **PWA / SEO:** `@vite-pwa/nuxt`, `@nuxtjs/sitemap`, `@nuxtjs/robots`, `nuxt-gtag`
- **Imágenes / fuentes:** `@nuxt/image` (Cloudinary) + `@nuxt/fonts`
- **Formularios:** `vee-validate` + `yup`/`zod`
- **Animaciones:** `motion-v`
- **PDFs (Nitro):** ruta `/api/generate-pdf` con `puppeteer-core` + `@sparticuz/chromium`
- **Deploy:** Netlify (`@netlify/nuxt`)

## Con qué se conecta

| Destino | Vía | Para |
|---|---|---|
| Kairos CMS | REST (`x-api-key`) | Contenido: blog, balances financieros |
| `maximiza-services` (NestJS) | `POST /api/tracking` | Pasos del wizard de onboarding |
| Nitro interno | `/api/generate-pdf` | PDFs del onboarding (Puppeteer, in-process) |

## Requisitos

- Node.js 20+
- `npm` (o pnpm/yarn/bun)

## Instalación

```bash
npm install
```

Crear `.env` en la raíz:

```env
KAIROS_API_URL=   # URL base del CMS Kairos (incluye /public/<tenant>)
KAIROS_API_KEY=   # API key enviada como header x-api-key
```

## Scripts

```bash
npm run dev        # dev server → http://localhost:3014
npm run host       # dev server expuesto en la red local
npm run build      # build SSR para producción
npm run generate   # generación estática
npm run preview    # previsualizar el build
npm run format     # Prettier sobre app/ y server/
```

No hay suite de tests: validación = TypeScript strict + revisión visual.

---
*Desarrollado y mantenido por [Novanet Studio](https://novanet.studio/).*

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Dev server at http://localhost:3000
pnpm build        # Production build (SSR)
pnpm generate     # Static site generation
pnpm preview      # Preview production build
pnpm postinstall  # Run after install to prepare Nuxt types
```

## Environment

Copy `.env.example` and set the required variable:

```
STRAPI_API_URL=http://localhost:1337   # URL of the Strapi v4 backend
```

The app falls back to `http://localhost:1337` in development if the variable is absent.

## Architecture

**Stack:** Nuxt 4 (SSR), Vue 3, TypeScript (strict), Tailwind CSS, Strapi v4 (GraphQL), deployed to Netlify.

### Data fetching — `useMaximizaQueries`

All CMS data comes through `app/composables/useMaximizaQueries.ts`. Each page has a dedicated GraphQL query defined in its corresponding `app/schemas/<page>.schemas.ts` file. The composable wraps `useStrapiGraphQL()` from `@nuxtjs/strapi` and exposes a `(fetch<Entity>, <entity>Data, loading)` pattern for every page. Pages call their fetch function in `onMounted` or via `useAsyncData`.

### Planilla (onboarding form)

The multi-step onboarding wizard lives at `/planilla/:type` where `type` is `"natural"` or `"juridica"`. State is managed by `app/composables/usePlanillaWizard.ts` via `useState` (server-safe, global). The wizard state shape and all form data types are declared in `global.d.ts` under the `MXMZ` namespace — this is the source of truth for all form interfaces.

Steps are assembled in `app/pages/planilla/[type].vue` as arrays of components. Each step component must expose a `validate()` method via `defineExpose` so the parent page can call it before advancing. `KeepAlive` wraps the active component to preserve state across navigation.

### PDF generation

When the wizard completes, the final step renders Vue components from `app/components/planilla/pdf/` to HTML, extracts computed page styles via `app/lib/pdfHelper.ts`, and POSTs that HTML+CSS to the Nitro server route `server/api/generate-pdf.post.ts`. The server route uses Puppeteer + `@sparticuz/chromium` (serverless-compatible) in production and a local Chrome binary in development.

Local Chrome paths are hardcoded in `server/api/generate-pdf.post.ts`:

- Windows: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- macOS: `/Applications/Google Chrome.app/...`

### Styling conventions

Tailwind is configured with a custom color palette under the `maximiza` namespace (e.g. `text-maximiza-verde1`, `bg-maximiza-gris5`). The full palette is defined in `tailwind.config.ts`. The default Tailwind color palette is replaced (not extended), so only `maximiza-*` colors are available. Extra breakpoints (`3xs`, `2xs`, `xs`, `3xl`, `portrait`, `landscape`) and an `a4` width (`210mm`) for PDF layouts are also defined there.

### Form validation

Step components use `vee-validate` with `yup` or `zod` schemas. Each step manages its own `useForm` instance and exposes a `validate` function that calls vee-validate's `handleSubmit` before calling `wizard.nextStep()`.

### Modules active

| Module                | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `@nuxtjs/tailwindcss` | CSS framework                                |
| `@nuxtjs/strapi`      | Strapi v4 GraphQL/REST client                |
| `@nuxt/image`         | Cloudinary image provider (`novanet-studio`) |
| `@vite-pwa/nuxt`      | PWA manifest + service worker                |
| `@nuxt/fonts`         | Font optimization                            |
| `nuxt-gtag`           | Google Analytics (`G-4W17JXKS6P`)            |

### Netlify deployment

Forms (contact, suggestions) are pre-rendered as static HTML in `public/` and registered with Netlify Forms. Routes that must be prerendered are listed in `nuxt.config.ts` under `nitro.prerender.routes`.

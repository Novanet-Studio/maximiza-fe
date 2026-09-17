# CLAUDE.md — maximiza-fe

Guidance for Claude Code (claude.ai/code) when working in this repository. Read it before editing.

## What this is

The public website of Maximiza Casa de Bolsa (a Venezuelan brokerage): marketing pages, a blog, legal
pages, and the **client onboarding wizard** that collects an account-opening application and renders it
to PDF. It is SEO-first and ships as an installable PWA.

Nuxt 4 with **SSR enabled**, deployed to Netlify. Dev server runs on port **3014**. Site URL is
`https://maximiza.com.ve`.

## Commands

The lockfile in the tree is `bun.lock` (a stale `yarn.lock` is also present; ignore it). Netlify builds
with `npm run build`.

- `bun run dev` — dev server on port 3014 (`bun run host` to expose on the LAN)
- `bun run build` — production build
- `bun run generate` — static generation
- `bun run preview` — preview a production build
- `bun run format` — Prettier over `app/**/*.{vue,ts,js}` and `server/**/*.ts`

There is no lint script and no test suite. Validation is TypeScript strict plus visual review.
Prettier config: **no semicolons**, single quotes, 2 spaces, ES5 trailing commas, printWidth 100,
`vueIndentScriptAndStyle: true`, with `prettier-plugin-tailwindcss` sorting class lists.

## Architecture

Nuxt 4 with the default `app/` source directory, `ssr: true`, TypeScript strict. Styling is
Tailwind CSS 4 through `@tailwindcss/vite` (not the Nuxt Tailwind module, despite it being installed).
Animations use `motion-v`; icons are Font Awesome registered in `app/plugins/fontawesome.ts`.

```
app/
  pages/            file-based routes
  layouts/          default.vue only
  components/
    app/            app shell pieces
    common/         cross-page pieces
    shared/         reusable content sections
    ui/             Button.vue
    form/           Base* form primitives (Input, Select, Radio, Checkbox, PhoneInput, …)
    modules/        feature areas: home, empresa, blog, contact, onboarding
  composables/      data access and wizard state
  lib/              pdfHelper.ts, utils.ts
  assets/           styles, animations, data JSON
  plugins/          fontawesome.ts
server/
  api/generate-pdf.post.ts   Nitro route, renders HTML to PDF with Puppeteer
maximiza.d.ts       global MXMZ namespace of domain types (no imports needed)
```

Routes: `/`, `/empresa`, `/servicios`, `/contacto`, `/blog` + `/blog/[slug]`, `/registro` +
`/registro/[person]`, `/politica-de-privacidad`, `/terminos-y-condiciones`, `/responsabilidad`.

### Types

Domain types live in the global `MXMZ` namespace declared in `maximiza.d.ts`, wired through
`typescript.tsConfig.compilerOptions.types` in `nuxt.config.ts`. They are ambient — reference
`MXMZ.Article`, `MXMZ.Balance`, `MXMZ.WizardState` and friends directly, with no import.

### Content API

Blog articles, financial balances and regulatory links come from an external headless CMS reached
through `useKairos()` (`app/composables/useKairos.ts`), a `$fetch` wrapper that sends an `x-api-key`
header and a base URL from `runtimeConfig.public.kairos`.

`useArticles()`, `useBalances()` and `useEnlaces()` each wrap that request and **normalize the CMS
response into the `MXMZ.*` shapes** the templates already consume — the normalizers exist so the
templates never had to change when the content source did. Keep that boundary: normalize in the
composable, never spread raw CMS fields into a template. Every one of them catches its own errors and
returns an empty value, so a CMS outage degrades to an empty section rather than a failed render.

`useJsonLd()` builds structured data for SEO.

### Onboarding wizard

The wizard is the most involved part of the codebase. Entry point is `/registro`, which asks for a
person type, then `/registro/[person]` renders it.

- `wizard/Wrapper.vue` is a thin passthrough — it only picks the person type and renders `Form.vue`.
  **All the real logic lives in `wizard/Form.vue`**: step list, validation wiring, tracking calls, and
  the final submit.
- State is `useOnboardingWizard()` (`app/composables/`), a `useState('onboarding-wizard-state')` store
  holding `currentStep`, `totalSteps`, `maxStepReached`, `isComplete`, `type`, `formData`, `sessionId`
  and `trackingData`. `initWizard(type, stepsCount)` resets everything when the person type changes and
  pre-fills the institution block (brokerage name, RIF, address) with constants.
- **Steps differ by person type**: natural persons get a longer flow (`steps/natural/`, plus the shared
  steps) than legal entities (`steps/juridica/`). Shared steps are `AcceptContractStep`,
  `DatosInstitucionStep`, `InvestorProfileStep`, `FinancialInformationStep`, `ProductInformationStep`,
  `FinalStep`. Repeating sub-forms (stockholders, bank references, providers, PEP data, …) are the
  components under `modules/onboarding/blocks/`.
- Form validation is `vee-validate` with `yup` schemas.

### Progress tracking

The wizard reports progress to the platform backend so the internal dashboard can see how far each
applicant got. The calls are made inline in `wizard/Form.vue` against
`runtimeConfig.public.trackingApiUrl` (env `TRACKING_API_URL`, default `http://localhost:3001`):

- `POST /api/tracking/session` on start (step 0 advance) — sends `name`, `email`, `phone`, `personType`,
  and optional `advisorId` (the applicant's preselected executor from the initial step). The API
  returns the session id, stored in `state.sessionId`.
- `POST /api/tracking/progress` on each later step advance — sends `sessionId`, `currentStep`, and
  optional `completed` (boolean flag set when `currentStep >= totalSteps - 1`, indicating the wizard
  reached or passed the final step).

Both endpoints are public on the backend side. These calls are **fire-and-forget**: a tracking failure
must never block the applicant from continuing. Preserve that when touching them. The `AcceptContractStep`
component (step 0) renders a hidden selector of available executors, fed by a non-blocking
`GET /api/tracking/advisors` call at mount time; if the call fails, the selector is hidden and the
wizard proceeds normally. The preselection is an optional convenience, never a blocker.

### Cabecera ngrok

`NGROK_HEADERS` (`app/lib/tracking.ts`) exporta `{ 'ngrok-skip-browser-warning': 'true' }` y **toda
llamada del navegador debe mandarla** — las tres del wizard, `POST /api/generate-pdf` y el submit del
form de contacto a Netlify. Sin ella, ngrok-free contesta con su página interstitial (200, text/html,
sin `Access-Control-Allow-Origin`) y el navegador lo reporta como fallo de CORS aunque el servidor
esté bien. Es inofensiva fuera de ngrok, así que va siempre, no solo al tunelizar. Mismo patrón que
`useApi()` en el dashboard. Al añadir un `fetch`/`$fetch` nuevo desde el cliente, incluye la cabecera.

### PDF generation

The completed application is rendered to PDF in-process, not by an external service:

- `modules/onboarding/pdf/` holds the document components (`MainDocument`, `OpeningDocument`,
  `OriginFundsDocuments`, `SignatureRegistrationDocument`).
- `app/lib/pdfHelper.ts` serializes them to an HTML string plus CSS.
- `POST /api/generate-pdf` (`server/api/generate-pdf.post.ts`) drives `puppeteer-core` over that HTML.
  In production it uses `@sparticuz/chromium` (a Lambda-compatible Chromium build); locally it expects a
  system Chrome at a hard-coded path per platform — that path is the usual reason local PDF generation
  fails on a new machine.
- `nuxt.config.ts` keeps `@sparticuz/chromium` and `puppeteer-core` out of the Nitro bundle
  (`nitro.externals.external`), and `netlify.toml` repeats that under `functions.external_node_modules`.
  Both must stay in sync or the deployed function breaks at runtime.

### SEO and PWA

- `@nuxtjs/sitemap` and `@nuxtjs/robots` (which disallows `/api/`), `@nuxt/image` with a Cloudinary
  provider, `@nuxt/fonts`, `nuxt-gtag` for Google Analytics, and a Metricool tracker injected as an
  inline head script.
- `@vite-pwa/nuxt` with `registerType: 'autoUpdate'`, an install prompt, and `navigateFallback: null` —
  the app shell is deliberately not used as an offline fallback, because SSR pages must win.
- Global head config (title template, description, geo meta, Google Fonts preconnect) lives in
  `app.head` in `nuxt.config.ts`. Per-page SEO goes in the page with `useSeoMeta` / `useHead`.
- `/static/contact-form.html` is prerendered explicitly via `nitro.prerender.routes`.

## Environment

- `TRACKING_API_URL` — base URL of the platform backend for wizard progress tracking and advisor
  listing (no `/api` suffix; the wizard paths add it). Used by `AcceptContractStep` to fetch
  `GET /api/tracking/advisors` and by `Form.vue` to POST session creation and progress. Defaults to
  `http://localhost:3001`. If unreachable, the wizard still works: the advisor selector hides and
  tracking calls are retried fire-and-forget, never blocking the applicant.
- `KAIROS_API_URL` / `KAIROS_API_KEY` — content CMS endpoint and key. Default URL
  `http://localhost:3000`.
- `PUBLIC_METRICOOL_HASH` — Metricool tracker hash; the script is injected empty when unset.

Note that `.env.example` is out of date: it still lists `STRAPI_API_URL`, which nothing reads any more,
and omits `TRACKING_API_URL`, `KAIROS_API_URL` and `KAIROS_API_KEY`.

## Gotchas

- `ssr: true` — components run on the server too. Guard `window` / `document` access with
  `import.meta.client`. The wizard's scroll helpers already do this by only running in event handlers.
- Prettier here is configured **without semicolons**, unlike other Nuxt projects. Run `bun run format`
  rather than matching style by hand.
- `vite.resolve.dedupe: ['vue']` is deliberate; removing it reintroduces duplicate-Vue errors.
- `zod` v4 is installed but form validation uses `yup` through vee-validate. Do not mix the two in one
  form.
- Both `@nuxtjs/tailwindcss` and `@tailwindcss/vite` are in `package.json`; only the Vite plugin is
  registered in `nuxt.config.ts`. Add Tailwind config through the Vite plugin path.

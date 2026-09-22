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
  lib/              pdfHelper.ts, utils.ts, tracking.ts, legal.ts
  assets/           styles, animations, data JSON
  plugins/          fontawesome.ts
server/
  api/generate-pdf.post.ts   Nitro route, renders HTML to PDF with Puppeteer
  api/cms/[...path].get.ts   server-side proxy to the CMS; keeps the API key off the client
  utils/pdf-guards.ts        origin check, size cap, rate limit, resource interception
maximiza.d.ts       global MXMZ namespace of domain types (no imports needed)
```

Routes: `/`, `/empresa`, `/servicios`, `/contacto`, `/blog` + `/blog/[slug]`, `/registro` +
`/registro/[person]`, `/politica-de-privacidad`, `/terminos-y-condiciones`, `/responsabilidad`.

### Types

Domain types live in the global `MXMZ` namespace declared in `maximiza.d.ts`, wired through
`typescript.tsConfig.compilerOptions.types` in `nuxt.config.ts`. They are ambient — reference
`MXMZ.Article`, `MXMZ.Balance`, `MXMZ.WizardState` and friends directly, with no import.

### Content API

Blog articles, financial balances and regulatory links come from an external headless CMS. The browser
**never talks to the CMS directly**: `useKairos()` (`app/composables/useKairos.ts`) calls the internal
Nitro route `/api/cms/**`, and `server/api/cms/[...path].get.ts` forwards the request server-side with
the `x-api-key` header. The key lives in `runtimeConfig.kairos` — **private, not under `public`** — so
it never reaches the `__NUXT__` payload. Keep it that way; moving it back under `public` publishes it
on every page.

The proxy validates the **resolved** URL (`target.origin === base.origin` and the path prefix), not the
incoming string. That is deliberate: the WHATWG URL parser normalises `\` to `/` for http(s), so a
string check on `%5Cevil.com%2Fleak` passes while the resolved URL points elsewhere — and the request
would have carried the real API key. It also sets `redirect: 'manual'`, turning a CMS 3xx into a 502,
so a redirect cannot drag the key to another host. **Validate the result, never the input.**

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
  holding `currentStep`, `totalSteps`, `maxStepReached`, `isComplete`, `type`, `formData`, `sessionId`,
  `sessionToken` and `trackingData`. `initWizard(type, stepsCount)` resets everything when the person type changes and
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
  optional `advisorId` (the applicant's preselected executor), and the **consent**: `acceptedTerms`
  and `policyVersion`. The API returns `{ id, token }`, stored in `state.sessionId` and
  `state.sessionToken`.
- `POST /api/tracking/progress` on each later step advance — sends `sessionId`, **`sessionToken`**,
  `currentStep`, and optional `completed` (set when `currentStep >= totalSteps - 1`).

The **session token is what authorises a progress update**. Session ids are sequential, so without it
anyone could rewrite other applicants' progress; the API rejects a mismatch with 403. Keep sending it.

`acceptedTerms` is not optional on the API side (`z.literal(true)`), so a session cannot be created
without recorded consent. `policyVersion` comes from `PRIVACY_POLICY_VERSION` in `app/lib/legal.ts`,
which the two legal pages also render — the constant exists so the date shown and the version recorded
cannot drift apart. Update it whenever either notice changes.

Both endpoints are public on the backend side. These calls are **fire-and-forget**: a tracking failure
must never block the applicant from continuing. Preserve that when touching them. The `AcceptContractStep`
component (step 0) renders a hidden selector of available executors, fed by a non-blocking
`GET /api/tracking/advisors` call at mount time; if the call fails, the selector is hidden and the
wizard proceeds normally. The preselection is an optional convenience, never a blocker.

### The ngrok header

`NGROK_HEADERS` (`app/lib/tracking.ts`) exports `{ 'ngrok-skip-browser-warning': 'true' }` and **every
browser-side call must send it** — the three wizard calls, `POST /api/generate-pdf` and the contact
form submit. Without it, ngrok-free answers with its interstitial page (200, text/html, no
`Access-Control-Allow-Origin`) and the browser reports it as a CORS failure even though the server is
fine. It is harmless against a normal backend, so it goes on always, not only while tunnelling. When
adding a new client-side `fetch`/`$fetch`, include the header.

### PDF generation

The completed application is rendered to PDF in-process, not by an external service:

- `modules/onboarding/pdf/` holds the document components (`MainDocument`, `OpeningDocument`,
  `OriginFundsDocuments`, `SignatureRegistrationDocument`).
- `app/lib/pdfHelper.ts` serializes them to an HTML string plus CSS.
- `POST /api/generate-pdf` (`server/api/generate-pdf.post.ts`) drives `puppeteer-core` over that HTML.
  In production it uses `@sparticuz/chromium` (a Lambda-compatible Chromium build); locally it expects a
  system Chrome at a hard-coded path per platform — that path is the usual reason local PDF generation
  fails on a new machine.
- **The endpoint is hardened and the guards are load-bearing** (`server/utils/pdf-guards.ts`): it is
  same-origin only (403 otherwise), caps the body, rate-limits per IP, and installs
  `setRequestInterception` that allows only `data:`/`blob:` resources. Without that last one, an
  `<iframe src="http://169.254.169.254/…">` in the submitted HTML would be rendered and its contents
  returned inside the PDF — a straight SSRF. `ignoreHTTPSErrors` is off and errors return a generic
  `statusMessage` rather than the internal one. Do not relax any of this, and do not re-add a
  permissive CORS rule for the route.
- It deliberately **does not require the wizard session token**: `FinalStep.vue` calls it with no
  session context and `sessionId` can be `null`, because tracking is fire-and-forget by design.
  Requiring it would deny the form to anyone whose tracking call failed. Origin, size, rate limit and
  resource blocking are the defence instead.
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

### Security headers

`netlify.toml` carries a `[[headers]]` block for `/*`: HSTS, `nosniff`, `X-Frame-Options: DENY`,
`Referrer-Policy`, `Permissions-Policy`, and the CSP as **`Content-Security-Policy-Report-Only`**.

Report-Only is deliberate and temporary. The site still has inline script and style a strict policy
would break — the Metricool loader built in `nuxt.config.ts`, the JSON-LD from `useJsonLd`, the
`__NUXT__` payload Nuxt SSR injects, and the inline `style` attributes `motion-v` writes. Netlify Edge
Functions are disabled, so there is no per-response nonce to lean on. Collect violation reports from
real traffic, close the gaps, then rename the header. Two values still need narrowing before that: the
API host (currently a wildcard) and whatever host the CMS serves article images from.

Adding a new third-party script, font, image host or embed means adding its origin to the CSP in the
same change, or it will break the moment the policy is enforced.
- `/static/contact-form.html` is prerendered explicitly via `nitro.prerender.routes`.

## Environment

- `TRACKING_API_URL` — base URL of the platform backend for wizard progress tracking and advisor
  listing (no `/api` suffix; the wizard paths add it). Used by `AcceptContractStep` to fetch
  `GET /api/tracking/advisors` and by `Form.vue` to POST session creation and progress. Defaults to
  `http://localhost:3001`. If unreachable, the wizard still works: the advisor selector hides and
  tracking calls are retried fire-and-forget, never blocking the applicant.
- `KAIROS_API_URL` / `KAIROS_API_KEY` — content CMS endpoint and key. **Server-side only**: they live
  in the private half of `runtimeConfig` and are read by the `/api/cms/**` proxy, never by the browser.
- `PUBLIC_METRICOOL_HASH` — Metricool tracker hash; the script is injected empty when unset.

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
- `runtimeConfig.public` is serialized into the `__NUXT__` payload of **every** page. Anything secret
  belongs in the private half, reached from a `server/` route. This is not theoretical: the CMS key
  used to sit under `public` and was readable with "view source" on the live site.
- `blog/[slug].vue` renders CMS content through `v-html` with `marked`, and there is no sanitizer in
  the dependency tree. Treat CMS content as trusted only as far as the CMS is trusted; a CSP with
  `'unsafe-inline'` does not mitigate stored XSS here.

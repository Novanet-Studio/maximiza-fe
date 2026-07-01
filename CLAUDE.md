# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server en http://localhost:3014
npm run host         # dev server expuesto en red local
npm run build        # build SSR para producción
npm run generate     # generación estática
npm run preview      # previsualizar build
```

No hay suite de tests configurada. La validación principal es TypeScript strict + revisión visual.

## Arquitectura

**Stack:** Nuxt 4 (SSR) · Vue 3 · Tailwind CSS v4 · Strapi v4 (CMS) · Netlify (deploy)

### Estructura de `app/`

- `pages/` — rutas principales: `index`, `empresa`, `servicios`, `contacto`, `responsabilidad`, `blog/`, `registro/`
- `components/app/` — shell: `Header`, `Footer`, `Loader`, `Popover`
- `components/common/` — bloques reutilizables de layout: `Hero`, `SectionHeader`, `ContentCard`, `TextBanner`, `ContentWithColumns`
- `components/shared/` — componentes cross-page: `OurServices`
- `components/ui/` — primitivos: `Button`
- `components/form/` — inputs con vee-validate: `BaseInput`, `BaseSelect`, `BaseCheckbox`, `BaseRadio`, `BaseLabel`, `BaseLayout`, `Error`, `Title`, `BaseDivider`
- `components/modules/` — features por dominio: `blog/`, `contact/`, `empresa/`, `home/`, `onboarding/`
- `composables/` — lógica compartida (ver abajo)
- `lib/utils.ts` — helpers puros: `formatDate`, `formatAmount`, `truncateText`, `articleExcerpt`, `minAgeDate`
- `lib/pdfHelper.ts` — extrae CSS del DOM para inyectarlo en el PDF
- `assets/data/formSources.ts` — todas las opciones de selects del formulario de onboarding + helper `getLabel`
- `assets/styles/main.css` — entrada de Tailwind v4 con tokens de diseño (`@theme`)

### CMS (Strapi)

Las queries GraphQL viven en `app/composables/schemas.ts`. Los composables de datos son:
- `useArticles` — blog (GraphQL via `useStrapiGraphQL`)
- `useBalances` — balances financieros de la empresa

Configuración de URL: variable de entorno `STRAPI_API_URL` (default `http://localhost:1337`).

### Onboarding Wizard

Feature de apertura de cuenta en `components/modules/onboarding/`. Flujo complejo:

1. **`wizard/Wrapper.vue`** — decide entre `persona-natural` y `persona-juridica`, inicializa el wizard
2. **`wizard/Form.vue`** — orquesta los pasos, contiene la lógica de navegación
3. **`wizard/FormStepper.vue`** — barra de progreso
4. **`wizard/steps/`** — cada paso es un componente independiente que llama `updateFormData` al completarse
5. **`composables/useOnboardingWizard.ts`** — estado global del wizard via `useState` de Nuxt (key `"onboarding-wizard-state"`); expone `initWizard`, `nextStep`, `prevStep`, `goToStep`, `updateFormData`

El resultado acumulado (`formData`) satisface `MXMZ.OnboardingWizardResult` definido en `maximiza.d.ts`.

### Generación de PDF

- `components/modules/onboarding/pdf/` — componentes Vue que renderizan los documentos (planilla de apertura, origen de fondos, registro de firmas)
- `lib/pdfHelper.ts#getPageStyles` — recolecta todos los CSS del DOM en tiempo de cliente
- `server/api/generate-pdf.post.ts` — endpoint Nitro que usa Puppeteer + `@sparticuz/chromium`; en producción (Netlify) usa el binario de chromium serverless, en local apunta a Chrome instalado

### Tipos globales

`maximiza.d.ts` declara el namespace `MXMZ` con todas las interfaces del dominio. Agregar tipos nuevos del negocio aquí.

### Estilos

Tailwind v4 con plugin Vite (`@tailwindcss/vite`). Los tokens están en `app/assets/styles/main.css` bajo `@theme`:
- Colores: `primary` (#00735f), `secondary` (#f1cda7), `error`, `gray`, `white-alt`, etc.
- Fuente: Google Sans / Google Sans Flex
- `--width-a4: 210mm` — usado en los componentes PDF

### Imágenes

`@nuxt/image` con proveedor Cloudinary (`res.cloudinary.com/novanet-studio`). Usar `<NuxtImg>` en lugar de `<img>` para imágenes optimizadas.

### Variables de entorno

| Variable | Uso |
|---|---|
| `STRAPI_API_URL` | URL base del CMS Strapi |

En producción el deploy es en Netlify (`@netlify/nuxt`). La ruta `/api/generate-pdf` tiene CORS abierto por configuración en `nitro.routeRules`.

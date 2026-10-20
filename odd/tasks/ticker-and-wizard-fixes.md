# ticker-and-wizard-fixes
Objective: stock ticker mockup (global, except /registro) + three onboarding wizard fixes.
Branch: feat/ticker-and-wizard-fixes · Delivery: ask-on-risk · Runner: none (TypeScript strict + `bun run build` + visual check)

## Specs
- S1 Ticker per `adicional-assigment-4.md`: "componente tipo *ticker* horizontal que muestra las cotizaciones de los títulos de la Bolsa de Valores (DOM, EFE, ENV, FNC, FNV, GMC.B, GZL, ICP, etc.)" showing symbol, volume, last price, % change, "▲ sube (verde), ▼ baja (rojo), = sin cambio (azul)"; responsive, auto scroll, periodic refresh, loading/error/"sin datos" states, "separador de miles con punto y decimales con coma". "global en todas las paginas excepto las de /registro". Mockup: mock data via Nitro route (API pending).
- S2 "Hacer consistentes los datos para no tener que volverlos a escribir en el siguiente paso del wizard: Paso 02, sección “Datos personales del inversionista”." Decision: Step 01 splits into Nombres/Apellidos; tracking `name` = "Nombres Apellidos".
- S3 "Cambiar el dropdown por un input field numérico de hasta 4 caracteres y así el usuario decida si pone un número local 02XX o móvil 04xx" (Paso 02, "Información de contacto").
- S4 "Al generar la planilla, el campo del RIF se corta y omite el último dígito. Por ejemplo, muestra J-30025449-2 cuando el RIF correcto es J-30025492-5."

## Tasks
- T1 S4 RIF constant — inline — done — 801f9b8
- T2 S3 phone area-code input — inline — done — 1971c30
- T3 S2 Step 01 → Step 02 prefill — inline — done — c414a5d
- T4 S1 ticker — inline — done — 168092a

## Log
- L1 (2026-10-19) User request: "maqueta la implementacion del componente descrito en @adicional-assigment-4.md (global en todas las paginas excepto las de /registro" + wizard corrections (Paso 01 consistencia, Paso 02 prefijo telefónico, RIF en planilla).
- L2 Root cause S4: hardcoded wrong RIF in `useOnboardingWizard.ts:27` and the mock; not a truncation.
- L3 Verification: `bun run build` OK; SSR smoke test: ticker rendered on / and /empresa, absent on /registro and /registro/persona-natural (`--ticker-h: 0px`); /api/market/ticker returns mock data. Not run: typecheck (vue-tsc not installed), browser visual check, wizard click-through, PDF generation.

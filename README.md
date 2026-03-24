# Maximiza - Frontend Web Application

![Maximiza](public/images/brand/imagotipo-white.svg)

Maximiza es una aplicación web frontend construida con **Nuxt 4** y **Vue 3** para **Maximiza Casa de Bolsa**. Este proyecto se conecta a un backend/CMS administrado con **Strapi** y está altamente optimizado para SEO, rendimiento web y experiencia de usuario moderna (PWA, animaciones, tipografías personalizadas).

## 🚀 Tecnologías Principales (Tech Stack)

### Core
- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3, SSR habilitado)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/vite`) y SCSS (`sass-embedded`)
- **Iconos:** FontAwesome 7 (Solid & Brands)
- **Animaciones:** [motion-v](https://motion.dev/)
- **CMS:** [Strapi](https://strapi.io/) (vía `@nuxtjs/strapi`)

### Rendimiento y SEO
- **PWA:** `@vite-pwa/nuxt` para soporte de aplicaciones web progresivas (instalable, caché offline).
- **SEO & Indexación:** `@nuxtjs/sitemap` y `@nuxtjs/robots`.
- **Analíticas:** `nuxt-gtag` integrado con Google Analytics (ID: `G-4W17JXKS6P`).
- **Optimización de Recursos:** `@nuxt/fonts` para fuentes locales y `@nuxt/image` integrado con Cloudinary para entrega de imágenes.

### Formularios y Validación
- **Manejo de Formularios:** `vee-validate`
- **Esquemas de Validación:** `yup` y `zod`

### Utilidades Especiales del Servidor (Nitro)
- **Generación de PDFs:** El servidor interno de Nitro cuenta con una ruta especializada (`/api/generate-pdf`) que crea documentos en formato PDF dinámicos utilizando `puppeteer-core` y `@sparticuz/chromium`.

---

## 📁 Estructura del Proyecto

```text
maximiza-fe/
├── app/               # Carpeta principal de la aplicación Vue (componentes, páginas, layouts, composables)
├── public/            # Archivos estáticos accesibles directamente (favicon, iconos PWA)
├── server/            # Rutas y middlewares del servidor backend (Nitro) de Nuxt
├── .env               # Variables de entorno (no versionado)
├── nuxt.config.ts     # Configuración central del proyecto (módulos, PWA, SEO, Nitro)
└── package.json       # Dependencias y scripts
```

---

## ⚙️ Requisitos Previos

- **Node.js**: Versión 18+ (recomendado 20+)
- **Package Manager**: `npm` (también compatible con `pnpm`, `yarn` o `bun`)

---

## 🛠️ Configuración e Instalación

1. **Clonar el repositorio y entrar en el directorio:**
   ```bash
   cd maximiza-fe
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las Variables de Entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto. El proyecto requiere la URL del servidor CMS Strapi:
   ```env
   STRAPI_API_URL=https://url-de-tu-backend-strapi/
   ```
   *(Nota: Si corres el backend de Strapi localmente, usa `STRAPI_API_URL=http://localhost:1337`)*

---

## 💻 Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3013](http://localhost:3013) (puerto definido en `nuxt.config.ts`).

---

## 📦 Construcción y Producción

Para compilar la aplicación para producción (Server-Side Rendering u optimización de despliegue):

```bash
npm run build
```

Para previsualizar localmente la versión construida de producción:

```bash
npm run preview
```

---

## 🌐 Despliegue

La aplicación hace uso del módulo `@netlify/nuxt` y provee una configuración `.netlify` nativa, lo que sugiere una compatibilidad out-of-the-box para su despliegue en **Netlify**. Para mayor información consulta la guía de despliegue correspondiente.

---
*Desarrollado y mantenido por [Novanet Studio](https://novanet.studio/).*

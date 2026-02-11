export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  ssr: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@nuxt/fonts",
  ],

  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_API_URL || "http://localhost:1337",
        prefix: "/api",
        version: "v4",
      },
    },
  },

  pwa: {
    manifest: {
      name: "Maximiza - Asesoría de inversión",
      short_name: "Maximiza",
      description:
        "Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.",
      theme_color: "#00735f",
      background_color: "#ffffff",
      display: "standalone",
      orientation: "portrait",
      lang: "es",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      navigateFallback: null,
    },

    client: {
      installPrompt: true,
    },

    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["global.d.ts"],
      },
    },
  },

  gtag: {
    id: "G-4W17JXKS6P",
  },

  icon: {
    class: "icon",
    mode: "css",
    cssLayer: "base",
  },

  devServer: {
    port: 3000,
  },

  nitro: {
    prerender: {
      routes: ["/netlify-form-contact.html", "/netlify-form-suggestion.html"],
    },
    moduleSideEffects: ['@sparticuz/chromium'],
    externals: {
      inline: [],
      external: ['@sparticuz/chromium', 'puppeteer-core']
    },
    routeRules: {
      '/api/generate-pdf': { cors: true, headers: { 'Access-Control-Allow-Origin': '*' } }
    }
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },

    head: {
      title: "Maximiza - Asesoría de inversión",
      titleTemplate: "%s",
      meta: [
        {
          name: "title",
          content: "Maximiza",
        },
        {
          name: "description",
          content:
            "Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.",
        },
        {
          name: "name",
          content: "Maximiza WebApp",
        },
        {
          name: "author",
          content: "Novanet Studio <info@novanet.studio>",
        },

        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/novanet-studio/image/upload/",
    },
  },
  vite: {
    optimizeDeps: {
      include: ["qs"],
    },
  },
});

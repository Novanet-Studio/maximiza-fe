import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-15',
  devtools: { enabled: false },
  modules: ["nuxt-gtag", "@nuxt/image", "@nuxt/fonts", "@vite-pwa/nuxt", "@nuxtjs/sitemap", "@nuxtjs/robots", "@netlify/nuxt", "@nuxtjs/strapi"],

  strapi: {
    url: process.env.STRAPI_API_URL || 'http://localhost:1337',
  },

  site: {
    url: "https://maximiza.com.ve",
  },

  ssr: true,

  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "exact-active",
    },
  },

  runtimeConfig: {
    public: {
      trackingApiUrl: process.env.TRACKING_API_URL ?? 'http://localhost:3001',
      strapi: {
        url: process.env.STRAPI_API_URL || "http://localhost:1337",
        prefix: "/api",
        version: "v4",
      },
    },
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["maximiza.d.ts"],
      },
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      dedupe: ["vue"],
    },
  },

  gtag: {
    id: "G-4W17JXKS6P",
  },

  devServer: {
    port: 3014,
  },

  nitro: {
    prerender: {
      routes: ["/static/contact-form.html"],
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

  robots: {
    sitemap: 'https://maximiza.com.ve/sitemap.xml',
    disallow: ['/api/'],
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },

    head: {
      title: "Maximiza - Asesoría de inversión",
      titleTemplate: "%s",
      htmlAttrs: {
        lang: 'es',
      },
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
        { rel: "icon", type: "image/webp", href: "/favicon.webp" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Google+Sans:ital,opsz,wght@0,17..18,400..800;1,17..18,400..800&display=swap",
        },
      ],
    },
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/novanet-studio/image/upload/",
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
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
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
    "~/assets/styles/main.css",
  ],
})
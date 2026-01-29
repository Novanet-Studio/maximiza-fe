export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

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
        token: process.env.STRAPI_TOKEN || undefined,

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

  fonts: {
    families: [
      {
        name: "Monserrat",
        provider: "local", // or 'local', 'adobe'
        weights: [300, 400, 500, 600, 700, 800, 900], // Include all desired weights
        styles: ["normal", "italic"],
        subsets: ["latin-ext", "latin"],
      },
    ],
  },

  icon: {
    class: "icon",
    mode: "css",
    cssLayer: "base",
  },

  devServer: {
    port: 3002,
  },

  nitro: {
    prerender: {
      routes: ["/netlify-form-contact.html", "/netlify-form-suggestion.html"],
    },
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
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/novanet-studio/image/upload/",
    },
  },
});

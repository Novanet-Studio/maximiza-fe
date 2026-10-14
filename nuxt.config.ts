import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-15',
  devtools: { enabled: false },
  modules: ["nuxt-gtag", "@nuxt/image", "@nuxt/fonts", "@vite-pwa/nuxt", "@nuxtjs/sitemap", "@nuxtjs/robots", "@netlify/nuxt"],

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
    kairos: {
      url: process.env.KAIROS_API_URL || 'http://localhost:3000',
      apiKey: process.env.KAIROS_API_KEY || '',
      origin: process.env.KAIROS_ORIGIN || 'https://maximiza.com.ve',
    },
    public: {
      trackingApiUrl: process.env.TRACKING_API_URL ?? 'http://localhost:3001',
      publicMetricoolHash: process.env.PUBLIC_METRICOOL_HASH,
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

  // El emulador de Netlify solo corre en dev. Su servidor de Edge Functions arranca Deno con
  // `deno eval --allow-scripts`, un flag que Deno 2.9 ya no acepta: el servidor nunca levanta y
  // Nuxt entra en bucle de reinicio. Este sitio no tiene edge functions propias
  // (no existe netlify/edge-functions/), así que se apaga esa pieza y el resto del emulador
  // —variables de entorno, redirects, functions— sigue funcionando.
  netlify: {
    edgeFunctions: { enabled: false },
  },

  nitro: {
    prerender: {
      routes: ['/static/contact-form.html'],
    },
    moduleSideEffects: ['@sparticuz/chromium'],
    externals: {
      inline: [],
      external: ['@sparticuz/chromium', 'puppeteer-core'],
    },
    // netlify.toml's [[headers]] block only lands on responses served straight from the
    // Netlify CDN (static files). SSR pages are rendered by the Nitro Function, and Netlify
    // does not merge that file's headers into a Function's response, so every HTML page was
    // shipping without X-Frame-Options, Referrer-Policy, Permissions-Policy and the CSP.
    // Setting them here makes the Nuxt server itself attach them, regardless of host.
    // Keep this in sync with netlify.toml — same values, same reasoning (CSP stays
    // Report-Only until the gaps noted there are closed).
    routeRules: {
      '/**': {
        headers: {
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          'Content-Security-Policy-Report-Only':
            "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tracker.metricool.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://res.cloudinary.com https://www.google-analytics.com https://www.facebook.com; connect-src 'self' https://*.herokuapp.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://tracker.metricool.com https://connect.facebook.net https://www.facebook.com; frame-src https://www.google.com https://www.googletagmanager.com; form-action 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; worker-src 'self' blob:; manifest-src 'self'",
        },
      },
    },
  },

  robots: {
    sitemap: 'https://maximiza.com.ve/sitemap.xml',
    disallow: ['/api/'],
  },

  // @nuxtjs/sitemap only auto-discovers static file-based routes. /registro/[person] and
  // /blog/[slug] are dynamic, so their URLs come from server/api/__sitemap__/urls.get.ts instead.
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
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
        {
          name: "geo.region",
          content: "VE-M",
        },
        {
          name: "geo.placename",
          content: "Caracas, Venezuela",
        },
        {
          name: "geo.position",
          content: "10.491611;-66.866661",
        },
        {
          name: "ICBM",
          content: "10.491611, -66.866661",
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
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZLQM53M');`,
        },
        {
          innerHTML: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"${process.env.PUBLIC_METRICOOL_HASH ?? ""}"})});`,
        },
        {
          innerHTML: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1733711691038099');
fbq('track', 'PageView');`,
        },
      ],
      noscript: [
        {
          innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZLQM53M" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: 'bodyOpen',
        },
        {
          innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1733711691038099&ev=PageView&noscript=1" />',
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
          src: "pwa-192x192.webp",
          sizes: "192x192",
          type: "image/webp",
        },
        {
          src: "pwa-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
        },
        {
          src: "pwa-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
          purpose: "any maskable",
        },
      ],
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico,webp}"],
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
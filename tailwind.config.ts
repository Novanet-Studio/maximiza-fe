/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      maximiza: {
        verde1: "#006548",
        "verde1-dark": "#01473c",

        verde2: "#007e43",
        verde3: "#09b333",
        verde4: "#2d7300",
        verde5: "#04661d",
        verde6: "#00a385",

        negro1: "#050505",
        negro2: "#000",

        gris1: "#707070",
        gris2: "#5f5f5f",
        gris3: "#737474",
        gris4: "#3c3c3c",
        gris5: "#d1d1d1",

        blanco1: "#fff",
        blanco2: "#f1f1f1",

        error: "#ff3333",
      },
    },
    keyframes: {
      slideIn: {
        "0%": { left: "-100%" },
        "100%": { left: "0" },
      },
      slideOut: {
        "0%": { left: "0" },
        "100%": { left: "100%" },
      },
    },
    animation: {
      "overlay-in": "slideIn 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      "overlay-out": "slideOut 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards",
    },
    backgroundOpacity: ["active"],
    extend: {
      screens: {
        "3xs": "375px",
        "2xs": "390px",
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
        "portrait-lg": {
          raw: "(orientation: portrait) and (min-width: 1024px)",
        },
      },
      width: {
        a4: "210mm",
      },
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    // Include Nuxt 3 `app/` directory so Tailwind picks up classes in app/components and pages
    "./app/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-verde1": theme("colors.verde1"),
          "--color-verde1-dark": theme("colors.verde1-dark"),
          "--color-verde2": theme("colors.verde2"),
          "--color-verde3": theme("colors.verde3"),
          "--color-verde4": theme("colors.verde4"),
          "--color-verde5": theme("colors.verde5"),
          "--color-verde6": theme("colors.verde6"),
          "--color-negro1": theme("colors.negro1"),
          "--color-negro2": theme("colors.negro2"),
          "--color-gris1": theme("colors.gris1"),
          "--color-gris2": theme("colors.gris2"),
          "--color-gris3": theme("colors.gris3"),
          "--color-gris4": theme("colors.gris4"),
          "--color-gris5": theme("colors.gris5"),
          "--color-blanco1": theme("colors.blanco1"),
          "--color-blanco2": theme("colors.blanco2"),
        },
      });
    },
  ],
};

// Cabecera que va en todas las peticiones del navegador de este sitio.
//
// ngrok-free responde las peticiones de navegador con su página interstitial (200, text/html,
// sin Access-Control-Allow-Origin) cuando no ve esta cabecera, y el navegador lo reporta como un
// fallo de CORS aunque el servidor esté bien configurado. Durante el desarrollo se tunelizan
// tanto el backend de tracking (TRACKING_API_URL) como el propio dev server de Nuxt, así que la
// mandan tanto las llamadas cruzadas como las del mismo origen (/api/generate-pdf, form de
// Netlify). Es inofensiva fuera de ngrok: una cabecera desconocida que se ignora.
export const NGROK_HEADERS = { 'ngrok-skip-browser-warning': 'true' }

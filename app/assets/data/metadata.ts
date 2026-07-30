const DOMAIN = process.env.BASE_URL || 'maximiza.com.ve'
const BASE_URL = (path: string) => `https://${DOMAIN}/${path}`
const OG_IMAGE_BASE_URL = (image: string) =>
  `https://res.cloudinary.com/novanet-studio/image/upload/${image}`

export const metadata: Record<string, any> = {
  home: {
    title: 'Maximiza, experiencia y liderazgo',
    description:
      'Somos una Casa de bolsa que ofrece todo tipo de servicio de intermediación bursátil en el área de corretaje de Títulos Valores, Finanzas Corporativas e Inversión y Manejo de Capital',
    ogTitle: 'Maximiza, experiencia y liderazgo',
    ogDescription:
      'Somos una Casa de bolsa que ofrece todo tipo de servicio de intermediación bursátil en el área de corretaje de Títulos Valores, Finanzas Corporativas e Inversión y Manejo de Capital',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756060/maximiza/v5/openGraph/Inicio_jolui6.png'
    ),
    ogUrl: BASE_URL(''),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
  empresa: {
    title: 'Empresa, somos los arquitectos de su futuro financiero',
    description:
      'Aliados estratégicos en ingeniería financiera avanzada: gestión patrimonial, activos alternativos y financiamiento corporativo a gran escala con máxima integridad.',
    ogTitle: 'Empresa, somos los arquitectos de su futuro financiero',
    ogDescription:
      'Aliados estratégicos en ingeniería financiera avanzada: gestión patrimonial, activos alternativos y financiamiento corporativo a gran escala con máxima integridad.',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756060/maximiza/v5/openGraph/Empresa_fjgdxj.png'
    ),
    ogUrl: BASE_URL('empresa'),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
  servicios: {
    title: 'Servicios, aceleramos y protegemos el valor de su capital',
    description:
      'Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.',
    ogTitle: 'Servicios, aceleramos y protegemos el valor de su capital',
    ogDescription:
      'Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros.',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756061/maximiza/v5/openGraph/Servicios_my5zoy.png'
    ),
    ogUrl: BASE_URL('servicios'),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
  responsabilidadSocial: {
    title: 'Responsabilidad social y buen gobierno corporativo',
    description:
      'Combinamos el servicio social con estrictos controles de riesgo, asegurando un entorno de inversión seguro, ético y legal.',
    ogTitle: 'Responsabilidad social y buen gobierno corporativo',
    ogDescription:
      'Combinamos el servicio social con estrictos controles de riesgo, asegurando un entorno de inversión seguro, ético y legal.',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756061/maximiza/v5/openGraph/Responsabilidad_Social_vbzxso.png'
    ),
    ogUrl: BASE_URL('responsabilidad'),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
  blog: {
    title: 'Blog. Perspectivas estratégicas y análisis de mercado',
    description:
      'Inteligencia financiera para el análisis de tendencias globales, macroeconómicos y perspectivas del mercado de capitales venezolano. Optimice sus inversiones con datos empíricos de alto valor.',
    ogTitle: 'Blog. Perspectivas estratégicas y análisis de mercado',
    ogDescription:
      'Inteligencia financiera para el análisis de tendencias globales, macroeconómicos y perspectivas del mercado de capitales venezolano. Optimice sus inversiones con datos empíricos de alto valor.',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756060/maximiza/v5/openGraph/Blog_fhjnho.png'
    ),
    ogUrl: BASE_URL('blog'),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
  contacto: {
    title:
      'Contacto, inicie la estructuración de su nueva estrategia financiera',
    description:
      'Evaluación confidencial para proteger su tesorería de la volatilidad o diseñar un financiamiento a la medida para su ciclo productivo.',
    ogTitle:
      'Contacto, inicie la estructuración de su nueva estrategia financiera',
    ogDescription:
      'Evaluación confidencial para proteger su tesorería de la volatilidad o diseñar un financiamiento a la medida para su ciclo productivo.',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756060/maximiza/v5/openGraph/Contacto_mhqgys.png'
    ),
    ogUrl: BASE_URL('contacto'),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
  registro: {
    title: 'Registro ¡Bienvenido a Maximiza Casa de Bolsa!',
    description:
      'Abre tu Cuenta de Corretaje Bursátil de forma rápida, cumpliendo con la normativa de la Superintendencia Nacional de Valores (SNV).',
    ogTitle: 'Registro ¡Bienvenido a Maximiza Casa de Bolsa!',
    ogDescription:
      'Abre tu Cuenta de Corretaje Bursátil de forma rápida, cumpliendo con la normativa de la Superintendencia Nacional de Valores (SNV).',
    ogImage: OG_IMAGE_BASE_URL(
      'v1773756060/maximiza/v5/openGraph/Registro_k2zi2w.png'
    ),
    ogUrl: BASE_URL('registro'),
    ogType: 'website',
    twitterCard: 'summary_large_image',
    themeColor: '#00735f',
  },
}

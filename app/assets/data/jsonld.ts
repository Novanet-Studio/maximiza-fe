import commonData from '@/assets/data/common.json'

export const jsonld = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${commonData.baseUrl}/#website`,
    url: `${commonData.baseUrl}/`,
    name: 'Maximiza Casa de Bolsa',
    publisher: {
      '@type': 'FinancialService',
      '@id': `${commonData.baseUrl}/#organization`,
      name: 'Maximiza Casa de Bolsa',
      url: `${commonData.baseUrl}/`,
      logo: `${commonData.baseUrl}/images/brand/maximiza-logotipo-color.svg`,
      description:
        'Contamos con 33 años de experiencia en el mercado bursátil venezolano, ofreciendo servicios de intermediación bursátil, finanzas corporativas e inversión.',
      telephone: commonData.phone,
      email: commonData.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Avenida Francisco de Miranda, Torre Europa, Piso 3, Oficinas 3-B3',
        addressLocality: 'El Rosal, Caracas',
        addressCountry: 'VE',
      },
      sameAs: [
        'https://www.instagram.com/maximiza_ve/',
        'https://twitter.com/maximiza_ve',
      ],
    },
  },
  home: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${commonData.baseUrl}/#home`,
    url: `${commonData.baseUrl}/`,
    name: 'Maximiza Casa de Bolsa',
    publisher: {
      '@type': 'FinancialService',
      '@id': `${commonData.baseUrl}/#organization`,
      name: 'Maximiza Casa de Bolsa',
      url: `${commonData.baseUrl}/`,
      logo: `${commonData.baseUrl}/images/brand/maximiza-logotipo-color.svg`,
      description:
        'Contamos con 33 años de experiencia en el mercado bursátil venezolano, ofreciendo servicios de intermediación bursátil, finanzas corporativas e inversión.',
      telephone: commonData.phone,
      email: commonData.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Avenida Francisco de Miranda, Torre Europa, Piso 3, Oficinas 3-B3',
        addressLocality: 'El Rosal, Caracas',
        addressCountry: 'VE',
      },
      sameAs: [
        'https://www.instagram.com/maximiza_ve/',
        'https://twitter.com/maximiza_ve',
      ],
    },
  },
  services: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${commonData.baseUrl}/servicios`,
    url: `${commonData.baseUrl}/servicios`,
    name: 'Servicios Financieros - Maximiza',
    description:
      'Gestionamos activos líquidos e instrumentos de financiamiento nacionales e internacionales.',
    provider: {
      '@id': `${commonData.baseUrl}/#organization`,
    },
  },
  socialResponsibility: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${commonData.baseUrl}/responsabilidad`,
    url: `${commonData.baseUrl}/responsabilidad`,
    name: 'Responsabilidad Social Corporativa - Maximiza',
    publisher: {
      '@id': `${commonData.baseUrl}/#organization`,
    },
  },
  about: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${commonData.baseUrl}/empresa`,
    url: `${commonData.baseUrl}/empresa`,
    name: 'Sobre Maximiza Casa de Bolsa - Empresa',
    description:
      'Aliados estratégicos en ingeniería financiera avanzada: gestión patrimonial, activos alternativos y financiamiento corporativo.',
    mainEntity: {
      '@id': `${commonData.baseUrl}/#organization`,
    },
  },
  contact: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${commonData.baseUrl}/contacto`,
    url: `${commonData.baseUrl}/contacto`,
    name: 'Contacto - Maximiza Casa de Bolsa',
    description:
      'Comuníquese con nosotros para mayor información de nuestros servicios financieros.',
    mainEntity: {
      '@id': `${commonData.baseUrl}/#organization`,
    },
  },
  blog: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${commonData.baseUrl}/blog`,
    url: `${commonData.baseUrl}/blog`,
    name: 'Blog de Finanzas y Mercado Bursátil - Maximiza',
    description:
      'Noticias, análisis y perspectivas sobre el ecosistema bursátil venezolano.',
    publisher: {
      '@id': `${commonData.baseUrl}/#organization`,
    },
  },
  article: (articleData: any, excerpt: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${commonData.baseUrl}/blog/${articleData.slug || ''}`,
    headline: articleData.titulo,
    description: excerpt,
    image:
      articleData.imagen?.url ||
      `${commonData.baseUrl}/images/article-placeholder.webp`,
    datePublished: articleData.fecha,
    dateModified: articleData.fecha,
    author: {
      '@type': 'Organization',
      '@id': `${commonData.baseUrl}/#organization`,
      name: 'Maximiza Casa de Bolsa',
      url: `${commonData.baseUrl}/`,
    },
  }),
  register: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${commonData.baseUrl}/registro`,
    url: `${commonData.baseUrl}/registro`,
    name: 'Registro de Cuenta de Corretaje - Maximiza',
    description:
      'Apertura privada de cuenta de corretaje para inversores corporativos e individuales.',
    publisher: {
      '@id': `${commonData.baseUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'RegisterAction',
      target: `${commonData.baseUrl}/registro`,
    },
  },
}

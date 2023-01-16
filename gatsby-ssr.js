import * as React from "react";

const trackingId = "UA-190348677-1";
const gtagConfig = {};

export const onRenderBody = ({ setHeadComponents }) => {
  const origin = `https://www.googletagmanager.com`
  const renderHtml = () => `
    gtag('config', '${trackingId}', ${JSON.stringify(gtagConfig)});
  `;
  
  setHeadComponents([
    // Analytics
    <script
      key={`maximiza-google-gtag`}
      async
      src={`${origin}/gtag/js?id=${trackingId}`}
    />,
    <script
      key={`maximiza-google-gtag-config`}
      dangerouslySetInnerHTML={{ __html: renderHtml() }}
    />,

    // Fonts
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-300.eot"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-300.svg"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-300.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-300.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-300.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,

    /* */

    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-900.eot"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-900.svg"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-900.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-900.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-900.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,

    /* */

    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-regular.eot"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-regular.svg"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-regular.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-regular.woff"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat/montserrat-v25-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};

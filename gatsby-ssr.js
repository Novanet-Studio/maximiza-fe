import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Fonts
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

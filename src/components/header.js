import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header>
    <div className="cabecera__logo"></div>
    <nav>
      <AniLink
        cover
        direction="right"
        duration={0.55}
        to="#"
        // activeStyle={linkActivo}
        aria-label="Ir al vínculo de Nosotros"
      >
        <span>•</span>Nosotros
      </AniLink>
      <AniLink
        cover
        direction="left"
        duration={0.55}
        to="#"
        // activeStyle={linkActivo}
        aria-label="Ir al vínculo de Comunidad"
      >
       <span>•</span>Comunidad
      </AniLink>
      <AniLink
        cover
        direction="right"
        duration={0.55}
        to="#"
        // activeStyle={linkActivo}
        aria-label="Ir al vínculo de Asesoria"
      >
       <span>•</span>Asesorías
      </AniLink>
    </nav>
  </header>
)

export default Header

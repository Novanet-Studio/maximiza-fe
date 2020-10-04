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
        <ul className="cabecera__menudrop">
          <li className="cabecera__droplink">Empresas</li>
          <li className="cabecera__droplink">Servicios</li>
        </ul>
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
        <ul className="cabecera__menudrop">
          <li className="cabecera__droplink">Private equity</li>
          <li className="cabecera__droplink">Educación</li>
          <li className="cabecera__droplink">Responsabilidad</li>
        </ul>
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
        <ul className="cabecera__menudrop">
          <li className="cabecera__droplink">Balances</li>
          <li className="cabecera__droplink">Blog</li>
          <li className="cabecera__droplink">Legal</li>
        </ul>
      </AniLink>
    </nav>
  </header>
)

export default Header

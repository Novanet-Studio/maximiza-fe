import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      borderBottom: "1px solid",
    }}
  >
    <nav>
      <AniLink
        cover
        direction="right"
        duration={0.55}
        bg="#f36f21"
        to="/nosotros"
        // activeStyle={linkActivo}
        aria-label="Ir al vínculo de Nosotros"
      >
        Nosotros
      </AniLink>
      <AniLink
        cover
        direction="left"
        duration={0.55}
        bg="#f36f21"
        to="/comunidad"
        // activeStyle={linkActivo}
        aria-label="Ir al vínculo de Comunidad"
      >
        Comunidad
      </AniLink>
      <AniLink
        cover
        direction="right"
        duration={0.55}
        bg="#f36f21"
        to="/asesorias"
        // activeStyle={linkActivo}
        aria-label="Ir al vínculo de Asesoria"
      >
        Asesorías
      </AniLink>
    </nav>
  </header>
)

export default Header

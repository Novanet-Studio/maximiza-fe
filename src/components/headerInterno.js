import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "../assets/images/logo-maximiza.svg"

const HeaderInterno = () => (
  <header>
    <div className="logo--interno">
      <AniLink cover direction="right" duration={0.55} bg="#006648" to="/">
        <img src={Logo} alt="logo" />
      </AniLink>
    </div>
    <nav>
      <div>
        <p className="bala">•</p>
        <p className="texto">Nosotros</p>
        <div className="cabecera__menudrop">
          <AniLink
            className="cabecera__droplink"
            cover
            direction="right"
            duration={0.55}
            bg="#006648"
            to="/empresa"
          >
            Empresa
          </AniLink>
          <AniLink
            className="cabecera__droplink"
            cover
            direction="left"
            duration={0.55}
            bg="#006648"
            to="/servicios"
          >
            Servicios
          </AniLink>
          <AniLink
            className="cabecera__droplink"
            cover
            direction="right"
            duration={0.55}
            bg="#006648"
            to="/contacto"
          >
            Contacto
          </AniLink>
        </div>
      </div>
      <div>
        <p className="bala">•</p>
        <p className="texto">Impacto ESG</p>
        <div className="cabecera__menudrop">
          <AniLink
            className="cabecera__droplink"
            cover
            direction="right"
            duration={0.55}
            bg="#006648"
            to="/capital"
          >
            Private equity
          </AniLink>
          <AniLink
            className="cabecera__droplink"
            cover
            direction="left"
            duration={0.55}
            bg="#006648"
            to="/educacion"
          >
            Educación
          </AniLink>
          <AniLink
            className="cabecera__droplink"
            cover
            direction="right"
            duration={0.55}
            bg="#006648"
            to="/responsabilidad"
          >
            Responsabilidad
          </AniLink>
        </div>
      </div>
      <div>
        <p className="bala">•</p>
        <p className="texto">Comunidad</p>
        <div className="cabecera__menudrop">
          <AniLink className="cabecera__droplink" to="/medios">
            Medios
          </AniLink>
          <AniLink
            className="cabecera__droplink"
            cover
            direction="right"
            duration={0.55}
            bg="#006648"
            to="/blog"
          >
            Blog
          </AniLink>
          <AniLink
            className="cabecera__droplink"
            cover
            direction="right"
            duration={0.55}
            bg="#006648"
            to="/legal"
          >
            Legal
          </AniLink>
        </div>
      </div>
    </nav>
  </header>
)

export default HeaderInterno

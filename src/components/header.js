import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => (
  <header>
    <nav>
      <div>
        <p className="bala">•</p>
        <p className="texto">Nosotros</p>
        <ul className="cabecera__menudrop">
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="right"
              duration={0.55}
              bg="#006648"
              to="/empresa"
            >
              Empresa
            </AniLink>
          </li>
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="left"
              duration={0.55}
              bg="#006648"
              to="/servicios"
            >
              Servicios
            </AniLink>
          </li>
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="right"
              duration={0.55}
              bg="#006648"
              to="/contacto"
            >
              Contacto
            </AniLink>
          </li>
        </ul>
      </div>
      <div>
        <p className="bala">•</p>
        <p className="texto">Impacto ESG</p>
        <ul className="cabecera__menudrop">
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="right"
              duration={0.55}
              bg="#006648"
              to="/capital"
            >
              Private equity
            </AniLink>
          </li>
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="left"
              duration={0.55}
              bg="#006648"
              to="/educacion"
            >
              Educación
            </AniLink>
          </li>
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="right"
              duration={0.55}
              bg="#006648"
              to="/responsabilidad"
            >
              Responsabilidad
            </AniLink>
          </li>
        </ul>
      </div>
      <div>
        <p className="bala">•</p>
        <p className="texto">Comunidad</p>
        <ul className="cabecera__menudrop">
          <li className="cabecera__droplink">
            <AniLink to="/medios">Medios</AniLink>
          </li>
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="right"
              duration={0.55}
              bg="#006648"
              to="/blog"
            >
              Blog
            </AniLink>
          </li>
          <li className="cabecera__droplink">
            <AniLink
              cover
              direction="right"
              duration={0.55}
              bg="#006648"
              to="/legal"
            >
              Legal
            </AniLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header

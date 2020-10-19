import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const linkActivo = {
  fontWeight: 700,
  color: '#00735f',
}

const linkStyles = {}

const navigation = () => (
  <nav id="myNav" className="overlay">
    <div className="overlay-content">
      <div className="cabecera__menugrupo">
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
          >
            Contacto
          </AniLink>
        </div>
      </div>
      <div className="cabecera__menugrupo">
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
          >
            Responsabilidad
          </AniLink>
        </div>
      </div>
      <div className="cabecera__menugrupo">
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
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
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...linkActivo } }
                : null
            }
          >
            Legal
          </AniLink>
        </div>
      </div>
    </div>
  </nav>
)

export default navigation

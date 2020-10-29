import React from "react"
import LinkNav from "./linkNav"

const navigation = () => (
  <nav id="myNav" className="overlay">
    <div className="overlay-content">
      <div className="cabecera__menugrupo">
        <p className="bala">•</p>
        <p className="texto">Nosotros</p>
        <div className="cabecera__menudrop">
          <LinkNav text="Empresa" to="/empresa" />
          <LinkNav text="Servicios" to="/servicios" direction="left" />
          <LinkNav text="Contacto" to="/contacto" />
        </div>
      </div>
      <div className="cabecera__menugrupo">
        <p className="bala">•</p>
        <p className="texto">Impacto ESG</p>
        <div className="cabecera__menudrop">
          <LinkNav text="Private equity" to="/capital" />
          <LinkNav text="Educación" to="/educacion" direction="left" />
          <LinkNav text="Responsabilidad" to="/responsabilidad" />
        </div>
      </div>
      <div className="cabecera__menugrupo">
        <p className="bala">•</p>
        <p className="texto">Comunidad</p>
        <div className="cabecera__menudrop">
          <LinkNav text="Medios" to="/medios" />
          <LinkNav text="Blog" to="/blog" direction="left" />
          <LinkNav text="Legal" to="/legal" />
        </div>
      </div>
    </div>
  </nav>
)

export default navigation

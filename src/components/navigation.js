import React from "react"
import LinkNav from "./linkNav"

const navigation = () => (
  <nav id="myNav" className="nav nav--overlay">
    <div className="nav__contenido">
      <div className="nav__grupo">
        <p className="nav__bala">•</p>
        <p className="nav__texto">Nosotros</p>
        <div className="nav__dropdown">
          <LinkNav text="Empresa" to="/empresa" />
          <LinkNav text="Servicios" to="/servicios" direction="left" />
          <LinkNav text="Contacto" to="/contacto" />
        </div>
      </div>
      <div className="nav__grupo">
        <p className="nav__bala">•</p>
        <p className="nav__texto">Impacto ESG</p>
        <div className="nav__dropdown">
          <LinkNav text="Private equity" to="/capital" />
          <LinkNav text="Educación" to="/educacion" direction="left" />
          <LinkNav text="Responsabilidad" to="/responsabilidad" />
        </div>
      </div>
      <div className="nav__grupo">
        <p className="nav__bala">•</p>
        <p className="nav__texto">Comunidad</p>
        <div className="nav__dropdown">
          <LinkNav text="Medios" to="/medios" />
          <LinkNav text="Blog" to="/blog" direction="left" />
          <LinkNav text="Legal" to="/legal" />
        </div>
      </div>
    </div>
  </nav>
)

export default navigation

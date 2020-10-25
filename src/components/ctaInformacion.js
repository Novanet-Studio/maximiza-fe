import React from "react"
import { Link } from "gatsby"

const ctaInformacion = ({ mensaje, textoBoton}) => (
   <section className="cta-informacion">
      <h4 className="cta-informacion__mensaje">{mensaje}</h4>
      <Link className="cta-informacion__boton" to="/capital">
      {textoBoton}
      </Link>
   </section>
)

export default ctaInformacion
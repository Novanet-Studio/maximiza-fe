import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Perdido from "../assets/images/max-404-sec1.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="principal">
      <div className="columna--left">
        <img className="principal__imagen" src={Perdido} alt="404" />
      </div>

      <div className="columna--right">
        <h1 className="principal__titulo">Página no encontrada</h1>
        <p className="principal__texto principal__texto--pequeño">
          La página que estás intentando ver, no existe o ha sido cambiada de
          lugar. Usa el menú de navegación para volver al sitio o haz click en
          el botón de abajo para volver al inicio.
        </p>
        <button className="principal__button">
          <Link to="/">Ir al inicio</Link>
        </button>
      </div>
    </section>

    <section className="perdido"></section>
  </Layout>
)

export default NotFoundPage

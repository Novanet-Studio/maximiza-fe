import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import "./medios.scss"

const Medios = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna--left">
        <Img
          fluid={
            data.strapiMedios.principal.imagen.childImageSharp.fluid
          }
        />
      </div>
      <div className="columna--right">
        <h1 className="principal__titulo">
          {data.strapiMedios.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiMedios.principal.contenido}
        </p>
      </div>
    </section>
    <section className="medios">
      <h3 className="texto-cta">¡Gracias por preferirnos!</h3>
      <Link className="botonBottom" to="/educacion">
        Contáctanos de manera directa a medios@maximiza.com.ve
      </Link>
    </section>
  </LayoutInterno>
)

export default Medios

export const query = graphql`
  query MedioslQuery {
    strapiMedios {
      principal {
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

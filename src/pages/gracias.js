import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./medios.scss"

const Gracias = ({ data }) => (
  <Layout>
    <SEO
      title="Gracias por enviar su mensaje"
      description="Somos una casa de bolsa que ofrece innovadoras herramientas para la inversión, gestión y estructuración de activos financieros."
      image={data.strapiContact.principal.imagen}
    />
    <section className="principal">
      <div className="columna columna--izq">
        <Img
          className="principal__imagen"
          fluid={data.strapiContact.principal.imagen.childImageSharp.fluid}
          alt={data.strapiContact.principal.seo_imagen.texto_alternativo}
          title={data.strapiContact.principal.seo_imagen.titulo}
        />
      </div>
      <div className="columna columna--der">
        <h1 className="principal__titulo">
          ¡Mensaje enviado!
        </h1>
        <p className="principal__texto">
          Gracias por contactarnos, su mensaje será respondido a la brevedad posible.
        </p>
      </div>
    </section>
  </Layout>
)

export default Gracias

export const query = graphql`
  query GraciasQuery {
    strapiContact { 
      principal {
        imagen {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seo_imagen {
          titulo
          texto_alternativo
        }
      }
    }
  }
`

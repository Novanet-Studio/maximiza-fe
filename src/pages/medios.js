import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/ctaInformacion"
import "./medios.scss"

const Medios = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna columna--izq">
        <Img
          className="principal__imagen"
          fluid={data.strapiMedios.principal.imagen.childImageSharp.fluid}
        />
      </div>
      <div className="columna columna--der">
        <h1 className="principal__titulo">
          {data.strapiMedios.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiMedios.principal.contenido}
        </p>
      </div>
    </section>
    {/* <section className="medios"></section> */}
    <CTA
      mensaje="¡Gracias por preferirnos!"
      textoBoton="Contáctanos de manera directa a medios@maximiza.com.ve"
    />
  </Layout>
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

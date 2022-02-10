import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/ctaInformacion"
import "./medios.scss"

const Medios = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiMedios.seo.titulo}
      description={data.strapiMedios.descripcion}
      image={data.strapiMedios.seo.imagen}
    />
    <section className="principal">
      <div className="columna columna--izq">
        <Img
          className="principal__imagen"
          fluid={data.strapiMedios.principal.imagen.childImageSharp.fluid}
          alt={data.strapiMedios.principal.seo_imagen.texto_alternativo}
          title={data.strapiMedios.principal.seo_imagen.titulo}
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
    <CTA
      estilo="cta-informacion__boton"
      mensaje="¡Gracias por preferirnos!"
      textoBoton="Contáctanos de manera directa a contacto@maximiza.com.ve"
      link="/contacto"
    />
  </Layout>
)

export default Medios

export const query = graphql`
  query MedioslQuery {
    strapiMedios {
      seo {
        titulo
        descripcion
        imagen
      }
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
        seo_imagen {
          texto_alternativo
          titulo
        }
      }
    }
  }
`

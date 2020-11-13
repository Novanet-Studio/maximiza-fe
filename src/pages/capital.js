import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/ctaInformacion"
import ReactMarkdown from "react-markdown"
import "./capital.scss"

const Capital = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiPrivateEquity.seo.titulo}
      description={data.strapiPrivateEquity.seo.descripcion}
      image={data.strapiPrivateEquity.seo.imagen}
    />
    <section className="principal">
      <div className="columna columna--izq">
        <Img
          className="principal__imagen"
          fluid={
            data.strapiPrivateEquity.principal.imagen.childImageSharp.fluid
          }
          alt={data.strapiPrivateEquity.principal.seo_imagen.texto_alternativo}
          title={data.strapiPrivateEquity.principal.seo_imagen.titulo}
        />
      </div>
      <div className="columna columna--der">
        <h1 className="principal__titulo">
          {data.strapiPrivateEquity.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiPrivateEquity.principal.contenido}
        </p>
      </div>
    </section>
    <section className="partners">
      <h2 className="partners__titulo">
        {data.strapiPrivateEquity.partners_titulo}
      </h2>
      <ul className="partners__lista">
        {data.strapiPrivateEquity.partners_secciones.map((item) => (
          <li className="partners__item" key={item.id}>
            <Img
              className="partners__imagen"
              fluid={item.imagen.childImageSharp.fluid}
              alt={item.seo_imagen.texto_alternativo}
              title={item.seo_imagen.titulo}
            />
            <ReactMarkdown
              className="partners__descripcion"
              source={item.contenido}
              escapeHtml={false}
            />
          </li>
        ))}
      </ul>
    </section>
    <CTA
      mensaje="¡Gracias por preferirnos!"
      textoBoton="Obtenga más información"
    />
  </Layout>
)

export default Capital

export const query = graphql`
  query CapitalQuery {
    strapiPrivateEquity {
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
          titulo
          texto_alternativo
        }
      }
      partners_titulo
      partners_secciones {
        id
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
        contenido
      }
    }
  }
`

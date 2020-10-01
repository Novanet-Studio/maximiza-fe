import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      {console.log(data)}
      <div className="contenido contenido--left">
        <h2 className="principal__titulo">
          {data.strapiLegal.principal.titulo}
        </h2>
        <p className="principal__texto">
          {data.strapiLegal.principal.contenido}
        </p>
      </div>
      <div className="contenido contenido--right">
        <Img fluid={data.strapiLegal.principal.imagen.childImageSharp.fluid} />
      </div>
    </section>
    <section className="etica">
      <Img
        className="etica__imagen"
        fluid={data.strapiLegal.codigo.imagen.childImageSharp.fluid}
      />
      <h3 className="etica__titulo">{data.strapiLegal.codigo.titulo}</h3>
      <p className="etica__contenido">{data.strapiLegal.codigo.contenido}</p>
    </section>
    <section className="normativas">
      <h3 className="normativas__titulo">
        {data.strapiLegal.normativas_titulo}
      </h3>
      <ul className="normativas__lista">
        {data.strapiLegal.descargas.map((item) => (
          <li className="normativas__item" key={item.id}>
            <div className="normativas__descarga"></div>
            <p className="normativas__contenido">{item.documento}</p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query LegalQuery {
    strapiLegal {
      principal {
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 460) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      codigo {
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 460) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      normativas_titulo
      descargas {
        id
        documento
      }
    }
  }
`

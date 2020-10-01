import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="contenido contenido--left">
        <Img
          fluid={data.strapiEducacion.principal.imagen.childImageSharp.fluid}
        />
      </div>
      <div className="contenido contenido--right">
        <h2 className="principal__titulo">
          {data.strapiEducacion.principal.titulo}
        </h2>
        <p className="principal__texto">
          {data.strapiEducacion.principal.contenido}
        </p>
      </div>
    </section>
    <section className="items">
      <h2 className="items__titulo">{data.strapiEducacion.items_titulo}</h2>
      <ul className="items__lista">
        {data.strapiEducacion.items.map((item) => (
          <li className="items__item" key={item.id}>
            <h3 className="items__subtitulo">{item.titulo}</h3>
            <p className="items__descripcion">{item.contenido}</p>
            <Img className="items__imagen" fluid={item.imagen.childImageSharp.fluid} />
          </li>
        ))}
      </ul>
    </section>
    <section className="programas">
      <h2 className="programas__titulo">
        {data.strapiEducacion.programas_titulo}
      </h2>
      <ul className="programas__lista">
        {data.strapiEducacion.programas.map((item) => (
          <li className="programas__seccion" key={item.id}>
            <Img className="programas__imagen" fluid={item.imagen.childImageSharp.fluid} />
            <ul className="mercado">
              {item.mercados.map((mercado) => (
                <li className="mercado__lista" key={mercado.id}>
                  <h3 className="mercado__titulo">{mercado.titulo}</h3>
                  <p className="mercado__descripcion">{mercado.contenido}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query EducacionQuery {
    strapiEducacion {
      principal {
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      items_titulo
      items {
        id
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      programas_titulo
      programas {
        id
        seccion
        mercados {
          id
          titulo
          contenido
        }
        imagen {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
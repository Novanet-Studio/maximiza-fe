import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      {console.log(data)}
      <div className="columna--left">
        <Img
          fluid={data.strapiBlog.principal.imagen.childImageSharp.fluid}
        />
      </div>
      <div className="columna--right">
        <h1 className="principal__titulo">
          {data.strapiBlog.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiBlog.principal.contenido}
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query BlogQuery {
    strapiBlog {
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

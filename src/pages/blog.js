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
        <Img
          fluid={data.strapiBlog.principal.imagen.childImageSharp.fluid}
        />
      </div>
      <div className="contenido contenido--right">
        <h2 className="principal__titulo">
          {data.strapiBlog.principal.titulo}
        </h2>
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
            fluid(maxWidth: 460) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

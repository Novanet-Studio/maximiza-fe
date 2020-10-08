import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      {console.log(data)}
      <div className="columna--left">
        <Img fluid={data.strapiBlog.principal.imagen.childImageSharp.fluid} />
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

    <section className="blog">
      <ul className="blog__lista">
        <li className="blog__item">
          <img className="blog__imagen"></img>
          <h3 className="blog__titulo"></h3>
          <p className="blog__texto"></p>
          <button className="blog__botton">ver post completo</button>
        </li>
      </ul>
    </section>
  </LayoutInterno>
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

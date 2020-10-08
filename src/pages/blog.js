import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import "./blog.scss"

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
          <div className="blog__imagen"></div>
          <h3 className="blog__titulo">hola mundo</h3>
          <p className="blog__texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="blog__botton">Ver post</button>
        </li>
        <li className="blog__item">
          <div className="blog__imagen"></div>
          <h3 className="blog__titulo">hola mundo</h3>
          <p className="blog__texto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
          <button className="blog__botton">Ver post</button>
        </li>
        <li className="blog__item">
          <div className="blog__imagen"></div>
          <h3 className="blog__titulo">hola mundo</h3>
          <p className="blog__texto">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam rcitationem ullam corporis
          </p>
          <button className="blog__botton">Ver post</button>
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

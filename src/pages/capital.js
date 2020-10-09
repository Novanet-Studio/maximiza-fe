import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import "./capital.scss"

const Capital = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna--left">
        <Img
          fluid={
            data.strapiPrivateEquity.principal.imagen.childImageSharp.fluid
          }
        />
      </div>
      <div className="columna--right">
        <h1 className="principal__titulo">
          {data.strapiPrivateEquity.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiPrivateEquity.principal.contenido}
        </p>
      </div>
    </section>
    <section className="partners">
      <h2>{data.strapiPrivateEquity.partners_titulo}</h2>
      <ul className="partners__lista">
        {data.strapiPrivateEquity.partners_secciones.map((item) => (
          <li className="partners__item" key={item.id}>
            <Img
              className="partners__imagen"
              fluid={item.imagen.childImageSharp.fluid}
            />
            <ReactMarkdown
              className="partners__descripcion"
              source={item.contenido}
              escapeHtml={false}
            />
          </li>
        ))}
      </ul>
      <Link className="partners__boton" to="/capital">
        Necesito más información
      </Link>
    </section>
  </LayoutInterno>
)

export default Capital

export const query = graphql`
  query CapitalQuery {
    strapiPrivateEquity {
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
        contenido
      }
    }
  }
`
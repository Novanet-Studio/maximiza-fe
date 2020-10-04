import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Servicios = ({ data }) => (
  <Layout>
    <SEO title="Servicios" />
    <section className="principal">
      <div className="columna--left">
        <h1 className="principal__titulo">
          {data.strapiServicios.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiServicios.principal.contenido}
        </p>
      </div>
      <div className="columna--right">
        <Img
          fluid={data.strapiServicios.principal.imagen.childImageSharp.fluid}
        />
      </div>
    </section>
    <section className="inversionista">
      <ul className="inversionista__lista">
        {data.strapiServicios.inversionista.map((item) => (
          <li className="inversionista__tipo" key={item.id}>
            <h3 className="inversionista__titulo">{item.titulo}</h3>
            {item.items.map((element) => (
              <div className="inversionista__item" key={element.id}>
                <h4 className="inversionista__subtitulo">{element.titulo}</h4>
                <p className="inversionista__contenido">
                  {element.contenido}
                </p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Servicios

export const query = graphql`
  query ServiciosQuery {
    strapiServicios {
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
      inversionista {
        id
        nombre
        items {
          id
          titulo
          contenido
        }
      }
    }
  }
`

import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Servicios = ({ data }) => (
  <Layout>
    <SEO title="Servicios" />
    <section className="principal">
      <div className="contenido contenido--left">
        <h2 className="principal__titulo">
          {data.strapiServicios.principal.titulo}
        </h2>
        <p className="principal__descripcion">
          {data.strapiServicios.principal.contenido}
        </p>
      </div>
      <div className="contenido contenido--derecha">
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
            fluid(maxWidth: 450) {
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

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import "./servicios.scss"

const Servicios = ({ data }) => (
  <LayoutInterno>
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
      {data.strapiServicios.inversionista.map((item) => (
        <div className="inversionista__grupo" key={item.id}>
          <div className="inversionista__cabecera">
            <h3 className="inversionista__titulo">{item.nombre}</h3>
            <Img
              className="inversionista__imagen"
              fluid={item.imagen.childImageSharp.fluid}
            />
          </div>
          <ul className="inversionista__contenido">
            {item.items.map((element) => (
              <li className="inversionista__item" key={element.id}>
                <Img
                  className="inversionista__icono"
                  fluid={element.icono.childImageSharp.fluid}
                />
                <h4 className="inversionista__subtitulo">{element.titulo}</h4>
                <p className="inversionista__texto">
                  {element.contenido.substring(0, 150).concat("...")}
                  <button className="inversionista__boton">Leer más</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  </LayoutInterno>
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
        imagen {
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        items {
          id
          titulo
          contenido
          icono {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

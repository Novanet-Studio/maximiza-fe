import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

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
      {data.strapiServicios.inversionista.map((item) => (
        <div className="inversionista__grupo" key={item.id}>
          <div className="inversionista__cabecera">
            <h3 className="inversionista__titulo">lorem ipsum dolor</h3>
            <div className="inversionista__imagen"></div>
          </div>
          <ul className="inversionista__contenido">
            {item.items.map((element) => (
              <li className="inversionista__item" key={element.id}>
                <h4 className="inversionista__subtitulo">
                  <span className="inversionista__icono">
                    {item.titulo}
                    <FontAwesomeIcon
                      icon={["fas", "eye"]}
                      fixedWidth
                      size="1.5x"
                    />
                  </span>
                  {element.titulo}
                </h4>
                <p className="inversionista__texto">{element.contenido}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
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

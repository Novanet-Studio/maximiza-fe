import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import "./legal.scss"
// add fas and fab to the library
library.add(fab, fas)

const Legal = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      {console.log(data)}
      <div className="columna--left">
        <h1 className="principal__titulo">
          {data.strapiLegal.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiLegal.principal.contenido}
        </p>
      </div>
      <div className="columna--right">
        <Img fluid={data.strapiLegal.principal.imagen.childImageSharp.fluid} />
      </div>
    </section>

    <section className="etica">
      <Img
        className="etica__imagen"
        fluid={data.strapiLegal.codigo.imagen.childImageSharp.fluid}
      />
      <div className="etica__contenido">
        <h2 className="etica__titulo">{data.strapiLegal.codigo.titulo}</h2>
        <p className="etica__texto">{data.strapiLegal.codigo.contenido}</p>
      </div>
    </section>

    <section className="normativas">
      <h2>{data.strapiLegal.normativas_titulo}</h2>
      <ul className="normativas__lista">
        {data.strapiLegal.descargas.map((item) => (
          <li className="normativas__item" key={item.id}>
            <div className="normativas__descarga">
              <button className="normativas__ver">
                <FontAwesomeIcon icon={["fas", "eye"]} fixedWidth size="1.5x" />
              </button>
              <button className="normativas__down">
                <FontAwesomeIcon
                  icon={["fas", "download"]}
                  fixedWidth
                  size="1.5x"
                />
              </button>
            </div>
            <p className="normativas__contenido">
              {item.documento.substring(0, 130).concat("...")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  </LayoutInterno>
)

export default Legal

export const query = graphql`
  query LegalQuery {
    strapiLegal {
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
      codigo {
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 430) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      normativas_titulo
      descargas {
        id
        documento
      }
    }
  }
`

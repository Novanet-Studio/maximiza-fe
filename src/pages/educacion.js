import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import "./educacion.scss"


const IndexPage = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna--left">
        <Img
          fluid={data.strapiEducacion.principal.imagen.childImageSharp.fluid}
        />
      </div>

      <div className="columna--right">
        <h1 className="principal__titulo">
          {data.strapiEducacion.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiEducacion.principal.contenido}
        </p>
      </div>
    </section>

    <section className="innovar">
      <h2>{data.strapiEducacion.items_titulo}</h2>
      <ul className="innovar__lista">
        {data.strapiEducacion.items.map((item) => (
          <li className="innovar__item" key={item.id}>
            <Img
              className="innovar__imagen"
              fluid={item.imagen.childImageSharp.fluid}
            />
            <h3 className="innovar__subtitulo">{item.titulo}</h3>
            <p className="innovar__descripcion">{item.contenido}</p>
          </li>
        ))}
      </ul>
    </section>

    <section className="programas">
      <h2>{data.strapiEducacion.programas_titulo}</h2>
      <div className="programas__secciones">
        {data.strapiEducacion.programas.map((item) => (
          <div className="programas__grupos" key={item.id}>
            <Img
              className="programas__imagen"
              fluid={item.imagen.childImageSharp.fluid}
            />
            <ul className="programas__lista">
              {item.mercados.map((mercado) => (
                <li className="programas__item" key={mercado.id}>
                  <h3 className="programas__titulo">{mercado.titulo}</h3>
                  <p className="programas__descripcion">{mercado.contenido}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link className="programas__boton" to="/educacion">
        Necesito más información
      </Link>
    </section>
  </LayoutInterno>
)

export default IndexPage

export const query = graphql`
  query EducacionQuery {
    strapiEducacion {
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
      items_titulo
      items {
        id
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 157) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      programas_titulo
      programas {
        id
        seccion
        mercados {
          id
          titulo
          contenido
        }
        imagen {
          childImageSharp {
            fluid(maxWidth: 390) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

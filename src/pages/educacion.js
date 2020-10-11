import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import "./educacion.scss"

const Educacion = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna--left">
        <h1 className="principal__titulo">
          {data.strapiEducacion.principal.titulo}
        </h1>
        <ReactMarkdown
          className="principal__texto"
          source={data.strapiEducacion.principal.contenido}
          escapeHtml={false}
        />
      </div>
      <div className="columna--right">
        <Img
          fluid={data.strapiEducacion.principal.imagen.childImageSharp.fluid}
        />
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
            <div className="innovar__textos">
              <h3 className="innovar__subtitulo">{item.titulo}</h3>
              <ReactMarkdown
                className="innovar__descripcion"
                source={item.contenido}
                escapeHtml={false}
              />
            </div>
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
      <h3 className="texto-cta">¡Gracias por preferirnos!</h3>
      <Link className="botonBottom" to="/educacion">
        Obtenga más información
      </Link>
    </section>
  </LayoutInterno>
)

export default Educacion

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

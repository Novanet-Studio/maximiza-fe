import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/ctaInformacion"
import "./educacion.scss"

const Educacion = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiEducacion.seo.titulo}
      description={data.strapiEducacion.seo.descripcion}
      image={data.strapiEducacion.seo.imagen}
    />
    <section className="principal">
      <div className="columna columna--izq">
        <h1 className="principal__titulo">
          {data.strapiEducacion.principal.titulo}
        </h1>
        <ReactMarkdown
          className="principal__texto"
          source={data.strapiEducacion.principal.contenido}
          escapeHtml={false}
        />
      </div>
      <div className="columna columna--der">
        <Img
          className="principal__imagen"
          fluid={data.strapiEducacion.principal.imagen.childImageSharp.fluid}
          alt={data.strapiEducacion.principal.seo_imagen.texto_alternativo}
          title={data.strapiEducacion.principal.seo_imagen.titulo}
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
              alt={item.seo_imagen.texto_alternativo}
              title={item.seo_imagen.titulo}
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
              alt={item.seo_imagen.texto_alternativo}
              title={item.seo_imagen.titulo}
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
    </section>
    <CTA
      estilo="cta-informacion__boton"
      mensaje="¡Gracias por preferirnos!"
      textoBoton="Obtenga más información"
      link="/contacto"
    />
  </Layout>
)

export default Educacion

export const query = graphql`
  query EducacionQuery {
    strapiEducacion {
      seo {
        titulo
        descripcion
        imagen
      }
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
        seo_imagen {
          titulo
          texto_alternativo
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
        seo_imagen {
          titulo
          texto_alternativo
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
        seo_imagen {
          titulo
          texto_alternativo
        }
      }
    }
  }
`

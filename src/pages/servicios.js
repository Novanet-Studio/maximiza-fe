import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Modal from "../components/modal"
import SEO from "../components/seo"
import Flecha from "../assets/images/dropdown.svg"
import CTA from "../components/ctaInformacion"
import "./servicios.scss"

const Servicios = ({ data }) => {
  const [targetModal, setTargetModal] = useState("")

  return (
    <Layout>
      <SEO
        title={data.strapiServicios.seo.titulo}
        description={data.strapiServicios.seo.descripcion}
        image={data.strapiServicios.seo.imagen}
      />
      <section className="principal">
        <div className="columna columna--izq">
          <h1 className="principal__titulo">
            <ReactMarkdown
              source={data.strapiServicios.principal.titulo}
              escapeHtml={false}
            />
          </h1>
          <p className="principal__texto">
            {data.strapiServicios.principal.contenido}
          </p>
        </div>
        <div className="columna columna--der">
          <Img
            className="principal__imagen"
            fluid={data.strapiServicios.principal.imagen.childImageSharp.fluid}
            title={data.strapiServicios.principal.seo_imagen.titulo}
            alt={data.strapiServicios.principal.seo_imagen.texto_alternativo}
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
                title={item.seo_imagen.titulo}
                alt={item.seo_imagen.textp_alternativo}
              />
            </div>
            <ul className="inversionista__contenido">
              {item.items.map((element) => (
                <li
                  className="inversionista__item"
                  key={element.id}
                  data-id={element.id}
                >
                  <Img
                    className="inversionista__icono"
                    fluid={element.icono.childImageSharp.fluid}
                  />
                  <h4 className="inversionista__subtitulo">{element.titulo}</h4>
                  <img
                    className="inversionista__flecha"
                    src={Flecha}
                    alt="Desplegar más"
                  />

                  <div className="inversionista__dropdown">
                    <strong className="inversionista__texto">
                      {element.titulo}
                    </strong>
                    <ReactMarkdown
                      className="inversionista__descripcion"
                      source={element.contenido.substring(0, 200).concat("...")}
                      escapeHtml={false}
                    />
                    <button
                      className="inversionista__boton"
                      onClick={() => setTargetModal(element.id)}
                    >
                      Leer más
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Modal
              id={targetModal}
              data={item.items}
              imageFieldName="icono"
              onClose={() => setTargetModal("")}
            />
          </div>
        ))}
      </section>
      <CTA
        mensaje="¡Gracias por preferirnos!"
        textoBoton="Obtenga más información"
      />
    </Layout>
  )
}

export default Servicios

export const query = graphql`
  query ServiciosQuery {
    strapiServicios {
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
        seo_imagen {
          titulo
          texto_alternativo
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

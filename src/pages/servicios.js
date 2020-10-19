import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import Modal from "../components/modal"
import SEO from "../components/seo"
import Flecha from "../assets/images/dropdown.svg"
import "./servicios.scss"

const Servicios = ({ data }) => {
  const [targetModal, setTargetModal] = useState("")

  return (
    <Layout>
      <SEO title="Servicios" />
      <section className="principal">
        <div className="columna--left">
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
        <div className="columna--right">
          <Img
            className="principal__imagen"
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

                  <div className="inversionista__texto">
                    <strong>{element.titulo}</strong>
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
    </Layout>
  )
}

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

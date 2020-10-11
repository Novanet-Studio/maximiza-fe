import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Flecha from "../assets/images/dropdown.svg"
import "./servicios.scss"
import { useState } from "react"

const Modal = ({ data, id, onClose }) =>
  data.map(
    (item) =>
      item.id === id && (
        <div className="modal" key={item.id}>
          <div className="modal__content">
            <button onClick={onClose}>&times;</button>
            <div className="modal__body">
              <Img
                fluid={item.icono.childImageSharp.fluid}
                title={item.titulo}
                alt={""}
              />
              <h2 className="modal__title">{item.titulo}</h2>
              <ReactMarkdown
                className="inversionista__descripcion"
                source={item.contenido}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
      )
  )

const Servicios = ({ data }) => {
  const [targetModal, setTargetModal] = useState("")

  return (
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
                    <button className="inversionista__boton" onClick={() => setTargetModal(element.id)}>
                      Leer más
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Modal
              data={item.items}
              onClose={() => setTargetModal("")}
              id={targetModal}
            />
          </div>
        ))}
      </section>
    </LayoutInterno>
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

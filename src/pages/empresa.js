import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Aliados from "../components/aliados"
import Modal from "../components/modal"
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import "./empresa.scss"
// add fas and fab to the library
library.add(fas)

const Empresa = ({ data }) => {
  const [targetModal, setTargetModal] = useState("")
  return (
    <Layout>
      <section className="principal">
        <div className="columna columna--izq">
          <Img
            className="principal__imagen"
            fluid={data.strapiEmpresa.principal.imagen.childImageSharp.fluid}
          />
        </div>

        <div className="columna columna--der">
          <h1 className="principal__titulo">
            {data.strapiEmpresa.principal.titulo}
          </h1>
          <p className="principal__texto">
            {data.strapiEmpresa.principal.contenido}
          </p>
        </div>
      </section>

      <section className="historia">
        <ul className="historia__lista">
          {data.strapiEmpresa.historia.map((item) => (
            <li className="historia__item" key={item.id}>
              <Img
                className="historia__image"
                fluid={item.imagen.childImageSharp.fluid}
              />
              <div className="historia__descripcion">
                <h3 className="historia__titulo">{item.titulo}</h3>
                <ReactMarkdown
                  className="historia__texto"
                  source={item.contenido.substring(0, 190).concat("...")}
                  escapeHtml={false}
                />
                <button
                  className="historia__button"
                  onClick={() => setTargetModal(item.id)}
                >
                  Conocer más
                </button>
              </div>
            </li>
          ))}
          <Modal
            id={targetModal}
            data={data.strapiEmpresa.historia}
            imageFieldName="imagen"
            onClose={() => setTargetModal("")}
          />
        </ul>
      </section>
      <section className="equipo">
        <h2>{data.strapiEmpresa.equipo.titulo}</h2>
        <p className="descripcion">{data.strapiEmpresa.equipo.contenido}</p>
      </section>

      <section className="nosotros">
        <ul className="nosotros__lista">
          {data.strapiEmpresa.nosotros.map((item) => (
            <li className="nosotros__item" key={item.id}>
              <h3 className="nosotros__titulo">{item.titulo}</h3>
              <ReactMarkdown
                className="nosotros__descripcion"
                source={item.contenido}
                escapeHtml={false}
              />
              <Img
                className="nosotros__imagen"
                fluid={item.imagen.childImageSharp.fluid}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="aliados">
        <h2>{data.strapiEmpresa.aliados.titulo}</h2>
        <p className="aliados__descripcion">{data.strapiEmpresa.aliados.contenido}</p>
        <Aliados />
      </section>

      <section className="balances">
        <h2>Balances mensuales</h2>
        {data.strapiEmpresa.balances.map((item) => (
          <div className="balances__grupo">
            <h3 className="balances__subtitulo">{item.ano}</h3>
            <ul className="balances__lista" key={item.id}>
              {item.mes.map((element) => (
                <li className="balances__item" key={element.id}>
                  <a
                    className="balances__boton"
                    href={element.archivo_descarga}
                    download
                  >
                    <FontAwesomeIcon
                      icon={["fas", "download"]}
                      fixedWidth
                      size="1x"
                    />
                    {element.mes}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Empresa

export const query = graphql`
  query EmpresaQuery {
    strapiEmpresa {
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
      historia {
        id
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
      equipo {
        titulo
        contenido
      }
      aliados {
        id
        titulo
        contenido
      }
      nosotros {
        id
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 375) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      balances {
        id
        ano
        mes {
          id
          mes
          archivo_descarga
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutIndex from "../components/layoutIndex"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Email from "../assets/images/email.svg"
import Logo from "../assets/images/logo-maximiza.svg"
import "./index.scss"

const Index = ({ data }) => {
  return (
    <LayoutIndex>
      <SEO title="Inicio" />
      <section className="principal">
        <div className="columna columna--izq">
          <img src={Logo} alt="logo" className="principal__logo" />
          <p className="principal__texto principal__texto--corto">
            {data.strapiHome.principal.logo_texto}
          </p>
          <button className="principal__boton">Quiero saber más</button>
        </div>
        <div className="columna columna--der">
          <Img
            className="principal__imagen"
            fluid={data.strapiHome.principal.imagen.childImageSharp.fluid}
          />
        </div>
      </section>

      <section className="beneficios">
        <h2>{data.strapiHome.beneficios_titulo}</h2>
        <ul className="beneficios__lista">
          {data.strapiHome.beneficios.map((item) => (
            <li className="beneficios__item" key={item.id}>
              <h3 className="beneficios__subtitulo">{item.titulo}</h3>
              <ReactMarkdown
                className="beneficios__descripcion"
                source={item.contenido}
                escapeHtml={false}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="servicios">
        <h2>{data.strapiHome.servicios_titulo}</h2>
        <ul className="servicios__lista">
          {data.strapiHome.servicios.map((item) => (
            <li className="servicios__item" key={item.id}>
              <h3 className="servicios__subtitulo">{item.titulo}</h3>
              <p className="servicios__descripcion">{item.contenido}</p>
              <Img
                className="servicios__imagen"
                fluid={item.imagen.childImageSharp.fluid}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="contacto">
        <h2 className="contacto__titulo">{data.strapiHome.contacto_titulo}</h2>
        <p className="contacto__descripcion">
          Si desea mayor información de nuestros servicios, escríbanos y nos
          comunicaremos con usted a la brevedad posible.
        </p>
        <form className="form">
          <div className="form__grupo-izq">
            <input
              type="text"
              placeholder="Nombre y apellido"
              className="form__input"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form__input"
            />
            <textarea
              cols="30"
              rows="3"
              placeholder="Mensaje"
              className="form__textarea"
            ></textarea>
          </div>

          <div className="form__grupo-der">
            <button className="form__button">
              <img src={Email} className="form__icono" alt="email" /> Enviar mensaje
            </button>
          </div>
        </form>
      </section>
    </LayoutIndex>
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    strapiHome {
      principal {
        imagen {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo_texto
      }
      beneficios_titulo
      beneficios {
        id
        titulo
        contenido
      }
      servicios_titulo
      servicios {
        id
        titulo
        contenido
        imagen {
          childImageSharp {
            fluid(maxWidth: 390) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      contacto_titulo
    }
  }
`

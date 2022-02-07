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
      <SEO
        title={data.strapiHome.seo.titulo}
        description={data.strapiHome.seo.descripcion}
        image={data.strapiHome.seo.imagen}
      />
      <section className="principal">
        <div className="columna columna--izq">
          <img
            src={Logo}
            title="Maximiza logo"
            alt="Maximiza logo"
            className="principal__logo"
          />
          <p className="principal__texto principal__texto--corto">
            {data.strapiHome.principal.logo_texto}
          </p>
          <button className="principal__boton">Quiero saber más</button>
        </div>
        <div className="columna columna--der">
          <Img
            className="principal__imagen"
            fluid={data.strapiHome.principal.imagen.childImageSharp.fluid}
            title={data.strapiHome.principal.seo_imagen.titulo}
            alt={data.strapiHome.principal.seo_imagen.texto_alternativo}
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
              <h3 className="servicios__subtitulo">{item.seo_imagen.titulo}</h3>
              <p className="servicios__descripcion">
                {item.seo_imagen.contenido}
              </p>
              <Img
                className="servicios__imagen"
                fluid={item.imagen.childImageSharp.fluid}
                title={item.seo_imagen.titulo}
                alt={item.seo_imagen.texto_alternativo}
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
        <form
          name="inicio"
          className="form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/gracias"
        >
          <div className="form__grupo-izq">
            {/* Netlify Bot */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              className="form__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="form__input"
            />
            <textarea name="message" className="form__textarea" />
          </div>
          <div className="form__grupo-der">
            <button type="submit"  className="form__button">
              <img src={Email} alt="email" className="form__icono" /> Enviar
              Mensaje
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
      seo {
        titulo
        descripcion
        imagen
      }
      principal {
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
        seo_imagen {
          titulo
          texto_alternativo
        }
      }
      contacto_titulo
    }
  }
`

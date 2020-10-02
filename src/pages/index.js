import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="contenido contenido--left">
        <img src={data.strapiInicio.principal.logo.url} alt="logo" className="principal__logo"/>
        <p className="principal__texto">
          {data.strapiInicio.principal.logo_texto}
        </p>
        <button className="principal__button">Quiero saber más</button>
      </div>
      <div className="contenido contenido--derecha">
        <img src={data.strapiInicio.principal.imagen.url} alt="logo" className="principal__fondo" />
        {/* <Img fluid={data.strapiInicio.principal.} /> */}
      </div>
    </section>
    <section className="benificios">
      <h2 className="beneficios__titulo">
        {data.strapiInicio.beneficios_titulo}
      </h2>
      <ul className="beneficios__lista">
        {data.strapiInicio.beneficios.map((item) => (
          <li className="beneficios__item" key={item.id}>
            <h3 className="beneficios__subtitulo">{item.titulo}</h3>
            <p className="beneficios__descripcion">{item.contenido}</p>
          </li>
        ))}
      </ul>
    </section>
    <section className="servicios">
      <h2 className="servicios__titulo">
        {data.strapiInicio.servicios_titulo}
      </h2>
      <ul className="servicios__lista">
        {data.strapiInicio.servicios.map((item) => (
          <li className="servicios__item" key={item.id}>
            <h3 className="servicios__subtitulo">{item.titulo}</h3>
            <p className="servicios__descripcion">{item.contenido}</p>
          </li>
        ))}
      </ul>
    </section>
    <section className="contacto">
      <h2 className="contacto__titulo">{data.strapiInicio.contacto_titulo}</h2>
      <p className="contacto__descripcion">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <form className="form">
        <input type="text" placeholder="Nombre y apellido" className="form__input" />
        <input type="email" placeholder="Correo electrónico" className="form__input" />
        <textarea cols="30" rows="3" placeholder="Mensaje" className="form__textarea"></textarea>
        <button className="form__button">Enviar Mensaje</button>
      </form>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomeQuery {
    strapiInicio {
      principal {
        logo {
          publicURL
        }
        imagen {
          publicURL
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
            fluid(maxWidth: 459) {
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

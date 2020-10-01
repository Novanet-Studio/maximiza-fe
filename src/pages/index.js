import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//   </Layout>
// )

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      {console.log(data)}
      <div className="contenido contenido--left">
        <img src={data.strapiInicio.principal.logo.url} alt="logo" />
        <p className="principal__texto">
          {data.strapiInicio.principal.logo_texto}
        </p>
        <button className="principal__button">Quiero saber más</button>
      </div>
      <div className="contenido contenido--derecha">
        <img src="" alt="logo" className="principal__fondo" />
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
        <input type="text" className="form__input" />
        <input type="email" className="form__input" />
        <textarea cols="30" rows="10" className="form__textarea"></textarea>
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
          url
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
            fluid {
              base64
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

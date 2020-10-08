import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Email from "../assets/images/email.png"
import "./contacto.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

const Contacto = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <section className="principal">
      {console.log(data)}
      <div className="columna--left">
        <Img
          fluid={data.strapiContacto.principal.imagen.childImageSharp.fluid}
        />
      </div>
      <div className="columna--right">
        <h1 className="principal__titulo">
          {data.strapiContacto.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiContacto.principal.contenido}
        </p>
      </div>
    </section>

    <section className="datos">
      <div className="columna--left">
        <ul className="datos__lista">
          <li className="datos__item">
            <span class="datos__icono"><FontAwesomeIcon icon={["fas", "envelope"]} fixedWidth size="1x" /></span>
            <p class="datos__texto">medios@maximiza.com.ve</p>
          </li>
          <li className="datos__item">
          <span class="datos__icono"><FontAwesomeIcon icon={["fas", "phone"]} fixedWidth size="1x" /></span>
            <p class="datos__texto">0000-000-00-00</p>
          </li>
          <li className="datos__item">
          <span class="datos__icono"><FontAwesomeIcon icon={["fas", "map-marker-alt"]} fixedWidth size="1x" /></span>
            <p class="datos__texto">
              Av Lorem ipsum, edif sed do esiumund, por incumd incid N°2
            </p>
          </li>
        </ul>
      </div>
      <div className="columna--right">
        <form className="datos__form">
          <input
            type="text"
            placeholder="Nombre y apellido"
            className="datos__input"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="datos__input"
          />
          <textarea
            cols="30"
            rows="3"
            placeholder="Mensaje"
            className="datos__textarea"
          ></textarea>

          <button className="datos__button">
            <img src={Email} alt="email" /> Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  </Layout>
)

export default Contacto

export const query = graphql`
  query ContactoQuery {
    strapiContacto {
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
    }
  }
`

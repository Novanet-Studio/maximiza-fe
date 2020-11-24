import React from "react"
import { graphql } from "gatsby"
import { init, send } from "emailjs-com"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Email from "../assets/images/email.svg"
import "./contacto.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { useForm } from "react-hook-form"

init(process.env.GATSBY_EMAILJS_USERID)

// add fas and fab to the library
library.add(fab)

const Contacto = ({ data }) => {
  const { register, handleSubmit, errors } = useForm()

  const onHandleSubmit = async (data) => {
    try {
      const result = await send(
        process.env.GATSBY_EMAILJS_SERVICEID, 
        process.env.GATSBY_EMAILJS_TEMPLATEID, 
        data
      )
      console.log(result.text)

      document.querySelector("form").reset()
    } catch (e) {
      console.error(e)
    }
  }

  console.log(errors)

  return (
    <Layout>
      <SEO
        title={data.strapiContact.seo.titulo}
        description={data.strapiContact.seo.descripcion}
        image={data.strapiContact.seo.imagen}
      />
      <SEO title="Inicio" />
      <section className="principal">
        <div className="columna columna--izq">
          <Img
            className="principal__imagen"
            fluid={data.strapiContact.principal.imagen.childImageSharp.fluid}
            title={data.strapiContact.principal.seo_imagen.titulo}
            alt={data.strapiContact.principal.seo_imagen.texto_alternativo}
          />
        </div>
        <div className="columna columna--der">
          <h1 className="principal__titulo">
            {data.strapiContact.principal.titulo}
          </h1>
          <p className="principal__texto">
            {data.strapiContact.principal.contenido}
          </p>
        </div>
      </section>

      <section className="datos">
        <div className="columna columna--izq">
          <ul className="datos__lista">
            <li className="datos__item">
              <span className="datos__icono">
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  fixedWidth
                  size="1x"
                />
              </span>
              <p className="datos__texto">info@maximiza.com.ve</p>
            </li>
            <li className="datos__item">
              <span className="datos__icono">
                <FontAwesomeIcon icon={["fas", "phone"]} fixedWidth size="1x" />
              </span>
              <p className="datos__texto">
                Master +58 (212) 9539447 <br /> Fax +58 (212) 9573365 / 3366
              </p>
            </li>
            <li className="datos__item">
              <span className="datos__icono">
                <FontAwesomeIcon
                  icon={["fas", "map-marker-alt"]}
                  fixedWidth
                  size="1x"
                />
              </span>
              <p className="datos__texto">
                Avenida Francisco de Miranda, Torre Europa, Piso 3, Oficinas
                3-B3. El Rosal, Caracas, Venezuela.
              </p>
            </li>
          </ul>
        </div>
        <div className="columna columna--der">
          <form className="datos__form" onSubmit={handleSubmit(onHandleSubmit)}>
            <input
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              className="datos__input"
              ref={register({
                required: true,
                maxLength: {
                  value: 20,
                  message: "El nombre es demasiado largo",
                },
                pattern: {
                  value: "[A-Z].+",
                  message: "Carácteres no válidos"
                },
              })}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="datos__input"
              ref={register({
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Esta no es una dirección de correo válida" 
                },
              })}
            />
            <textarea
              name="message"
              className="datos__textarea"
              ref={register({ required: true })}
            />
            <button className="datos__button">
              <img src={Email} alt="email" className="datos__button-icon" />{" "}
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contacto

export const query = graphql`
  query ContactQuery {
    strapiContact {
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
    }
  }
`

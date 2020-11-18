import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Email from "../assets/images/email.svg"
import "./contacto.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { Form } from "react-final-form"
import { Field } from "react-final-form-html5-validation"

// add fas and fab to the library
library.add(fab)

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

const Contacto = ({ data }) => {
  const [state, setState] = useState({})

  const onChange = (e) =>
    setState({ ...state, [e.target.value]: e.target.value })

  const onHandleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/x-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    }

    try {
      await fetch("/", request)
      navigate(form.getAttribute("action"))
    } catch (err) {
      alert(err)
    }
  }


  return (
    <Layout>
      <SEO
        title={data.strapiContact.seo.titulo}
        description={data.strapiContact.seo.descripcion}
        image={data.strapiContact.seo.imagen}
      />
      <SEO title="Inicio" />
      <section className="principal">
        {console.log(data)}
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
          <Form
            onSubmit={onHandleSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form
                id="contact-form"
                className="datos__form"
                name="contact"
                method="post"
                // action="/"
                // Netlify
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out:{" "}
                    <input type="bot-field" onChange={onChange} />
                  </label>
                </p>
                <Field
                  name="name"
                  type="text"
                  component="input"
                  className="datos__input"
                  maxLength={20}
                  tooLong="El nombre es demasiado largo"
                  pattern="[A-Z].+"
                  placeholder="Nombre y apellido"
                  required
                />
                <Field
                  name="email"
                  type="email"
                  component="input"
                  className="datos__input"
                  placeholder="Correo"
                  typeMismatch="Esta no es una dirección de correo válida"
                  required
                />
                <Field
                  name="message"
                  component="textarea"
                  className="datos__textarea"
                  required
                />
                <button className="datos__button">
                  <img className="datos__button-icon" src={Email} alt="email" />{" "}
                  Enviar mensaje
                </button>
              </form>
            )}
          />
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

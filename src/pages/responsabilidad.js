import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import "./responsabilidad.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
// add fas and fab to the library
library.add(fab, fas)

const Responsabilidad = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna--left">
        <h1 className="principal__titulo">
          {data.strapiResponsabilidad.principal.titulo}
        </h1>
        <ReactMarkdown
          className="principal__texto"
          source={data.strapiResponsabilidad.principal.contenido}
          escapeHtml={false}
        />
      </div>
      <div className="columna--right">
        <Img
          fluid={
            data.strapiResponsabilidad.principal.imagen.childImageSharp.fluid
          }
        />
      </div>
    </section>
    <section className="contribuciones">
      <h2>{data.strapiResponsabilidad.contribucion_titulo}</h2>
      <ul className="contribuciones__lista">
        {data.strapiResponsabilidad.contribuciones_secciones.map((item) => (
          <li className="contribuciones__item">
            <h3 className="contribuciones__titulo">{item.titulo}</h3>
            <ReactMarkdown
              className="contribuciones__descripcion"
              source={item.contenido.substring(0, 150).concat("...")}
              escapeHtml={false}
            />
            <FontAwesomeIcon
              className="contribuciones__icono"
              icon={["fas", "caret-down"]}
              fixedWidth
              size="2x"
            />
          </li>
        ))}
      </ul>
    </section>
    <section className="causas">
      <h2>Causas que apoyamos</h2>
      <ReactMarkdown
        className="descripcion"
        source={data.strapiResponsabilidad.colaboracion_texto}
        escapeHtml={false}
      />
      <ul className="causas__lista">
        <li className="causas__item">
          <div className="causas__imagen"></div>
          <p className="causas__texto">Lorem ipsum is place holder  text commonly</p>
        </li>
        <li className="causas__item">
          <div className="causas__imagen"></div>
          <p className="causas__texto">Lorem ipsum is place holder  text commonly</p>
        </li>
        <li className="causas__item">
          <div className="causas__imagen"></div>
          <p className="causas__texto">Lorem ipsum is place holder  text commonly</p>
        </li>
      </ul>
    </section>
  </LayoutInterno>
)

export default Responsabilidad

export const query = graphql`
  query ResponsabilidadQuery {
    strapiResponsabilidad {
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
      contribucion_titulo
      contribuciones_secciones {
        id
        titulo
        contenido
      }
      colaboracion_texto
    }
  }
`

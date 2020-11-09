import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Flecha from "../assets/images/dropdown.svg"
import "./responsabilidad.scss"

const Responsabilidad = ({ data }) => (
  <StaticQuery
    query={graphql`
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
        as: file(relativePath: { eq: "causas-as.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fa: file(relativePath: { eq: "causas-fa.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ccc: file(relativePath: { eq: "causas-ccc.jpeg" }) {
          childImageSharp {
            fluid(maxHeight: 115) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <SEO title="Inicio" />
        <section className="principal">
          <div className="columna columna--izq">
            <h1 className="principal__titulo">
              {data.strapiResponsabilidad.principal.titulo}
            </h1>
            <ReactMarkdown
              className="principal__texto"
              source={data.strapiResponsabilidad.principal.contenido}
              escapeHtml={false}
            />
          </div>
          <div className="columna columna--der">
            <Img
              className="principal__imagen"
              fluid={
                data.strapiResponsabilidad.principal.imagen.childImageSharp
                  .fluid
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
                  source={item.contenido}
                  escapeHtml={false}
                />
                <img
                  className="contribuciones__flecha"
                  src={Flecha}
                  alt="Desplegar más"
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="causas">
          <h2 className="causas__titulo">Causas que apoyamos</h2>
          <ReactMarkdown
            className="descripcion"
            source={data.strapiResponsabilidad.colaboracion_texto}
            escapeHtml={false}
          />
          <ul className="causas__lista">
            <li className="causas__item">
              <Img
                className="causas__imagen"
                fluid={data.as.childImageSharp.fluid}
              />       
              <p className="causas__texto">Alimenta la solidaridad</p>
            </li>
            <li className="causas__item">
              <Img
                className="causas__imagen"
                fluid={data.ccc.childImageSharp.fluid}
              />
              <p className="causas__texto">Cámara de Comercio de Caracas</p>
            </li>
            <li className="causas__item">
              <Img
                className="causas__imagen"
                fluid={data.fa.childImageSharp.fluid}
              />
              <p className="causas__texto">Fe y Alegría</p>
            </li>
          </ul>
        </section>
      </Layout>
    )}
  />
)

export default Responsabilidad

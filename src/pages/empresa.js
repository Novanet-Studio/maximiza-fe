import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../components/layoutInterno"
import "./empresa.scss"

const Empresa = ({ data }) => (
  <LayoutInterno>
    <section className="principal">
      <div className="columna--left">
        <Img
          fluid={data.strapiEmpresa.principal.imagen.childImageSharp.fluid}
        />
      </div>

      <div className="columna--right">
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
              <p className="historia__texto">
                {item.contenido.substring(0, 150).concat("...")}
              </p>
              <button className="historia__button">Conocer más</button>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section className="aliados">
      <h2>{data.strapiEmpresa.aliados.titulo}</h2>
      <p className="descripcion">{data.strapiEmpresa.aliados.contenido}</p>
      <ul className="aliados__carrusel">
        <li className="aliados__carrusel-item"></li>
        <li className="aliados__carrusel-item"></li>
        <li className="aliados__carrusel-item"></li>
        <li className="aliados__carrusel-item"></li>
        <li className="aliados__carrusel-item"></li>
        <li className="aliados__carrusel-item"></li>
      </ul>
    </section>

    <section className="nosotros">
      <ul className="nosotros__lista">
        {data.strapiEmpresa.nosotros.map((item) => (
          <li className="nosotros__item" key={item.id}>
            <h3 className="nosotros__titulo">{item.titulo}</h3>
            <p className="nosotros__descripcion">{item.contenido}</p>
            <Img
              className="nosotros__imagen"
              fluid={item.imagen.childImageSharp.fluid}
            />
          </li>
        ))}
      </ul>
    </section>
  </LayoutInterno>
)

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
        seo_imagen {
          titulo
          texto_alternativo
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
    }
  }
`

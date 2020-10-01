import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'

const Empresa = ({ data }) => (
  <Layout>
    <section className="principal">
      <div className="contenido contenido--left">
        <Img fluid={data.strapiEmpresa.principal.imagen.childImageSharp.fluid} />
      </div>
      <div className="contenido contenido--derecha">
        <h2 className="principal__titulo">
          {data.strapiEmpresa.principal.titulo}
        </h2>
        <p className="principal__descripcion">
          {data.strapiEmpresa.principal.contenido}
        </p>
      </div>
    </section>
    <section className="historia">
      <ul className="historia__lista">
        {data.strapiEmpresa.historia.map((item) => (
          <li className="historia__item" key={item.id}>
            <Img 
              fluid={item.imagen.childImageSharp.fluid}
            />
            <h3 className="historia__titulo">{item.titulo}</h3>
            <p className="historia__descripcion">{item.contenido}</p>
            <button className="historia__button">Conocer más</button>
          </li>
        ))}
      </ul>
    </section>
    <section className="aliados">
      <h3 className="aliados__titulo">{data.strapiEmpresa.aliados.titulo}</h3>
      <p className="aliados__descripcion">
        {data.strapiEmpresa.aliados.contenido}
      </p>
    </section>
    <section className="nosotros">
      <ul className="nosotros__lista">
        {data.strapiEmpresa.nosotros.map((item) => (
          <li className="nosotros__item" key={item.id}>
            <h3 className="nosotros__titulo">{item.titulo}</h3>
            <p className="nosotros__descripcion">{item.contenido}</p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
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
            fluid(maxWidth: 450) {
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
      }
    }
  }
`
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./blog.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiBlog.seo.titulo}
      description={data.strapiBlog.descripcion}
      image={data.strapiBlog.seo.imagen}
    />
    <section className="principal">
      <div className="columna columna--izq">
        <h1 className="principal__titulo">
          {data.strapiBlog.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiBlog.principal.contenido}
        </p>
      </div>
      <div className="columna columna--der">
        <Img
          className="principal__imagen"
          fluid={data.strapiBlog.principal.imagen.childImageSharp.fluid}
          alt={data.strapiBlog.principal.seo_imagen.texto_alternativo}
          title={data.strapiBlog.principal.seo_imagen.titulo}
        />
      </div>
    </section>

    <section className="blog">
      <ul className="blog__lista">
        {data.articulos.edges.map(({ node: articulo }) => (
          <li className="blog__item" key={articulo.id}>
            <div className="blog__cabecera">
              <Img
                className="blog__imagen"
                fluid={articulo.imagen.childImageSharp.fluid}
                alt={articulo.seo_imagen.texto_alternativo}
                title={articulo.seo_imagen.titulo}
              />
              <h4 className="blog__titulo">{articulo.titulo}</h4>
            </div>
            <p className="blog__fecha">{articulo.fecha}</p>
            <ReactMarkdown
              className="blog__texto"
              source={articulo.descripcion.substring(0, 200).concat("...")}
              escapeHtml={false}
            />
            <Link className="blog__botton" to={articulo.Slug}>
              Ver post
              {/* <button className="blog__botton"></button> */}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query BlogQuery {
    strapiBlog {
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
          texto_alternativo
          titulo
        }
      }
    }

    articulos: allStrapiArticulo(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          titulo
          fecha(formatString: "DD MMMM YYYY")
          descripcion
          imagen {
            childImageSharp {
              fluid(maxWidth: 375) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          seo_imagen {
            texto_alternativo
            titulo
          }
          Slug
        }
      }
    }
  }
`

import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import LayoutInterno from "../../components/layoutInterno"
import SEO from "../../components/seo"
import "./blog.scss"

const IndexPage = ({ data }) => (
  <LayoutInterno>
    <SEO title="Inicio" />
    <section className="principal">
      <div className="columna--left">
        <Img fluid={data.strapiBlog.principal.imagen.childImageSharp.fluid} />
      </div>
      <div className="columna--right">
        <h1 className="principal__titulo">
          {data.strapiBlog.principal.titulo}
        </h1>
        <p className="principal__texto">
          {data.strapiBlog.principal.contenido}
        </p>
      </div>
    </section>

    <section className="blog" style={{ display: "block" }}>
      <ul className="blog__lista">
        {console.log(data)}
        {data.articulos.edges.map(({ node: articulo }) => (
          <li className="blog__item" key={articulo.id}>
            <div className="blog__imagen"></div>
            <h3 className="blog__titulo">{articulo.titulo}</h3>
            <p className="blog__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus aperiam repellendus iste tempore ab, blanditiis veniam aliquid, excepturi illo vero. In animi laudantium illo rerum. Maxime architecto commodi voluptatum.
            </p>
            <Link to={articulo.Slug}>
              Ver post
              {/* <button className="blog__botton"></button> */}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </LayoutInterno>
)

export default IndexPage

export const query = graphql`
  query BlogQuery {
    strapiBlog {
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

    articulos: allStrapiArticulo {
      edges {
        node {
          id
          titulo
          Slug
        }
      }
    }
  }
`

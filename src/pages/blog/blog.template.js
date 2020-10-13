import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import LayoutInterno from "../../components/layoutInterno"
import "./blog.scss"

const BlogTemplate = ({ data }) => (
  <LayoutInterno>
    <section className="principal">
      <div className="columna--left">
      <Img 
        fluid={data.strapiArticulo.imagen.childImageSharp.fluid}
      />
      </div>
      <div className="columna--right">
        <h1 className="principal__titulo">
        {data.strapiArticulo.titulo}
        </h1>
      </div>
    </section>

    <article className="articulo">
      <p className="descripcion">{data.strapiArticulo.descripcion}</p>
    </article>
  </LayoutInterno>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($id: String) {
    strapiArticulo(id: { eq: $id }) {
      titulo
      descripcion
      imagen {
        childImageSharp {
          fluid(maxWidth: 630) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

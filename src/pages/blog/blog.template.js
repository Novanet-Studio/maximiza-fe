import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }) => (
  <article className="articulo">
    <h2 className="articulo__titulo">{data.strapiArticulo.titulo}</h2>
    <Img
      className="articulo__imagen"
      fluid={data.strapiArticulo.imagen.childImageSharp.fluid}
    />
    <p className="articulo__contenido">{data.strapiArticulo.descripcion}</p>
  </article>
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
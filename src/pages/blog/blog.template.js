import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }) => (
  <section>
    <article className="articulo">
      <h2>{data.strapiArticulo.titulo}</h2>
      <Img 
        fluid={data.strapiArticulo.imagen.childImageSharp.fluid}
      />
      <p>{data.strapiArticulo.descripcion}</p>
    </article>
  </section>
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
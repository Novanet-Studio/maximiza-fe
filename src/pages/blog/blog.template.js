import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { window } from "browser-monads"
import ReactMarkdown from "react-markdown"
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"
import "./blog.scss"

const shareUrl = window.location.href

const BlogTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiArticulo.titulo}
      description={data.strapiArticulo.descripcion}
      image={data.strapiArticulo.imagen.publicURL}
    />
    <section className="articulo__principal">
      <Link className="articulo__boton-regreso" to="../../blog">
        « Volver al blog
      </Link>
      <Img
        className="articulo__imagen"
        fluid={data.strapiArticulo.imagen.childImageSharp.fluid}
        alt={data.strapiArticulo.seo_imagen.texto_alternativo}
        title={data.strapiArticulo.seo_imagen.titulo}
      />
      <h1 className="articulo__titulo">{data.strapiArticulo.titulo}</h1>
    </section>

    <article className="articulo">
      <ReactMarkdown
        className="articulo__descripcion"
        source={data.strapiArticulo.descripcion}
        escapeHtml={false}
      />
      <div className="articulo__compartir">
        <h3>Comparte este artículo</h3>
        <LinkedinShareButton url={shareUrl} children="a">
          <LinkedinIcon size={28} />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl} children="a">
          <TwitterIcon size={28} />
        </TwitterShareButton>
      </div>
    </article>
  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query BlogTemplateQuery($id: String) {
    strapiArticulo(id: { eq: $id } ) {
      titulo
      descripcion
      imagen {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1280) {
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
`

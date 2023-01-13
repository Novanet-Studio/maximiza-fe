import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Default from "../layout/page";
import Seo from "../components/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import "../assets/scss/pages/blog.scss";

const ArticuloTemplate = ({ pageContext }) => {
  const { articulo } = pageContext;
  const isBrowser = typeof window !== "undefined";
  const viewUrl = () => {
    if (!isBrowser) {
      return;
    }
    return window.location.href;
  };
  return (
    <Default>
      <section className="articulo__principal">
        <Link className="articulo__boton-regreso" to="/blog">
          « Volver al blog
        </Link>
        <GatsbyImage
          className="articulo__imagen"
          image={getImage(articulo.imagen?.localFile)}
          alt="hello"
        />
        <h1 className="articulo__titulo">{articulo.titulo}</h1>
      </section>

      <article className="articulo">
        <ReactMarkdown
          className="articulo__descripcion"
          children={articulo.descripcion.data.descripcion}
          remarkPlugins={[remarkGfm]}
          skipHtml={false}
        />
        <div className="articulo__compartir">
          <h3>Comparte este artículo</h3>
          <LinkedinShareButton url={viewUrl()} children="a">
            <LinkedinIcon size={28} />
          </LinkedinShareButton>
          <TwitterShareButton url={viewUrl()} children="a">
            <TwitterIcon size={28} />
          </TwitterShareButton>
        </div>
      </article>
    </Default>
  );
};

export default ArticuloTemplate;

export const Head = ({ pageContext }) => {
  const { articulo } = pageContext;

  return (
    <Seo
      title={articulo.titulo}
      description={articulo.descripcion.data.descripcion
        .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, "$1")
        .substring(0, 158)}
      image={articulo.url}
    />
  );
};

import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Default from "../layout/page";
import Seo from "../components/seo";
import "../assets/scss/pages/blog.scss";

const Blog = ({ data }) => {
  const dataSource = data.strapiBlog;
  const articlesSource = data.articulos.nodes;
  return (
    <Default>
      <section className="principal">
        <div className="columna columna--izq">
          <h1 className="principal__titulo">{dataSource.principal.titulo}</h1>
          <p className="principal__texto">
            {dataSource.principal.contenido.data.contenido}
          </p>
        </div>
        <div className="columna columna--der">
          <GatsbyImage
            className="principal__imagen"
            image={getImage(dataSource.principal.imagen?.localFile)}
            alt={dataSource.principal.imagen.alternativeText}
          />
        </div>
      </section>

      <section className="blog">
        <ul className="blog__lista">
          {articlesSource.map((articulo) => (
            <li className="blog__item" key={articulo.id}>
              <div className="blog__cabecera">
                <GatsbyImage
                  className="blog__imagen"
                  image={getImage(articulo.imagen?.localFile)}
                  alt={articulo.imagen.alternativeText}
                />
                <h4 className="blog__titulo">{articulo.titulo}</h4>
              </div>
              <p className="blog__fecha">{articulo.fecha}</p>
              <ReactMarkdown
                className="blog__texto"
                children={articulo.descripcion.data.descripcion
                  .substring(0, 200)
                  .concat("...")}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
              />
              <Link className="blog__botton" to={articulo.slug}>
                Ver post
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Default>
  );
};

export default Blog;

export const Head = ({ data }) => {
  const dataSource = data.strapiBlog;

  return (
    <Seo
      title="Maximiza: Artículos con información financiera"
      description={dataSource.principal.contenido.data.contenido}
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_blog_miniatura_7827d40e96.webp"
    />
  );
};

export const query = graphql`
  query BlogQuery {
    strapiBlog {
      principal {
        titulo
        contenido {
          data {
            contenido
          }
        }
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 630)
            }
          }
        }
      }
    }

    articulos: allStrapiArticulo {
      nodes {
        id
        titulo
        fecha
        descripcion {
          data {
            descripcion
          }
        }
        slug
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 375)
            }
          }
        }
      }
    }
  }
`;

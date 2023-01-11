import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Page from "../layout/page";
import Seo from "../components/seo";
import Cta from "../components/ctaInformacion";
import "../assets/scss/pages/educacion.scss";

const Educacion = ({ data }) => {
  const dataSource = data.strapiEducacion;
  return (
    <Page>
      <Seo
        title="Educación en corretaje de títulos valores"
        description="Somos pioneros en ofrecer programas de capacitación para mejorar la educación financiera en Venezuela."
        image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_educacion_miniatura_5a3e3b347e.webp"
      />
      <section className="principal">
        <div className="columna columna--izq">
          <h1 className="principal__titulo">{dataSource.principal.titulo}</h1>
          <ReactMarkdown
            className="principal__texto"
            children={dataSource.principal.contenido.data.contenido}
            remarkPlugins={[remarkGfm]}
            skipHtml={true}
          />
        </div>
        <div className="columna columna--der">
          <GatsbyImage
            className="principal__imagen"
            image={getImage(
              dataSource.principal.imagen?.localFile
            )}
            alt={dataSource.principal.imagen.alternativeText}
          />
        </div>
      </section>

      <section className="innovar">
        <h2>{dataSource.items_titulo}</h2>
        <ul className="innovar__lista">
          {dataSource.items.map((item) => (
            <li className="innovar__item" key={item.id}>
              <GatsbyImage
                className="innovar__imagen"
                image={getImage(item.imagen?.localFile)}
                alt={item.imagen.alternativeText}
              />
              <div className="innovar__textos">
                <h3 className="innovar__subtitulo">{item.titulo}</h3>
                <ReactMarkdown
                  className="innovar__descripcion"
                  children={item.contenido.data.contenido}
                  remarkPlugins={[remarkGfm]}
                  skipHtml={true}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="programas">
        <h2>{dataSource.programas_titulo}</h2>
        <div className="programas__secciones">
          {dataSource.programas.map((item) => (
            <div className="programas__grupos" key={item.id}>
              <GatsbyImage
                className="programas__imagen"
                image={getImage(item.imagen?.localFile)}
                alt={item.imagen.alternativeText}
              />
              <ul className="programas__lista">
                {item.mercados.map((mercado) => (
                  <li className="programas__item" key={mercado.id}>
                    <h3 className="programas__titulo">{mercado.titulo}</h3>
                    <p className="programas__descripcion">
                      {mercado.contenido.data.contenido}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Cta
        estilo="cta-informacion__boton"
        mensaje="¡Gracias por preferirnos!"
        textoBoton="Obtenga más información"
        link="/contacto"
      />
    </Page>
  );
};

export default Educacion;

export const query = graphql`
  query EducacionQuery {
    strapiEducacion {
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
      items_titulo
      items {
        id
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
              gatsbyImageData(width: 157)
            }
          }
        }
      }
      programas_titulo
      programas {
        id
        seccion
        mercados {
          id
          titulo
          contenido {
            data {
              contenido
            }
          }
        }
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 390)
            }
          }
        }
      }
    }
  }
`;

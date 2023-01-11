import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layout/page";
import Seo from "../components/seo";
import Cta from "../components/ctaInformacion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../assets/scss/pages/capital.scss";

const Capital = ({ data }) => {
  const dataSource = data.strapiCapital;
  return (
    <Page>
      <Seo
        title="Inversión de capital en empresas venezolanas"
        description="Sabemos que Venezuela es un gran lugar para invertir y, cuando sea el momento, será necesario el capital para reactivar el país. ¡Conoce nuestra iniciativa!"
        image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_capital_miniatura_b983816160.webp"
      />
      <section className="principal">
        <div className="columna columna--izq">
          <GatsbyImage
            className="principal__imagen"
            image={getImage(dataSource.principal.imagen?.localFile)}
            alt={dataSource.principal.imagen.alternativeText}
          />
        </div>
        <div className="columna columna--der">
          <h1 className="principal__titulo">{dataSource.principal.titulo}</h1>
          <p className="principal__texto">
            {dataSource.principal.contenido.data.cotenido}
          </p>
        </div>
      </section>
      <section className="partners">
        <h2 className="partners__titulo">{dataSource.partners_titulo}</h2>
        <ul className="partners__lista">
          {dataSource.partners_secciones.map((item) => (
            <li className="partners__item" key={item.id}>
              <GatsbyImage
                className="partners__imagen"
                image={getImage(item.imagen?.localFile)}
                alt={item.imagen.alternativeText}
              />
              <ReactMarkdown
                className="partners__descripcion"
                children={item.contenido.data.contenido}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
              />
            </li>
          ))}
        </ul>
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

export default Capital;

export const query = graphql`
  query CapitalQuery {
    strapiCapital {
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
      partners_titulo
      partners_secciones {
        id
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
  }
`;

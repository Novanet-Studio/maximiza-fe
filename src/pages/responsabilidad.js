import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Page from "../layout/page";
import Seo from "../components/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Flecha from "../assets/images/dropdown.svg";
import "../assets/scss/pages/responsabilidad.scss";

const Responsabilidad = ({ data }) => {
  const dataSource = data.strapiResponsabilidad;
  return (
    <Page>
      <section className="principal">
        <div className="columna columna--izq">
          <h1 className="principal__titulo">{dataSource.principal.titulo}</h1>
          <ReactMarkdown
            className="principal__texto"
            children={dataSource.principal.contenido.data.contenido}
            skipHtml={false}
          />
        </div>
        <div className="columna columna--der">
          <GatsbyImage
            className="principal__imagen"
            image={getImage(dataSource.principal.imagen?.localFile)}
            alt={dataSource.principal.imagen.alternativeText}
          />
        </div>
      </section>
      <section className="contribuciones">
        <h2>{dataSource.contribucion_titulo}</h2>
        <ul className="contribuciones__lista">
          {dataSource.contribuciones_secciones.map((item) => (
            <li key={item.id} className="contribuciones__item">
              <h3 className="contribuciones__titulo">{item.titulo}</h3>
              <ReactMarkdown
                className="contribuciones__descripcion"
                children={item.contenido.data.contenido}
                skipHtml={false}
              />
              <img
                className="contribuciones__flecha"
                src={Flecha}
                alt="Desplegar más"
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="causas">
        <h2 className="causas__titulo">Causas que apoyamos</h2>
        <ReactMarkdown
          className="descripcion"
          children={dataSource.colaboracion_texto.data.contenido}
          remarkPlugins={[remarkGfm]}
          skipHtml={false}
        />
        <ul className="causas__lista">
          <li key="as" className="causas__item">
            <StaticImage
              className="causas__imagen"
              src="../assets/images/causas-as.jpeg"
              alt="Alimenta la solidaridad logo"
              title="Alimenta la solidaridad"
            />
            <p className="causas__texto">Alimenta la solidaridad</p>
          </li>
          <li key="ccc" className="causas__item">
            <StaticImage
              className="causas__imagen"
              src="../assets/images/causas-ccc.jpeg"
              alt="Logo Cámara de Comercio de Caracas"
              title="Logo Cámara de Comercio de Caracas"
            />
            <p className="causas__texto">Cámara de Comercio de Caracas</p>
          </li>
          <li key="fa" className="causas__item">
            <StaticImage
              className="causas__imagen"
              src="../assets/images/causas-fa.jpeg"
              alt="Fe Y Alegría logo"
              title="Fe Y Alegría logo"
            />
            <p className="causas__texto">Fe y Alegría</p>
          </li>
          <li key="acide" className="causas__item">
            <StaticImage
              className="causas__imagen"
              src="../assets/images/causas-acide.jpeg"
              alt="Acide logo"
              title="Acide logo"
            />
            <p className="causas__texto">Acide</p>
          </li>
        </ul>
      </section>
    </Page>
  );
};

export default Responsabilidad;

export const Head = () => (
  <Seo
    title="Responsabilidad"
    description="Contamos con la generación de dividendos para la empresa y el planteamiento del impacto social."
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_responsabilidad_miniatura_cd2b3fa7fc.webp"
  />
);

export const query = graphql`
  query ResponsabilidadQuery {
    strapiResponsabilidad {
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
      contribucion
      contribuciones_secciones {
        id
        titulo
        contenido {
          data {
            contenido
          }
        }
      }
      colaboracion_texto {
        data {
          colaboracion_texto
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layout/page";
import Seo from "../components/seo";
import Cta from "../components/ctaInformacion";
import "../assets/scss/pages/medios.scss";

const Medios = ({ data }) => {
  const dataSource = data.strapiMedio;
  return (
    <Page>
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
            {dataSource.principal.contenido.data.contenido}
          </p>
        </div>
      </section>
      <Cta
        estilo="cta-informacion__boton"
        mensaje="¡Gracias por preferirnos!"
        textoBoton="Contáctanos de manera directa a contacto@maximiza.com.ve"
        link="/contacto"
      />
    </Page>
  );
};

export default Medios;

export const Head = () => (
  <Seo
    title="Medios de Comunicacion"
    description="Exposicion de Maximiza en los medios de comunicacion tradicionales"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847317/maximiza/v4/maximiza_medios_miniatura_488c08a954.webp"
  />
);

export const query = graphql`
  query MediosQuery {
    strapiMedio {
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
  }
`;

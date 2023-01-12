import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layout/page";
import Seo from "../components/seo";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "../assets/scss/pages/directiva.scss";

const Directiva = ({ data }) => {
  const principal = data.strapiDirectiva.principal;
  const secciones = data.strapiDirectiva.secciones.seccion;

  return (
    <Page>
      <section className="principal">
        <div className="columna columna--izq">
          <GatsbyImage
            className="principal__imagen"
            image={getImage(principal.imagen?.localFile)}
            alt={principal.imagen.alternativeText}
          />
        </div>

        <div className="columna columna--der">
          <h1 className="principal__titulo">{principal.titulo}</h1>
          <p className="principal__texto">
            {principal.contenido.data.contenido}
          </p>
        </div>
      </section>

      <section className="secciones">
        <Accordion allowZeroExpanded={true}>
          {secciones.map((seccion) => (
            <AccordionItem key={seccion.id}>
              <AccordionItemHeading className="accordion__heading">
                <AccordionItemButton>
                  <div className="accordion__info">
                    <GatsbyImage
                      className="accordion__image"
                      image={getImage(seccion.imagen?.localFile)}
                      alt={seccion.imagen.alternativeText}
                    />
                    <h2 className="accordion__title">{seccion.titulo}</h2>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion__panel">
                <ul className="accordion__list">
                  {seccion.personas.map((item) => (
                    <li key={item.id} className="accordion__list-item">
                      <h3>{item.persona}</h3>
                      <p>{item.cargo}</p>
                      <small className="accordion__list-item__title">
                        {item.descripcion.data.descripcion}
                      </small>
                    </li>
                  ))}
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Page>
  );
};

export default Directiva;

export const Head = ({ data }) => {
  const principal = data.strapiDirectiva.principal;

  return (
    <Seo
      title="Junta directiva"
      description={principal.contenido.data.contenido}
      image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847321/maximiza/v4/maximiza_directiva_miniatura_c37955065e.webp"
    />
  );
};

export const query = graphql`
  query DirectivaQuery {
    strapiDirectiva {
      principal {
        titulo
        contenido {
          data {
            contenido
          }
        }
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 630)
            }
          }
          alternativeText
        }
      }
      secciones {
        seccion {
          id
          titulo
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 310)
              }
            }
            alternativeText
          }
          personas {
            id
            cargo
            persona
            descripcion {
              data {
                descripcion
              }
            }
          }
        }
      }
    }
  }
`;

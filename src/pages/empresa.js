import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../layout/page";
import Seo from "../components/seo";
import Aliados from "../components/aliados";
import Modal from "../components/modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../assets/scss/pages/empresa.scss";
// add fas and fab to the library
library.add(fas);

const Empresa = ({ data }) => {
  const [targetModal, setTargetModal] = useState("");
  const dataSource = data.strapiEmpresa;
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

      <section className="historia">
        <ul className="historia__lista">
          {dataSource.historia.map((item) => (
            <li className="historia__item" key={item.id}>
              <GatsbyImage
                className="historia__image"
                image={getImage(item.imagen?.localFile)}
                alt={item.imagen.alternativeText}
              />
              <div className="historia__descripcion">
                <h3 className="historia__titulo">{item.titulo}</h3>
                <ReactMarkdown
                  className="historia__texto"
                  children={item.contenido.data.contenido
                    .substring(0, 190)
                    .concat("...")}
                  remarkPlugins={[remarkGfm]}
                  skipHtml={false}
                />
                <button
                  className="historia__button"
                  onClick={() => setTargetModal(item.id)}
                >
                  Conocer más
                </button>
              </div>
            </li>
          ))}
          <Modal
            id={targetModal}
            data={dataSource.historia}
            imageFieldName="imagen"
            onClose={() => setTargetModal("")}
          />
        </ul>
      </section>

      <section className="equipo">
        <h2>{dataSource.equipo.titulo}</h2>
        <p className="descripcion">
          {dataSource.equipo.contenido.data.contenido}
        </p>
      </section>

      <section className="nosotros">
        <ul className="nosotros__lista">
          {dataSource.nosotros.map((item) => (
            <li className="nosotros__item" key={item.id}>
              <h3 className="nosotros__titulo">{item.titulo}</h3>
              <ReactMarkdown
                className="nosotros__descripcion"
                children={item.contenido.data.contenido}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
              />
              <GatsbyImage
                className="nosotros__imagen"
                image={getImage(item.imagen?.localFile)}
                alt={item.imagen.alternativeText}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="aliados">
        <h2>{dataSource.aliados.titulo}</h2>
        <p className="aliados__descripcion">
          {dataSource.aliados.contenido.data.contenido}
        </p>
        <Aliados />
      </section>

      <section className="balances">
        <h2>Balances mensuales</h2>
        {dataSource.balances.map((item) => (
          <div className="balances__grupo" key={item.id}>
            <h3 className="balances__subtitulo">{item.ano}</h3>
            <ul className="balances__lista">
              {item.mes.map((element) => (
                <li className="balances__item" key={element.id}>
                  <a
                    className="balances__boton"
                    href={element.descarga}
                    download
                  >
                    <FontAwesomeIcon
                      icon={["fas", "download"]}
                      fixedWidth
                      size="1x"
                    />
                    {element.mes}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="balances">
        <h2>Balances auditados</h2>
        {dataSource.balances_auditados.map((item) => (
          <div className="balances__grupo" key={item.id}>
            <h3 className="balances__subtitulo">{item.ano}</h3>
            <ul className="balances__lista">
              {item.mes.map((element) => (
                <li className="balances__item" key={element.id}>
                  <a
                    className="balances__boton"
                    href={element.descarga}
                    download
                  >
                    <FontAwesomeIcon
                      icon={["fas", "download"]}
                      fixedWidth
                      size="1x"
                    />
                    {element.mes}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Page>
  );
};

export default Empresa;

export const Head = () => (
  <Seo
    title="Maximiza para invertir en la bolsa"
    description="Somos una casa de bolsa que ofrece herramientas para invertir en la bolsa y gestionar instrumentos financieros."
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847321/maximiza/v4/maximiza_empresa_miniatura_2ef6217989.webp"
  />
);

export const query = graphql`
  query EmpresaQuery {
    strapiEmpresa {
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

      historia {
        id
        titulo
        contenido {
          data {
            contenido
          }
        }
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 450)
            }
          }
          alternativeText
        }
      }

      equipo {
        titulo
        contenido {
          data {
            contenido
          }
        }
      }

      aliados {
        id
        titulo
        contenido {
          data {
            contenido
          }
        }
      }

      nosotros {
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
              gatsbyImageData(width: 375)
            }
          }
        }
      }

      balances {
        id
        ano
        mes {
          id
          mes
          descarga
        }
      }

      balances_auditados {
        id
        ano
        mes {
          id
          mes
          descarga
        }
      }
    }
  }
`;

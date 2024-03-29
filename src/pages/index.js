import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Default from "../layout/default";
import Seo from "../components/seo";
import Logo from "../assets/images/logo-maximiza.svg";
import LinkNav from "../components/linkNav";
import "../assets/scss/pages/index.scss";

const Index = ({ data }) => {
  const dataSource = data.strapiHome;

  return (
    <Default>
      <section className="principal">
        <div className="columna columna--izq">
          <img
            src={Logo}
            title="Maximiza logo"
            alt="Maximiza logo"
            className="principal__logo"
          />
          <p className="principal__texto principal__texto--corto">
            {dataSource.principal.logo_texto.data.logo_texto}
          </p>
          <LinkNav
            estilo="principal__boton"
            text="Quiero saber más"
            to="/empresa"
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

      <section className="beneficios">
        <h2>{dataSource.beneficios_titulo}</h2>
        <ul className="beneficios__lista">
          {dataSource.beneficios.map((item) => (
            <li className="beneficios__item" key={item.id}>
              <h3 className="beneficios__subtitulo">{item.titulo}</h3>
              <ReactMarkdown
                className="beneficios__descripcion"
                children={item.contenido.data.contenido}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="servicios">
        <h2>{dataSource.servicios_titulo}</h2>
        <ul className="servicios__lista">
          {dataSource.servicios.map((item) => (
            <li className="servicios__item" key={item.id}>
              <h3 className="servicios__subtitulo">{item.titulo}</h3>
              <p className="servicios__descripcion">
                {item.contenido.data.contenido}
              </p>
              <Link to={item.link}>
                <GatsbyImage
                  className="servicios__imagen"
                  image={getImage(item.imagen?.localFile)}
                  alt={item.imagen.alternativeText}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="contacto">
        <h2 className="contacto__titulo">{dataSource.contacto_titulo}</h2>
        <p className="contacto__descripcion">
          {dataSource.contacto_descripcion.data.contacto_descripcion}
        </p>
        <form
          className="form"
          method="POST"
          data-netlify="true"
          name="inicio"
          action="/gracias/"
        >
          <div className="form__grupo-izq">
            <label>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="inicio" />
            </label>

            <input
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              className="form__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="form__input"
            />
            <textarea name="message" className="form__textarea" />
          </div>
          <div className="form__grupo-der">
            <input
              type="submit"
              className="datos__button"
              value="Enviar mensaje ➤"
            />
          </div>
        </form>
      </section>
    </Default>
  );
};

export default Index;

export const Head = () => (
  <Seo
    title="Maximiza Casa de Bolsa"
    description="Casa de bolsa dedicada a la asesoría financiera y a la gestión de activos transados en el mercado bursátil."
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847323/maximiza/v4/maximiza_inicio_miniatura_7b38641a3d.webp"
  />
);

export const query = graphql`
  query IndexQuery {
    strapiHome {
      principal {
        logo_texto {
          data {
            logo_texto
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
      servicios {
        id
        titulo
        contenido {
          data {
            contenido
          }
        }
        link
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 390)
            }
          }
        }
      }
      beneficios_titulo
      beneficios {
        titulo
        id
        contenido {
          data {
            contenido
          }
        }
      }
      contacto_titulo
      contacto_descripcion {
        data {
          contacto_descripcion
        }
      }
    }
  }
`;

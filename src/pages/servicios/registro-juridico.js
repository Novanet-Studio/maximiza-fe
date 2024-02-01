import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStepper } from "headless-stepper";
import Page from "../../layout/page";
import Seo from "../../components/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import DatosInstitucionStep from "../../components/formSteps/datosInstitucionStep";

import "../../assets/scss/pages/servicios.scss";
import "../../assets/scss/pages/steps.scss";
import EnterpriseIdentificationStep from "../../components/formSteps/enterpriseIdentificationStep";
import FinancialInformationStep from "../../components/formSteps/financialInformationStep";

const RegistroJuridico = ({ data }) => {
  const dataSource = data.strapiServicio;
  const steps = React.useMemo(
    () => [
      {
        label: "Datos de la institución",
      },
      { label: "Identificación de la empresa" },
      { label: "Información económico financiera" },
      { label: "Perfil del inversionista" },
      { label: "Producto o servicio bursátil" },
      { label: "Aceptación del contrato" },
    ],
    []
  );

  const { state, stepperProps, stepsProps, progressProps } = useStepper({
    steps,
  });

  const barSize = React.useMemo(
    () => Math.ceil((state.currentStep / (steps?.length - 1)) * 100),
    [state, steps]
  );

  return (
    <Page>
      <section className="principal">
        <div className="columna columna--izq">
          <h1 className="principal__titulo">
            <ReactMarkdown
              children={dataSource.principal.titulo}
              remarkPlugins={[remarkGfm]}
              skipHtml={false}
              linkTarget="_blank"
            />
          </h1>
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

      {/* <section className="inversionista">
        {dataSource.inversionista.map((item) => (
          <div
            className="inversionista__grupo"
            key={item.id}
            id={item.identidad}
          >
            <div className="inversionista__cabecera">
              <h3 className="inversionista__titulo">{item.nombre}</h3>
              <GatsbyImage
                className="inversionista__imagen"
                image={getImage(item.imagen?.localFile)}
                alt={item.imagen.alternativeText}
              />
            </div>
            <ul className="inversionista__contenido">
              {item.items.map((element) => (
                <li
                  className="inversionista__item"
                  key={element.id}
                  data-id={element.id}
                >
                  <GatsbyImage
                    className="inversionista__icono"
                    image={getImage(element.icono?.localFile)}
                    alt="Iconos servicos"
                  />
                  <h4 className="inversionista__subtitulo">{element.titulo}</h4>
                  <img
                    className="inversionista__flecha"
                    src={Flecha}
                    alt="Desplegar más"
                  />

                  <div className="inversionista__dropdown">
                    <strong className="inversionista__texto">
                      {element.titulo}
                    </strong>
                    <ReactMarkdown
                      className="inversionista__descripcion"
                      children={element.contenido.data.contenido
                        .substring(0, 200)
                        .concat("...")}
                      skipHtml={false}
                    />
                    <button
                      className="inversionista__boton"
                      onClick={() => setTargetModal(element.id)}
                    >
                      Leer más
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Modal
              id={targetModal}
              data={item.items}
              imageFieldName="icono"
              onClose={() => setTargetModal("")}
            />
          </div>
        ))}
      </section>

      <section className="comisiones">
        <h2 className="comisiones__titulo">Comisiones vigentes</h2>
        <ul className="comisiones__lista">
          <li className="comisiones__lista__item">
            <h4>Compra/Venta de títulos valores</h4>
            <p> Hasta 5% del monto transado</p>
          </li>
          <li className="comisiones__lista__item">
            <h4>Estructuración de instrumentos de deuda</h4>
            <p>Hasta 5% del monto emitido</p>
          </li>
          <li className="comisiones__lista__item">
            <h4>Colocación de instrumentos de deuda</h4>
            <p>Hasta 5% del monto colocado</p>
          </li>
        </ul>
      </section> */}

      <nav
        className="steps-nav my-4 w-100 grid grid-cols-6 relative"
        {...stepperProps}
      >
        <ol className="steps-ol col-span-full flex flex-row z-1">
          {stepsProps?.map((step, index) => (
            <li className="steps-li text-center flex-[1_0_auto]" key={index}>
              <a
                className="steps-link group flex flex-col items-center cursor-pointer focus:outline-0"
                {...step}
              >
                <span
                  className={`steps-span ${
                    state?.currentStep === index ? "active" : ""
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  style={{
                    fontWeight: state?.currentStep === index ? "500" : "400",
                    fontSize: 12,
                  }}
                  className={`${
                    state?.currentStep === index ? "font-bold" : ""
                  }`}
                >
                  {steps[index].label}
                </span>
              </a>
            </li>
          ))}
        </ol>
        <div
          className="progress flex items-center flex-row top-4 right-16 relative border-0.5 bg-gray-300 z-[-1] pointer-events-none row-span-full w-full h-0.5"
          {...progressProps}
        >
          <span className="progress-span h-full w=full flex" />
          <div
            style={{
              width: `${barSize}%`,
            }}
            className="progress-bar flex flex-row h-full overflow-hidden border-solid border-0 bg-sky-500"
          />
        </div>
      </nav>
      {/* <p>state: </p>
      <pre style={{ backgroundColor: "#f2f2f2" }}>
        {JSON.stringify(state, null, 2)}
      </pre> */}

      <section className="steps-form-wrapper">
        <header className="steps-form__header">
          <h1>Ficha de identificación del inversionista</h1>
          <h1>Persona Jurídica</h1>
        </header>

        {/* <DatosInstitucionStep /> */}
        {/* <EnterpriseIdentificationStep /> */}
        <FinancialInformationStep />

        <footer className="steps-form__footer">
          <button className="historia__button">Regresar</button>
          <button className="historia__button">Siguiente</button>
        </footer>
      </section>
    </Page>
  );
};

export default RegistroJuridico;

export const Head = () => (
  <Seo
    title="Maximiza inversiones en la bolsa"
    description="Ofrecemos diferentes estrategias financieras para gestionar sus inversiones  en la bolsa de valores."
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp"
  />
);

export const query = graphql`
  query ServiciosQuery {
    strapiServicio {
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
      inversionista {
        id
        nombre
        identidad
        imagen {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 320)
            }
          }
        }
        items {
          id
          titulo
          contenido {
            data {
              contenido
            }
          }
          icono {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 320)
              }
            }
          }
        }
      }
    }
  }
`;

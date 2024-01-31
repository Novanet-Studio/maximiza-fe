import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStepper } from "headless-stepper";
import Page from "../../layout/page";
import Seo from "../../components/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../../assets/scss/pages/servicios.scss";
import "../../assets/scss/pages/steps.scss";

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
        style={{
          marginTop: 1,
          marginBottom: 1,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          position: "relative",
        }}
        className="steps-nav my-4 w-100 grid grid-cols-6 relative"
        {...stepperProps}
      >
        <ol
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "row",
            zIndex: 1,
            listStyle: 'none'
          }}
          className="col-span-full flex flex-row z-1"
        >
          {stepsProps?.map((step, index) => (
            <li
              style={{ textAlign: "center", flex: "1 0 auto" }}
              className="text-center flex-[1_0_auto]"
              key={index}
            >
              <a
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                className="group flex flex-col items-center cursor-pointer focus:outline-0"
                {...step}
              >
                <span
                  style={{
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    color: "black",
                    borderRadius: "50%",
                    border: "1px solid black",
                    transition: "all 0.2s ease-in-out",
                    ...((state?.currentStep === index && {
                      background: "#00735F",
                      color: "white",
                      border: "1px solid #00735F",
                    }) ||
                      {}),
                  }}
                  className={`flex items-center justify-center bg-white text-black w-8 h-8 border border-full rounded-full group-focus:ring-2 group-focus:ring-offset-2 transition-colors ease-in-out ${
                    state?.currentStep === index
                      ? "bg-sky-500 text-white ring-2 ring-offset-2"
                      : ""
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  style={{
                    fontWeight:
                      state?.currentStep === index ? "500" : "400",
                    fontSize: 12
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
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            zIndex: "-1",
            top: "1rem",
            right: "0rem",
            position: "relative",
            border: "0.5px solid #f2f2f2",
            backgroundColor: "#f2f2f2",
            pointerEvents: "none",
            gridRow: "1 / -1",
            width: "100%",
            height: "0.1rem",
          }}
          className="flex items-center flex-row top-4 right-16 relative border-0.5 bg-gray-300 z-[-1] pointer-events-none row-span-full w-full h-0.5"
          {...progressProps}
        >
          <span style={{ height: "100%", width: "100%", display: "flex" }} className="h-full w=full flex" />
          <div
            style={{
              width: `${barSize}%`,
              gridColumn: "1 / -1",
              gridRow: "1 / -1",
              display: "grid",
              flexDirection: "row",
              height: "100%",
              overflow: "hidden",
              border: "1px solid #00735F",
              borderWidth: "1.5px",
              backgroundColor: "red",
            }}
            className="flex flex-row h-full overflow-hidden border-solid border-0 bg-sky-500"
          />
        </div>
      </nav>
      {/* <p>state: </p>
      <pre style={{ backgroundColor: "#f2f2f2" }}>
        {JSON.stringify(state, null, 2)}
      </pre> */}

      <div style={{ background: '#f1f1f1', padding: '1rem', height: "30rem" }}>
        <p>Form</p>
      </div>
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


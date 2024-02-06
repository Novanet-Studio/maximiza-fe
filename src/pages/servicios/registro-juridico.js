import React, { useRef } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStepper } from "headless-stepper";
import Page from "../../layout/page";
import Seo from "../../components/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import DatosInstitucionStep from "../../components/formSteps/datosInstitucionStep";
import EnterpriseIdentificationStep from "../../components/formSteps/enterpriseIdentificationStep";
import FinancialInformationStep from "../../components/formSteps/financialInformationStep";
import InvestorProfileStep from "../../components/formSteps/investorProfileStep";
import ProductInformationStep from "../../components/formSteps/ProductInformationStep";
import AcceptContractStep from "../../components/formSteps/AcceptContractStep";
import FinalStep from "../../components/formSteps/finalStep";
import Loader from "../../components/loader";
import { FormProvider } from "../../context/formContext";
import "../../assets/scss/pages/servicios.scss";
import "../../assets/scss/pages/steps.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LegalEntityFormPdf from "../../components/legalEntityFormPdf";

const RegistroJuridico = ({ data }) => {
  const dataSource = data.strapiServicio;
  const currentInput = useRef()
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

  const { state, stepperProps, stepsProps, progressProps, nextStep, prevStep } = useStepper({
    steps,
  });

  const barSize = React.useMemo(
    () => Math.ceil((state.currentStep / (steps?.length - 1)) * 100),
    [state, steps]
  );

  const getStepComponent = () => {
    if (state.currentStep === 0) {
      return <DatosInstitucionStep ref={currentInput} />;
    } else if (state.currentStep === 1) {
      return <EnterpriseIdentificationStep ref={currentInput} />;
    } else if (state.currentStep === 2) {
      return <FinancialInformationStep ref={currentInput} />;
    } else if (state.currentStep === 3) {
      return <InvestorProfileStep ref={currentInput} />;
    } else if (state.currentStep === 4) {
      return <ProductInformationStep ref={currentInput} />;
    } else if (state.currentStep === 5) {
      return <AcceptContractStep ref={currentInput} />;
    } else if (state.currentStep === 6) {
      return <FinalStep ref={currentInput} />;
    }
  }

  function handleNextStep(e) {
    e.preventDefault();

    currentInput.current.validate();
  }

  return (
    <Page>
      <FormProvider value={{ nextStep, prevStep, state }}>
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
                      state?.currentStep === index || state?.currentStep >= index ? "active" : ""
                    }`}
                  >
                    {state?.currentStep <= index ? index + 1 : <FontAwesomeIcon icon="check" />}
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
        <section className="steps-form-wrapper">
          <header className="steps-form__header">
            <h1>Ficha de identificación del inversionista</h1>
            <h1>Persona Jurídica</h1>
          </header>

            {getStepComponent()}
            {/* <DatosInstitucionStep /> */}
            {/* <EnterpriseIdentificationStep /> */}
            {/* <FinancialInformationStep /> */}
            {/* <InvestorProfileStep /> */}
            {/* <ProductInformationStep /> */}
            {/* <AcceptContractStep /> */}
            {/* <FinalStep /> */}
            {/* <Loader /> */}


          <footer className="steps-form__footer">
            <button className="historia__button" onClick={prevStep}>Regresar</button>
            <button className="historia__button" onClick={handleNextStep}>Siguiente</button>
          </footer>
        </section>
      <section style={{ width: '100%' }}>
        <LegalEntityFormPdf />
      </section>
      </FormProvider>
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

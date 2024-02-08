import React, { useEffect } from "react";
import MaximizaLogo from "../assets/images/logo-maximiza.svg";
import { useFormContext } from "../context/formContext";
import "../assets/scss/pages/planilla.scss";

const FinancialInformationFields = (props) => {
  const { formData } = useFormContext();
  const options = ["stockholder", "legalRepresentative"];

  if (!options.includes(props.field)) return null;
  
  const selected = formData.financialInformation.financialInformation[props.field];
  const MAX_LENGTH = 3;
  const isStockholder = props.field === "stockholder";
  const stockholderHeaders = ["Nombre", "Documento de identidad", "Porcentaje accionario", "Cargo", "ES PEP", "Relacionado con PEP"];
  const legalHeaders = ["Nombre", "Documento de identidad", "Cargo", "Condición", "ES PEP", "Relacionado con PEP"];
  const defaultFields = {
    name: "",
    dni: "",
    sharePercentage: "",
    cargo: "",
    esPep: "",
    relatedWithPep: "",
  };
  const legalDefaultFields = {
    name: "",
    dni: "",
    cargo: "",
    condition: "",
    esPep: "",
    relatedWithPep: "",
  };

  const emptyFields = new Array(MAX_LENGTH - selected.length).fill(isStockholder ? defaultFields : legalDefaultFields);
  const fields = [...selected, ...emptyFields];

  let Headers;
  let Content;

  if (isStockholder) {
    Headers = stockholderHeaders.map((header) => (
      <React.Fragment key={header}>
        <div className="spreadsheet__item">
          <div>{header}: </div>
        </div>
      </React.Fragment>
    ));

    Content = fields.map((field, index) => (
      <React.Fragment key={index}>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.name}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.dni}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.sharePercentage}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.cargo}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.esPep}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.relatedWithPep}</div>
        </div> 
      </React.Fragment>
    ))
  } else {
    Headers = legalHeaders.map((header) => (
      <React.Fragment key={header}>
        <div className="spreadsheet__item">
          <div>{header}: </div>
        </div>
      </React.Fragment>
    ));
    Content = fields.map((field, index) => (
      <React.Fragment key={index}>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.name}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.dni}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.cargo}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.condition}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.esPep}</div>
        </div>
        <div className="spreadsheet__item min-h">
          <div className="content">{field.relatedWithPep}</div>
        </div> 
      </React.Fragment>
    ))
  }

  return (
    <div className="spreadsheet__economic-section">
      <Headers />
      <Content />
      {/* <div className="spreadsheet__item">
        <div>Nombre: </div>
      </div>
      <div className="spreadsheet__item">
        <div>Documento de identidad: </div>
      </div>
      <div className="spreadsheet__item">
        <div>Porcentaje accionario: </div>
      </div>
      <div className="spreadsheet__item">
        <div>Cargo: </div>
      </div>
      <div className="spreadsheet__item">
        <div>ES PEP: </div>
      </div>
      <div className="spreadsheet__item">
        <div>Relacionado con PEP: </div>
      </div> */}
      {/* {fields.map((field, index) => (
        <React.Fragment key={index}>
          <div className="spreadsheet__item min-h">
            <div className="content">{field.name}</div>
          </div>
          <div className="spreadsheet__item min-h">
            <div className="content">{field.dni}</div>
          </div>
          <div className="spreadsheet__item min-h">
            <div className="content">{field.sharePercentage}</div>
          </div>
          <div className="spreadsheet__item min-h">
            <div className="content">{field.cargo}</div>
          </div>
          <div className="spreadsheet__item min-h">
            <div className="content">{field.esPep}</div>
          </div>
          <div className="spreadsheet__item min-h">
            <div className="content">{field.relatedWithPep}</div>
          </div> 
        </React.Fragment>
      ))} */}
      {/* <div className="spreadsheet__item min-h">
        <div className="content">{formData.financialInformation.financialInformation.stockholder[0].dni}</div>
      </div>
      <div className="spreadsheet__item min-h">
        <div className="content">{formData.financialInformation.financialInformation.stockholder[0].sharePercentage}</div>
      </div>
      <div className="spreadsheet__item min-h">
        <div className="content">{formData.financialInformation.financialInformation.stockholder[0].cargo}</div>
      </div>
      <div className="spreadsheet__item min-h">
        <div className="content">{formData.financialInformation.financialInformation.stockholder[0].esPep}</div>
      </div>
      <div className="spreadsheet__item min-h">
        <div className="content">{formData.financialInformation.financialInformation.stockholder[0].relatedWithPep}</div>
      </div> */}
    </div>
  )
}

const PoliticalPersonFields = (props) => {
  const { formData } = useFormContext();
  const { politicalPerson } = formData.financialInformation.financialInformation;
  const MAX_LENGTH = 3;
  const defaultFields = {
    name: "",
    cargo: "",
    country: "",
    pepIdentification: "",
  };
  const emptyFields = new Array(MAX_LENGTH - politicalPerson.length).fill(defaultFields);
  const fields = [...politicalPerson, ...emptyFields];

  return (
    <div className="spreadsheet__column-wrapper">
      <div className="spreadsheet__col">
        Persona expuesta políticamente
      </div>
      <div className="spreadsheet__content">
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>
              Nombre de la institución o ente de adscripción:
            </div>
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Cargo que desempeña: </div>
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>País: </div>
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>
              Identificación del pep en caso de relacionado:
            </div>
          </div>
        </div>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.name}</div>
              </div>
            </div>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.cargo}</div>
              </div>
            </div>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.country}</div>
              </div>
            </div>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.pepIdentification}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const ClientsAndProvidersFields = (props) => {
  const { formData } = useFormContext();
  const { providers, clients } = formData.financialInformation.financialInformation;
  const MAX_LENGTH = 3;
  const defaultFields = {
    name: "",
    location: "",
  };
  const clientsEmptyFields = new Array(MAX_LENGTH - clients.length).fill(defaultFields);
  const providersEmptyFields = new Array(MAX_LENGTH - providers.length).fill(defaultFields);
  const clientsFields = [...clients, ...clientsEmptyFields];
  const providersFields = [...providers, ...providersEmptyFields];
  const fields = [providersFields, clientsFields];

  return (
    <React.Fragment>
      <div className="spreadsheet__content">
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Nombre o razón social: </div>
            {/* <div className="content">{formData.financialInformation.providers[0].name}</div> */}
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Ubicación: </div>
            {/* <div className="content">{formData.financialInformation.providers[0].location}</div> */}
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Nombre o razón social: </div>
            {/* <div className="content">{formData.financialInformation.clients[0].name}</div> */}
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Ubicación: </div>
            {/* <div className="content">{formData.financialInformation.clients[0].location}</div> */}
          </div>
        </div>
      </div>

      {new Array(3).fill().map((_, index) => (
        <div className="spreadsheet__content">
          <div className="spreadsheet__item">
            <div className="spreadsheet__form-item">
              <div className="content">{providersFields[index].name}</div>
            </div>
          </div>
          <div className="spreadsheet__item">
            <div className="spreadsheet__form-item">
              <div className="content">{providersFields[index].location}</div>
            </div>
          </div>
          <div className="spreadsheet__item">
            <div className="spreadsheet__form-item">
              <div className="content">{clientsFields[index].name}</div>
            </div>
          </div>
          <div className="spreadsheet__item">
            <div className="spreadsheet__form-item">
              <div className="content">{clientsFields[index].location}</div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

const RelatedCompaniesFields = (props) => {
  const { formData } = useFormContext();
  const { relatedCompanies } = formData.financialInformation;
  const MAX_LENGTH = 3;
  const defaultFields = {
    name: "",
    economicActivity: "",
    taxInformationRegistry: "",
  };
  const emptyFields = new Array(MAX_LENGTH - relatedCompanies.length).fill(defaultFields);
  const fields = [...relatedCompanies, ...emptyFields];

  return (
    <div className="spreadsheet__column-wrapper">
      <div className="spreadsheet__col spreadsheet__col-border">
        Empresas relacionadas
      </div>
      <div className="spreadsheet__content spreadsheet__content--1-2">
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Nombre o razón social: </div>
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Actividad económica: </div>
          </div>
        </div>
        <div className="spreadsheet__item">
          <div className="spreadsheet__form-item">
            <div>Registro de información fiscal: </div>
          </div>
        </div>
        {fields.map((field, index) => (
          <React.Fragment>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.name}</div>
              </div>
            </div>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.economicActivity}</div>
              </div>
            </div>
            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div className="content">{field.taxInformationRegistry}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const LegalEntityFormPdf = React.forwardRef((props, ref) => {
  const { formData } = useFormContext();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="spreadsheet" ref={ref}>
      <div className="page-break">
        <header className="spreadsheet__header">
          <img className="spreadsheet__image" src={MaximizaLogo} alt="logo" />

          <h5 className="spreadsheet__main-title">
            Ficha de identificación del inversionista persona jurídica
          </h5>
        </header>
        {/* Datos basicos */}
        <div className="spreadsheet__section page-break">
          <div className="spreadsheet__container">
            <div className="spreadsheet__section1">
              <div className="spreadsheet__item border-l-rounded">
                <div className="spreadsheet__form-item">
                  <div>Lugar: </div>
                  <div className="content">{formData.institutionData.place}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Fechas de elaboración: </div>
                  <div className="content">{formData.institutionData.productionDate}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Moneda: </div>
                  <div className="content">{formData.institutionData.place}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector valores */}
        <div className="spreadsheet__section page-break">
          <h5 className="spreadsheet__title">
            DATOS DE LA INSTITUCIÓN DEL SECTOR VALORES
          </h5>
          <div className="spreadsheet__container">
            <div className="spreadsheet__section2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>
                    Nombre de casa de bolsa o sociedades de corretaje de valores:
                  </div>
                  <div className="content">Maximiza Casa de Bolsa, C.A.</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Registro información fiscal:</div>
                  <div className="content">Rif: J-300254492</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Dirección: </div>
                  <div className="content">Av. Francisco de Miranda. Edificio Torre Europa. Piso 3. Ofic 3-B. Urb. Campo Alegre. Caracas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Datos identificacion de la empresa */}
        <div className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            DATOS DE IDENTIFICACIÓN DE LA EMPRESA
          </h5>
          <div className="spreadsheet__identification">
            <div className="spreadsheet__identification-line1">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Registro de información ﬁscal: </div>
                  <div className="content">{formData.enterpriseIdentification.taxInformationRegistration}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Razón Social: </div>
                  <div className="content">{formData.enterpriseIdentification.socialReason}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Nombre Comercial: </div>
                  <div className="content">{formData.enterpriseIdentification.tradename}</div>
                </div>
              </div>
            </div>
            <div className="spreadsheet__identification-line2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Actividad económica: </div>
                  <div className="content" style={{ fontSize: formData.enterpriseIdentification.economicActivity.length > 15 ? "8px" : "10px" }}>
                    {formData.enterpriseIdentification.economicActivity}
                  </div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Actividad especiﬁca: </div>
                  <div className="content">{formData.enterpriseIdentification.specificActivity}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col spreadsheet__col-border">
                Datos del registro
              </div>
              <div className="spreadsheet__content">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Nombre del registro: </div>
                    <div className="content">{formData.enterpriseIdentification.registerData.recordName}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Número: </div>
                    <div className="content">{formData.enterpriseIdentification.registerData.number}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Tomo: </div>
                    <div className="content">{formData.enterpriseIdentification.registerData.took}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Folio: </div>
                    <div className="content">{formData.enterpriseIdentification.registerData.fol}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Fecha: </div>
                    <div className="content">{formData.enterpriseIdentification.registerData.date}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Capital social: </div>
                    <div className="content">{formData.enterpriseIdentification.registerData.socialCapital}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col spreadsheet__col-border">
                Última modiﬁcación
              </div>
              <div className="spreadsheet__content">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Nombre del registro: </div>
                    <div className="content">{formData.enterpriseIdentification.lastModification.recordName}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Número: </div>
                    <div className="content">{formData.enterpriseIdentification.lastModification.number}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Tomo: </div>
                    <div className="content">{formData.enterpriseIdentification.lastModification.took}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Folio: </div>
                    <div className="content">{formData.enterpriseIdentification.lastModification.fol}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Fecha: </div>
                    <div className="content">{formData.enterpriseIdentification.lastModification.date}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Capital social: </div>
                    <div className="content">{formData.enterpriseIdentification.lastModification.socialCapital}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col">Entes Públicos</div>
              <div className="spreadsheet__content spreadsheet__content--2">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Número de gaceta oﬁcial: </div>
                    <div className="content">{formData.enterpriseIdentification.officialGazetteNumber}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Fecha: </div>
                    <div className="content">{formData.enterpriseIdentification.publicEntitiesDate}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Autoridad / Ente de adscripción: </div>
                    <div className="content">{formData.enterpriseIdentification.authority}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Código ONT: </div>
                    <div className="content">{formData.enterpriseIdentification.ontCode}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__identification-line1">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Teléfonos: </div>
                  <div className="content">{formData.enterpriseIdentification.publicPhones}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Sitio Web: </div>
                  <div className="content">{formData.enterpriseIdentification.website}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Correo electrónico: </div>
                  <div className="content">{formData.enterpriseIdentification.publicEntityEmail}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <div>Dirección: </div>
                <div className="content">{formData.enterpriseIdentification.publicEntityAddress}</div>
              </div>
            </div>

            <div className="spreadsheet__identification-line1">
              <div className="spreadsheet__item border-bl-rounded">
                <div className="spreadsheet__form-item">
                  <div>Teléfonos: </div>
                  <div className="content">{formData.enterpriseIdentification.publicPhones2}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Sitio Web: </div>
                  <div className="content">{formData.enterpriseIdentification.website2}</div>
                </div>
              </div>
              <div className="spreadsheet__item border-br-rounded">
                <div className="spreadsheet__form-item">
                  <div>Correo electrónico: </div>
                  <div className="content">{formData.enterpriseIdentification.publicEntityEmail2}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Datos economico financieros */}
        <div className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            INFORMACIÓN ECONÓMICO FINANCIERA DE LA EMPRESA
          </h5>
          <div className="spreadsheet__item text-center">
            Accionista / Junta directiva
          </div>
          <div className="spreadsheet__economic">
            <FinancialInformationFields field="stockholder" />

            <div className="spreadsheet__item text-center">
              Representante(s) legal(es) / Autorizados para realizar operaciones
              bursatiles
            </div>

            <FinancialInformationFields field="legalRepresentative" />

            {/* <div className="spreadsheet__economic-section">
              <div className="spreadsheet__item">
                <div>Nombre: </div>
              </div>
              <div className="spreadsheet__item">
                <div>Documento de identidad: </div>
              </div>
              <div className="spreadsheet__item">
                <div>Porcentaje accionario: </div>
              </div>
              <div className="spreadsheet__item">
                <div>Cargo: </div>
              </div>
              <div className="spreadsheet__item">
                <div>ES PEP: </div>
              </div>
              <div className="spreadsheet__item">
                <div>Relacionado con PEP: </div>
              </div>
              <div className="spreadsheet__item min-h">
                <div className="content">{formData.financialInformation.financialInformation.legalRepresentative[0].name}</div>
              </div>
              <div className="spreadsheet__item min-h">
                <div className="content">{formData.financialInformation.financialInformation.legalRepresentative[0].dni}</div>
              </div>
              <div className="spreadsheet__item min-h">
                <div className="content">{formData.financialInformation.financialInformation.legalRepresentative[0].sharePercentage}</div>
              </div>
              <div className="spreadsheet__item min-h">
                <div className="content">{formData.financialInformation.financialInformation.legalRepresentative[0].cargo}</div>
              </div>
              <div className="spreadsheet__item min-h">
                <div className="content">{formData.financialInformation.financialInformation.legalRepresentative[0].esPep}</div>
              </div>
              <div className="spreadsheet__item min-h">
                <div className="content">{formData.financialInformation.financialInformation.legalRepresentative[0].relatedWithPep}</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="page-break">
        {/* Información economico financiera de la empresa */}
        <div style={{}} className="spreadsheet__section page-break">
          <h5 className="spreadsheet__title">
            INFORMACIÓN ECONÓMICO FINANCIERA DE LA EMPRESA
          </h5>
          <div className="spreadsheet__item text-center">
            Accionista / Junta directiva
          </div>
          <div className="spreadsheet__economic2">
            <PoliticalPersonFields />
            {/* <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col">
                Persona expuesta políticamente
              </div>
              <div className="spreadsheet__content">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>
                      Nombre de la institución o ente de adscripción:
                    </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Cargo que desempeña: </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>País: </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>
                      Identificación del pep en caso de relacionado:
                    </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.financialInformation.politicalPerson[0].name}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.financialInformation.politicalPerson[0].cargo}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.financialInformation.politicalPerson[0].country}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.financialInformation.politicalPerson[0].pepIdentification}</div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="spreadsheet__economic2-section">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>N° de subsidiarias / Oﬁcinas: </div>
                  <div className="content">{formData.financialInformation.financialInformation.officeNumber}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>País con mayor presencia: </div>
                  <div className="content">{formData.financialInformation.countryWithGreaterPresence}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>N° de empleados: </div>
                  <div className="content">{formData.financialInformation.employeesNumber}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Ventas mensuales: </div>
                  <div className="content">{formData.financialInformation.monthlySales}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Ingresos mensuales: </div>
                  <div className="content">{formData.financialInformation.monthlyIncome}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Egresos mensuales: </div>
                  <div className="content">{formData.financialInformation.monthlyExpenses}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__item text-center">
              Última declaración ISLR:
            </div>

            <div className="spreadsheet__content spreadsheet__content--2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Año: </div>
                  <div className="content">{formData.financialInformation.islrYear}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Monto: </div>
                  <div className="content">{formData.financialInformation.islrAmount}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__content spreadsheet__content--2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item text-center">
                  <div>Principales Proveedores </div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item text-center">
                  <div>Principales Clientes </div>
                </div>
              </div>
            </div>

            <ClientsAndProvidersFields />

            {/* <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Nombre o razón social: </div>
                  <div className="content">{formData.financialInformation.providers[0].name}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Ubicación: </div>
                  <div className="content">{formData.financialInformation.providers[0].location}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Nombre o razón social: </div>
                  <div className="content">{formData.financialInformation.clients[0].name}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Ubicación: </div>
                  <div className="content">{formData.financialInformation.clients[0].location}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div className="content"></div>
                </div>
              </div>
            </div> */}

            <RelatedCompaniesFields />
            {/* <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col spreadsheet__col-border">
                Empresas relacionadas
              </div>
              <div className="spreadsheet__content spreadsheet__content--1-2">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Nombre o razón social: </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Actividad económica: </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Registro de información fiscal: </div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.relatedCompanies[0].name}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.relatedCompanies[0].economicActivity}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content">{formData.financialInformation.relatedCompanies[0].taxInformationRegistry}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col border-bl-rounded">
                Referencias bancarias
              </div>
              <div className="spreadsheet__content spreadsheet__content--2">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Institución del sector bancario: </div>
                    <div className="content">{formData.financialInformation.bankReferencesInstitution}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Nombre del producto: </div>
                    <div className="content">{formData.financialInformation.bankReferencesProductName}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Número del producto: </div>
                    <div className="content">{formData.financialInformation.bankReferencesProductNumber}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div>Cifras promedio: </div>
                    <div className="content">{formData.financialInformation.bankReferencesAverage}</div>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
                <div className="spreadsheet__item border-br-rounded">
                  <div className="spreadsheet__form-item">
                    <div className="content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Datos economico financieros */}
        <div className="spreadsheet__section page-break" style={{}}>
          <h5 className="spreadsheet__title">
            INFORMACIÓN DEL PRODUCTO O SERVICIO BURSATIL
          </h5>
          <div className="spreadsheet__services">
            <div className="spreadsheet__services-section">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Nombre del producto: </div>
                  <div className="content">{formData.productInformation.productName}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Monto del producto adquirido: </div>
                  <div className="content">{formData.productInformation.productAmount}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Moneda: </div>
                  <div className="content">{formData.productInformation.currency}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__item text-center">
              Información sobre movilización de fondos
            </div>

            <div className="spreadsheet__services-section-1">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Monto promedio mensual: </div>
                  <div className="content">{formData.productInformation.monthlyAmount}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>
                    N° transacciones por transferencias:
                  </div>
                  <div className="content">{formData.productInformation.numberOfTransactionsByTransfers}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>
                    Enviar o recibir fondos del exterior:
                  </div>
                  <div className="content">{formData.productInformation.sendOrReceiveFundsFromAbroad}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__services-section-2">
              {/* <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div> */}
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Compra: </div>
                  <div className="content">{formData.productInformation.purchase}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Venta: </div>
                  <div className="content">{formData.productInformation.sale}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>País origen: </div>
                  <div className="content">{formData.productInformation.originCountry}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>País destino: </div>
                  <div className="content">{formData.productInformation.destinationCountry}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Uso moneda virtual: </div>
                  <div className="content">{formData.productInformation.virtualCurrencyUse}</div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__services-section">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <div>
                    Motivos por los cuales solicita los servicios:{" "}
                  </div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <div>Origen de los fondos: </div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <div>Destino de los fondos: </div>
                </div>
              </div>
              <div className="spreadsheet__item border-bl-rounded">
                <div className="spreadsheet__form-item min-h">
                  <div className="content">{formData.productInformation.motives}</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <div className="content">{formData.productInformation.fundsSource}</div>
                </div>
              </div>
              <div className="spreadsheet__item border-br-rounded">
                <div className="spreadsheet__form-item min-h">
                  <div className="content">{formData.productInformation.fundsDestination}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-break">
        {/* Aceptacion de contrato */}
        <div
          style={{ borderWidth: "2px" }}
          className="spreadsheet__section page-break"
        >
          <h5 className="spreadsheet__title">
            ACEPTACIÓN DEL CONTRATO DE CUENTA DE CORRETAJE BURSÁTIL POR PARTE
            DEL INVERSOR
          </h5>

          <p className="spreadsheet__contract">
            Con la firma del presente documento, el cliente expresamente
            conviene y acepta que las operaciones financieras y bursátiles
            celebradas entre Maximiza y el cliente se regirán por el contrato de
            cuenta corretaje bursátil, del cual el presente anexo forma parte
            integrante, y el cual fue autenticado por ante la notaria pública
            sexta del municipio chacao del estado miranda, el 26 de enero del
            2007, bajo el n°56, tomo 10, de los libros de autenticación llevados
            por esa notaria, así mismo, el cliente declara haber leído y
            comprendido las operaciones objeto de los contratos que integran la
            cuenta de corretaje bursátil. De conformidad con lo establecido en
            el artículo n°41 de la providencia n° 074 publicada en gaceta
            oficial n° 41,788 de fecha 26 de junio de 2019, emanada por la
            superintendencia nacional de valores, el (los) inversor (es) declara
            (n) bajo fe de juramento que los dineros, capitales y haberes,
            valores o títulos utilizados en las operaciones, no guardan relación
            con actividades provenientes del delito legitimación de capitales u
            otros delitos previstos y sancionados en la ley orgánica juramento
            que los dineros, capitales y haberes valores o títulos utilizados en
            las operaciones, no guardan relación con actividades provenientes
            del delito legitimación capitales u otros delitos previstos y
            sancionados en la ley orgánica autoriza suficientemente a Maximiza
            casa de bolsa C.A., Para que verifique los datos aportados y que han
            sido vertidos en esta planilla, en cumplimiento a lo establecido en
            la normativa antes mencionada.
          </p>
        </div>

        {/* DECLARACIÓN JURADA */}
        <div style={{ borderWidth: "2px" }} className="spreadsheet__section">
          <h5 className="spreadsheet__title">DECLARACIÓN JURADA</h5>

          <p className="spreadsheet__contract">
            Quién suscribe declara:
            <br /> <br />
            1) Que los datos suministrados son verdaderos y autoriza a la
            institución del sector valores a verificar dicha información. <br />{" "}
            <br />
            2) Que los fondos utilizados tienen origen y destino lícitos, según
            lo previsto y sancionado en el ordenamiento jurídico vigente en la
            República Bolivariana de Venezuela. <br /> <br />
            3) Que notificará de inmediato cuando se produzcan cambios en los
            datos personales y/o en movimiento de fondos reportados. <br />
          </p>
        </div>

        {/* Sign 1 */}
        <div style={{ borderWidth: "2px" }} className="spreadsheet__section">
          <div className="spreadsheet__sign">
            <div className="spreadsheet__sign-item border-l-rounded">
              <div>Preparado por: </div>
              <div>Nombre y apellido: </div>
            </div>
            <div className="spreadsheet__sign-item">
              <div>Verificado oficial de cumplimiento: </div>
              <div>Nombre y apellido: </div>
            </div>
            <div className="spreadsheet__sign-item">
              <div>Firma de inversionista: </div>
              <div>Nombre y apellido: </div>
            </div>
            <div className="spreadsheet__sign-item border-r-rounded">
              <div>Huella dactilar: </div>
            </div>
          </div>
        </div>

        {/* PARA USO INTERNO DE MAXIMIZA CASA DE BOLSA */}
        <div style={{ borderWidth: "2px" }} className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            PARA USO INTERNO DE MAXIMIZA CASA DE BOLSA
          </h5>

          <ol className="spreadsheet__list">
            <li>
              Copia del Registro de información Fiscal (R.I.F) de la empresa.
            </li>
            <li>
              Copa de la cédula de identidad y del R.I.F del (los) representante
              legal (es) de la empresa.
            </li>
            <li>
              Copa del Documento constitutivo y las modificaciones estatutarias.
            </li>
            <li>Referencia bancaria denominada de moneda nacional.</li>
            <li>Balance general actualizado.</li>
            <li>Declaración jurada cada vez que realice una operación.</li>
            <li>Otros.</li>
          </ol>
        </div>

        <div className="simple-text">
          El Ejecutivo de Cuentas declara haberse entrevistado con el cliente,
          Quien ﬁrmó esta planilla en su presencia
        </div>

        {/* Sign 2 */}
        <div style={{ borderWidth: "2px" }} className="spreadsheet__section">
          <div className="spreadsheet__sign">
            <div className="spreadsheet__sign-item border-l-rounded">
              <div>Fecha de recepción ejecutivo: </div>
              <div></div>
            </div>
            <div className="spreadsheet__sign-item">
              <div>Nombre del ejecutivo de cuentas: </div>
              <div></div>
            </div>
            <div className="spreadsheet__sign-item">
              <div>Firma del ejecutivo de cuentas: </div>
              <div></div>
            </div>
            <div className="spreadsheet__sign-item border-r-rounded">
              <div>Pag: </div>
            </div>
          </div>
        </div>
        <span className="copy">
          Maximiza Casa de Bolsa. R.I.F. Nro. J-30025492-5
        </span>
      </div>
    </div>
  );
});

export default LegalEntityFormPdf;

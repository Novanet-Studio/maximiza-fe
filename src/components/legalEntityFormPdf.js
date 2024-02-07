import React, { useEffect } from "react";
import MaximizaLogo from "../assets/images/logo-maximiza.svg";
import { useFormContext } from "../context/formContext";
import "../assets/scss/pages/planilla.scss";

const LegalEntityFormPdf = () => {
  const { formData } = useFormContext();

  useEffect(() => {
    console.log(formData)
  }, [formData])
  
  return (
    <div className="spreadsheet">
      <header className="spreadsheet__header">
        <img className="spreadsheet__image" src={MaximizaLogo} alt="logo" />

        <h5 className="spreadsheet__main-title">
          Ficha de identificación del inversionista persona jurídica
        </h5>
      </header>

      <div className="spreadsheet__body">
        {/* Datos basicos */}
        <div className="spreadsheet__section">
          <div className="spreadsheet__container">
            <div className="spreadsheet__section1">
              <div className="spreadsheet__item border-l-rounded">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Lugar: </label>
                  <input type="text" defaultValue={formData.institutionData.place} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Fechas de elaboración: </label>
                  <input type="text" defaultValue={formData.institutionData.productionDate} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Moneda: </label>
                  <input type="text" defaultValue={formData.institutionData.place} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector valores */}
        <div className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            DATOS DE LA INSTITUCIÓN DEL SECTOR VALORES
          </h5>
          <div className="spreadsheet__container">
            <div className="spreadsheet__section2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">
                    Nombre de casa de bolsa o sociedades de corretaje de
                    valores:{" "}
                  </label>
                  <input type="text" defaultValue="Maximiza Casa de Bolsa, C.A." />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <div>Registro información fiscal:</div>
                  <div>Rif: J-300254492</div>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Dirección: </label>
                  <input
                    type="text"
                    defaultValue="Av. Francisco de Miranda. Edificio Torre Europa. Piso 3. Ofic 3-B. Urb. Campo Alegre. Caracas"
                  />
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
                  <label htmlFor="">Registro de información ﬁscal: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.taxInformationRegistration} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Razón Social: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.socialReason} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Nombre Comercial: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.tradename} />
                </div>
              </div>
            </div>
            <div className="spreadsheet__identification-line2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Actividad económica: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.economicActivity} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Actividad especiﬁca: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.specificActivity} />
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
                    <label htmlFor="">Nombre del registro: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.registerData.recordName} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Número: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.registerData.number} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Tomo: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.registerData.took} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Folio: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.registerData.fol} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Fecha: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.registerData.date} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Capital social: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.registerData.socialCapital} />
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
                    <label htmlFor="">Nombre del registro: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.lastModification.recordName} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Número: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.lastModification.number} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Tomo: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.lastModification.took} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Folio: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.lastModification.fol} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Fecha: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.lastModification.date} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Capital social: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.lastModification.socialCapital} />
                  </div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col">Entes Públicos</div>
              <div className="spreadsheet__content spreadsheet__content--2">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Número de gaceta oﬁcial: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.officialGazetteNumber} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Fecha: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.publicEntitiesDate} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Autoridad / Ente de adscripción: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.authority} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Código ONT: </label>
                    <input type="text" defaultValue={formData.enterpriseIdentification.ontCode} />
                  </div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__identification-line1">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Teléfonos: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.publicPhones} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Sitio Web: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.website} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Correo electrónico: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.publicEntityEmail} />
                </div>
              </div>
            </div>

            <div className="spreadsheet__item">
              <div className="spreadsheet__form-item">
                <label htmlFor="">Dirección: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.publicEntityAddress} />
              </div>
            </div>

            <div className="spreadsheet__identification-line1">
              <div className="spreadsheet__item border-bl-rounded">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Teléfonos: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.publicPhones} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Sitio Web: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.website} />
                </div>
              </div>
              <div className="spreadsheet__item border-br-rounded">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Correo electrónico: </label>
                  <input type="text" defaultValue={formData.enterpriseIdentification.publicEntityEmail} />
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
            Accionistar / Junta directiva
          </div>
          <div className="spreadsheet__economic">
            <div className="spreadsheet__economic-section">
              <div className="spreadsheet__item">
                <label htmlFor="">Nombre: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Documento de identidad: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Porcentaje accionario: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Cargo: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">ES PEP: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Relacionado con PEP: </label>
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.stockholder[0].name}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.stockholder[0].dni}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.stockholder[0].sharePercentage}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.stockholder[0].cargo}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.stockholder[0].esPep}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.stockholder[0].relatedWithPep}
              </div>
            </div>

            <div className="spreadsheet__item text-center">
              Representante(s) legal(es) / Autorizados para realizar operaciones
              bursatiles
            </div>

            <div className="spreadsheet__economic-section">
              <div className="spreadsheet__item">
                <label htmlFor="">Nombre: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Documento de identidad: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Porcentaje accionario: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Cargo: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">ES PEP: </label>
              </div>
              <div className="spreadsheet__item">
                <label htmlFor="">Relacionado con PEP: </label>
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.legalRepresentative[0].name}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.legalRepresentative[0].dni}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.legalRepresentative[0].sharePercentage}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.legalRepresentative[0].cargo}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.legalRepresentative[0].esPep}
              </div>
              <div className="spreadsheet__item min-h">
                {formData.financialInformation.financialInformation.legalRepresentative[0].relatedWithPep}
              </div>
            </div>
          </div>
        </div>

        {/* Información economico financiera de la empresa */}
        <div className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            INFORMACIÓN ECONÓMICO FINANCIERA DE LA EMPRESA
          </h5>
          <div className="spreadsheet__item text-center">
            Accionista / Junta directiva
          </div>
          <div className="spreadsheet__economic2">
            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col spreadsheet__col-border">
                Datos del registro
              </div>
              <div className="spreadsheet__content">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">
                      Nombre de la institución o ente de adscripción:{" "}
                    </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Cargo que desempeña: </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">País: </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">
                      Identificación del pep en caso de relacionado:
                    </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.financialInformation.politicalPerson[0].name} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.financialInformation.politicalPerson[0].cargo} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.financialInformation.politicalPerson[0].country} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.financialInformation.politicalPerson[0].pepIdentification} />
                  </div>
                </div>
                {/* <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="spreadsheet__economic2-section">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">N° de subsidiarias / Oﬁcinas: </label>
                  <input type="text" defaultValue={formData.financialInformation.financialInformation.officeNumber} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">País con mayor presencia: </label>
                  <input type="text" defaultValue={formData.financialInformation.countryWithGreaterPresence} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">N° de empleados: </label>
                  <input type="text" defaultValue={formData.financialInformation.employeesNumber} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Ventas mensuales: </label>
                  <input type="text" defaultValue={formData.financialInformation.monthlySales} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Ingresos mensuales: </label>
                  <input type="text" defaultValue={formData.financialInformation.monthlyIncome} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Egresos mensuales: </label>
                  <input type="text" defaultValue={formData.financialInformation.monthlyExpenses} />
                </div>
              </div>
            </div>

            <div className="spreadsheet__item text-center">
              Última declaración ISLR:
            </div>

            <div className="spreadsheet__content spreadsheet__content--2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Año: </label>
                  <input type="text" defaultValue={formData.financialInformation.islrYear} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Monto: </label>
                  <input type="text" defaultValue={formData.financialInformation.islrAmount} />
                </div>
              </div>
            </div>

            <div className="spreadsheet__content spreadsheet__content--2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item text-center">
                  <label htmlFor="">Principales Proveedores </label>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item text-center">
                  <label htmlFor="">Principales Clientes </label>
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Nombre o razón social: </label>
                  <input type="text" defaultValue={formData.financialInformation.providers[0].name} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Ubicación: </label>
                  <input type="text" defaultValue={formData.financialInformation.providers[0].location} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Nombre o razón social: </label>
                  <input type="text" defaultValue={formData.financialInformation.clients[0].name} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Ubicación: </label>
                  <input type="text" defaultValue={formData.financialInformation.clients[0].location}  />
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
            </div>

            <div className="spreadsheet__content">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
            </div>

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col spreadsheet__col-border">
                Empresas relacionadas
              </div>
              <div className="spreadsheet__content spreadsheet__content--1-2">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Nombre o razón social: </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Actividad económica: </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Registro de información fiscal: </label>
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.relatedCompanies[0].name} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.relatedCompanies[0].economicActivity} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue={formData.financialInformation.relatedCompanies[0].taxInformationRegistry} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="spreadsheet__column-wrapper">
              <div className="spreadsheet__col border-bl-rounded">
                Referencias bancarias
              </div>
              <div className="spreadsheet__content spreadsheet__content--2">
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Institución del sector bancario: </label>
                    <input type="text" defaultValue={formData.financialInformation.bankReferencesInstitution} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Nombre del producto: </label>
                    <input type="text" defaultValue={formData.financialInformation.bankReferencesProductName} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Número del producto: </label>
                    <input type="text" defaultValue={formData.financialInformation.bankReferencesProductNumber} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Cifras promedio: </label>
                    <input type="text" defaultValue={formData.financialInformation.bankReferencesAverage} />
                  </div>
                </div>
                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="spreadsheet__item border-br-rounded">
                  <div className="spreadsheet__form-item">
                    <input type="text" defaultValue="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Datos economico financieros */}
        <div className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            INFORMACIÓN DEL PRODUCTO O SERVICIO BURSATIL
          </h5>
          <div className="spreadsheet__services">
            <div className="spreadsheet__services-section">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Nombre del producto: </label>
                  <input type="text" defaultValue={formData.productInformation.productName} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Monto del producto adquirido: </label>
                  <input type="text" defaultValue={formData.productInformation.productAmount} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Moneda: </label>
                  <input type="text" defaultValue={formData.productInformation.currency} />
                </div>
              </div>
            </div>

            <div className="spreadsheet__item text-center">
              Información sobre movilización de fondos
            </div>

            <div className="spreadsheet__services-section-1">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Monto promedio mensual: </label>
                  <input type="text" defaultValue={formData.productInformation.monthlyAmount} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">
                    N° transacciones por transferencias:{" "}
                  </label>
                  <input type="text" defaultValue={formData.productInformation.numberOfTransactionsByTransfers} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">
                    Enviar o recibir fondos del exterior:{" "}
                  </label>
                  <input type="text" defaultValue={formData.productInformation.sendOrReceiveFundsFromAbroad} />
                </div>
              </div>
            </div>

            <div className="spreadsheet__services-section-2">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Compra: </label>
                  <input type="text" defaultValue={formData.productInformation.purchase} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Venta: </label>
                  <input type="text" defaultValue={formData.productInformation.sale} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">País origen: </label>
                  <input type="text" defaultValue={formData.productInformation.originCountry} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">País destino: </label>
                  <input type="text" defaultValue={formData.productInformation.destinationCountry} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item">
                  <label htmlFor="">Uso moneda virtual: </label>
                  <input type="text" defaultValue={formData.productInformation.virtualCurrencyUse} />
                </div>
              </div>
            </div>

            <div className="spreadsheet__services-section">
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <label htmlFor="">
                    Motivos por los cuales solicita los servicios:{" "}
                  </label>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <label htmlFor="">Origen de los fondos: </label>
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <label htmlFor="">Destino de los fondos: </label>
                </div>
              </div>
              <div className="spreadsheet__item border-bl-rounded">
                <div className="spreadsheet__form-item min-h">
                  <input type="text" defaultValue={formData.productInformation.motives} />
                </div>
              </div>
              <div className="spreadsheet__item">
                <div className="spreadsheet__form-item min-h">
                  <input type="text" defaultValue={formData.productInformation.fundsSource} />
                </div>
              </div>
              <div className="spreadsheet__item border-br-rounded">
                <div className="spreadsheet__form-item min-h">
                  <input type="text" defaultValue={formData.productInformation.fundsDestination} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aceptacion de contrato */}
        <div style={{ borderWidth: "2px" }} className="spreadsheet__section">
          <h5 className="spreadsheet__title">
            ACEPTACIÓN DEL CONTRATO DE CUENTA DE CORRETAJE BURSÁTIL POR PARTE
            DEL INVERSOR
          </h5>

          <p className="spreadsheet__contract">
            Aceptación contrato de cuenta de corretaje bursátilexpresamente por
            parte del inversor con la firma delque presente documento,
            ﬁnancieras el cliente expresamente Con la ﬁrmadel del presente
            documento , el cliente conviene y acepta las operaciones y
            bursátiles celebra- conviene acepta que las y bursátiles celebradas
            entre maximiza y elbursátil, cliente sedel regirán contrato de
            cuenta corretaje das entrey maximiza y eloperaciones cliente
            sefinancieras regirán por el contrato de cuenta corretaje cualpor el
            elpresente anexo forma parte bursátil, del ycual el presente anexo
            forma parte integrante, y pública cual fue autenticado por ante
            lachacao Notaría del Pública sexta del Municipio deldel estado
            integrante, el cual fue autenticado por ante la notaria sexta del
            municipio estado miranda, el 26Chacao de enero 2007, Miranda, 26tomo
            de Enero del los 2007, bajode el N°56, tomo 10, de los libros deesa
            autenticación llevados porel esa notaría, así mismo, el cliente
            haber bajo el n°el56, 10, de libros autenticacion llevados por
            notaria, asi mismo, cliente declara haber leido ydeclara comprendido
            leído y comprendido las operaciones objeto de los contratos que
            integran la cuenta de corretaje bursátil. De conformidad con lo
            establecido en las las operaciones objeto de los contratos que
            integran la cuenta de corretaje bursátil. De conformidad con lo
            establecido en el articulo normas relativas a la administración y
            fiscalización de los riesgos relacionados con los delitos de
            legitimación de los capitales, financiamiento al n°41 de la
            providencia n° 074 publicada en gaceta oﬁcial n° 41,788 de fecha 26
            de junio de 2019, emanada por la superintendecia terrorismo,
            financiamiento de la proliferación de armas de destrucción masiva y
            otros ilícitos, aplicables a los sujetos regulados por la nacional
            de valores, el (los) inversor (es) declara (n) bajo fe de juramento
            que los dineros, capitales y haberes, valores o titulos utilizados
            Superintendencia Nacional de Valores, por lo que el (los)
            inversor(es) declara(n) bajo fe de juramento que los dineros,
            capitales y haberes, valores en las operaciones, no guardan relacion
            con actividades provenientes del delito de legitimacion de capitales
            u otros delitos previstos y o títulos utilizados en las operaciones,
            no guardan relación con actividades provenientes del delito de
            legitimación de capitales u otros delitos sancionados en la ley
            orgánica juramento que los dineros, capitales y haberes, valores o
            titulos utilizados en las operaciones, no previstos y sancionados en
            la ley orgánica contra la delincuencia organizada y financiamiento
            al terrorismo. Así mismo, el inversor expresamente guardan relacion
            con actividades provenientes del delito de legitimacion de capitales
            u otros delitos previstos y sancionados en la ley declara que la
            información suministrada es cierta y completa y que refleja con
            exactitud la realidad legal y financiera del cliente y, autoriza
            orgánica autoriza suﬁcientemente a maximiza casa bolsa,los C.A.,
            Para que veriﬁque lossido datos aportados que han sido vertidos
            suficientemente a Maximiza Casa de Bolsa, C.A., para quede verifique
            datos aportados y que han vertidos en estayplanilla, señalados en la
            en esta planilla,N°209 en cumplimiento a lo establecido en laesta
            normativa providencia y las demás disposiciones que tutelan materia.
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
};

export default LegalEntityFormPdf;

import React from "react";
import Logo from "../assets/images/logo-maximiza.svg"
import Seo from "../components/seo";
import "../assets/scss/pages/planilla.scss";

const Planilla = ({ data }) => {

  return (
      <section className="principal">
        <div className="planilla">
          <header className="planilla__cabecera">
            <img className="header__imagen" src={Logo} alt="logo" />

            <h5 className="planilla__titulo">Ficha de identificación del inversionista persona jurídica</h5>
          </header>

          <div className="planilla__cuerpo">

            {/* Datos basicos */}
            <div className="spreadsheet__section">
              <div className="spreadsheet__container">
                <div className="spreadsheet__section1">
                  <div className="spreadsheet__item border-l-rounded">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Lugar: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Fechas de elaboración:  </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Moneda: </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector valores */}
            <div className="spreadsheet__section">
              <h5 className="spreadsheet__title">DATOS DE LA INSTITUCIÓN DEL SECTOR VALORES</h5>
              <div className="spreadsheet__container">
                <div className="spreadsheet__section2">
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Nombre de casa de bolsa o sociedades de corretaje de valores: </label>
                      <input type="text" value="Maximiza Casa de Bolsa, C.A." />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Registro información fiscal: </label>
                      <input type="text" value="Rif: J-300254492" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Dirección: </label>
                      <input type="text"  value="Av. Francisco de Miranda. Edificio Torre Europa. Piso 3. Ofic 3-B. Urb. Campo Alegre. Caracas" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos identificacion de la empresa */}
            <div className="spreadsheet__section">
              <h5 className="spreadsheet__title">DATOS DE IDENTIFICACIÓN DE LA EMPRESA</h5>
              <div className="spreadsheet__identification">
                <div className="spreadsheet__identification-line1">
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Registro de información ﬁscal: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Razón Social: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Nombre Comercial: </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="spreadsheet__identification-line2">
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Actividad económica: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Actividad especiﬁca: </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="spreadsheet__column-wrapper">
                  <div className="spreadsheet__col  spreadsheet__col-border">
                    Datos del registro
                  </div>
                  <div className="spreadsheet__content">
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Nombre del registro: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Número: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Tomo: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Folio: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Fecha: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Capital social: </label>
                        <input type="text" />
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
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Número: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Tomo: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Folio: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Fecha: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Capital social: </label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spreadsheet__column-wrapper">
                  <div className="spreadsheet__col">
                    Entes Públicos
                  </div>
                  <div className="spreadsheet__content spreadsheet__content--2">
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Número de gaceta oﬁcial: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Fecha: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Autoridad / Ente de adscripción: </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="spreadsheet__item">
                      <div className="spreadsheet__form-item">
                        <label htmlFor="">Código ONT: </label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spreadsheet__identification-line1">
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Teléfonos: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Sitio Web: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Correo electrónico: </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="spreadsheet__item">
                  <div className="spreadsheet__form-item">
                    <label htmlFor="">Dirección: </label>
                    <input type="text" />
                  </div>
                </div>

                <div className="spreadsheet__identification-line1">
                  <div className="spreadsheet__item border-bl-rounded">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Teléfonos: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Sitio Web: </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="spreadsheet__item border-br-rounded">
                    <div className="spreadsheet__form-item">
                      <label htmlFor="">Correo electrónico: </label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Datos economico financieros */}
            <div className="spreadsheet__section">
              <h5 className="spreadsheet__title">INFORMACIÓN ECONÓMICO FINANCIERA DE LA EMPRESA</h5>
              <div className="spreadsheet__item text-center">Accionistar / Junta directiva</div>
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
                    Item
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                </div>

                <div className="spreadsheet__item text-center">Representante(s) legal(es) / Autorizados para realizar operaciones bursatiles</div>

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
                    Item
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                  <div className="spreadsheet__item min-h">
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Planilla;

export const Head = () => (
  <Seo
    title="Maximiza registro de planilla"
    description="Rellena tu planilla de una manera sencilla"
    image="https://res.cloudinary.com/novanet-studio/image/upload/v1646847320/maximiza/v4/maximiza_servicios_miniatura_98daf48fa5.webp"
  />
);

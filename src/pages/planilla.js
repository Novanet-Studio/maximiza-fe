import React from "react";
import Logo from "../assets/images/logo-maximiza.svg"
import Seo from "../components/seo";
import "../assets/scss/pages/planilla.scss";

const Planilla = ({ data }) => {

  return (
      <section className="principal" style={{ flexDirection: 'column'}}>
        <div className="planilla" style={{ padding: '2rem' }}>
          <header className="planilla__cabecera">
            <img style={{ width: '20%' }} className="header__imagen" src={Logo} alt="logo" />

            <h5 className="planilla__titulo">Ficha de identificación del inversionista persona natural</h5>
          </header>
          <div className="planilla__cuerpo">
            <div className="planilla__seccion1">
              <div>Lugar: </div>
              <div>Fechas de elaboración:</div>
              <div>Número o código del inversionista:</div>
            </div>

            {/* Sector valores */}
            <div className="planilla__seccion2">
              <h5 className="planilla__seccion2-titulo">datos de la institución del sector valores</h5>
              <div className="planilla__seccion2-contenedor">
                <div className="seccion2__item">Nombre de casa de bolsa o sociedades de corretaje de valores:</div>
                <div className="seccion2__item">registro información fiscal</div>
                <div className="seccion2__item">Dirección</div> 
              </div>
            </div>

            {/* Datos personales */}
            <div className="planilla__seccion2">
              <h5 className="planilla__seccion2-titulo">datos personales del inversionista</h5>
              <div className="seccion3__line1">
                <div className="seccion3__line1-item">Registro de información fiscal:</div>
                <div className="seccion3__line1-item">Nombres:</div>
                <div className="seccion3__line1-item">Apellidos</div>
                <div className="seccion3__line1-item">Fecha de nacimiento</div>
                <div className="seccion3__line1-item">Nacionalidad</div>
                <div className="seccion3__line1-item">Otra Nacionalidad</div>
              </div>

              <div className="seccion3__line2">
                <div className="seccion3__line2-item">Género:</div>
                <div className="seccion3__line2-item">Profesión u Oficio:</div>
                <div className="seccion3__line2-item">Estado Civil:</div>
              </div>

              <div className="seccion3__line3">
                <div className="seccion3__line3-item">Nombre completo del cónyuge:</div>
                <div className="seccion3__line3-item">Documento de identidad del cónyuge:</div>
                <div className="seccion3__line3-item">Fuente de ingresos:</div>
              </div>

              <div className="seccion3__line4">Dirección de domicilio</div>

              <div className="seccion3__line5">
                <div className="seccion3__line5-item"></div>
                <div className="seccion3__line5-item">Telefonos:</div>
                <div className="seccion3__line5-item">Correo electrónico:</div>
              </div>

              <div className="seccion3__line6">
                <div className="seccion3__line6-item">Persona expuesta políticamente (PEP):</div>
                <div className="seccion3__line6-item">Nombre del ente de adscripción:</div>
                <div className="seccion3__line6-item">Cargo que desempéña:</div>
                <div className="seccion3__line6-item">País:</div>
                <div className="seccion3__line6-item">Identificación del relacionado:</div>
                <div className="seccion3__line6-item">El inversionista es (PEP):</div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item">Tiene parentesco con (PEP):</div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item">Es asociado cercano de (PEP):</div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
                <div className="seccion3__line6-item"></div>
              </div>

              <div className="seccion3__line7">En caso de actualización de representante legal, apoderado y/o autorizado</div>

              <div className="seccion3__line8">
                <div className="seccion3__line8-item">Documento de identidad:</div>
                <div className="seccion3__line8-item">Nombre completo:</div>
                <div className="seccion3__line8-item">Lugar y Fecha de nacimiento:</div>
                <div className="seccion3__line8-item">Teléfono:</div>
                <div className="seccion3__line8-item">Datos del documento:</div>
                <div className="seccion3__line8-item"></div>
                <div className="seccion3__line8-item"></div>
                <div className="seccion3__line8-item"></div>
                <div className="seccion3__line8-item"></div>
                <div className="seccion3__line8-item border-br-rounded"></div>
              </div>
            </div>

            {/* Referencias del inversionista */}
            <div className="planilla__seccion3">
              <h5 className="planilla__titulo">Referencias del inversionista</h5>
              <div className="planilla__contenedor">
                <div className="seccion__col border-bl-rounded">
                  Referencias bancarias
                </div>
                <div className="seccion__group">
                  <div className="seccion__item">Institución del sector bancario: </div>
                  <div className="seccion__item">Nombre del producto:</div>
                  <div className="seccion__item"></div>
                  <div className="seccion__item"></div>
                  <div className="seccion__item">Número del producto:</div>
                  <div className="seccion__item">Cifras promedio:</div>
                  <div className="seccion__item"></div>
                  <div className="seccion__item border-br-rounded"></div>
                </div>
              </div>
            </div> 

            {/* Información económico financiera del inversionista */}
            <div className="planilla__seccion4">
              <h5 className="planilla__titulo">Información económico financiera del inversionista</h5>
              <div className="planilla__contenedor">
                <div className="seccion__item">Institución del sector bancario: </div>
                <div className="seccion__item">Nombre del producto:</div>
                <div className="seccion__item border-bl-rounded"></div>
                <div className="seccion__item border-br-rounded"></div>
              </div>
            </div>  

            {/* Informacion economico financiera del inversionista */}
            <div className="spreadsheet__section">
              <h5 className="spreadsheet__title">Información económico financiera del inversionista</h5>
              <div className="spreadsheet__container">
                <div className="spreadsheet__item">Fuente de ingreso del inversionista </div>

                <div className="spreadsheet__section1">
                  <div className="spreadsheet__item">Relación de dependencia: </div>
                  <div className="spreadsheet__item">Negocio propio: </div>
                  <div className="spreadsheet__item">Relación de dependencia:</div>
                </div>

                <div className="spreadsheet__section2">
                  <div className="section2__column">
                    Relación de dependencia:
                  </div>
                  <div className="section2__container">
                    <div className="section2__content">
                      <div className="spreadsheet__item">Nombre de la empresa: </div>
                      <div className="spreadsheet__item">RIF: </div>
                      <div className="spreadsheet__item">Remuneración:</div>
                      <div className="spreadsheet__item">Cargo que ocupa:</div>
                    </div>
                    <div className="section2__content">
                      <div className="spreadsheet__item col-2">Dirección de la empresa: </div>
                      <div className="spreadsheet__item">Teléfono: </div>
                      <div className="spreadsheet__item">Ramo del negocio:</div>
                    </div>
                  </div>
                </div>

                <div className="spreadsheet__section3">
                  <div className="section3__column">
                    Negocio propio:
                  </div>
                  <div className="section3__container">
                    <div className="section3__content">
                      <div className="spreadsheet__item">Nombre de la empresa: </div>
                      <div className="spreadsheet__item">RIF: </div>
                      <div className="spreadsheet__item">Ingresos mensuales:</div>
                      <div className="spreadsheet__item">Fecha de Constitución:</div>
                    </div>
                    <div className="section3__content2">
                      <div className="spreadsheet__item">Datos del Registro: </div>
                      <div className="spreadsheet__item col-3">Dirección fiscal: </div>
                    </div>
                    <div className="section3__content3">
                      <div className="spreadsheet__item">Teléfono: </div>
                      <div className="spreadsheet__item">Ramo del negocio: </div>
                      <div className="spreadsheet__item">Principales proveedores: </div>
                      <div className="spreadsheet__item">Principales Clientes: </div>
                    </div>
                    <div className="section3__content4">
                      <div className="spreadsheet__item">Nombre o razón social: </div>
                      <div className="spreadsheet__item">Ubicación: </div>
                      <div className="spreadsheet__item">Nombre o razón social: </div>
                      <div className="spreadsheet__item">Ubicación: </div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                      <div className="spreadsheet__item"></div>
                    </div>
                  </div>
                </div>

                <div className="spreadsheet__section4">
                  <div className="section__column border-bl-rounded">
                    Relación de dependencia:
                  </div>
                  <div className="section__content">
                    <div className="spreadsheet__item">Actividad generadora de los ingresos: </div>
                    <div className="spreadsheet__item">Ingresos mensuales: </div>
                    <div className="spreadsheet__item"></div>
                    <div className="spreadsheet__item border-br-rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfil del inversionista */}
            <div className="spreadsheet__section">
              <h5 className="spreadsheet__title">Información económico financiera del inversionista</h5>
              <div className="spreadsheet__container">
                <div style={{ maxWidth: '139.5ch' }} className="spreadsheet__item">
                El propósito del siguiente cuestionario es informar a MAXIMIZA CASA DE BOLSA los objetivos de inversión del cliente, y debe ser completado en el espacio indicado. En ningún caso la Casa de bolsa se hace responsable de las ganancias o pérdidas producto de las operaciones realizadas bajo dicho perﬁl.
                </div>

                <div className="spreadsheet__selection">
                  <div className="spreadsheet__selector-wrapper">
                    <h6>Conocimiento como inversionista</h6>
                    <div className="spreadsheet__selector-group">
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Ninguno
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Limitado
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Bueno
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Excelente
                      </label>
                    </div>
                  </div>

                  <div className="spreadsheet__selector-wrapper">
                    <h6>Experiencia como inversionista</h6>
                    <div className="spreadsheet__selector-group spreadsheet__selector-group--2">
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        De 0 a 5 años
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 5 y 10 años
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Mayor de 10 años
                      </label>
                    </div>
                  </div>

                  <div className="spreadsheet__selector-wrapper">
                    <h6>Nivel de inversiones en operaciones</h6>
                    <div className="spreadsheet__selector-group">
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Agresivo
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Medio
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Moderado
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Conservador
                      </label>
                    </div>
                  </div>

                  <div className="spreadsheet__selector-wrapper border-bl-rounded">
                    <h6>Inversiones anuales</h6>
                    <div className="spreadsheet__selector-group spreadsheet__selector-group--2">
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Menos de 5.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 5.000 y 10.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 10.001 y 50.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 50.001 y 100.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 100.001 y 300.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Más de 300.000
                      </label>
                    </div>
                  </div>

                  <div className="spreadsheet__selector-wrapper">
                    <h6>Total activos líquidos (Dinero e inversiones)</h6>
                    <div className="spreadsheet__selector-group spreadsheet__selector-group--2">
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Menos de 5.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 5.000 y 10.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 10.001 y 50.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 50.001 y 100.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 100.001 y 300.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Más de 300.000
                      </label>
                    </div>
                  </div>

                  <div className="spreadsheet__selector-wrapper border-br-rounded">
                    <h6>Patrimonio total</h6>
                    <div className="spreadsheet__selector-group spreadsheet__selector-group--2">
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Menos de 10.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 10.001 y 50.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 50.001 y 100.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Entre 100.001 y 500.000
                      </label>
                      <label htmlFor="none">
                        <input id="none" type="radio" />
                        Más de 500.000
                      </label>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Informacion del producto o servicio bursatil */}
            <div className="spreadsheet__section">
              <h5 className="spreadsheet__title">Información del producto o servicio bursatil</h5>
              <div className="spreadsheet__container">
                <div className="spreadsheet__section1">
                  <div className="spreadsheet__item">Nombre del producto: </div>
                  <div className="spreadsheet__item">Monto del producto adquirido: </div>
                  <div className="spreadsheet__item">Moneda:</div>
                </div>
                <div style={{ maxHeight: '0.6rem', textAlign: 'center' }} className="spreadsheet__item">Información sobre movilización de fondos</div>
                <div className="spreadsheet__section1">
                  <div className="spreadsheet__item">Monto promedio mensual: </div>
                  <div className="spreadsheet__item">N° transacciones por transferencias: </div>
                  <div className="spreadsheet__item">Enviar o recibir fondos del exterior: </div>
                </div>
                <div className="spreadsheet__section1">
                  <div className="spreadsheet__item">Compra: </div>
                  <div className="spreadsheet__item">Venta: </div>
                  <div className="spreadsheet__item">País de origen: </div>
                  <div className="spreadsheet__item">País destino: </div>
                  <div className="spreadsheet__item">Uso moneda virtual: </div>
                </div>
                <div className="spreadsheet__section1">
                  <div className="spreadsheet__item">Motivos por los cuales solicita los servicios: </div>
                  <div className="spreadsheet__item">Origen de los fondos: </div>
                  <div className="spreadsheet__item">Destino de los fondos: </div>
                  <div className="spreadsheet__item"></div>
                  <div className="spreadsheet__item"></div>
                  <div className="spreadsheet__item"></div>
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

import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Logo from "../assets/images/logo-maximiza.svg"
import Page from "../layout/page";
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
              <div>Lugar:</div>
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
              <h5 className="planilla__seccion2-titulo" >datos personales del inversionista</h5>
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
                <div className="seccion3__line8-item"></div>
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

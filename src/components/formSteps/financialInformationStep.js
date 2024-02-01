import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FinancialInformationStep() {
  return (
    <form className="steps-form">
      <h4>Información económico financiera de la empresa</h4>

      <div className="steps-form__collection">
        <h6>Accionista 1 / Junta directiva</h6>
        <button className="delete-action"><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Nombre" />
          <input className="steps-form__input" type="text" placeholder="Documento de identidad" />
          <input className="steps-form__input" type="text" placeholder="Porcentaje accionario" />
        </div>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Cargo" />
          <input className="steps-form__input" type="text" placeholder="ES PEP" />
          <input className="steps-form__input" type="text" placeholder="Relacionado con PEP" />
        </div>
      </div>

      <button className="add-action"><FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> Agregar</button>

      <div style={{ marginTop: "1rem" }}></div>

      <div className="steps-form__collection">
        <h6>Representante legal 1 / Autorizado para realizar operaciones bursatiles</h6>
        <button className="delete-action"><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Nombre" />
          <input className="steps-form__input" type="text" placeholder="Documento de identidad" />
          <input className="steps-form__input" type="text" placeholder="Porcentaje accionario" />
        </div>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Cargo" />
          <input className="steps-form__input" type="text" placeholder="ES PEP" />
          <input className="steps-form__input" type="text" placeholder="Relacionado con PEP" />
        </div>
      </div>

      <button className="add-action"><FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> Agregar</button>

      <div style={{ marginTop: "1rem" }}></div>

      <h6>Accionista / Junta directiva</h6>

      <div className="steps-form__collection">
        <h6>Persona expuesta politicamente</h6>
        <button className="delete-action"><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Nombre de la institución o ente de adscripción" />
          <input className="steps-form__input" type="text" placeholder="Cargo que desempeña" />
        </div>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="País" />
          <input className="steps-form__input" type="text" placeholder="Identificación del PEP en caso relacionado" />
        </div>
      </div>

      <button className="add-action"><FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> Agregar</button>

      <div style={{ marginTop: "1rem" }}></div>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Nº de subsidiarias / Oficinas"
        />
        <input className="steps-form__input" type="text" placeholder="País con mayor presencia" />
        <input className="steps-form__input" type="text" placeholder="Nº de empleados" />
      </div>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Ventas mensuales"
        />
        <input className="steps-form__input" type="text" placeholder="Ingresos mensuales" />
        <input className="steps-form__input" type="text" placeholder="Egresos mensuales" />
      </div>

      <div style={{ marginTop: "1rem" }}></div>

      <h6>Última declaración ISLR</h6>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Año"
        />
        <input className="steps-form__input" type="text" placeholder="Monto" />
      </div>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Condición" />
        <input className="steps-form__input" type="text" placeholder="ES PEP" />
        <input className="steps-form__input" type="text" placeholder="Relacionado con PEP" />
      </div>

      <div style={{ marginTop: "1rem" }}></div>

      <div className="steps-form__collection">
        <h6>Principales proveedores</h6>
        <button className="delete-action"><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Nombre o razón social" />
          <input className="steps-form__input" type="text" placeholder="Ubicación" />
        </div>
      </div>

      <button className="add-action"><FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> Agregar</button>

      <div style={{ marginTop: "1rem" }}></div>

      <div className="steps-form__collection">
        <h6>Principales clientes</h6>
        <button className="delete-action"><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Nombre o razón social" />
          <input className="steps-form__input" type="text" placeholder="Ubicación" />
        </div>
      </div>

      <button className="add-action"><FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> Agregar</button>

      <div style={{ marginTop: "1rem" }}></div>

      <div className="steps-form__collection">
        <h6>Empresas relacionadas</h6>
        <button className="delete-action"><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>
        <div className="steps-form__group">
          <input className="steps-form__input" type="text" placeholder="Nombre o razón social" />
          <input className="steps-form__input" type="text" placeholder="Actividad económica" />
          <input className="steps-form__input" type="text" placeholder="Registro de información fiscal" />
        </div>
      </div>

      <button className="add-action"><FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> Agregar</button>

      <div style={{ marginTop: "1rem" }}></div>

      <h6>Referencias bancarias</h6>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Institución del sector bancario" />
        <input className="steps-form__input" type="text" placeholder="Nombre del producto" />
      </div>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Número del producto" />
        <input className="steps-form__input" type="text" placeholder="Cifras promedio" />
      </div>
    </form>
  );
}

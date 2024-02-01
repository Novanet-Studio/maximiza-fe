import React from "react";

export default function EnterpriseIdentificationStep() {
  return (
    <form className="steps-form">
      <h4>Datos de identificación de la empresa</h4>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Registro información fiscal" />
        <input className="steps-form__input" type="text" placeholder="Razón social" />
        <input className="steps-form__input" type="text" placeholder="Nombre comercial" />
      </div>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Actividad económica" />
        <input className="steps-form__input" type="text" placeholder="Actividad específica" />
      </div>

      <h6>Datos del registro</h6>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Nombre del registro"
        />
        <input className="steps-form__input" type="text" placeholder="Número" />
        <input className="steps-form__input" type="text" placeholder="Tomo" />
      </div>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Folio"
        />
        <input className="steps-form__input" type="text" placeholder="Fecha" />
        <input className="steps-form__input" type="text" placeholder="Capital social" />
      </div>

      <h6>Entes públicos</h6>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Número de gaceta oficial"
        />
        <input className="steps-form__input" type="text" placeholder="Fecha" />
      </div>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Autoridad / Ente de adscripción"
        />
        <input className="steps-form__input" type="text" placeholder="Códico ONT" />
      </div>

      <div style={{ paddingTop: '2rem' }}></div>

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Teléfonos"
        />
        <input className="steps-form__input" type="text" placeholder="Sitio web" />
        <input className="steps-form__input" type="text" placeholder="Correo electrónico" />
      </div>

      <input className="steps-form__input" type="text" placeholder="Dirección" />

      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Teléfonos"
        />
        <input className="steps-form__input" type="text" placeholder="Sitio web" />
        <input className="steps-form__input" type="text" placeholder="Correo electrónico" />
      </div>
    </form>
  );
}

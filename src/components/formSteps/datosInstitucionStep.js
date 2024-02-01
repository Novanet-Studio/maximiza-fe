import React from "react";

export default function DatosInstitucionStep() {
  return (
    <form className="steps-form">
      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Lugar" />
        <input className="steps-form__input" type="text" placeholder="Fechas de elaboración" />
        <input className="steps-form__input" type="text" placeholder="N° o código del inversionista" />
      </div>

      <h4>Datos de la institución del sector valores</h4>

      <div className="steps-form__group">
        <input
          className="steps-form__input steps-form__input--2"
          type="text"
          placeholder="Nombre de casa de bolsa o sociedades de corretaje de valores"
        />
        <input className="steps-form__input" type="text" placeholder="Registro información fiscal" />
      </div>
      <input className="steps-form__input" type="text" placeholder="Dirección" />
    </form>
  );
}

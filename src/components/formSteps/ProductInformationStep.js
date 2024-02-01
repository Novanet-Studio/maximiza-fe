import React from "react";

export default function ProductInformationStep() {
  return (
    <form className="steps-form">
      <h4>Información del producto o servicio bursátil</h4>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Nombre del producto" />
        <input className="steps-form__input" type="text" placeholder="Monto del producto adquirido" />
        <input className="steps-form__input" type="text" placeholder="Moneda" />
      </div>

      <div style={{ paddingTop: '0.3rem' }}></div>

      <h6>Información sobre movilización de fondos</h6>
      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Monto promedio mensual" />
        <input className="steps-form__input" type="text" placeholder="N° transacciones por transferencias" />
        <input className="steps-form__input" type="text" placeholder="Enviar o recibir fondos del exterior" />
      </div>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Compra" />
        <input className="steps-form__input" type="text" placeholder="Venta" />
        <input className="steps-form__input" type="text" placeholder="País origen" />
      </div>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="País destino" />
        <input className="steps-form__input" type="text" placeholder="Uso moneda virtual" />
      </div>

      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Motivos por los que solicita los servicios" />
        <input className="steps-form__input" type="text" placeholder="Origen de los fondos" />
        <input className="steps-form__input" type="text" placeholder="Destino de los fondos" />
      </div>



    </form>
  );
}

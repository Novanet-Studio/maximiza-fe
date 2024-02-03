import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const ProductInformationStep = React.forwardRef((props, ref) => {
  const { register, trigger } = useForm();
  const { nextStep } = useFormContext();


  async function validate() {
    console.log('Validating ProductInformationStep')
    const valid = await trigger()

    nextStep()
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));


  return (
    <form className="steps-form">
      <h4>Información del producto o servicio bursátil</h4>
  
      <div className="steps-form__group">
        <input {...register('productName', { required: true })} className="steps-form__input" type="text" placeholder="Nombre del producto" />
        <input {...register('productAmount', { required: true })} className="steps-form__input" type="text" placeholder="Monto del producto adquirido" />
        <input {...register('currency', { required: true })} className="steps-form__input" type="text" placeholder="Moneda" />
      </div>
  
      <div style={{ paddingTop: '0.3rem' }}></div>
  
      <h6>Información sobre movilización de fondos</h6>
      <div className="steps-form__group">
        <input {...register('monthlyAmount', { required: true })} className="steps-form__input" type="text" placeholder="Monto promedio mensual" />
        <input {...register('numberOfTransactionsByTransfers', { required: true })} className="steps-form__input" type="text" placeholder="N° transacciones por transferencias" />
        <input {...register('sendOrReceiveFundsFromAbroad', { required: true })} className="steps-form__input" type="text" placeholder="Enviar o recibir fondos del exterior" />
      </div>
  
      <div className="steps-form__group">
        <input {...register('purchase', { required: true })} className="steps-form__input" type="text" placeholder="Compra" />
        <input {...register('sale', { required: true })} className="steps-form__input" type="text" placeholder="Venta" />
        <input {...register('originCountry', { required: true })} className="steps-form__input" type="text" placeholder="País origen" />
      </div>
  
      <div className="steps-form__group">
        <input {...register('destinationCountry', { required: true })} className="steps-form__input" type="text" placeholder="País destino" />
        <input {...register('virtualCurrencyUse', { required: true })} className="steps-form__input" type="text" placeholder="Uso moneda virtual" />
      </div>
  
      <div className="steps-form__group">
        <input {...register('motives', { required: true })} className="steps-form__input" type="text" placeholder="Motivos por los que solicita los servicios" />
        <input {...register('fundsSource', { required: true })} className="steps-form__input" type="text" placeholder="Origen de los fondos" />
        <input {...register('fundsDestination', { required: true })} className="steps-form__input" type="text" placeholder="Destino de los fondos" />
      </div>
  
    </form>
  );
});

export default ProductInformationStep;

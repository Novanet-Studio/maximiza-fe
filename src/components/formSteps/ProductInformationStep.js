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
        <div className="steps-form__group-item">
          <label htmlFor="productName">Nombre del producto</label>
          <input {...register('productName', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="productAmount">Monto del producto adquirido</label>
          <input {...register('productAmount', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="currency">Moneda</label>
          <input {...register('currency', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div style={{ paddingTop: '0.3rem' }}></div>
  
      <h6>Información sobre movilización de fondos</h6>
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="monthlyAmount">Monto promedio mensual</label>
          <input {...register('monthlyAmount', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="numberOfTransactionsByTransfers">N° transacciones por transferencias</label>
          <input {...register('numberOfTransactionsByTransfers', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="sendOrReceiveFundsFromAbroad">Enviar o recibir fondos del exterior</label>
          <input {...register('sendOrReceiveFundsFromAbroad', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="purchase">Compra</label>
          <input {...register('purchase', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="sale">Venta</label>
          <input {...register('sale', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="originCountry">País origen</label>
          <input {...register('originCountry', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="destinationCountry">País destino</label>
          <input {...register('destinationCountry', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="virtualCurrencyUse">Uso moneda virtual</label>
          <input {...register('virtualCurrencyUse', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="">Motivos por los que solicita los servicios</label>
          <input {...register('motives', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="">Origen de los fondos</label>
          <input {...register('fundsSource', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="">Destino de los fondos</label>
          <input {...register('fundsDestination', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
    </form>
  );
});

export default ProductInformationStep;

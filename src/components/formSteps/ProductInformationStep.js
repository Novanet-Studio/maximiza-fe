import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const ProductInformationStep = React.forwardRef((props, ref) => {
  const { register, trigger, updateFormData } = useForm();
  const { nextStep, getValues } = useFormContext();


  async function validate() {
    const valid = await trigger();
    const values = getValues();
    
    if (valid) {
      updateFormData({ productInformation: values.productInformation });
      nextStep();
    }
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
          <input {...register('productInformation.productName', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="productAmount">Monto del producto adquirido</label>
          <input {...register('productInformation.productAmount', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="currency">Moneda</label>
          <input {...register('productInformation.currency', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div style={{ paddingTop: '0.3rem' }}></div>
  
      <h6>Información sobre movilización de fondos</h6>
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="monthlyAmount">Monto promedio mensual</label>
          <input {...register('productInformation.monthlyAmount', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="numberOfTransactionsByTransfers">N° transacciones por transferencias</label>
          <input {...register('productInformation.numberOfTransactionsByTransfers', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="sendOrReceiveFundsFromAbroad">Enviar o recibir fondos del exterior</label>
          <input {...register('productInformation.sendOrReceiveFundsFromAbroad', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="purchase">Compra</label>
          <input {...register('productInformation.purchase', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="sale">Venta</label>
          <input {...register('productInformation.sale', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="originCountry">País origen</label>
          <input {...register('productInformation.originCountry', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="destinationCountry">País destino</label>
          <input {...register('productInformation.destinationCountry', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="virtualCurrencyUse">Uso moneda virtual</label>
          <input {...register('productInformation.virtualCurrencyUse', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="">Motivos por los que solicita los servicios</label>
          <input {...register('productInformation.motives', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="">Origen de los fondos</label>
          <input {...register('productInformation.fundsSource', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="">Destino de los fondos</label>
          <input {...register('productInformation.fundsDestination', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
    </form>
  );
});

export default ProductInformationStep;

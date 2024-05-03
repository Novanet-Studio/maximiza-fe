import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";
import { countries, currency, fundsDestination, fundsSource, motives, productNames, virtualCurrency } from "./fieldsOptions";

const ProductInformationStep = React.forwardRef((props, ref) => {
  const { nextStep, updateFormData, formData } = useFormContext();
  const { register, trigger, getValues, formState: { errors } } = useForm({
    values: {
      productInformation: {
        ...formData.productInformation
      }
    }
  });


  async function validate() {
    const valid = await trigger();
    const values = getValues();
    
    if (valid) {
      console.log("5. ProductInformationStep valid?", valid);
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
        <div className="steps-form__group-item" style={{ maxWidth: "22rem" }}>
          <label htmlFor="productName">Nombre del producto</label>
          <select id="productName" {...register(`productInformation.productName`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {productNames.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.productName?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="productAmount">Monto del producto adquirido</label>
          <input {...register('productInformation.productAmount', { required: true })} className="steps-form__input" type="text" />
          {errors.productInformation?.productAmount?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="currency">Moneda</label>
          <select id="currency" {...register(`productInformation.currency`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {currency.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.currency?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>
  
      <div style={{ paddingTop: '0.3rem' }}></div>
  
      <h6>Información sobre movilización de fondos</h6>
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="monthlyAmount">Monto promedio mensual</label>
          <input {...register('productInformation.monthlyAmount', { required: true })} className="steps-form__input" type="text" />
          {errors.productInformation?.monthlyAmount?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="numberOfTransactionsByTransfers">N° transacciones por transferencias</label>
          <input {...register('productInformation.numberOfTransactionsByTransfers', { required: true })} className="steps-form__input" type="text" />
          {errors.productInformation?.numberOfTransactionsByTransfers?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="sendOrReceiveFundsFromAbroad">Enviar o recibir fondos del exterior</label>
          {/* <input {...register('productInformation.sendOrReceiveFundsFromAbroad', { required: true })} className="steps-form__input" type="text" /> */}
          <select {...register('productInformation.sendOrReceiveFundsFromAbroad', { required: true })} className="steps-form__input"  id="economicActivity">
            <option defaultValue="" selected>SELECCIONA</option>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
          {errors.productInformation?.sendOrReceiveFundsFromAbroad?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="purchase">Compra</label>
          <input {...register('productInformation.purchase', { required: true })} className="steps-form__input" type="text" />
          {errors.productInformation?.purchase?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="sale">Venta</label>
          <input {...register('productInformation.sale', { required: true })} className="steps-form__input" type="text" />
          {errors.productInformation?.sale?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item" style={{ maxWidth: "27rem" }}>
          <label htmlFor="originCountry">País origen</label>
          <select id="originCountry" {...register(`productInformation.originCountry`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {countries.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.originCountry?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item" style={{ maxWidth: "38rem" }}>
          <label htmlFor="destinationCountry">País destino</label>
          <select id="destinationCountry" {...register(`productInformation.destinationCountry`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {countries.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.destinationCountry?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="virtualCurrencyUse">Uso moneda virtual</label>
          <select id="virtualCurrencyUse" {...register(`productInformation.virtualCurrencyUse`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {virtualCurrency.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.virtualCurrencyUse?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="">Motivos por los que solicita los servicios</label>
          <select id="motives" {...register(`productInformation.motives`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {motives.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.motives?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item" style={{ maxWidth: "23.5rem" }}>
          <label htmlFor="">Origen de los fondos</label>
          <select id="fundsSource" {...register(`productInformation.fundsSource`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {fundsSource.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.fundsSource?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item" style={{ maxWidth: "27rem" }}>
          <label htmlFor="">Destino de los fondos</label>
          <select id="fundsDestination" {...register(`productInformation.fundsDestination`, { required: true })} className="steps-form__input">
            <option value="" selected disabled>SELECCIONE</option>
            {fundsDestination.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.productInformation?.fundsDestination?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>
  
    </form>
  );
});

export default ProductInformationStep;

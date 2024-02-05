import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const EnterpriseIdentificationStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();
  const { register, trigger } = useForm();

  async function validate() {
    const valid = await trigger()
    
    if (valid) {
      nextStep();
    }
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));
  
  return (
    <form className="steps-form">
      <h4>Datos de identificación de la empresa</h4>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="taxInformationRegistration">Registro información fiscal</label>
          <input {...register('taxInformationRegistration', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="socialReason">Razón social</label>
          <input {...register('socialReason', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="tradename">Nombre comercial</label>
          <input {...register('tradename', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="economicActivity">Actividad económica</label>
          <input {...register('economicActivity', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="specificActivity">Actividad específica</label>
          <input {...register('specificActivity', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <h6>Datos del registro</h6>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="recordName">Nombre del registro</label>
          <input {...register('recordName', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="number">Número</label>
          <input {...register('number', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="took">Tomo</label>
          <input {...register('took', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="fol">Folio</label>
          <input {...register('fol', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="date">Fecha</label>
          <input {...register('date', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="socialCapital">Capital social</label>
          <input {...register('socialCapital', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <h6>Entes públicos</h6>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="officialGazetteNumber">Número de gaceta oficial</label>
          <input {...register('officialGazetteNumber', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="publicEntitiesDate">Fecha</label>
          <input {...register('publicEntitiesDate', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="authority">Autoridad / Ente de adscripción</label>
          <input {...register('authority', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="ontCode">Códico ONT</label>
          <input {...register('ontCode', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <div style={{ paddingTop: '2rem' }}></div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="publicPhones">Teléfonos</label>
          <input {...register('publicPhones', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="website">Sitio web</label>
          <input {...register('website', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="publicEntityEmail">Correo electrónico</label>
          <input {...register('publicEntityEmail', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>

      <div className="steps-form__group-item">
        <label htmlFor="publicEntityAddress">Dirección</label>
        <input {...register('publicEntityAddress', { required: true })} className="steps-form__input" type="text" />
      </div>

      {/* <div className="steps-form__group">
        <input {...register('place', { required: true })}{...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Teléfonos" />
        <input {...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Sitio web" />
        <input {...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Correo electrónico" />
      </div> */}
    </form>
  );
})

export default EnterpriseIdentificationStep;

import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const EnterpriseIdentificationStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();
  const { register, trigger } = useForm();

  async function validate() {
    console.log('Validating EnterpriseIdentificationStep')
    // const valid = await trigger()
    nextStep()
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));
  
  return (
    <form className="steps-form">
      <h4>Datos de identificación de la empresa</h4>

      <div className="steps-form__group">
        <input {...register('taxInformationRegistration', { required: true })} className="steps-form__input" type="text" placeholder="Registro información fiscal" />
        <input {...register('socialReason', { required: true })} className="steps-form__input" type="text" placeholder="Razón social" />
        <input {...register('tradename', { required: true })} className="steps-form__input" type="text" placeholder="Nombre comercial" />
      </div>

      <div className="steps-form__group">
        <input {...register('economicActivity', { required: true })} className="steps-form__input" type="text" placeholder="Actividad económica" />
        <input {...register('specificActivity', { required: true })} className="steps-form__input" type="text" placeholder="Actividad específica" />
      </div>

      <h6>Datos del registro</h6>

      <div className="steps-form__group">
        <input {...register('recordName', { required: true })} className="steps-form__input" type="text" placeholder="Nombre del registro" />
        <input {...register('number', { required: true })} className="steps-form__input" type="text" placeholder="Número" />
        <input {...register('took', { required: true })} className="steps-form__input" type="text" placeholder="Tomo" />
      </div>

      <div className="steps-form__group">
        <input {...register('fol', { required: true })} className="steps-form__input" type="text" placeholder="Folio" />
        <input {...register('date', { required: true })} className="steps-form__input" type="text" placeholder="Fecha" />
        <input {...register('socialCapital', { required: true })} className="steps-form__input" type="text" placeholder="Capital social" />
      </div>

      <h6>Entes públicos</h6>

      <div className="steps-form__group">
        <input {...register('officialGazetteNumber', { required: true })} className="steps-form__input" type="text" placeholder="Número de gaceta oficial" />
        <input {...register('publicEntitiesDate', { required: true })} className="steps-form__input" type="text" placeholder="Fecha" />
      </div>

      <div className="steps-form__group">
        <input {...register('authority', { required: true })} className="steps-form__input" type="text" placeholder="Autoridad / Ente de adscripción" />
        <input {...register('ontCode', { required: true })} className="steps-form__input" type="text" placeholder="Códico ONT" />
      </div>

      <div style={{ paddingTop: '2rem' }}></div>

      <div className="steps-form__group">
        <input {...register('publicPhones', { required: true })} className="steps-form__input" type="text" placeholder="Teléfonos" />
        <input {...register('website', { required: true })} className="steps-form__input" type="text" placeholder="Sitio web" />
        <input {...register('publicEntityEmail', { required: true })} className="steps-form__input" type="text" placeholder="Correo electrónico" />
      </div>

      <input {...register('publicEntityAddress', { required: true })} className="steps-form__input" type="text" placeholder="Dirección" />

      {/* <div className="steps-form__group">
        <input {...register('place', { required: true })}{...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Teléfonos" />
        <input {...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Sitio web" />
        <input {...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Correo electrónico" />
      </div> */}
    </form>
  );
})

export default EnterpriseIdentificationStep;

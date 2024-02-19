import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";
import { economicActivity } from "./fieldsOptions";

const EnterpriseIdentificationStep = React.forwardRef((props, ref) => {
  const { nextStep, updateFormData, formData } = useFormContext();
  const { register, trigger, getValues, formState: { errors } } = useForm({
    values: {
      enterpriseIdentification: {
        ...formData.enterpriseIdentification
      }
    },
  });

  async function validate() {
    const valid = await trigger()
    const values = getValues();
    
    if (valid) {
      console.log("2. EnterpriseIdentificationStep valid?", valid);
      updateFormData({ enterpriseIdentification: values.enterpriseIdentification });
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
          <input {...register('enterpriseIdentification.taxInformationRegistration', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.taxInformationRegistration?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="socialReason">Razón social</label>
          <input {...register('enterpriseIdentification.socialReason', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.socialReason?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="tradename">Nombre comercial</label>
          <input {...register('enterpriseIdentification.tradename', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.tradename?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <div className="steps-form__group" style={{ maxWidth: "74rem" }}>
        <div className="steps-form__group-item" style={{ maxWidth: "50%" }}>
          <label htmlFor="economicActivity">Actividad económica</label>
          <select {...register('enterpriseIdentification.economicActivity', { required: true })} className="steps-form__input"  id="economicActivity">
            <option defaultValue="" selected>SELECCIONA</option>
            {economicActivity.map((activity) => (
              <option key={activity} value={activity}>{activity}</option>
            ))}
          </select>
          {errors.enterpriseIdentification?.economicActivity?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="specificActivity">Actividad específica</label>
          <input {...register('enterpriseIdentification.specificActivity', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.specificActivity?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <h6>Datos del registro</h6>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="recordName">Nombre del registro</label>
          <input {...register('enterpriseIdentification.registerData.recordName', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.registerData?.recordName?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="number">Número</label>
          <input {...register('enterpriseIdentification.registerData.number', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.registerData?.number?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="took">Tomo</label>
          <input {...register('enterpriseIdentification.registerData.took', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.registerData?.took?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="fol">Folio</label>
          <input {...register('enterpriseIdentification.registerData.fol', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.registerData?.fol?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="date">Fecha</label>
          <input {...register('enterpriseIdentification.registerData.date', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.registerData?.date?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="socialCapital">Capital social</label>
          <input {...register('enterpriseIdentification.registerData.socialCapital', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.registerData?.socialCapital?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <h6>Última modificación</h6>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="recordName">Nombre del registro</label>
          <input {...register('enterpriseIdentification.lastModification.recordName', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.lastModification?.recordName?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="number">Número</label>
          <input {...register('enterpriseIdentification.lastModification.number', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.lastModification?.number?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="took">Tomo</label>
          <input {...register('enterpriseIdentification.lastModification.took', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.lastModification?.took?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="fol">Folio</label>
          <input {...register('enterpriseIdentification.lastModification.fol', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.lastModification?.fol?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="date">Fecha</label>
          <input {...register('enterpriseIdentification.lastModification.date', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.lastModification?.date?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="socialCapital">Capital social</label>
          <input {...register('enterpriseIdentification.lastModification.socialCapital', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.lastModification?.socialCapital?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <h6>Entes públicos</h6>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="officialGazetteNumber">Número de gaceta oficial</label>
          <input {...register('enterpriseIdentification.officialGazetteNumber', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.officialGazetteNumber?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="publicEntitiesDate">Fecha</label>
          <input {...register('enterpriseIdentification.publicEntitiesDate', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.publicEntitiesDate?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="authority">Autoridad / Ente de adscripción</label>
          <input {...register('enterpriseIdentification.authority', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.authority?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="ontCode">Códico ONT</label>
          <input {...register('enterpriseIdentification.ontCode', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.ontCode?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <div style={{ paddingTop: '2rem' }}></div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="publicPhones">Teléfonos</label>
          <input {...register('enterpriseIdentification.publicPhones', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.publicPhones?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="website">Sitio web</label>
          <input {...register('enterpriseIdentification.website', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.website?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="publicEntityEmail">Correo electrónico</label>
          <input {...register('enterpriseIdentification.publicEntityEmail', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.publicEntityEmail?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>

      <div className="steps-form__group-item">
        <label htmlFor="publicEntityAddress">Dirección</label>
        <input {...register('enterpriseIdentification.publicEntityAddress', { required: true })} className="steps-form__input" type="text" />
        {errors.enterpriseIdentification?.publicEntityAddress?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
      </div>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="publicPhones">Teléfonos</label>
          <input {...register('enterpriseIdentification.publicPhones2', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.publicPhones2?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="website">Sitio web</label>
          <input {...register('enterpriseIdentification.website2', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.website2?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="publicEntityEmail">Correo electrónico</label>
          <input {...register('enterpriseIdentification.publicEntityEmail2', { required: true })} className="steps-form__input" type="text" />
          {errors.enterpriseIdentification?.publicEntityEmail2?.type === 'required' && (
            <p className="alert-error" role="alert">El campo es requerido</p>
          )}
        </div>
      </div>
    </form>
  );
})

export default EnterpriseIdentificationStep;

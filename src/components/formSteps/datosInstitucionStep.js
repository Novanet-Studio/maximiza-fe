import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const DatosInstitucionStep = React.forwardRef((props, ref) => {
  const { nextStep, updateFormData } = useFormContext();
  const { register, trigger, getValues } = useForm();

  async function validate() {
    const valid = await trigger();
    const values = getValues();

    if (valid) {
      console.log("1. DatosInstitucionStep valid?", valid);
      updateFormData({ institutionData: values.institutionData });
      nextStep();
    }
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));

  return (
    <form className="steps-form">
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="place">Lugar</label>
          <input {...register('institutionData.place', { required: true })} className="steps-form__input" type="text" placeholder="Lugar" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="productionDate">Fechas de elaboración</label>
          <input {...register('institutionData.productionDate', { required: true })} className="steps-form__input" type="text" placeholder="Fechas de elaboración" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="inverstorNumber">N° o código del inversionista</label>
          <input {...register('institutionData.inverstorNumber', { required: true })} className="steps-form__input" type="text" placeholder="N° o código del inversionista" />
        </div>
      </div>

      <h4>Datos de la institución del sector valores</h4>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="brokerageHouseName">Nombre de casa de bolsa o sociedades de corretaje de valores</label>
          <input
            {...register('institutionData.brokerageHouseName', { required: true })}
            className="steps-form__input steps-form__input--2"
            type="text"
          />
        </div>

        <div className="steps-form__group-item">
          <label htmlFor="taxInformationRegistration">Registro información fiscal</label>
          <input {...register('institutionData.taxInformationRegistration', { required: true })} className="steps-form__input" type="text" placeholder="" />
        </div>
      </div>
      <div className="steps-form__group-item">
        <label htmlFor="address">Dirección</label>
        <input {...register('institutionData.address', { required: true })}  className="steps-form__input" type="text" placeholder="Dirección" />
      </div>
    </form>
  );
})

export default DatosInstitucionStep;

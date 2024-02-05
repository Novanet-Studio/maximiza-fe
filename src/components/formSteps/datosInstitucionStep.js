import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const DatosInstitucionStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();
  const { register, trigger } = useForm();

  async function validate() {
    console.log('Validating DatosInstitucionStep')
    const valid = await trigger()

    nextStep();
    // if (valid) {
    // }
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));

  return (
    <form className="steps-form">
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="place">Lugar</label>
          <input {...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Lugar" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="productionDate">Fechas de elaboración</label>
          <input {...register('productionDate', { required: true })} className="steps-form__input" type="text" placeholder="Fechas de elaboración" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="inverstorNumber">N° o código del inversionista</label>
          <input {...register('inverstorNumber', { required: true })} className="steps-form__input" type="text" placeholder="N° o código del inversionista" />
        </div>
      </div>

      <h4>Datos de la institución del sector valores</h4>

      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="brokerageHouseName">Nombre de casa de bolsa o sociedades de corretaje de valores</label>
          <input
            {...register('brokerageHouseName', { required: true })}
            className="steps-form__input steps-form__input--2"
            type="text"
          />
        </div>

        <div className="steps-form__group-item">
          <label htmlFor="taxInformationRegistration">Registro información fiscal</label>
          <input {...register('taxInformationRegistration', { required: true })} className="steps-form__input" type="text" placeholder="" />
        </div>
      </div>
      <div className="steps-form__group-item">
        <label htmlFor="address">Dirección</label>
        <input {...register('address', { required: true })}  className="steps-form__input" type="text" placeholder="Dirección" />
      </div>
    </form>
  );
})

export default DatosInstitucionStep;

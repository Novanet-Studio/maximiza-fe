import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const DatosInstitucionStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();
  const { register, trigger } = useForm();

  async function validate() {
    console.log('Validating DatosInstitucionStep')
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
      <div className="steps-form__group">
        <input {...register('place', { required: true })} className="steps-form__input" type="text" placeholder="Lugar" />
        <input {...register('productionDate', { required: true })} className="steps-form__input" type="text" placeholder="Fechas de elaboración" />
        <input {...register('inverstorNumber', { required: true })} className="steps-form__input" type="text" placeholder="N° o código del inversionista" />
      </div>

      <h4>Datos de la institución del sector valores</h4>

      <div className="steps-form__group">
        <input
          className="steps-form__input steps-form__input--2"
          type="text"
          placeholder="Nombre de casa de bolsa o sociedades de corretaje de valores"
        />
        <input className="steps-form__input" type="text" placeholder="Registro información fiscal" />
      </div>
      <input className="steps-form__input" type="text" placeholder="Dirección" />
    </form>
  );
})

export default DatosInstitucionStep;

import React from "react";
import { useFormContext } from "../../context/formContext";
import { useForm } from "react-hook-form";

export default function DatosInstitucionStep({ formRef }) {
  // const { nextStep } = useFormContext();
  const { register, handleSubmit } = useForm();

  function submit(valid, invalid) {
    console.log(valid, invalid);
  }

  return (
    <form className="steps-form" onSubmit={handleSubmit(submit)} ref={formRef}>
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

      {/* <button type="submit" hidden onClick={nextStep} {...props}></button> */}
    </form>
  );
}

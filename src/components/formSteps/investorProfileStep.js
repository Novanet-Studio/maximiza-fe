import React from "react";
import { useFormContext } from "../../context/formContext";
import { useForm } from "react-hook-form";

const InvestorProfileStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();
  const { register } = useForm();

  async function validate() {
    console.log('Validating InvestorProfileStep')
    // const valid = await trigger()
    nextStep()
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));

  return (
    <form className="steps-form">
      <h4>Perfíl del inversionista</h4>
  
      <p>
        El propósito del siguiente cuestionario es informar a <b>MAXIMIZA CASA DE BOLSA</b> los objetivos de inversión del cliente, y debe ser completado en el espacio indicado. En ningún caso la Casa de bolsa se hace responsable de las ganancias o pérdidas producto de las operaciones realizadas bajo dicho perfil.
      </p>
  
      <h6>Conocimiento como inversionista</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input {...register('investor.knowledge', { required: true })} id="none" className="steps-form__input" type="radio" value="none" />
              Ninguno
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="limited">
              <input {...register('investor.knowledge', { required: true })} id="limited" className="steps-form__input" type="radio" value="limited" />
              Limitado
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="good">
              <input {...register('investor.knowledge', { required: true })} id="good" className="steps-form__input" type="radio" value="good" />
              Bueno
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="excellent">
              <input {...register('investor.knowledge', { required: true })} id="excellent" className="steps-form__input" type="radio" value="excellent" />
              Excelente
            </label>
          </div>
        </div>
      </div>
  
      <h6>Experiencia como inversionista</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="5to10">
              <input {...register('investor.experience', { required: true })} id="5to10" className="steps-form__input" type="radio" value="5to10" />
              De 5 a 10 años
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="5and10">
              <input {...register('investor.experience', { required: true })} id="5and10" className="steps-form__input" type="radio" value="5and10" />
              Entre 5 y 10 años
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="greaterThan10">
              <input {...register('investor.experience', { required: true })} id="greaterThan10" className="steps-form__input" type="radio" value="greaterThan10" />
              Mayor de 10 años
            </label>
          </div>
        </div>
      </div>
  
      <h6>Nivel de inversiones en operaciones bursátiles</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="aggressive">
              <input {...register('investor.inversionLevel', { required: true })} id="aggressive" className="steps-form__input" type="radio" value="aggressive" />
              Agresivo
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="half">
              <input {...register('investor.inversionLevel', { required: true })} id="half" className="steps-form__input" type="radio" value="half" />
              Medio
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="moderate">
              <input {...register('investor.inversionLevel', { required: true })} id="moderate" className="steps-form__input" type="radio" value="moderate" />
              Moderado
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="conservative">
              <input {...register('investor.inversionLevel', { required: true })} id="conservative" className="steps-form__input" type="radio" value="conservative" />
              Conservador
            </label>
          </div>
        </div>
      </div>
  
      <h6>Inversiones anuales</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="lessThan5_000">
              <input {...register('investor.annualInversion', { required: true })} id="lessThan5_000" className="steps-form__input" type="radio" value="lessThan5_000" />
              Menos de 5.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="5_000and10_000">
              <input {...register('investor.annualInversion', { required: true })} id="5_000and10_000" className="steps-form__input" type="radio" value="5_000and10_000" />
              Entre 5.001 y 10.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="10_000and50_000">
              <input {...register('investor.annualInversion', { required: true })} id="10_000and50_000" className="steps-form__input" type="radio" value="10_000and50_000" />
              Entre 10.001 y 50.000
            </label>
          </div>
        </div>
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="50_000and100_000">
              <input {...register('investor.annualInversion', { required: true })} id="50_000and100_000" className="steps-form__input" type="radio" value="50_000and100_000" />
              Entre 50.001 y 100.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="100_000and300_000">
              <input {...register('investor.annualInversion', { required: true })} id="100_000and300_000" className="steps-form__input" type="radio" value="100_000and300_000" />
              Entre 100.001 y 300.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="moreThan300_000">
              <input {...register('investor.annualInversion', { required: true })} id="moreThan300_000" className="steps-form__input" type="radio" value="moreThan300_000" />
              Más de 300.000
            </label>
          </div>
        </div>
      </div>
  
      <h6>Total activos líquidos (Dinero e inversiones)</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="lessThan5_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="lessThan5_000" className="steps-form__input" type="radio" value="lessThan5_000" />
              Menos de 5.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="5_000and10_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="5_000and10_000" className="steps-form__input" type="radio" value="5_000and10_000" />
              Entre 5.001 y 10.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="10_000and50_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="10_000and50_000" className="steps-form__input" type="radio" value="10_000and50_000" />
              Entre 10.001 y 50.000
            </label>
          </div>
        </div>
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="50_000and100_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="50_000and100_000" className="steps-form__input" type="radio" value="50_000and100_000" />
              Entre 50.001 y 100.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="100_000and300_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="100_000and300_000" className="steps-form__input" type="radio" value="100_000and300_000" />
              Entre 100.001 y 300.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="moreThan300_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="moreThan300_000" className="steps-form__input" type="radio" value="moreThan300_000" />
              Más de 300.000
            </label>
          </div>
        </div>
      </div>
  
      <h6>Patrimonio total</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="lessThan5_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="lessThan5_000" className="steps-form__input" type="radio" value="lessThan5_000" />
              Menos de 5.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="5_000and10_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="5_000and10_000" className="steps-form__input" type="radio" value="5_000and10_000" />
              Entre 5.001 y 10.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="10_000and50_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="10_000and50_000" className="steps-form__input" type="radio" value="10_000and50_000" />
              Entre 10.001 y 50.000
            </label>
          </div>
        </div>
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="50_000and100_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="50_000and100_000" className="steps-form__input" type="radio" value="50_000and100_000" />
              Entre 50.001 y 100.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="100_000and300_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="100_000and300_000" className="steps-form__input" type="radio" value="100_000and300_000" />
              Entre 100.001 y 300.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="moreThan300_000">
              <input {...register('investor.totalLiquidAssets', { required: true })} id="moreThan300_000" className="steps-form__input" type="radio" value="moreThan300_000" />
              Más de 300.000
            </label>
          </div>
        </div>
      </div>
  
    </form>
  );
});

export default InvestorProfileStep;

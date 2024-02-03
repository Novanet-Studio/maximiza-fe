import React from "react";
import { useFormContext } from "../../context/formContext";

const InvestorProfileStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();

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
              <input id="none" className="steps-form__input" type="radio" />
              Ninguno
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Limitado
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Bueno
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Excelente
            </label>
          </div>
        </div>
      </div>
  
      <h6>Experiencia como inversionista</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              De 5 a 10 años
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 5 y 10 años
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Mayor de 10 años
            </label>
          </div>
        </div>
      </div>
  
      <h6>Nivel de inversiones en operaciones bursátiles</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Agresivo
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Medio
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Moderado
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Conservador
            </label>
          </div>
        </div>
      </div>
  
      <h6>Inversiones anuales</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Menos de 5.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 5.001 y 10.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 10.001 y 50.000
            </label>
          </div>
        </div>
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 50.001 y 100.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 100.001 y 300.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Más de 300.000
            </label>
          </div>
        </div>
      </div>
  
      <h6>Total activos líquidos (Dinero e inversiones)</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Menos de 5.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 5.001 y 10.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 10.001 y 50.000
            </label>
          </div>
        </div>
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 50.001 y 100.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 100.001 y 300.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Más de 300.000
            </label>
          </div>
        </div>
      </div>
  
      <h6>Patrimonio total</h6>
      <div className="steps-form__collection">
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Menos de 5.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 5.001 y 10.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 10.001 y 50.000
            </label>
          </div>
        </div>
        <div className="steps-form__group">
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 50.001 y 100.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Entre 100.001 y 300.000
            </label>
          </div>
          <div className="steps-form__checkbox">
            <label className="checkbox-label" htmlFor="none">
              <input id="none" className="steps-form__input" type="radio" />
              Más de 300.000
            </label>
          </div>
        </div>
      </div>
  
    </form>
  );
});

export default InvestorProfileStep;

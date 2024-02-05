import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/formContext";

const AcceptContractStep = React.forwardRef((props, ref) => {
  const { register, trigger } = useForm();
  const { nextStep } = useFormContext();

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
      <h4>Aceptación del contrato de cuenta de corretaje bursátil por parte del inversor</h4>
  
      <p className="accept-text">Con la firma del presente documento, el cliente expresamente conviene y acepta que las operaciones financieras y bursátiles celebradas entre Maximiza y el cliente se regirán por el contrato de cuenta corretaje bursátil, del cual el presente anexo forma parte integrante, y el cual fue autenticado por ante la notaria pública sexta del municipio chacao del estado miranda, el 26 de enero del 2007, bajo el n°56, tomo 10, de los libros de autenticación llevados por esa notaria, así mismo, el cliente declara haber leído y comprendido las operaciones objeto de los contratos que integran la cuenta de corretaje bursátil. De conformidad con lo establecido en el artículo n°41 de la providencia n° 074 publicada en gaceta oficial n° 41,788 de fecha 26 de junio de 2019, emanada por la superintendencia nacional de valores, el (los) inversor (es) declara (n) bajo fe de juramento que los dineros, capitales y haberes, valores o títulos utilizados en las operaciones, no guardan relación con actividades provenientes del delito legitimación de capitales u otros delitos previstos y sancionados en la ley orgánica juramento que los dineros, capitales y haberes valores o títulos utilizados en las operaciones, no guardan relación con actividades provenientes del delito legitimación capitales u otros delitos previstos y sancionados en la ley orgánica autoriza suficientemente a <b>Maximiza casa de bolsa C.A.</b>, Para que verifique los datos aportados y que han sido vertidos en esta planilla, en cumplimiento a lo establecido en la normativa antes mencionada.</p>
  
      <div style={{ marginTop: '.5rem' }}></div>
  
      <div className="steps-form__checkbox">
        <label className="checkbox-label" htmlFor="none">
          <input {...register('accept', { required: true })} id="none" className="steps-form__input" type="checkbox" />
          Acepto los términos y condiciones
        </label>
      </div>
  
    </form>
  );
});

export default AcceptContractStep;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,  } from '@fortawesome/free-regular-svg-icons';
import { useFormContext } from "../../context/formContext";
import LegalEntityFormPdf from "../legalEntityFormPdf";
import { useReactToPrint } from "react-to-print";


export function FaDownload(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.09em" height="1em" viewBox="0 0 1664 1536" {...props}><path fill="currentColor" d="M1280 1344q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68m-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19L339 621q-31-29-14-70q17-39 59-39h256V64q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39"></path></svg>
  )
}

const FinalStep = React.forwardRef((props, ref) => {
  const { setShowPreview } = useFormContext();

  const printRef = React.useRef();

  function validate() {
    setShowPreview(true);
  }

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })

  React.useImperativeHandle(ref, () => ({
    validate,
  }))
  
  return (
    <form className="steps-form">
      <div className="status">
        <FontAwesomeIcon color="#00735F" icon={faCircleCheck} fixedWidth size="6x" />
        <h4>¡El documento está listo!</h4>
        <p>Descarguelo y rellene los campos restantes</p>

        <LegalEntityFormPdf ref={printRef} />

        <button onClick={(e) => {
          e.preventDefault()
          handlePrint()
        }}>
          <FaDownload color="white" />
          Descargar
        </button>
      </div>
    </form>
  );
});

export default FinalStep;

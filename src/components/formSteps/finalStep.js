import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { useFormContext } from "../../context/formContext";

const FinalStep = React.forwardRef((props, ref) => {
  const { setShowPreview } = useFormContext();

  function validate() {
    setShowPreview(true);
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }))
  
  return (
    <form className="steps-form">
      <div className="status">
        <FontAwesomeIcon color="#00735F" icon={faCircleCheck} fixedWidth size="6x" />
        <h4>¡La información ha sido enviada!</h4>
        <p>Nuestros asesores le estarán contactando a la brevedad posible</p>
      </div>
    </form>
  );
});

export default FinalStep;

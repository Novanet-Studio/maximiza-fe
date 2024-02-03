import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormContext } from "../../context/formContext";

const RemoveButton = ({ onClick }) => (
  <button className="delete-action" onClick={onClick}>
    <FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" />
  </button>
);

const AddButton = ({ onClick, disabled }) => (
  <button type="button" className="add-action" disabled={disabled} onClick={onClick}>
    <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> 
    Agregar
  </button>
)



const FinancialInformationStep = React.forwardRef((props, ref) => {
  const { nextStep } = useFormContext();
  const { register, trigger, control } = useForm({
    defaultValues: {
      stockholder: [{
        name: '',
        dni: '',
        sharePercentage: '',
        cargo: '',
        esPep: '',
        relatedWithPep: ''
      }],
      legalRepresentative: [{
        name: '',
        dni: '',
        sharePercentage: '',
        cargo: '',
        esPep: '',
        relatedWithPep: ''
      }],
      politicalPerson: [{
        name: '',
        cargo: '',
        country: '',
        pepIdentification: ''
      }],
      providers: [{
        name: '',
        location: '',
      }],
      clients: [{
        name: '',
        location: '',
      }],
      relatedCompanies: [{
        name: '',
        economicActivity: '',
        taxInformationRegistry: '',
      }],
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'stockholder',
  });

  const { fields: legalFields, append: appendLegal, remove: removeLegal } = useFieldArray({
    control,
    name: 'legalRepresentative',
  });

  const { fields: politicalPersonFields, append: appendPoliticalPerson, remove: removePoliticalPerson } = useFieldArray({
    control,
    name: 'politicalPerson',
  });

  const { fields: providers, append: appendProviders, remove: removeProviders } = useFieldArray({
    control,
    name: 'providers',
  });

  const { fields: clients, append: appendClients, remove: removeClients } = useFieldArray({
    control,
    name: 'clients',
  });

  const { fields: relatedCompanies, append: appendRelatedCompanies, remove: removeRelatedCompanies } = useFieldArray({
    control,
    name: 'relatedCompanies',
  });

  async function validate() {
    console.log('Validating FinancialInformationStep')
    // const valid = await trigger()
    nextStep()
  }

  React.useImperativeHandle(ref, () => ({
    validate,
  }));

  function appendStockholder(e) {
    e.preventDefault();
    append({
      name: '',
      dni: '',
      sharePercentage: '',
      cargo: '',
      esPep: '',
      relatedWithPep: ''
    }, {
      shouldFocus: true
    })
  }

  function handleAppendLegal(e) {
    e.preventDefault();
    appendLegal({
      name: '',
      dni: '',
      sharePercentage: '',
      cargo: '',
      esPep: '',
      relatedWithPep: ''
    });
  }


  return (
    <form className="steps-form">
      <h4>Información económico financiera de la empresa</h4>

      {fields.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Accionista {index + 1} / Junta directiva</h6>
          {index > 0 && <RemoveButton onClick={() => remove(index)} />}
          <div className="steps-form__group">
            <input {...register(`stockholder.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Nombre" />
            <input {...register(`stockholder.${index}.dni`, { required: true })}  className="steps-form__input" type="text" placeholder="Documento de identidad" />
            <input {...register(`stockholder.${index}.sharePercentage`, { required: true })} className="steps-form__input" type="text" placeholder="Porcentaje accionario" />
          </div>
          <div className="steps-form__group">
            <input {...register(`stockholder.${index}.cargo`, { required: true })} className="steps-form__input" type="text" placeholder="Cargo" />
            <input {...register(`stockholder.${index}.esPep`, { required: true })} className="steps-form__input" type="text" placeholder="ES PEP" />
            <input {...register(`stockholder.${index}.relatedWithPep`, { required: true })} className="steps-form__input" type="text" placeholder="Relacionado con PEP" />
          </div>
        </div>
      ))}

      <AddButton onClick={appendStockholder} disabled={fields.length >= 3} />
  
      <div style={{ marginTop: "1rem" }}></div>
  
      {legalFields.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Representante legal {index + 1} / Autorizado para realizar operaciones bursatiles</h6>
          {index > 0 && <RemoveButton onClick={() => removeLegal(index)} />}
          <div className="steps-form__group">
            <input {...register(`legalRepresentative.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Nombre" />
            <input {...register(`legalRepresentative.${index}.dni`, { required: true })} className="steps-form__input" type="text" placeholder="Documento de identidad" />
            <input {...register(`legalRepresentative.${index}.sharePercentage`, { required: true })} className="steps-form__input" type="text" placeholder="Porcentaje accionario" />
          </div>
          <div className="steps-form__group">
            <input {...register(`legalRepresentative.${index}.cargo`, { required: true })} className="steps-form__input" type="text" placeholder="Cargo" />
            <input {...register(`legalRepresentative.${index}.esPep`, { required: true })} className="steps-form__input" type="text" placeholder="ES PEP" />
            <input {...register(`legalRepresentative.${index}.relatedWithPep`, { required: true })} className="steps-form__input" type="text" placeholder="Relacionado con PEP" />
          </div>
        </div>
      ))}

      <AddButton onClick={handleAppendLegal} disabled={legalFields.length >= 3} />

      {/* <button type="button" className="add-action" disabled={legalFields.length >= 3} onClick={(e) => {
        e.preventDefault();
        appendLegal({
          name: '',
          dni: '',
          sharePercentage: '',
          cargo: '',
          esPep: '',
          relatedWithPep: ''
        }, {
          shouldFocus: true
        })
      }}>
        <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> 
      Agregar</button> */}
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <h6>Accionista / Junta directiva</h6>
  
      {politicalPersonFields.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Persona expuesta politicamente</h6>
          {index > 0 && <button className="delete-action" onClick={() => removePoliticalPerson(index)}><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>}
          <div className="steps-form__group">
            <input {...register(`politicalPerson.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Nombre de la institución o ente de adscripción" />
            <input {...register(`politicalPerson.${index}.cargo`, { required: true })} className="steps-form__input" type="text" placeholder="Cargo que desempeña" />
          </div>
          <div className="steps-form__group">
            <input {...register(`politicalPerson.${index}.country`, { required: true })} className="steps-form__input" type="text" placeholder="País" />
            <input {...register(`politicalPerson.${index}.pepIdentification`, { required: true })} className="steps-form__input" type="text" placeholder="Identificación del PEP en caso relacionado" />
          </div>
        </div>
      ))}
  
      <button type="button" className="add-action" disabled={politicalPersonFields.length >= 3} onClick={(e) => {
        e.preventDefault();
        appendPoliticalPerson({
          name: '',
          cargo: '',
          country: '',
          pepIdentification: ''
        }, {
          shouldFocus: true
        })
      }}>
        <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> 
      Agregar</button>
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Nº de subsidiarias / Oficinas" />
        <input className="steps-form__input" type="text" placeholder="País con mayor presencia" />
        <input className="steps-form__input" type="text" placeholder="Nº de empleados" />
      </div>
  
      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Ventas mensuales"
        />
        <input className="steps-form__input" type="text" placeholder="Ingresos mensuales" />
        <input className="steps-form__input" type="text" placeholder="Egresos mensuales" />
      </div>
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <h6>Última declaración ISLR</h6>
  
      <div className="steps-form__group">
        <input
          className="steps-form__input"
          type="text"
          placeholder="Año"
        />
        <input className="steps-form__input" type="text" placeholder="Monto" />
      </div>
  
      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Condición" />
        <input className="steps-form__input" type="text" placeholder="ES PEP" />
        <input className="steps-form__input" type="text" placeholder="Relacionado con PEP" />
      </div>
  
      <div style={{ marginTop: "1rem" }}></div>

      {providers.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Principales proveedores</h6>
          {index > 0 && <button className="delete-action" onClick={() => removeProviders(index)}><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>}
          <div className="steps-form__group">
            <input {...register(`providers.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Nombre o razón social" />
            <input {...register(`providers.${index}.location`, { required: true })} className="steps-form__input" type="text" placeholder="Ubicación" />
          </div>
        </div>
      ))}
  
  
      <button type="button" className="add-action" disabled={providers.length >= 3} onClick={(e) => {
        e.preventDefault();
        appendProviders({
          name: '',
          location: ''
        }, {
          shouldFocus: true
        })
      }}>
        <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> 
      Agregar</button>
  
      <div style={{ marginTop: "1rem" }}></div>

      {clients.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Principales clientes</h6>
          {index > 0 && <button className="delete-action" onClick={() => removeClients(index)}><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>}
          <div className="steps-form__group">
            <input {...register(`clients.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Nombre o razón social" />
            <input {...register(`clients.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Ubicación" />
          </div>
        </div>
      ))}
  
  
      <button type="button" className="add-action" disabled={providers.length >= 3} onClick={(e) => {
        e.preventDefault();
        appendClients({
          name: '',
          location: ''
        }, {
          shouldFocus: true
        })
      }}>
        <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> 
      Agregar</button>
  
      <div style={{ marginTop: "1rem" }}></div>
  
      {relatedCompanies.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Empresas relacionadas</h6>
          {index > 0 && <button className="delete-action" onClick={() => removeRelatedCompanies(index)}><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>}
          <div className="steps-form__group">
            <input {...register(`relatedCompanies.${index}.name`, { required: true })} className="steps-form__input" type="text" placeholder="Nombre o razón social" />
            <input {...register(`relatedCompanies.${index}.economicActivity`, { required: true })} className="steps-form__input" type="text" placeholder="Actividad económica" />
            <input {...register(`relatedCompanies.${index}.taxInformationRegistry`, { required: true })} className="steps-form__input" type="text" placeholder="Registro de información fiscal" />
          </div>
        </div>
      ))}
  
      <button type="button" className="add-action" disabled={providers.length >= 3} onClick={(e) => {
        e.preventDefault();
        appendRelatedCompanies({
          name: '',
          economicActivity: '',
          taxInformationRegistry: ''
        }, {
          shouldFocus: true
        })
      }}>
        <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth size="1x" /> 
      Agregar</button>
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <h6>Referencias bancarias</h6>
  
      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Institución del sector bancario" />
        <input className="steps-form__input" type="text" placeholder="Nombre del producto" />
      </div>
  
      <div className="steps-form__group">
        <input className="steps-form__input" type="text" placeholder="Número del producto" />
        <input className="steps-form__input" type="text" placeholder="Cifras promedio" />
      </div>
    </form>
  );
})

export default FinancialInformationStep;

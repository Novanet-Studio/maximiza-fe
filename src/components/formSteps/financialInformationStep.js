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
  const { nextStep, updateFormData } = useFormContext();
  const { register, trigger, control, getValues } = useForm({
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
    const valid = await trigger()
    const values = getValues();

    if (valid) {
      updateFormData({ financialInformation: values.financialInformation });
      nextStep();
    }
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

  function handleAppendPoliticalPerson(e) {
    e.preventDefault();
    appendPoliticalPerson({
      name: '',
      cargo: '',
      country: '',
      pepIdentification: ''
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
            <div className="steps-form__group-item">
              <label htmlFor={`stockholder.${index}.name`}>Nombre</label>
              <input {...register(`financialInformation.financialInformation.stockholder.${index}.name`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`stockholder.${index}.dni`}>Documento de identidad</label>
              <input {...register(`financialInformation.financialInformation.stockholder.${index}.dni`, { required: true })}  className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`stockholder.${index}.sharePercentage`}>Porcentaje accionario</label>
              <input {...register(`financialInformation.financialInformation.stockholder.${index}.sharePercentage`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`stockholder.${index}.cargo`}>Cargo</label>
              <input {...register(`financialInformation.financialInformation.stockholder.${index}.cargo`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`stockholder.${index}.esPep`}>ES PEP</label>
              <input {...register(`financialInformation.financialInformation.stockholder.${index}.esPep`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`stockholder.${index}.relatedWithPep`}>Relacionado con PEP</label>
              <input {...register(`financialInformation.financialInformation.stockholder.${index}.relatedWithPep`, { required: true })} className="steps-form__input" type="text" />
            </div>
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
            <div className="steps-form__group-item">
              <label htmlFor={`legalRepresentative.${index}.name`}>Nombre</label>
              <input {...register(`financialInformation.financialInformation.legalRepresentative.${index}.name`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`legalRepresentative.${index}.dni`}>Documento de identidad</label>
              <input {...register(`financialInformation.financialInformation.legalRepresentative.${index}.dni`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`legalRepresentative.${index}.sharePercentage`}>Porcentaje accionario</label>
              <input {...register(`financialInformation.financialInformation.legalRepresentative.${index}.sharePercentage`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`legalRepresentative.${index}.cargo`}>Cargo</label>
              <input {...register(`financialInformation.financialInformation.legalRepresentative.${index}.cargo`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`legalRepresentative.${index}.esPep`}>ES PEP</label>
              <input {...register(`financialInformation.financialInformation.legalRepresentative.${index}.esPep`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`legalRepresentative.${index}.relatedWithPep`}>Relacionado con PEP</label>
              <input {...register(`financialInformation.financialInformation.legalRepresentative.${index}.relatedWithPep`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
        </div>
      ))}

      <AddButton onClick={handleAppendLegal} disabled={legalFields.length >= 3} />
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <h6>Accionista / Junta directiva</h6>
  
      {politicalPersonFields.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Persona expuesta politicamente</h6>
          {index > 0 && <RemoveButton onClick={() => removePoliticalPerson(index)} />}
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`politicalPerson.${index}.name`}>Nombre de la institución o ente de adscripción</label>
              <input {...register(`financialInformation.financialInformation.politicalPerson.${index}.name`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`politicalPerson.${index}.cargo`}>Cargo que desempeña</label>
              <input {...register(`financialInformation.financialInformation.politicalPerson.${index}.cargo`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`politicalPerson.${index}.country`}>País</label>
              <input {...register(`financialInformation.financialInformation.politicalPerson.${index}.country`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`politicalPerson.${index}.pepIdentification`}>Identificación del PEP en caso relacionado</label>
              <input {...register(`financialInformation.financialInformation.politicalPerson.${index}.pepIdentification`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
        </div>
      ))}

      <AddButton onClick={handleAppendPoliticalPerson} disabled={politicalPersonFields.length >= 3} />
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="officeNumber">Nº de subsidiarias / Oficinas</label>
          <input {...register('financialInformation.financialInformation.officeNumber', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="countryWithGreaterPresence">País con mayor presencia</label>
          <input {...register('financialInformation.countryWithGreaterPresence', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="employeesNumber">Nº de empleados</label>
          <input {...register('financialInformation.employeesNumber', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="monthlySales">Ventas mensuales</label>
          <input {...register('financialInformation.monthlySales', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="monthlyIncome">Ingresos mensuales</label>
          <input {...register('financialInformation.monthlyIncome', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="monthlyExpenses">Egresos mensuales</label>
          <input {...register('financialInformation.monthlyExpenses', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div style={{ marginTop: "1rem" }}></div>
  
      <h6>Última declaración ISLR</h6>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="islrYear">Año</label>
          <input {...register('financialInformation.islrYear', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="islrAmount">Monto</label>
          <input {...register('financialInformation.islrAmount', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="islrCondition">Condición</label>
          <input {...register('financialInformation.islrCondition', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="islrIsPep">ES PEP</label>
          <input {...register('financialInformation.islrIsPep', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="islrRelatedWithPep">Relacionado con PEP</label>
          <input {...register('financialInformation.islrRelatedWithPep', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div style={{ marginTop: "1rem" }}></div>

      {providers.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Principales proveedores</h6>
          {index > 0 && <button className="delete-action" onClick={() => removeProviders(index)}><FontAwesomeIcon icon={["fas", "trash"]} fixedWidth size="1x" /></button>}
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`providers.${index}.name`}>Nombre o razón social</label>
              <input {...register(`financialInformation.providers.${index}.name`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`providers.${index}.location`}>Ubicación</label>
              <input {...register(`financialInformation.providers.${index}.location`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
        </div>
      ))}

      <AddButton disabled={providers.length >= 2} onClick={(e) => {
          e.preventDefault();
          appendProviders({
            name: '',
            location: ''
          })
        }} 
      />
  
      <div style={{ marginTop: "1rem" }}></div>

      {clients.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Principales clientes</h6>
          {index > 0 && <RemoveButton onClick={() => removeClients(index)} />}
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`clients.${index}.name`}>Nombre o razón social</label>
              <input {...register(`financialInformation.clients.${index}.name`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`clients.${index}.name`}>Ubicación</label>
              <input {...register(`financialInformation.clients.${index}.location`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
        </div>
      ))}
  
      <AddButton disabled={clients.length >= 2} onClick={(e) => {
          e.preventDefault();
          appendClients({
            name: '',
            location: ''
          })
        }} 
      />
  
      <div style={{ marginTop: "1rem" }}></div>
  
      {relatedCompanies.map((field, index) => (
        <div className="steps-form__collection" key={field.id}>
          <h6>Empresas relacionadas</h6>
          {index > 0 && <RemoveButton onClick={() => removeRelatedCompanies(index)} />}
          <div className="steps-form__group">
            <div className="steps-form__group-item">
              <label htmlFor={`relatedCompanies.${index}.name`}>Nombre o razón social</label>
              <input {...register(`financialInformation.relatedCompanies.${index}.name`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`relatedCompanies.${index}.economicActivity`}>Actividad económica</label>
              <input {...register(`financialInformation.relatedCompanies.${index}.economicActivity`, { required: true })} className="steps-form__input" type="text" />
            </div>
            <div className="steps-form__group-item">
              <label htmlFor={`relatedCompanies.${index}.taxInformationRegistry`}>Registro de información fiscal</label>
              <input {...register(`financialInformation.relatedCompanies.${index}.taxInformationRegistry`, { required: true })} className="steps-form__input" type="text" />
            </div>
          </div>
        </div>
      ))}

      <AddButton disabled={relatedCompanies.length >= 2} onClick={(e) => {
          e.preventDefault();
          appendRelatedCompanies({
            name: '',
            economicActivity: '',
            taxInformationRegistry: ''
          })
        }} 
      />
      <div style={{ marginTop: "1rem" }}></div>
  
      <h6>Referencias bancarias</h6>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="bankReferencesInstitution">Institución del sector bancario</label>
          <input {...register('financialInformation.bankReferencesInstitution', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="bankReferencesProductName">Nombre del producto</label>
          <input {...register('financialInformation.bankReferencesProductName', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
  
      <div className="steps-form__group">
        <div className="steps-form__group-item">
          <label htmlFor="bankReferencesProductNumber">Número del producto</label>
          <input {...register('financialInformation.bankReferencesProductNumber', { required: true })} className="steps-form__input" type="text" />
        </div>
        <div className="steps-form__group-item">
          <label htmlFor="bankReferencesAverage">Cifras promedio</label>
          <input {...register('financialInformation.bankReferencesAverage', { required: true })} className="steps-form__input" type="text" />
        </div>
      </div>
    </form>
  );
})

export default FinancialInformationStep;

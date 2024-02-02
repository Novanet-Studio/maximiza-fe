import React from 'react';

const FormContext = React.createContext();

export const useFormContext = () => React.useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = React.useState({});

  const updateFormData = (updatedData) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

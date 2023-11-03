import { useState } from "react";

export const formWhitValidation = (FormWrappedComponent) => {
  const NewFormWhitValidation = (props) => {
    const [errors, setError] = useState({});

    const validateForm = () => {
      let newErrors = {};
      let isValid = true;

      if (!props.formData.nombre) {
        newErrors.nombre = "El campo NOMBRE es obligatorio";
        isValid = false;
      }
      if (!props.formData.correo) {
        newErrors.correo = "El campo EMAIL es obligatorio";
        isValid = false;
      }
      setError(newErrors);
      return isValid;
    };

    return (
      <FormWrappedComponent
        {...props}
        errors // nuevas props de formulario = {errors}
        validateForm={validateForm}
      />
    );
  };

  return formWhitValidation;
};

import { useState } from "react";
import { Form } from "./Form";
import { formWhitValidation } from "./formWhitValidation";

// pasar un formulario y que me devuelva uno con validaciones
const FormWhitValidation = formWhitValidation(Form);

const FormContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
  });

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <FormWhitValidation formData={formData} handleOnChange={handleOnChange} />
  );
};

export default FormContainer;

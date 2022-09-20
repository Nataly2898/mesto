import { useState, useCallback } from "react";

const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: evt.target.validationMessage,
    });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    errors,
    handleChange,
    isFormValid,
    resetForm,
  };
};

export default useFormValidation;
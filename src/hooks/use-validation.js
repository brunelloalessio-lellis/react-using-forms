import { useState } from "react";
const useValidation = (validateFn) => {
  const [currentValue, setCurrentValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueValid = validateFn(currentValue);
  const inputInvalid = !valueValid && isTouched;

  const onInputChange = (event) => {
    setCurrentValue(event.target.value);
  };

  const onInputBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setCurrentValue("");
    setIsTouched(false);
  };

  return {
    inputValue: currentValue,
    inputInvalid,
    onInputBlur,
    onInputChange,
    reset
  };
};

export default useValidation;

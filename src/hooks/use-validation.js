import { useReducer } from "react";

const defaultState = {
  currentValue: "",
  isTouched: false,
};

const useValidationReducer = (state, action) => {
  if (action.type === "UPDATE_VALUE") {
    return {
      ...state,
      currentValue: action.value,
    };
  }

  if (action.type === "RESET") {
    return defaultState;
  }

  if (action.type === "TOUCH") {
    return {
      ...state,
      isTouched: true,
    };
  }

  return defaultState;
};

const useValidation = (validateFn) => {
  const [validationState, validationStateDispatch] = useReducer(
    useValidationReducer,
    defaultState
  );

  const valueValid = validateFn(validationState.currentValue);
  const inputInvalid = !valueValid && validationState.isTouched;

  const onInputChange = (event) => {
    validationStateDispatch({
      type: "UPDATE_VALUE",
      value: event.target.value,
    });
  };

  const onInputBlur = () => {
    validationStateDispatch({
      type: "TOUCH"
    });
  };

  const reset = () => {
    validationStateDispatch({
      type: "RESET"
    });
  };

  return {
    inputValue: validationState.currentValue,
    valueValid,
    inputInvalid,
    onInputBlur,
    onInputChange,
    reset,
  };
};

export default useValidation;

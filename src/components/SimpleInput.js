import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    onValueChange: onNameValueChange,
    onInputBlur: onNameBlur,
    reset: resetNameInput
  } = useInput((nameToValidate) => nameToValidate.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    onValueChange: onEmailValueChange,
    onInputBlur: onEmailInputBlur,
    reset: resetEmailInput
  } = useInput((emailToValidate) => emailToValidate.includes("@"))


  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetNameInput()
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onFormSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={onNameValueChange}
          onBlur={onNameBlur}
        />
        {nameInputHasError && (
          <p
            style={{
              color: "red",
            }}
          >
            Name must not be empty
          </p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="text"
          id="email"
          onChange={onEmailValueChange}
          onBlur={onEmailInputBlur}
        />
        {emailInputHasError && (
          <p
            style={{
              color: "red",
            }}
          >
            Please enter a valid email
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

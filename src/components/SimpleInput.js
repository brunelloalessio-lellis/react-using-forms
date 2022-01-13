import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "" && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.includes("@") && enteredEmailTouched;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const onNameChange = (event) => {
    setEnteredName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!formIsValid) return;

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const onInputNameBlur = (event) => {
    setEnteredNameTouched(true);
  };
  const onInputEmailBlur = (event) => {
    setEnteredEmailTouched(true);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
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
          onChange={onNameChange}
          onBlur={onInputNameBlur}
        />
        {nameInputIsInvalid && (
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
          onChange={onEmailChange}
          onBlur={onInputEmailBlur}
        />
        {emailInputIsInvalid && (
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

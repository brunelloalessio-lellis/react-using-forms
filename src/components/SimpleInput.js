import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "" && enteredNameTouched;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const formIsValid = enteredNameIsValid

  const onNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if(!formIsValid) return

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const onInputBlur = (event) => {
    setEnteredNameTouched(true);
  };


  const nameInputClasses = !nameInputIsInvalid
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
          onBlur={onInputBlur}
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

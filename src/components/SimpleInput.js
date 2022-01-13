import { useEffect, useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("name is valid!");
    }
  }, [enteredNameIsValid]);

  const onNameChange = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true)

    const name = enteredName;

    if (name.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(name);

    setEnteredName("");
  };

  const onInputBlur = (event)=>{
    setEnteredNameTouched(true)

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

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

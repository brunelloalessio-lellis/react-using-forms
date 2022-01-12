import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  const onNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const name = enteredName;

    if(name.trim() === ''){
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)
    console.log(name);

    setEnteredName('')
  };

  const nameInputClasses = enteredNameIsValid? 'form-control': 'form-control invalid'

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
        {!enteredNameIsValid && <p style={{
          color: 'red'
        }}>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

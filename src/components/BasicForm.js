import useValidation from "../hooks/use-validation";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    inputValue: currentName,
    inputInvalid: nameIsInvalid,
    onInputBlur: onNameBlur,
    onInputChange: onNameChange,
    reset: resetName,
  } = useValidation(isNotEmpty);

  const {
    inputValue: currentLastname,
    inputInvalid: lastnameIsInvalid,
    onInputBlur: onLastnameBlur,
    onInputChange: onLastnameChange,
    reset: resetLastname,
  } = useValidation(isNotEmpty);

  const {
    inputValue: currentEmail,
    inputInvalid: emailIsInvalid,
    onInputBlur: onEmailBlur,
    onInputChange: onEmailChange,
    reset: resetEmail,
  } = useValidation((emailValue) => emailValue && emailValue.includes("@"));

  let formIsValid = false;

  if (!nameIsInvalid && !lastnameIsInvalid && !emailIsInvalid) {
    formIsValid = true;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log("form is valid");
    resetName();
    resetLastname();
    resetEmail();
  };

  let nameCls = "form-control";
  if (nameIsInvalid) nameCls += " invalid";

  let lastnameCls = "form-control";
  if (lastnameIsInvalid) lastnameCls += " invalid";

  let emailCls = "form-control";
  if (emailIsInvalid) emailCls += " invalid";

  return (
    <form onSubmit={onFormSubmit}>
      <div className="control-group">
        <div className={nameCls}>
          <label htmlFor="name">First Name</label>
          <input
            value={currentName}
            onChange={onNameChange}
            onBlur={onNameBlur}
            type="text"
            id="name"
          />
          {nameIsInvalid && <p style={{ color: "red" }}>Name is required</p>}
        </div>
        <div className={lastnameCls}>
          <label htmlFor="lastname">Last Name</label>
          <input
            value={currentLastname}
            onChange={onLastnameChange}
            onBlur={onLastnameBlur}
            type="text"
            id="lastname"
          />
          {lastnameIsInvalid && (
            <p style={{ color: "red" }}>Lastname is required</p>
          )}
        </div>
      </div>
      <div className={emailCls}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={currentEmail}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          type="text"
          id="email"
        />
        {emailIsInvalid && <p style={{ color: "red" }}>Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

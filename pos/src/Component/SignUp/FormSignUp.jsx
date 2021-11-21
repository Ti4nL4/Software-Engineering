import './Form.css'
import React from 'react';
import { useState, useEffect } from 'react';

const loginInputs = [
  {
    label: "User Name",
    type: "text",
    show: true,
    validated: "",
    id: "a"
  }, {
    label: "Password",
    type: "password",
    show: true,
    validated: "",
    id: "b"
  }
];

const signupInputs = [
  {
    label: "User Name",
    type: "text",
    show: false,
    validated: "",
    id: "c"
  }, {
    label: "Email",
    type: "email",
    show: false,
    validated: "",
    id: "d"
  }, {
    label: "Password",
    type: "password",
    show: false,
    validated: "",
    id: "e"
  }, {
    label: "Re-Enter Password",
    type: "password",
    show: false,
    validated: "",
    id: "f"
  }
];

function FormSignUp() {

  const [formSignUp,setFormSignUp] = useState(false)
  const [state, setState] = useState({
    signupInputs: signupInputs,
    loginInputs: loginInputs
  })
  
  const inUpClick = () => {
    setFormSignUp(!formSignUp);
  }
  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form-sign-up">
      <Login
        signUp={formSignUp}
        inputs={state.loginInputs}
        inUpClick={inUpClick}
        submitForm={submitForm}
        // validateField={validateField}

      />
      <SignUp
        signUp={formSignUp}
        inputs={state.signupInputs}
        inUpClick={inUpClick}
        submitForm={submitForm}
        // validateField={validateField}
      />
    </div>
  );
};

const Login = ({
  inputs,
  signUp,
  inUpClick,
  submitForm,
  // validateField
}) => (
  <div className={signUp ? "login login-closed" : "login"} >
    <h1>Log In</h1>
    <hr />
    <Form
      inputs={inputs}
      submitForm={submitForm}
      // validateField={validateField}
    />
    <SignupLink inUpClick={inUpClick} />
  </div>
);

const SignUp = ({
  inputs,
  signUp,
  inUpClick,
  submitForm,
  // validateField
  }) => (
  <div
    className={signUp
      ? "sign-up"
      : "sign-up sign-up-closed"}
  >
    <h1>Sign Up</h1>
    <hr />
    <Form
      inputs={inputs}
      submitForm={submitForm}
      // validateField={validateField}
    />
    <LoginLink inUpClick={inUpClick} />
  </div>
);

const Form = ({
  inputs,
  submitForm,
  // validateField
}) => {
  const inputsMapped = inputs.map((i,index) => (
    <Input key={index}
      label={i.label}
      type={i.type}
      show={i.show}
      validated={i.validated}
      id={i.id}
      // validateField={validateField}
    />
  ));

  return (
    <form onSubmit={submitForm}>
      {inputsMapped}
      <Submit />
    </form>
  );
};

const Submit = () => (
  <div>
    <hr />
    <button
      className="submit-button"
      type="submit"
    > Submit
    </button>
  </div>
);

const Input = ({
  label,
  type,
  show,
  validated,
  id,
  // validateField
}) => (
  <div className={show ? "field field-in" : "field"}>
    <label className="label">{label}
      <i
        className={validated
          ? "fa fa-check animate-check"
          : ""}
        aria-hidden="true"
      ></i>
    </label>
    <br />
    <input
      className="input"
      type={type}
      // onBlur={(e) => { validateField(e, id) }}
    />
  </div>
);

const SignupLink = ({ inUpClick }) => (
  <div className="signup-link">
    <p className="in-out">
      Don't have an account? {" "}
      <button onClick={inUpClick}>Sign Up Here</button>
    </p>
  </div>
);

const LoginLink = ({ inUpClick }) => (
  <div className="signup-link">
    <p className="in-out">
      Already have an account? {" "}
      <button onClick={inUpClick}>Log In Here</button>
    </p>
  </div>
);


export default FormSignUp;
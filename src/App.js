import React, {useState} from "react";
import "./index.css";

const App = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(true);

  const handleFirstName = event => {
    setValues({...values, firstName: event.target.value});
  }
  const handleLastName = event => {
    setValues({...values, lastName: event.target.value});
  }
  const handleEmail = event => {
    setValues({...values, email: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted ? <div className='success-message'>Success! Thanks for your registering.</div> : null}
        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
import React, {useState} from "react";
import "./index.css";

const App = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstName = (event) => {
    setValues({...values, firstName: event.target.value});
  }
  const handleLastName = (event) => {
    setValues({...values, lastName: event.target.value});
  }
  const handleEmail = (event) => {
    setValues({...values, email: event.target.value});
  }

  return (
    <div class="form-container">
      <form class="register-form">
        {submitted ? <div className='success-message'>Success! Thanks for your registering.</div> : null}
        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
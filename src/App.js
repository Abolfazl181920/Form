import React, {useState} from "react";
import "./index.css";

const App = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
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

        {submitted && !values.firstName ? <span>Please enter a firstName!</span> : null}

        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        {submitted && !values.lastName ? <span>Please enter a lastName!</span> : null}
      
        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        
        {submitted && values.email ? <span>Please enter an email address!</span> : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
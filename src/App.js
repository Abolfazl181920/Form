import React, {useState} from 'react';
import './index.css';

const App = () => {

  const [values, setValues] = useState(
    {
      firstName: "",
      lastName: "",
      email: ""
    }
  );
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameValue = event => {
    setValues({...values, firstName:event.target.value});
  }
  const handleLastNameValue = event => {
    setValues({...values, lastName:event.target.value});
  }
  const handleEmailValue = event => {
    setValues({...values, email:event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }
  
  return(
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>

        {submitted && valid ? <div className="success-message">Thanks for your regestering!</div> : null}
        
        <input
          onChange={handleFirstNameValue}
          value={values.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        {submitted && !values.firstName ? <span>Please enter your firstName!</span> :null}

        <input
          onChange={handleLastNameValue}
          value={values.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        {submitted && !values.lastName ? <span>Please enter your lastName!</span> : null}

        <input
          onChange={handleEmailValue}
          value={values.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        {submitted && !values.email ? <span>Please enter your email!</span> : null}
        
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
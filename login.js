import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function Login() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!username || !pass) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (pass.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    // Reset error message if validation passed
    setErrorMessage('');

    // Navigate to the home page
    navigate('/home');
  };

  return (
    
      <div>
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Login</h2>
      </div>

      <form onSubmit={formHandler}>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <ul className="list-group list-group-flush">
            <br />
            <li className="list-group-item">
              <b>Username: </b>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
            </li>
            <br />
            <li className="list-group-item">
              <b>Password : </b>
              <input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <br />
            </li>
          </ul>

          <br />

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button className="btn btn-info my-2" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="btn btn-info" to="/signin">
              Signin
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="btn btn-info" to="/forgot">
              Forgot Password
            </Link>
          </div>
        </nav>
      </div>
    </div>
    
  );
}

export default Login;
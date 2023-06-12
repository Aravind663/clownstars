import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function Signin() {
  const [username, setUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();

    if (!username || !createPassword || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (createPassword.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    if (createPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Reset error message if validation passed
    setErrorMessage('');

    // Form validation passed
    navigate('/');
  };

  return (
    <div>
      <div className="imga">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Signin</h2>
        </div>

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <form onSubmit={formHandler}>
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
                {errorMessage && (
                  <label style={{ color: 'red' }}>{errorMessage}</label>
                )}
                <br />
              </li>

              <li className="list-group-item">
                <b>Create Password: </b>
                <input
                  type="password"
                  placeholder="Create Password"
                  value={createPassword}
                  onChange={(e) => setCreatePassword(e.target.value)}
                />

                {errorMessage && (
                  <label style={{ color: 'red' }}>{errorMessage}</label>
                )}
              </li>
              <br />
              <li className="list-group-item">
                <b>Confirm Password: </b>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
                <br />
                {errorMessage && (
                  <label style={{ color: 'red' }}>{errorMessage}</label>
                )}
              </li>
            </ul>
            <br />
            <br />
            <button type="submit" className="btn btn-info my-2">
              Submit
            </button>
            <br />
            <br />
          </form>
        </div>
        <div className="sigi">
          <h4>
            <br />
            Already have an account?{' '}
            <Link className="btn btn-info my-2" to="/">
              Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signin;
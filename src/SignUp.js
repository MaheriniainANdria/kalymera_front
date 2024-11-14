import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';
import kalymeraLogo from './assets/kalymera.jfif';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error || 'Failed to sign up');
          });
        }
        return response.json();
      })
      .then((data) => {
        setMessage('Sign up successful!');
        setUsername('');
        setPassword('');
        navigate('/login');
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-image">
          <img src={kalymeraLogo} alt="Kalymera" />
          <p className="signup-image-text">Kalymera</p>
        </div>
        <div className="signup-form">
          <h2>Create an account</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleSignUp}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';
import kalymeraLogo from './assets/kalymera.jfif';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error || 'Login failed');
          });
        }
        return response.json();
      })
      .then((data) => {
        setMessage('Login successful!');
        onLogin();
        navigate('/home');
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={kalymeraLogo} alt="Kalymera" />
          <p className="login-image-text">Kalymera</p>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

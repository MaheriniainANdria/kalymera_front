import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1>Welcome!</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="btn" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomePage;

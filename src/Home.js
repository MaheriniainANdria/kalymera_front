import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToManagerPage = () => {
    navigate('/manager');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button>Client</button>
      <button onClick={goToManagerPage}>Manager</button>
    </div>
  );
};

export default Home;
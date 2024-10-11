import React from 'react';
import { useNavigate } from 'react-router-dom';

const Manager = () => {
  const navigate = useNavigate();

  const goToCreateTableForm = () => {
    navigate('/create-table');
  };

  return (
    <div>
      <h1>Manager Dashboard</h1>
      <button onClick={goToCreateTableForm}>Create Dining Table</button>
    </div>
  );
};

export default Manager;
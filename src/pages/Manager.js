import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Manager.css';

const Manager = () => {
  const navigate = useNavigate();

  const goToCreateTableForm = () => {
    navigate('/create-table');
  };

  const goToAllTables = () => {
    navigate('/all-tables');
  };

  return (
    <div className="manager-page">
      <h1>Manager Dashboard</h1>
      <button onClick={goToCreateTableForm}>Create Dining Table</button>
      <button onClick={goToAllTables}>All the tables</button>
    </div>
  );
};

export default Manager;

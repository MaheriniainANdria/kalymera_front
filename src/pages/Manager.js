import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Manager.css';
import managerImage from './../assets/manager.jfif';
import Footer from './../components/Footer';

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
      <div className="manager-container">
        <div className="manager-content">
          <h1>Hi, Manager</h1>
          <p>What would you like to do?</p>
          <button onClick={goToCreateTableForm}>Create Dining Table</button>
          <button onClick={goToAllTables}>All the tables</button>
        </div>
        <div className="manager-image">
          <img src={managerImage} alt="Manager" />
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Manager;

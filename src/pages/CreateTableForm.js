import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/CreateTableForm.css';
import Footer from './../components/Footer';

const CreateTableForm = () => {
  const [name, setName] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState(0);
  const [type, setType] = useState('normal');
  const [location, setLocation] = useState('interieur');
  const [tableNumber, setTableNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTable = { 
      name, 
      number_of_seats: numberOfSeats, 
      type, 
      location, 
      tableNumber
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTable),
      });

      if (response.ok) {
        alert('Table created successfully');
        navigate('/manager'); // Redirect back to the Manager page after creation
      } else {
        const errorData = await response.json();
        console.error('Error creating table:', errorData);
        alert('Failed to create table: ' + errorData.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error creating table:', error);
      alert('Error creating table');
    }
  };

  return (
    <div className='create-table-form'>
      <h1>Create a New Dining Table</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Table Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Table Number: {/* Ajout d'un champ pour le numéro de table */}
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Number of Seats:
          <input
            type="number"
            value={numberOfSeats}
            onChange={(e) => setNumberOfSeats(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="VIP">VIP</option>
            <option value="troc">Troc</option>
          </select>
        </label>
        <br />
        <label>
          Location:
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="interieur">Intérieur</option>
            <option value="exterieur">Extérieur</option>
            <option value="balcon">Balcon</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Table</button>
      </form>
      <Footer />
    </div>
  );
};

export default CreateTableForm;

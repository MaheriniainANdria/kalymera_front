import React, { useState, useEffect } from 'react';
import './../styles/AllTables.css';
import Footer from './../components/Footer';

const AllTables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/tables')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tables');
        }
        return response.json();
      })
      .then(data => setTables(data))
      .catch(error => console.error('Error fetching tables:', error));
  }, []);

  return (
    <div className="all-tables-page">
      <h1 className="title">All Dining Tables</h1>
      <table className="tables-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Seats</th>
            <th>Type</th>
            <th>Location</th>
            <th>Table Number</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.name}</td>
              <td>{table.number_of_seats}</td>
              <td>{table.type}</td>
              <td>{table.location}</td>
              <td>{table.table_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default AllTables;

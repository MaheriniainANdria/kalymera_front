import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Home from './Home';
import Manager from './pages/Manager';
import CreateTableForm from './pages/CreateTableForm';
import AllTables from './pages/AllTables';
import SignUp from './SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/manager" element={isAuthenticated ? <Manager /> : <Navigate to="/login" />} />
          <Route path="/create-table" element={isAuthenticated ? <CreateTableForm /> : <Navigate to="/login" />} />
          <Route path="/all-tables" element={isAuthenticated ? <AllTables /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

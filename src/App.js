import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import PatientsPage from './pages/PatientsPage';
import SponsorPage from './pages/SponsorPage';
import ProvidersPage from './pages/ProvidersPage';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
      </Routes>
    
    </Router>

  );
}

export default App;

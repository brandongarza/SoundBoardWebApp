import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/LogIn.js';
import Sounds from './pages/Sounds.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' exact element={<Home />} />
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sounds' element={<Sounds />} />
      </Routes>
    </Router>
  );
}

export default App;

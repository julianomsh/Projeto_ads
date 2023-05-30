import React from 'react';
import './App.css';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registrar from './Registrar';
import Home from './Home'


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

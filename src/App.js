import React from 'react';
import Homepage from './Pages/Homepage';
import './App.css';
import Companyprofile from './Pages/Companyprofile';
import Compareprofile from './Pages/Compareprofile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route index element={<Homepage />} />
            <Route path="/companyprofile" element={<Companyprofile />} />
            <Route path="/compareprofile" element={<Compareprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Tracking from './components/ShipmentTracker';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tracking" element={<Tracking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

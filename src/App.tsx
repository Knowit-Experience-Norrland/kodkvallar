import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';


function App() {
  return (
 <div>
  <Router>
    <Routes>
    <Route path="/" element={<h1>Start Page</h1>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/event" element={<EventPage />} />
    </Routes>
  </Router>
 </div>
  );
}

export default App;

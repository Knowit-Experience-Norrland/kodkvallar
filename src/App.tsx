import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';


function App() {
  return (
 <div>
  <Router>
    <Routes>
      <Route path="/" element={<ContactPage />} />
    </Routes>
  </Router>
 </div>
  );
}

export default App;

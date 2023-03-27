import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsletterSignupComp from './components/NewsletterSignup/NewsletterSignupComp';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';

// react router for routing between pages
function App() {
  return (
 <div>
  <Router>
    <Routes>
    <Route path="/" element={<NewsletterSignupComp />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  </Router>
 </div>
  );
}

export default App;

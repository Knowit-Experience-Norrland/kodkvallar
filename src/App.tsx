import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComp from "./components/Footer/FooterComp";
import NavigationComp from "./components/Navigation/NavigationComp";
import NewsletterSignupComp from "./components/NewsletterSignup/NewsletterSignupComp";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import InfoPage from "./pages/InfoPage";

// react router for routing between pages
function App() {
  return (
    <div>
      <Router>
          <header>
            <NavigationComp />
          </header>
        <Routes>
            <Route path="/" element={<NewsletterSignupComp />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/event/:id" element={<EventPage />} />
            <Route path="/test" element={<InfoPage />} />
        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;

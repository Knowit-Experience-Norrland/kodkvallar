import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComp from "./components/Footer/FooterComp";
import HeaderComp from "./components/Header/HeaderComp";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import InfoPage from "./pages/InfoPage";
import StartPage from "./pages/StartPage";

// react router for routing between pages
function App() {
  return (
    <div className="container">
      <Router>
            <HeaderComp />
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/about" element={<ContactPage />} />
            <Route path="/event/:id" element={<EventPage />} />
            <Route path="/test" element={<InfoPage />} />
        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;

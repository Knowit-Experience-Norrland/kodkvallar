import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComp from "./components/Footer/FooterComp";
import HeaderComp from "./components/Header/HeaderComp";
import SingleEventPage from "./pages/SingleEventPage";
import StartPage from "./pages/StartPage";

// react router for routing between pages
function App() {
  return (
    <div className="container">
      <Router>
            <HeaderComp />
        <Routes>
            <Route path="/" element={<StartPage />} />
            {/* upcoming events - single event and feed page */}
            <Route path="/event" element={<StartPage />} />
            <Route path="/event/:slug" element={<SingleEventPage />} />
             {/* old events - single event and feed page */}
             <Route path="/blog" element={<StartPage />} />
            <Route path="/blog/:slug" element={<SingleEventPage />} />
            {/* about */}
            <Route path="/about" element={<SingleEventPage />} />

        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;

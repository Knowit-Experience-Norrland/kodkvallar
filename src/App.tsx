import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FooterComp from "./components/Footer/FooterComp";
import HeaderComp from "./components/Header/HeaderComp";
import SingleEventPage from "./pages/SingleEventPage";
import StartPage from "./pages/StartPage";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";
import PastEventsPage from "./pages/PastEventsPage";
import SinglePastEventPage from "./pages/SinglePastEventPage";
import AboutPage from "./pages/AboutPage";
import Error404 from "./pages/Error404";
import ScrollToTop from "./components/ScrollToTopComp";
import Formpage from "./pages/Formpage";

// react router for routing between pages
function App() {
  return (
    <div className="container">
      <Router>
        <ScrollToTop />
        <HeaderComp />
        <Routes>
          <Route path="/" element={<StartPage />} />
          {/* upcoming events - single event and feed page */}
          <Route path="/event" element={<UpcomingEventsPage />} />
          <Route path="/event/:slug" element={<SingleEventPage />} />
          {/* old events - single event and feed page */}
          <Route path="/blog" element={<PastEventsPage />} />
          <Route path="/blog/:slug" element={<SinglePastEventPage />} />
          {/* about */}
          <Route path="/about" element={<AboutPage />} />
          {/* Feedback page with form */}
          <Route path="/feedback/:slug" element={<Formpage />} />
          {/* 404 */}
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";

const NavigationDrawerComp = () => {
  return (
    <nav
      className="navigation-drawer"
      role="navigation"
      aria-label="main navigation"
    >
      <NavLink to="/">Start</NavLink>
      <NavLink to="/upcoming">Kommande Event</NavLink>
      <NavLink to="/events">Tidigare Event</NavLink>
      <NavLink to="/about">Om oss</NavLink>

    </nav>
  );
};

export default NavigationDrawerComp;

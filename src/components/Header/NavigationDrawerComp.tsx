import React from "react";
import { NavLink } from "react-router-dom";

// recive prop from HeaderComp.tsx, show/hide navigation
interface Props {
  prop: string;
}
const NavigationDrawerComp = ({prop}: Props) => {

  return (
    <nav
      className="navigation-drawer"
      style={{ display: prop }}
      role="navigation"
      aria-label="main navigation" 
      tabIndex={!prop ? 0 : -1}
    >
      <NavLink to="/">Start</NavLink>
      <hr />
      <NavLink to="/upcoming">Kommande Event</NavLink>
      <hr />
      <NavLink to="/events">Tidigare Event</NavLink>
      <hr />
      <NavLink to="/about">Om oss</NavLink>
      <hr />
    </nav>
  );
};

export default NavigationDrawerComp;

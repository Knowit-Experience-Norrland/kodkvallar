import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// recive prop from HeaderComp.tsx, show/hide navigation
interface Props {
  prop: boolean;
}
const NavigationDrawerComp = ({prop}: Props) => {

  return (
    <nav
      className={prop ? "navigation-drawer" : "navigation-drawer is-active"}
      role="navigation"
      aria-label="main navigation" 
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

import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  prop: string;
}
const NavigationDrawerComp = ({prop}: Props) => {


  return (
    <nav
      className="navigation-drawer"
      role="navigation"
      aria-label="main navigation"
      style={{ display: prop }}
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

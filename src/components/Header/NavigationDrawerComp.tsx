import React from "react";
import { NavLink } from "react-router-dom";

// recive prop from HeaderComp.tsx, show/hide navigation
interface Props {
  prop: string;
  onClick: (temp: boolean) => void;
}

const NavigationDrawerComp = ({ prop, onClick }: Props) => {
  const close = () => {
    onClick(true);
  };
  return (
    //show/hide nav with prop and onClick send to parent to close nav
    <nav
      className="navigation-drawer"
      style={{ display: prop }}
      role="navigation"
      aria-label="main navigation"
    >
      <NavLink to="/" onClick={close}>
        Start
      </NavLink>
      <hr />
      <NavLink to="/event" onClick={close}>
        Kommande Event
      </NavLink>
      <hr />
      <NavLink to="/blog" onClick={close}>
        Tidigare Event
      </NavLink>
      <hr />
      <NavLink to="/about" onClick={close}>
        Om oss
      </NavLink>
      <hr />
    </nav>
  );
};

export default NavigationDrawerComp;

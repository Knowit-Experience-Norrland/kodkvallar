import React from "react";
import {IoMenuSharp} from "react-icons/io5";
import NavigationDrawerComp from "./NavigationDrawerComp";
const HeaderComp = () => {

  return (
    <div>
    <header id="header">
      <img src="./logo.svg" alt="Knowit Experience" className="logo" />
     <IoMenuSharp className="menu-btn"/>
    </header>
     <NavigationDrawerComp />
    </div>
  );
};

export default HeaderComp;

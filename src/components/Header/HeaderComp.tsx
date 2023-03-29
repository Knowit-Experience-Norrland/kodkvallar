import React, {  useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationDrawerComp from "./NavigationDrawerComp";


const HeaderComp = () => {
  const [menuChange, setmenuChange] = useState("none");
  const [menuBtn, setmenuBtn] = useState(false);

  const handleClick = () => {
    setmenuChange(menuChange === "none" ? "flex" : "none");
    setmenuBtn(!menuBtn);
  };
  return (
    <div>
      <header id="header">
        <Link to="/">
          <img src="./logo.svg" alt="Knowit Experience" className="logo" />
        </Link>
        {!menuBtn ? (
          <button onClick={handleClick}><IoMenuSharp className="menu-btn" /></button>
          
        ) : (
          <button onClick={handleClick}><IoCloseSharp className="menu-btn" /></button>
          
        )}
      </header>
      <NavigationDrawerComp prop={menuChange} />
    </div>
  );
};

export default HeaderComp;

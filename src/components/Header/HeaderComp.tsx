import React, {  useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationDrawerComp from "./NavigationDrawerComp";

// header component with navigation
const HeaderComp = () => {
  const [menuChange, setmenuChange] = useState("none");
  const [greyout, setGreyout] = useState("none");
  const [menuBtn, setmenuBtn] = useState(false);

  // set states depending on btn click. change btn icon and show/hide navigation
  const handleClick = () => {
    setmenuChange(menuBtn === true ? "none" : "flex");
    setGreyout(menuBtn === true ? "none" : "block");
    setmenuBtn(!menuBtn);
  };
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src="/logo.svg" alt="Knowit Experience" className="logo" />
        </Link>
        {/* cahnge btn */}
        {!menuBtn ? (
          <div className="menu-btn-container">
          <button onClick={handleClick}><IoMenuSharp className="menu-btn" /></button>
          <p className="menu-btn-text">Meny</p>
          </div>
          
        ) : (
          <div className="menu-btn-container">
          <button onClick={handleClick}><IoCloseSharp className="menu-btn" /></button>
          <p className="menu-btn-text">Stäng</p>
          </div>
        )}
      </header>
      {menuBtn ? <div className="greyout" onClick={handleClick}></div> : null}

      {/* send state to component */}
      <NavigationDrawerComp prop={menuChange} />
    </div>
  );
};

export default HeaderComp;

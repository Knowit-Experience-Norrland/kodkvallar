import React, {  useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationDrawerComp from "./NavigationDrawerComp";

// header component with navigation
const HeaderComp = () => {
  const [menuChange, setmenuChange] = useState(false);
  const [menuBtn, setmenuBtn] = useState(false);

  // set states depending on btn click. change btn icon and show/hide navigation
  const handleClick = () => {
    setmenuChange(menuChange === false ? true : false);
    setmenuBtn(!menuBtn);
  };
  return (
    <div>
      <header id="header">
        <Link to="/">
          <img src="./logo.svg" alt="Knowit Experience" className="logo" />
        </Link>
        {/* cahnge btn */}
        {!menuBtn ? (
          <button onClick={handleClick}><IoMenuSharp className="menu-btn" /></button>
          
        ) : (
          <button onClick={handleClick}><IoCloseSharp className="menu-btn" /></button>
          
        )}
      </header>
      {/* send state to component */}
      <NavigationDrawerComp prop={menuChange} />
    </div>
  );
};

export default HeaderComp;

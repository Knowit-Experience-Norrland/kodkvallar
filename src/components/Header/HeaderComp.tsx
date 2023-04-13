import React, { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationDrawerComp from "./NavigationDrawerComp";
import Logo from "../../media/logo.svg";


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
  // recive change in state from child component, to show/hide greyout and menu
  const callback = (temp: boolean) => {
    if (temp === true) {
      setmenuChange("none");
      setGreyout("none");
      setmenuBtn(false);
    }
  };
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img
            src={Logo}
            alt="Knowit Experience"
            className="logo"
          />
        </Link>
        {/* cahnge menu btn */}
        {!menuBtn ? (
          <div className="menu-btn-container">
            <button
              className="nav-btn"
              onClick={handleClick}
              title="Öppna Meny"
            >
              <IoMenuSharp className="menu-btn" />
            </button>
            <p className="menu-btn-text">Meny</p>
          </div>
        ) : (
          <div className="menu-btn-container">
            <button
              className="nav-btn"
              onClick={handleClick}
              title="Stäng Meny"
            >
              <IoCloseSharp className="menu-btn" />
            </button>
            <p className="menu-btn-text">Stäng</p>
          </div>
        )}
      </header>
      {greyout !== "none" && <div className="greyout" onClick={handleClick}></div> }

      {/* send state to component */}
      <NavigationDrawerComp onClick={callback} prop={menuChange} />
    </div>
  );
};

export default HeaderComp;

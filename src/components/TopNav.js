import React from "react";

import "./topNavStyles.css";
import logo from "../assets/Logo.svg";
import menu from "../assets/icons/menu1.svg";
import user from "../assets/icons/users.svg";
import filereg from "../assets/icons/file-reg.svg";
import NavLines from "./NavLines";

const TopNav = () => {
  return (
    <nav class="flex items-center bg-black-500 nav">
      <div class="left-side flex items-center">
        {/* Menu */}
        <img className="nav__hamburger" src={menu} alt="" />

        <div class="flex items-center flex-shrink-0 text-white mr-6">
          {/* Logo */}
          <img className="nav__logo" src={logo} alt="" />
        </div>
      </div>

      <div className="nav__center-side flex items-center justify-center w-full">
        <NavLines color="#E7E5E4" />
        <h3 className="font-bold flex shrink-0">Cu siguranță, împreună!</h3>
        <NavLines color="#E7E5E4" />
      </div>

      <div className="nav__right-side flex items-center">
        <div className="block flex">
          <div className="flex flex-col right-side-container">
            <img className="right-side-image" src={user} alt="" />
            <p className="text-sm">Logare</p>
          </div>
          <div className="flex flex-col right-side-container">
            <img className="right-side-image " src={filereg} alt="" />
            <p className="text-sm">Înregistrare</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

import React from "react";
import logo from "../images/logo.svg";
import { Router, Routes, Route, Link } from "react-router-dom";


function Header({email, onSignOut}) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта" className="header__logo" />
   <p className="header__link">777{email}</p>
    </header>
  );
}

export default Header;

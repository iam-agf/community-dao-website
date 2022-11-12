import React from "react";
import { Link } from "react-router-dom";
import "./sass/main.scss";
import logo from './assets/img/logo_circle_background.png';

function Header() {
  return (
    <div className="header">
      <Link to={"/"} className="header-button"><img className="header-logo" id="logo" src={logo} alt="logo" /></Link>
      <div className="header-nav">
        <Link to={"/chains"} className="header-button">Chains</Link>
        <Link to={"/validators"} className="header-button">Validators</Link>
        <Link to={"/about"} className="header-button">About</Link>
      </div>
    </div>
  );
}

export default Header;

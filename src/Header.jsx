import React from "react";
import { Link } from "react-router-dom";
import HeaderButton from "./components/HeaderButton";
import "./sass/main.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">logo</div>
      <div className="header-nav">
        <Link to={"/chains"} className="header-button">Chains</Link>
        <Link to={"/validators"} className="header-button">Validators</Link>
        <Link to={"/about"} className="header-button">About</Link>
      </div>
    </div>
  );
}

export default Header;

import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./sass/main.scss";
import logo from './assets/img/logo_circle_background.png';
import HeaderLinks from "./HeaderLinks";
import { CgMenu } from 'react-icons/cg';
import HeaderBurger from "./HeaderBurger";

function Header() {
  const [open, setOpen] = useState(false);

  const closeBurger = () => {
    document.body.style.removeProperty("overflow");
    setOpen(false)
  };
  return (
    <div className="header">
      <Link to={"/"} className="header-button"><img className="header-logo" id="logo" src={logo} alt="logo" /></Link>
      <CgMenu
        className="icon-hamburger"
        size={"5vh"}
        color={"orange"}
        onClick={() => {
          setOpen(!open);
          document.body.style.overflow = "hidden";
        }
        }
      />
      <div className="header-nav">
        <Link to={"/chains"} className="header-button">Chains</Link>
        <Link to={"/validators"} className="header-button">Validators</Link>
        <Link to={"/about"} className="header-button">About</Link>
      </div>
      {open && <HeaderBurger closeBurger={closeBurger} />}

    </div>
  );
}

export default Header;

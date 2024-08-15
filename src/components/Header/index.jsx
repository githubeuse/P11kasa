import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/header_logo.svg";
import "../../styles/Header/Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <img src={headerLogo} className="headerLogo" alt="Logo Kasa" />
      <nav className="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </div>
  );
}
export default Header;
//Navlink permet de détecter la page active

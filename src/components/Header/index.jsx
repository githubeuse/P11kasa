import React from "react";
import { NavLink, Link } from "react-router-dom";
import headerLogo from "../../assets/header_logo.svg";
import "../../styles/Header/Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img src={headerLogo} className="headerLogo" alt="Logo Kasa" />
      </Link>
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
//Navlink permet de détecter la page active

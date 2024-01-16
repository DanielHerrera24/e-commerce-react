import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import logo from "./logo-ej.jpg";

function NavBar() {
  return (
    <nav className="navbar bg-gray-200">
      <div className="cont-logo">
        <img className="logo-icon" src={logo} alt="Logo eléctrica janny" />
        <h2 className="text-3xl font-semibold">ELÉCTRICA JANNY</h2>
      </div>
      <div className="nav-links">
        <a href="#" className="link">
          Inicio
        </a>
        <a href="#" className="link">
          Productos
        </a>
        <a href="#" className="link">
          Contacto
        </a>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;

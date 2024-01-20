/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import logo from "./logo-ej.jpg";

function NavBar() {
  let [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 shadow-md">
      <nav className="md:px-0 py-0 px-0 md:flex md:items-center md:justify-between bg-gray-200">
        <div className="flex text-2xl items-center gap-1">
          <img className="h-16 inline" src={logo} alt="Logo eléctrica janny" />
          <span className="ml-2 font-semibold">ELECTRICA JANNY</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-2 top-4 cursor-pointer md:hidden text-3xl text-[#ED1A23]"
        >
          {open ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 bg-gray-200 shadow-md md:shadow-none gap-4 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-590px]"
          }`}
        >
          <li className="md:my-2 my-7 font-semibold">
            <a
              href="#"
              className="text-xl text-black no-underline border-b-2 border-solid border-[#ED1A23] hover:border-none hover:text-[#ED1A23] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
            >
              Inicio
            </a>
          </li>
          <li className="md:my-0 my-7 font-semibold">
            <a
              href="#"
              className="text-xl text-black no-underline border-b-2 border-solid border-[#ED1A23] hover:border-none hover:text-[#ED1A23] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
            >
              Productos
            </a>
          </li>
          <li className="md:my-0 my-7 font-semibold">
            <a
              href="#"
              className="text-xl text-black no-underline border-b-2 border-solid border-[#ED1A23] hover:border-none hover:text-[#ED1A23] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
            >
              Contacto
            </a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

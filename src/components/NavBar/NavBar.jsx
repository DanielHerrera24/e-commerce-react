import React, { useState } from "react";
import CartWidget from "../CartWidget";
import logo from "./logo-ej.jpg";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  let [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open); // Cambia el estado isOpen de true a false o viceversa
  };

  return (
    <header className="w-full fixed top-0 left-0 shadow-md">
      <nav className="md:px-0 py-0 px-0 flex md:flex md:items-center justify-between md:justify-between bg-gray-200">
        <div>
          <Link
            to="/e-commerce-react"
            className="flex text-2xl items-center gap-1"
          >
            <img
              className="h-16 inline"
              src={logo}
              alt="Logo eléctrica janny"
            />
            <span className="ml-2 font-semibold hidden sm:block">
              ELECTRICA JANNY
            </span>
          </Link>
        </div>
        <div className="contCarUl flex md:flex-row-reverse">
          <Link
            to="/e-commerce-react/cart"
            className="ml-auto flex items-center"
          >
            <CartWidget />
          </Link>
          <div
            onClick={toggleNavbar}
            className="cursor-pointer ml-auto flex items-center mr-2 md:hidden text-3xl text-[#034494]"
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 bg-gray-200 shadow-md md:shadow-none gap-4 transition-all duration-200 ease-in ${
              open ? "top-16" : "top-[-590px]"
            }`}
          >
            <li className="md:my-2 my-7 font-semibold">
              <NavLink
                to="/e-commerce-react"
                onClick={toggleNavbar}
                className="text-xl text-black no-underline border-b-2 border-solid border-[#034494] hover:border-none hover:text-[#034494] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
              >
                Inicio
              </NavLink>
            </li>
            <li className="md:my-0 my-7 font-semibold">
              <NavLink
                to="/e-commerce-react/categoria/apagadores"
                onClick={toggleNavbar}
                className="text-xl text-black no-underline border-b-2 border-solid border-[#034494] hover:border-none hover:text-[#034494] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
              >
                Apagadores
              </NavLink>
            </li>
            <li className="md:my-0 my-7 font-semibold">
              <NavLink
                to="/e-commerce-react/categoria/cajas"
                onClick={toggleNavbar}
                className="text-xl text-black no-underline border-b-2 border-solid border-[#034494] hover:border-none hover:text-[#034494] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
              >
                Cajas
              </NavLink>
            </li>
            <li className="md:my-2 my-7 font-semibold">
              <NavLink
                to="/e-commerce-react/categoria/luces"
                onClick={toggleNavbar}
                className="text-xl text-black no-underline border-b-2 border-solid border-[#034494] hover:border-none hover:text-[#034494] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
              >
                Luces
              </NavLink>
            </li>
            <li className="md:my-0 my-7 font-semibold">
              <NavLink
                to="/e-commerce-react/categoria/tapas"
                onClick={toggleNavbar}
                className="text-xl text-black no-underline border-b-2 border-solid border-[#034494] hover:border-none hover:text-[#034494] hover:bg-neutral-300 transition duration-200 ease-in-out md:py-3 md:px-4 p-3"
              >
                Tapas
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

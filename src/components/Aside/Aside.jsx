import React, { useState } from "react";
import "./aside.css";
import { FaFilter } from "react-icons/fa";

function Aside() {
  let [open, setOpen] = useState(false);

  return (
    <aside className="md:flex flex-col md:pl-4 lg:pl-10 w-full md:w-1/4 border-r-2 md:border-[#034494]">
      <div className="flex pt-5 pl-5 pb-3 md:pb-0 border-b-2 border-gray-300 md:border-none">
        <h2 className="hidden md:block font-semibold">Filtrar</h2>
        <div className="contFilter flex text-[#034494]" onClick={() => setOpen(!open)}>
          <FaFilter className="md:hidden text-3xl" />
          <span className="md:hidden ml-2">Filtrar</span>
        </div>
      </div>
      <div
        className={`flex flex-col md:items-start md:pb-0 absolute md:static md:z-auto z-10 left-0 w-auto md:w-auto md:pl-0 pl-7 bg-gray-200 shadow-md md:shadow-none gap-4 transition-all duration-200 ease-in ${
          open ? "left-0 shadow-lg" : "left-[-200px]"
        }`}
      >
        <article className="categorias flex flex-col items-start mt-3 md:mt-4">
          <h2 className=" text-2xl font-semibold pb-3">Categorias</h2>
          <ul className="accent-[#034494] text-sm flex flex-col items-start gap-1">
            <li>
              <input type="radio" name="categories" id="1" />
              <label htmlFor="1">All Products</label>
            </li>
            <li>
              <input type="radio" name="categories" id="2" />
              <label htmlFor="2">Inteligente</label>
            </li>
            <li>
              <input type="radio" name="categories" id="3" />
              <label htmlFor="3">Lámparas</label>
            </li>
          </ul>
        </article>
        <article className="categorias flex flex-col items-start md:mt-7 mr-2 mb-5">
          <h2 className="text-2xl font-semibold pb-3">Precio</h2>
          <ul className="text-xl flex justify-between gap-1">
            <li className="flex flex-col w-full gap-3">
              <div className="cont-precio flex justify-between">
                <span className="text-sm">$ 20 MXN</span>
                <span className="text-sm">$ 2349 MXN</span>
              </div>
              <input className="accent-[#034494]" type="range" name="categories" id="1" />
            </li>
          </ul>
        </article>
      </div>
    </aside>
  );
}

export default Aside;

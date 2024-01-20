import React from "react";
import "./aside.css";

function Aside() {
  return (
    <aside className="hidden md:flex flex-col md:pl-4 lg:pl-10 w-1/4 border-r-2 border-[#ED1A23]">
      <article className="categorias flex flex-col items-start md:mt-10">
        <h2 className=" text-2xl font-semibold pb-3">Categorias</h2>
        <ul className="text-sm flex flex-col items-start gap-1">
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
      <article className="categorias flex justify-between flex-col mt-7 pr-8">
        <h2 className="text-2xl font-semibold pb-3">Precio</h2>
        <ul className="text-xl flex justify-between gap-1">
          <li className="flex flex-col w-full gap-3">
            <div className="cont-precio flex justify-between">
              <span className="text-sm">$ 20 MXN</span>
              <span className="text-sm">$ 2349 MXN</span>
            </div>
            <input type="range" name="categories" id="1" />
          </li>
        </ul>
      </article>
    </aside>
  );
}

export default Aside;

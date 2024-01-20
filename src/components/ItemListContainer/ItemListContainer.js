import React from "react";
import Cards from "../Layout/Cards/Cards";

function ItemListContainer({ greeting }) {
  return (
    <div className="pt-5 md:pt-10 md:pl-6">
      <div className="flex justify-center text-center cont-title pb-6">
        <h1 className="text-3xl font-semibold">{greeting}</h1>
      </div>
      <div className="cont-cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-3">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default ItemListContainer;

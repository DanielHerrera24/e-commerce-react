import React from "react";
import Cards from "../Layout/Cards/Cards";

function ItemListContainer({ greeting }) {
  return (
    <div className="pt-5 md:pt-10 pl-6">
      <div className="cont-title pb-6">
        <h1 className="text-3xl font-semibold">{greeting}</h1>
      </div>
      <div className="cont-cards flex flex-wrap gap-3">
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default ItemListContainer;

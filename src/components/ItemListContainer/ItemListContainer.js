import React from "react";
import Cards from "../Layout/Cards/Cards";

function ItemListContainer({ greeting }) {
  return (
    <div className="pt-10 pl-6">
      <div className="cont-title pb-6">
        <h1 className="text-5xl">{greeting}</h1>
      </div>
      <div className="cont-cards flex flex-wrap gap-3">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default ItemListContainer;

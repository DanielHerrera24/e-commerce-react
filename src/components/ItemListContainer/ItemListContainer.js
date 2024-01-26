import React, { useState, useEffect } from "react";
import { getProducts } from "../../serverMock/productMock";
import CardComp from "../Layout/Cards/Cards";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProductos(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-5 md:pt-10 md:pl-6">
      <div className="flex justify-center text-center cont-title pb-6">
        <h1 className="text-3xl font-semibold">{greeting}</h1>
      </div>
      <div className="listItems cont-cards grid grid-cols-2 sm:grid-cols-3 sm:gap-3 gap-1">
        {productos.map((producto) => {
          return (
            <CardComp key={producto.id} producto={producto} />
          )
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;

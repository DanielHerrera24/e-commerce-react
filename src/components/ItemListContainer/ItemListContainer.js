import React, { useState, useEffect } from "react";
import { getProducts } from "../../serverMock/productMock";
import CardComp from "../Layout/Cards/Cards";
import { ScaleLoader } from "react-spinners";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProductos(res);
        // Simulación de carga
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
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
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <ScaleLoader color="#034494" />
        </div>
      ) : (
        <div className="listItems cont-cards grid grid-cols-2 sm:grid-cols-3 sm:gap-3 gap-1">
          {productos.map((producto) => (
            <CardComp key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;

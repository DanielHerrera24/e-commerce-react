import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../serverMock/productMock";
import { ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import ProductList from "../ProductList/ProductList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts
      try {
        const res = await asyncFunc(categoryId);
        setProductos(res);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId, setIsLoading]);

  return (
    <div className="pt-5 md:pt-0 md:pl-6">
      <div className="flex justify-center text-center cont-title pb-6">
        <h1 className="text-3xl font-semibold">{greeting}</h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <ScaleLoader color="#034494" />
        </div>
      ) : (
        <div className="listItems cont-cards grid grid-cols-2 sm:grid-cols-3 sm:gap-2 gap-[2px]">
            <ProductList productos={productos} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;

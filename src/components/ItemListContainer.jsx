import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ProductList from "./ProductList";
import { ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "electrica");

    const q = categoryId ? query(itemsCollection, where("categoria", "==", categoryId)) : itemsCollection;

    getDocs(q).then((snapshot) => {
      setProductos(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      setIsLoading(false);
    });
  }, [categoryId, setIsLoading]);

  return (
    <div className="pt-5 md:pt-0">
      <div className="flex justify-center text-center cont-title pb-6">
        <h1 className="text-3xl font-semibold">{greeting}</h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <ScaleLoader color="#034494" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 gap-[2px]">
          <ProductList productos={productos} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
